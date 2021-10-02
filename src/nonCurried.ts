const fix = <T>(f: any, x: T) => f((y: T) => fix(f, y), x);

const factabs = (fact: (m: number) => number, n: number) => (n === 0 ? 1 : n * fact(n - 1));

export const fact = (n: number) => fix(factabs, n);
