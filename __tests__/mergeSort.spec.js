const mergeSort = require('../util/mergeSort');

describe('MergeSort', () => {
  let arr;
  // beforeEach(() => {});

  it('should work on empty arrays', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should work on arrays of one element', () => {
    expect(mergeSort([5])).toEqual([5]);
    expect(mergeSort([8])).toEqual([8]);
  });

  it('should work on arrays of even length', () => {
    expect(mergeSort([7, 5])).toEqual([5, 7]);
    expect(mergeSort([5, 7])).toEqual([5, 7]);
    expect(mergeSort([8, 2, 5, 7])).toEqual([2, 5, 7, 8]);
    expect(mergeSort([8, 2, 5, 7, 9, 1])).toEqual([1, 2, 5, 7, 8, 9]);
  });

  it('should work on arrays of odd length', () => {
    expect(mergeSort([7, 5, 3])).toEqual([3, 5, 7]);
    expect(mergeSort([5, 7, 10])).toEqual([5, 7, 10]);
    expect(mergeSort([8, 2, 5, 3, 7])).toEqual([2, 3, 5, 7, 8]);
    expect(mergeSort([8, 2, 5, 7, 9, 1, 20])).toEqual([1, 2, 5, 7, 8, 9, 20]);
  });

  it('should work on arrays which are already sorted', () => {
    expect(mergeSort([3, 5, 7])).toEqual([3, 5, 7]);
    expect(mergeSort([5, 7, 10])).toEqual([5, 7, 10]);
    expect(mergeSort([2, 5, 7, 8])).toEqual([2, 5, 7, 8]);
    expect(mergeSort([1, 2, 5, 7, 8, 9, 20])).toEqual([1, 2, 5, 7, 8, 9, 20]);
  });

  it('should work on arrays which are sorted in descending order', () => {
    expect(mergeSort([7, 5, 3])).toEqual([3, 5, 7]);
    expect(mergeSort([10, 7, 5])).toEqual([5, 7, 10]);
    expect(mergeSort([8, 7, 5, 2])).toEqual([2, 5, 7, 8]);
    expect(mergeSort([20, 9, 8, 7, 5, 2, 1])).toEqual([1, 2, 5, 7, 8, 9, 20]);
  });

  it('should work on arrays contain the same element throughout', () => {
    expect(mergeSort([7, 7, 7])).toEqual([7, 7, 7]);
    expect(mergeSort([5, 5, 5])).toEqual([5, 5, 5]);
    expect(mergeSort([8, 8, 8, 8])).toEqual([8, 8, 8, 8]);
  });

  it('should work on arrays contain dupes', () => {
    expect(mergeSort([7, 5, 3, 3])).toEqual([3, 3, 5, 7]);
    expect(mergeSort([10, 7, 5, 10])).toEqual([5, 7, 10, 10]);
    expect(mergeSort([8, 7, 7, 2])).toEqual([2, 7, 7, 8]);
    expect(mergeSort([20, 9, 8, 20, 5, 2, 1])).toEqual([1, 2, 5, 8, 9, 20, 20]);
  });
});
