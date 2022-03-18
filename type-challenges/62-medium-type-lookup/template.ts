// type LookUp<U, T extends string> = {
//   [K in T] : U extends {type: T} ? U : never
// }[T]
type LookUp<U, T> = U extends {type: T} ? U : never; // extends的妙用
