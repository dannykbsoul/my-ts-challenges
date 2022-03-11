// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

// 知识点
// 如果是一个[]，那么T[0]其实是undefined，所以要先去判断是不是空数组
// 1. extends 类型条件判断
// 2. 获取tuple的length属性
// 3. extends union来判断
// 4. infer的使用（推断）