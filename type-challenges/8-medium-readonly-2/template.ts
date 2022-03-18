// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [key in keyof T as key extends K ? key : never]: T[key];
// } &
//   { [key in keyof T as Exclude<key, K>]: T[key] };

type MyReadonly2<T, K extends keyof T = keyof T> = T &
  { readonly [S in K]: T[S] };


// K extends keyof T = keyof T
// 意思是当不传第二个参数K的时候，此时默认将T的所有属性设置为readonly
// 即 Readonly