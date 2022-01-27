package main

import (
    "github.com/yuin/gopher-lua"
    "mymain/module"
)

func main() {
    L := lua.NewState()
    defer L.Close()
    L.PreloadModule("log", log.Loader)
    if err := L.DoFile("main.lua"); err != nil {
        panic(err)
    }
}
