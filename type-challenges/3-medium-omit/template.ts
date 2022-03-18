// type MyOmit<T, K> = {
//   [key in keyof T as key extends K ? never : key] : T[key]
// };

type MyOmit<T, K> = {
  [key in keyof T as Exclude<key, K>] : T[key]
};

// 知识点
// 1. 通过 as 实现键名重新映射
// 2. 利用Exclude实现