package main

import (
	"fmt"
	"plugin"
)

const PluginSymbol = "PluginSymbol"

func main() {
	open, err := plugin.Open("../plugin/plugin1/plugin1.so")
	if err != nil {
		panic(err)
	}

	f, err := open.Lookup(PluginSymbol)
	if err != nil {
		panic(err)
	}

	p1 := f.(Plugin1)

	result := p1.Add(1, 2)

	fmt.Println(result)

	open, err = plugin.Open("../plugin/plugin2/plugin2.so")
	if err != nil {
		panic(err)
	}

	f, err = open.Lookup(PluginSymbol)
	if err != nil {
		panic(err)
	}

	p2 := f.(Plugin2)

	result = p2.Cut(1, 2)

	fmt.Println(result)
}
