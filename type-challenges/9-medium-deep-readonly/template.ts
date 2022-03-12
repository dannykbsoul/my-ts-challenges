type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [key in keyof T]: DeepReadonly<T[key]> };


// keyof T extends never 说明此时T没有known keys
// 因为keyof操作符产生known keys的union类型
type Hmm<T> = keyof T extends never ? true : false
type X1 = Hmm<{ a: string }> // false, "a" is a known key
type X2 = Hmm<{}> // true, there are no known keys
type X3 = Hmm<object> // true, there are no known keys
type X4 = Hmm<string> // false, there are keys like "toUpperCase"
type X5 = Hmm<
  { a: string } | { b: string }
> // true, unions with no common keys have no known keys

// https://stackoverflow.com/questions/68693054/what-is-extends-never-used-for/68693367