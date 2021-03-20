package main

import "fmt"

func main() {

	fmt.Println(multiply("15", "16"))

}

func multiply(num1 string, num2 string) string  {
	if num1 == "0" || num2 == "0" {
		return "0"
	}

	//用一个[]int切片保存相乘的值
	n1, n2, temp := []byte(num1), []byte(num2), make([]int, len(num1)+len(num2))

	//遍历n1与n2，模拟乘法
	for i := len(n1) - 1; i >= 0; i-- {
		for j := len(n2) - 1; j >= 0; j-- {
			temp[i+j+1] += int(n1[i] - '0') * int(n2[j] - '0')
		}
	}
	// temp:[0 1 11 30]
	//有进位就往前加
	for i := len(temp) - 1; i > 0; i-- {

		temp[i-1] += temp[i] / 10
		temp[i] %= 10 //留下余数
	}
	//fmt.Println(temp) temp:[0 2 4 0]

	//遍历切片中的元素，转成字符串并组成一个大字符串
	var res string
	for _, key := range temp {
		res += string(byte(key + '0'))
	}

	//判断字符串第一个是不是0,为零则去掉
	if string(res[0]) == "0" {
		res = res[1:]
	}
	return res
}