# go实现重载的方式

```go
//这只是一个很简单的例子
//复杂的需要使用类型断言和反射进行操作
package main

import (

	"fmt"
)	

func isSame(any... interface{}) bool {

		
	return any[0] == any[1]
	
} 


func main() {

	fmt.Println(isSame('a', 'a'))
	fmt.Println(isSame(1, 3))

}
//运行结果
true
false
```

```java
//java实现同样的功能
//filename: overloadDemo.java
//date:2020.5.25
public class overloadDemo {
    //主程序
    public static void main(String[] args) {
        System.out.println(isSame(1, 2));　//有返回值
        isSame('a', 'a');　//无返回值
    }
    
    //方法
    public static boolean isSame(int a, int b) {
        //判断两个整数是否相等
        System.out.println("调用参数为整数的方法");
        return a == b;   
    }
    
    public static void isSame(char a, char b) {
        //判断两个字符是否相等
        System.out.println("调用参数为字符的方法");
        System.out.println(a == b);
    }
}
```

