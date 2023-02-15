package main

import (
	"fmt"
	"github.com/gocolly/colly/v2"
)

func main() {

	c := colly.NewCollector(
		colly.Async(true),
	)

	var all []string

	c.OnHTML("h2#stable", func(e *colly.HTMLElement) {
		baseDom := e.DOM.Next()
		for {
			val, exists := baseDom.Attr("id")
			if !exists || val == "archive" {
				break
			}
			all = append(all, val)
			baseDom = baseDom.Next()
		}
	})

	c.OnHTML("div.expanded", func(e *colly.HTMLElement) {
		e.ForEach("div.toggle", func(i int, element *colly.HTMLElement) {
			all = append(all, element.Attr("id"))
		})
	})

	c.OnRequest(func(r *colly.Request) {})

	c.OnResponse(func(r *colly.Response) {})

	err := c.Visit("https://go.dev/dl/")
	if err != nil {
		fmt.Println("Visit error:", err)
		return
	}

	c.Wait()

	fmt.Println(all)
}
