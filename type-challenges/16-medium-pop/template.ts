type Pop<T extends any[]> = T extends [...infer P, unknown] ? P : never;

// type Push<T extends any[], U> = [...T, U];
// type Shift<T extends any[]> = T extends [unknown, ...infer K] ? K : never;
// type Unshift<T extends any[], U> = [U, ...T];