type ObjectKey = string | number | symbol;
type AppendToObject<T, U extends ObjectKey, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
// type AppendToObject<T, U extends ObjectKey, V> = {
//   [K in keyof T | U]: K extends U ? V : T[K];
// };
