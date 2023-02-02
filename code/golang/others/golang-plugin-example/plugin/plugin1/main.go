package main

type Plugin struct{}

var PluginSymbol = Plugin{}

func (p *Plugin) Add(a, b int) int {
	return a + b
}
