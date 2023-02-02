package main

type Plugin struct{}

var PluginSymbol = Plugin{}

func (p *Plugin) Cut(a, b int) int {
	return a - b
}
