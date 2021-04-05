package main

import "fmt"

type Driver struct {
	trips []Trip
}

type Trip struct {
	name string
}

func (d *Driver) SetTrips(trips []Trip) {
	d.trips = trips
}

func (d *Driver) SetTripsSafely(trips []Trip) {
	d.trips = make([]Trip, len(trips))
	copy(d.trips, trips)
}

func main() {
	trips := []Trip{{name: "car"}, {name: "airPlane"}}
	var d1 Driver
	d1.SetTripsSafely(trips)
	fmt.Println(d1)
	trips[0] = Trip{name: "bus"}
	fmt.Println(d1)
}
