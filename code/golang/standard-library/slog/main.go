package main

import (
	"log/slog"
	"os"
)

func main() {
	loggerJson := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		Level: slog.LevelDebug,
	}))

	loggerJson.Info("hello world")

	loggerJson.Debug(
		"Exec driver action",
		"driver", "jaronnie",
	)
}
