type Length<T extends readonly any[]> = T["length"];

// tuple类型
type cases = [string, number];
type t3 = cases["length"];
// array类型
type case1 = string[];
type t4 = case1["length"];