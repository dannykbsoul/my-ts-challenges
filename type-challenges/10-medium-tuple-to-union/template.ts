// type TupleToUnion<T extends unknown[]> = T[number];

type TupleToUnion<T extends unknown[]> = T extends Array<infer ITEMS> ? ITEMS : never

type t1 = TupleToUnion<[123, "456", true]>;

// unknown和any的区别
// unknown代表任何值，类似于any，但是更类型安全，ts更推荐
// any是任意类型的父类型，同时也任意类型的子类型
// unknown是任意类型的父类型，但仅此而已