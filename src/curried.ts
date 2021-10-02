const fixCurried = (f: any) => <T>(x: T) => f(fixCurried(f))(x);
const factabsCurried = (fact: any) => (n: number) => (n === 0 ? 1 : n * fact(n - 1));

export const fact = fixCurried(factabsCurried);
