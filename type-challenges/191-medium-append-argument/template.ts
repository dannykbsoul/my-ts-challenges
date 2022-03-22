type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer T
  ? (...args: [...Args, A]) => T
  : never;
