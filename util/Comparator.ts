export default class Comparator {
  compare: (a, b) => number;
  constructor(compareFunc) {
    this.compare = compareFunc || Comparator.defaultCompareFunc;
  }

  static defaultCompareFunc(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }

  equal(a, b): boolean {
    return this.compare(a, b) === 0;
  }

  lessThan(a, b): boolean {
    return this.compare(a, b) < 0;
  }

  greaterThan(a, b): boolean {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a, b): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a, b): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
