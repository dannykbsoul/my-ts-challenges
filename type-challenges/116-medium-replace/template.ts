type Replace<S extends string, From extends string, To extends string> = 
  From extends ''
  ? S
  : S extends `${infer H}${From}${infer L}`
  ? `${H}${To}${L}`
  : S;
