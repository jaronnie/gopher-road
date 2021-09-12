package main

import (
    "mymain/module"
    "github.com/yuin/gopher-lua"
)

func main() {
    L := lua.NewState()
    defer L.Close()
    L.PreloadModule("log", log.Loader)
    if err := L.DoFile("main.lua"); err != nil {
        panic(err)
    }
}
