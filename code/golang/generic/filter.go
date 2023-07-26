package main

func Filter[T any](collection []T, predicate func(_ int, _ T) bool) []T {
	result := make([]T, 0, len(collection))
	for i, v := range collection {
		if predicate(i, v) {
			result = append(result, v)
		}
	}
	return result
}
