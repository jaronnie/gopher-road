package main

import (
	"fmt"
	gov "github.com/hashicorp/go-version"
)

// IsMoreThanVersion is more than version
func IsMoreThanVersion(version1 string, version2 string) (error, bool) {
	v1, err := gov.NewVersion(version1)
	if err != nil {
		return err, false
	}
	v2, err := gov.NewVersion(version2)
	if err != nil {
		return err, false
	}
	return nil, v1.GreaterThan(v2)
}

func main() {
	err, b := IsMoreThanVersion("2.0.3", "2.0.11")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(b)
}
