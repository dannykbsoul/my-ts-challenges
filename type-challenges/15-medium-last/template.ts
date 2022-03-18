// type Last<T extends any[]> = T extends [...infer P, infer K] ? K : never;
type Last<T extends any[]> = [any, ...T][T["length"]];

// T["length"]获取了T类型数组的长度，那么此时想要取到最后一个值
// 可以给原来的T前塞一个，直接用T["length"]取值就能取到了