type Diff<O, O1> = {
  [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: K extends keyof O1
    ? O1[K]
    : K extends keyof O
      ? O[K]
      : never
}


// 这里Exclude<keyof O, keyof O1>，是从O中剔除O1中有的key
// Exclude<keyof O1, keyof O>，是从O1中剔除O中有的key
// 这样就能得到Diff，即双方共有的key去除