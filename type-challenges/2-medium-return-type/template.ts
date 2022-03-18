type MyReturnType<T extends (...agrs: any[]) => any> = T extends (
  ...agrs: any[]
) => infer K
  ? K
  : any;