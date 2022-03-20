type TrimLeft<S extends string> = S extends `${' '|'\n'|'\t'}${infer T}` ? TrimLeft<T> : S;

// 用到递归
// 1. 如果每次 string 左边第一个能匹配到指定的字符，则返回去除左边第一个字符后的 string
// 2. 匹配不到说明此时这个 string 左边 trim 完毕