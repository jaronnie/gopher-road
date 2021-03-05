package test2

import "./test1"

type Car struct {

	Type string
	PerRant int
	Days int

}

func (c *Car) Read() int {

		return c.PerRant * c.Days

}

func ShowRant(s test1.Shaper) int {

	return s.Read()

}
