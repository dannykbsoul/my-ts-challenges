declare function PromiseAll<T extends any[]>(values: readonly[...T]): 
  Promise<{[K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]}>

// 普通: PromiseAll(['1', 2, 3 ]) 返回值是 -> Promise<[string, number, number]>
// 内嵌 Promise 实例: PromiseAll([Promise.resolve(['1']), 2, 3 ]) 返回值是 -> Promise<[string[], number, number]>

// 1.为什么这里需要用 [...T] 而不直接是 T
// 第一种情况
// declare function PromiseAll<V extends any[]>(values: readonly [...V]): Promise<V>
// const a = PromiseAll([1, 2, Promise.resolve(3)])
// type A = typeof a // Promise<[number, number, Promise<number>]>

// 第二种情况
// declare function PromiseAll<V extends any[]>(values: V): V
// const a = PromiseAll([1, 2, Promise.resolve(3)])
// type A = typeof a // (number | Promise<number>)[]

// 2.为什么需要 readonly
// 为了兼容 as const
// declare function PromiseAll<V extends any[]>(values: [...V]): V
// const a = PromiseAll([1, 2, Promise.resolve(3)] as const) // error

// 3.当内嵌了Promise时，用extends来取出来

// 4.Promise里面为啥用了 {}，有点不理解???
// 我的猜想是用[]表示数组会语法错误，所以用{}，因为数组其实也是一种意义上的对象，不过键名是数字