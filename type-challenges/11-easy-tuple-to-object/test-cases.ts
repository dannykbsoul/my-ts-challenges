import { Equal, Expect } from "@type-challenges/utils";

// as const，此时typeof tuple其实就是类型 => readonly ["tesla", "model 3", "model X", "model Y"]
// 如果不加const，此时typeof tuple其实就是类型 => string[]
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// 我们转换的时候，如果遇到数组中的值不能做对象的键，期望报错
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// const  let  js 世界
// type interface type 世界

// 1. typeof
// 2. 字面量类型
// 3. @ts-expect-error 注释