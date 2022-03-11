type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]]: P;
}

// js
function tupleToObject(arr) {
  const obj = {};
  arr.map((v) => (obj[v] = v));
  return obj;
}
tupleToObject([1, 2, 3]);

// T[number]用来遍历数组的value，keyof array得到的是数组的index
const tuple = [[1, 2], {}] as const;
type type1 = typeof tuple;