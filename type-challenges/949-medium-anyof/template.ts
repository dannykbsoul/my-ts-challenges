type Falsely = "" | 0 | false | [] | Record<any, never>;
type AnyOf<T extends readonly any[]> = T[number] extends Falsely ? false : true;

// Record<any, never> 声明一个 空对象 {}
