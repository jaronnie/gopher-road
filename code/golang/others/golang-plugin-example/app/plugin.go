package main

type Plugin1 interface {
	Add(int, int) int
}

type Plugin2 interface {
	Cut(int, int) int
}
