type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends "" ? S
    : S extends `${infer F}${From}${infer L}` ? `${F}${To}${ReplaceAll<L, From, To>}`
    : S;

// Replace基础上加个递归