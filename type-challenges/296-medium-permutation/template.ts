type Permutation<T, K = T> = 
  [T] extends [never] //边界条件
    ? []
    : K extends K //遍历union
      ? [K, ...Permutation<Exclude<T,K>>]
      : never;
// type tt = Permutation<"A" | "B" | "C">;

// 1.如何遍历union
type loopUnion<Union extends string, Item extends string = Union> =
  Item extends Item ? `loop ${Item}` : never;
type result = loopUnion<"A" | "B" | "C">; // "loop A" | "loop B" | "loop C"
// 2. 如何知道T is never
// type IsNever<T> = [T] extends [never] ? true : false;
