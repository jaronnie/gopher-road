package log

import (
	golog "git.hyperchain.cn/blocface/golog"
	JSON "github.com/layeh/gopher-json"
	"github.com/yuin/gopher-lua"
	"strings"
)

func Loader(L *lua.LState) int {
    // register functions to the table
    mod := L.SetFuncs(L.NewTable(), exports)

    // returns the module
    L.Push(mod)
    return 1
}
var exports = map[string]lua.LGFunction{
    "info": info,
}

func info(L *lua.LState) int {
    opt := out("info", L)
    golog.Logger().Info(opt)
    return 0
}

func out(flag string, L *lua.LState) string {
	args := []string{}
	for i := 1; i < 1+L.GetTop(); i++ {
		val := L.Get(i)
		switch val.Type() {
		// decode table to json string
		case lua.LTTable:
			str, err := JSON.Encode(val)
			if err != nil {
				args = append(args, val.String())
			} else {
				args = append(args, string(str))
			}
			continue
		}
		// string, number, bool
		args = append(args, val.String())
	}

	return strings.Join(args, " ")
}
