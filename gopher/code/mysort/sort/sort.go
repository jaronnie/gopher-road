
package sort


//接口
type Sorter interface {

	Len() int
	Less(i, j int) bool
	Swap(i, j int)

}

type IntSlice []int

//绑定方法，实现InsSlice的接口
func (p IntSlice) Len() int {

	return len(p)
}

func (p IntSlice) Less(i, j int) bool {

	return p[i] < p[j]
}

func (p IntSlice)Swap(i, j int) {


	p[i], p[j] = p[j], p[i]
}

//排序
func Sort(data Sorter) {

	for pass := 1; pass < data.Len(); pass++ {

		for i := 0; i < data.Len() - pass; i++ {

			if data.Less(i+1, i) {

				data.Swap(i, i+1)
			}
		}
	}
}



//convenience

func SortInts(a []int) {

	Sort(IntSlice(a)) //a转成IntSlice, a实现了接口，可以调用Len, Less, Swap方法，即完成了排序
}


