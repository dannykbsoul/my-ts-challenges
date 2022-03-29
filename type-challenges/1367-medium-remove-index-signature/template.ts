// type FilteredKeys<k> = string extends k
//   ? never
//   : number extends k
//   ? never
//   : symbol extends k
//   ? never
//   : k;
// type RemoveIndexSignature<T> = { [k in keyof T as FilteredKeys<k>]: T[k] };
type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};
