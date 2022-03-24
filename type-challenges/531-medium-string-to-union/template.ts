type StringToUnion<T extends string> = 
  T extends `${infer head}${infer tail}`
  ? head | StringToUnion<tail>
  : never;

