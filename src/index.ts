import demoDll from "./lib/demo";

export function add(a: number, b: number): number {
  return a + b;
}

export function addByDll(a: number, b: number): number {
  return demoDll.add(a, b);
}
