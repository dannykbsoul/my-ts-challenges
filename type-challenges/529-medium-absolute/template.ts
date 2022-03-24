type NumberLike = number | string | bigint;
type toString<T extends NumberLike> = `${T}`;
type Absolute<T extends NumberLike, S extends string = toString<T>> = 
  S extends `-${infer Abs}`
  ? Abs
  : S;

// ``能将 bigint 转成字符串