type MyExclude<T, U> = T extends U ? never : T;

type a = MyExclude< "a","a" | "b" | "c">

// extends的巧用
// extends 运用在 type 和 class 中时完全是两种作用的效果。

// 1.值匹配
// 2.类型匹配
// 3.判断联合类型 
//    当联合类型无法做出判断时：
type AB<T> = T extends 'x' ? 'a' : 'b';
type All = AB<'x' | 'y'>; // 非确定条件，可能是 'x' 或 'y'
// 得到 type All = 'a' | 'b';
// 条件类型不确定时会返回所有的值 的特性情况下，会产生一些额外的效果
// type Other = "a" | "b";
// type Merge<T> = T extends "x" ? T : Other; // T 等于匹配的类型，然后加上 Other 联合类型一起返回

// type Values = Merge<"x" | "y">;
// 得到 type Values = "x" | "a" | "b";

// type Other = "a" | "b";
// type Merge<T> = T extends "x" ? Other : T; // T 等于除匹配类型的额外所有类型（官方叫候选类型）

// type Values = Merge<"x" | "y">;
// 得到 type Values = "a" | "b" | 'y';