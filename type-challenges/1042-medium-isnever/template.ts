type IsNever<T> = [T] extends [never] ? true : false;

// 为啥不用 T extends never 而用 [T] extends [never]
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types.