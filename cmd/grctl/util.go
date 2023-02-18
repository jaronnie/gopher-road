package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"github.com/Masterminds/sprig/v3"
	"os"
	"path/filepath"
	"text/template"
)

// parseTemplate template
func parseTemplate(data interface{}, tplT []byte) ([]byte, error) {
	t := template.Must(template.New("gopher-road").Funcs(sprig.TxtFuncMap()).Funcs(RegisterTxtFuncMap()).Parse(string(tplT)))

	buf := new(bytes.Buffer)
	err := t.Execute(buf, data)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), err
}

func RegisterTxtFuncMap() template.FuncMap {
	return RegisterFuncMap()
}

func RegisterFuncMap() template.FuncMap {
	gfm := make(map[string]interface{}, len(registerFuncMap))
	for k, v := range registerFuncMap {
		gfm[k] = v
	}
	return gfm
}

var registerFuncMap = map[string]interface{}{
	"getTitle": getTitle,
}

func getTitle(moduleName, path string) string {
	open, err := os.Open(filepath.Join("docs", moduleName, path))
	if err != nil {
		return ""
	}
	reader := bufio.NewReader(open)

	line, _, err := reader.ReadLine()
	if err != nil {
		return ""
	}

	return string(bytes.TrimLeft(line, "# "))
}

func beautifyJson(v interface{}) (string, error) {
	uglyBody, err := json.Marshal(v)
	if err != nil {
		return "", err
	}
	var out bytes.Buffer
	err = json.Indent(&out, uglyBody, "", "\t")
	return out.String(), nil
}
