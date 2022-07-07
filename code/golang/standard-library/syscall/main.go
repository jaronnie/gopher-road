package main

import (
	"fmt"
	"os"
	"sync"
	"syscall"
	"time"
)

type FileLock struct {
	dir string
	f   *os.File
}

func New(dir string) *FileLock {
	return &FileLock{
		dir: dir,
	}
}

// Lock file
func (l *FileLock) Lock() error {
	f, err := os.Open(l.dir)
	if err != nil {
		return err
	}

	l.f = f

	// lock 策略
	err = syscall.Flock(int(f.Fd()), syscall.LOCK_EX)
	//err = syscall.Flock(int(f.Fd()), syscall.LOCK_NB)
	//err = syscall.Flock(int(f.Fd()), syscall.LOCK_EX|syscall.LOCK_NB)
	if err != nil {
		return fmt.Errorf("cannot flock dir %s - %s", l.dir, err)
	}

	return nil
}

// Unlock unlock
func (l *FileLock) Unlock() error {
	defer l.f.Close()
	return syscall.Flock(int(l.f.Fd()), syscall.LOCK_UN)
}

func main() {
	lockFilePath, _ := os.Getwd()

	lockFile := fmt.Sprintf("%s/.lock", lockFilePath)
	fmt.Println(lockFile)

	wg := sync.WaitGroup{}

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(num int) {
			flock := New(lockFile)
			err := flock.Lock()
			if err != nil {
				wg.Done()
				fmt.Println("lock file", err.Error())
				return
			}
			defer flock.Unlock()
			fmt.Printf("output : %d\n", num)
			wg.Done()
		}(i)
	}
	wg.Wait()
	time.Sleep(2 * time.Second)
}
