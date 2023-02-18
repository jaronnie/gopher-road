package main

import (
	"fmt"
	"testing"
)

func TestMain(m *testing.M) {
	var data []READMEData

	data = append(data,
		READMEData{
			ModuleName: "golang",
			ModuleLink: "docs/golang",
		}, READMEData{
			ModuleName: "project",
			ModuleLink: "docs/project",
		})

	// list docs

	template, err := parseTemplate(data, []byte(READMETemplate))
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(template))

	template, err = parseTemplate(ModuleREADMEData{
		ModuleName: "docker",
		SubModuleContents: map[string][]string{
			"docker": {"../../docs/docker/docker-install.md"},
		},
	}, []byte(ModuleREADMETemplate))
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(template))

	m.Run()
}
