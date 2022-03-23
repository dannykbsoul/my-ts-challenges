type Flatten<T extends unknown[]> = 
  T extends [infer head, ...infer tail]
    ? [...(head extends unknown[] ? Flatten<head> : [head]), ...Flatten<tail>]
    : [];
    