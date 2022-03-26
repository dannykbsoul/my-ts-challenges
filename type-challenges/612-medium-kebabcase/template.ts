// type LowerKebab<S> = S extends `${infer A}${infer B}`
//   ? A extends Lowercase<A>
//     ? `${A}${LowerKebab<B>}`
//     : `-${Lowercase<A>}${LowerKebab<B>}`
//   : S;

// type KebabCase<S> = S extends `-`
//   ? S
//   : LowerKebab<S> extends `-${infer A}`
//     ? A
//     : LowerKebab<S>;

type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;

type tt = KebabCase<"ABC">;
// B => b
// aB => a-b