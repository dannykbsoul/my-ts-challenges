type IsUnion<T, B = T> = T extends T 
  ? [Exclude<B, T>] extends [never] 
    ? false 
    : true 
  : never;

// T extends T，若 T 是联合类型，相当于遍历的效果
type tt1 = string | never;
type tt2 = string | unknown;
type tt3 = string | any;
type tt4 = string | "a";
// tt1、tt2、tt3、tt4都是string类型
// example1:
// type T = string | number
// step1: string | number extends string | number
// step2: string extends string | number => [number] extends [never] => true
// step3: number extends string | number => [string] extends [never] => true
// step4: true | true
// result: true

// example2:
// type T = string
// step1: string extends string
// step2: [never] extends [never] => false
// result: false