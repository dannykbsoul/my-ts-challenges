type ReplaceKeys<U, T, Y> = U extends U
  ? {
      [k in keyof U]: k extends T ? (k extends keyof Y ? Y[k] : never) : U[k];
    }
  : never;
