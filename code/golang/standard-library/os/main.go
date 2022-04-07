package main

import (
	"os"
)

// GetEnviron 获取所有环境变量
func GetEnviron() []string {
	environ := os.Environ()
	return environ
}

// Getenv 根据 key 获取对应变量
func Getenv(key string) string {
	return os.Getenv(key)
}
