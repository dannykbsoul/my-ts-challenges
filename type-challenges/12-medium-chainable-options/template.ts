// type Chainable<T = {}> = {
//   option<K extends string, V>(
//     key: K,
//     value: V
//   ): Chainable<T & { [key in K]: V }>;
//   get(): T;
// };

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>;
  get(): T;
};
// 为啥用{ [key in K] : V } 而不用 { K: V }
// 因为此时 { K: V }等同于{ "K": V }，将被视为静态属性，为了让它为动态
// 需要包裹在[]中，但是{ [K]: V }在ts中是语法错误，所以采用{ [key in K] : V }

// 当然也可以用Record<K, V>来实现
// Constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.
