type Alphabet = {
  f: "F";
  F: "F";
  a: "A";
  A: "A";
};
type ToUpper<T> = T extends keyof Alphabet ? Alphabet[T] : T;
type MyCapitalize<S extends string> = S extends `${infer F}${infer T}`
? `${ToUpper<F>}${T}`
: S;
