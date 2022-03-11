// { [index]: [itemValue] } to { [itemValue]: true }，这里会出现问题，因为只允许U是对象的键类型
// 即 number symbol string
// type Includes<T extends readonly any[], U> = {
//   [P in T[number]]: true;
// }[U] extends true ? true : false;

// 递归的去判断
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends any[], U> = T extends [infer A, ...infer Rest] 
  ? IsEqual<A, U> extends true 
    ? true 
    : Includes<Rest, U> 
  : false
