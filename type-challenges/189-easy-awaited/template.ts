type SingleAwaited<T extends Promise<any>> = T extends Promise<infer PT>
  ? PT
  : never;
type MyAwaited<T extends Promise<any>> = T extends Promise<infer PT>
  ? PT extends Promise<any>
    ? MyAwaited<PT>
    : SingleAwaited<T>
  : never;
