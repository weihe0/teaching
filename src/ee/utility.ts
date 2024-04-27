export class Complex {
  constructor(
    public x: number,
    public y: number,
  ) {}
  get xs(): string {
    return this.x.toFixed(3);
  }
  get ys(): string {
    return this.y.toFixed(3);
  }
  minus(c: Complex) {
    this.x -= c.x;
    this.y -= c.y;
    return this;
  }
  times(c: Complex) {
    this.x = this.x * c.x - this.y * c.y;
    this.y = this.x * c.y + this.y * c.x;
    return this;
  }
  clone() {
    return new Complex(this.x, this.y);
  }
}
export function computeSeries(
  z: (t: number) => Complex,
  start: number,
  end: number,
  num: number,
): Complex[] {
  let series = new Array<Complex>(num + 1);
  const step = (end - start) / num;
  for (let i = 0; i <= num; i++) {
    let t = start + i * step;
    series[i] = z(t);
  }
  return series;
}
export function approxIntegral(f: (z: Complex) => Complex, series: Complex[]) {
  let products = new Array<Complex>(series.length);
  products[0] = f(series[0]);
  for (let i = series.length - 1; i > 0; i--) {
    let diff = series[i].minus(series[i - 1]);
    products[i] = f(series[i - 1]).times(diff);
  }
  return products;
}
export function series2path(series: Complex[]) {
  const pathArray = new Array<string>(series.length);
  pathArray[0] = `M ${series[0].xs} ${series[0].ys}`;
  for (let i = 1; i < series.length; i++) {
    pathArray[i] = `l ${series[i].xs} ${series[i].ys}`;
  }
  // return `path(${pathArray.join(' ')})`;
  return pathArray.join(' ');
}
const a = new Complex(2, 0);
export function f(z: Complex) {
  return z.clone();
}
export function z(t: number) {
  return new Complex(40 * Math.cos(t) + 100, 40 * Math.sin(t) + 100);
}
