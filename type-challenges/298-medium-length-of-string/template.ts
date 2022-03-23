type LengthOfString<S extends string, T extends string[] = []> = 
  S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T['length'];

// string 不能像 []那样直接取到 length，需要一层转换