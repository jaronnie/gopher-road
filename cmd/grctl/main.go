package main

import (
	"os"
	"path/filepath"
	"strings"
)

var (
	READMETemplate = `# gopher-road

the road to go!

## 目录结构

{{range $k, $v := .}}* [{{$v.ModuleName}}]({{$v.ModuleLink}})
{{end}}
## CONTRIBUTE

[CONTRIBUTE](CONTRIBUTE.md)

## LICENSE

[MIT](LICENSE)
`

	ModuleREADMETemplate = `# {{$.ModuleName}}

![](https://oss.jaronnie.com/gopher-road-{{$.ModuleName}}.png)

{{ if gt (len .SubModuleContents) 1}}{{range $k, $v := .SubModuleContents}}## {{$k}}

{{range $kk, $vv := .}}* [{{getTitle $.ModuleName $vv}}]({{$vv}})
{{end}}
{{end}}{{else}}{{range $k, $v := .SubModuleContents}}{{range $kk, $vv := .}}* [{{getTitle $.ModuleName $vv}}]({{$vv}})
{{end}}
{{end}}{{end}}`
)

type (
	READMEData struct {
		ModuleName string
		ModuleLink string
	}

	ModuleREADMEData struct {
		ModuleName        string              // golang         // docker
		SubModuleContents map[string][]string // stand,third    // docker
	}
)

func main() {
	// auto generate README.md and module/README.md

	// 获取 docs 下的目录, 不进行递归操作
	dir, err := os.ReadDir("docs")
	if err != nil {
		panic(err)
	}

	var modules []READMEData

	//var allModulesContent []ModuleREADMEData

	for _, v := range dir {
		if v.IsDir() && v.Name() != ".vuepress" && v.Name() != ".DS_Store" && v.Name() != "README.md" {
			modules = append(modules, READMEData{
				ModuleName: v.Name(),
				ModuleLink: filepath.Join("docs", v.Name()),
			})

			// generate module README.md
			readDir, err := os.ReadDir(filepath.Join("docs", v.Name()))
			if err != nil {
				panic(err)
			}

			var module ModuleREADMEData  // 每个 module 的数据
			module.ModuleName = v.Name() // module 名称

			subModuleContent := make(map[string][]string, 1)

			var contents []string
			for _, vv := range readDir {
				if vv.Name() == "README.md" {
					continue
				}
				if vv.Name() == ".DS_Store" {
					continue
				}

				var subContents []string
				if vv.IsDir() {
					readSubDir, err := os.ReadDir(filepath.Join("docs", v.Name(), vv.Name()))
					if err != nil {
						panic(err)
					}

					for _, vvv := range readSubDir {
						if strings.HasSuffix(vvv.Name(), "md") {
							subContents = append(subContents, filepath.Join(vv.Name(), vvv.Name()))
						}
					}
					subModuleContent[vv.Name()] = subContents
					module.SubModuleContents = subModuleContent
				} else {
					// module 为单层结构
					contents = append(contents, filepath.Join(vv.Name()))
					module.SubModuleContents = subModuleContent
					subModuleContent[v.Name()] = contents
				}

			}
			//allModulesContent = append(allModulesContent, module)

			// generate module README.md
			template, err := parseTemplate(module, []byte(ModuleREADMETemplate))
			if err != nil {
				panic(err)
			}
			err = os.WriteFile(filepath.Join("docs", module.ModuleName, "README.md"), template, 0o644)
			if err != nil {
				panic(err)
			}
		}
	}

	//fmt.Println(allModulesContent)

	template, err := parseTemplate(modules, []byte(READMETemplate))
	if err != nil {
		panic(err)
	}

	err = os.WriteFile("README.md", template, 0o644)
	if err != nil {
		panic(err)
	}
}
