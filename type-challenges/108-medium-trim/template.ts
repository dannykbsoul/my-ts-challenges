type WhiteSpace = "\n" | " " | "\t";
// type Trim<S extends string> = S extends `${WhiteSpace}${infer T}`
//   ? Trim<T>
//   : S extends `${infer P}${WhiteSpace}`
//   ? Trim<P>
//   : S;
type Trim<S extends string> = S extends `${WhiteSpace}${infer T}` | `${infer T}${WhiteSpace}`
  ? Trim<T>
  : S;