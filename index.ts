// Task 1 solution
function rotateArray(arr: number[], k: number): number[] {
    if (arr.length === 0) {
      return arr;
    }
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

rotateArray([1, 2, 3, 4]);
  // Task 2
  function isMonotonic(arr: number[]): boolean {
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) increasing = false;
        if (arr[i] < arr[i + 1]) decreasing = false;
    }
    return increasing || decreasing;
}

console.log(isMonotonic([1, 2, 3, 4])); // true
console.log(isMonotonic([10, 3, 4, 6])); // false
// console.log(isMonotonic([9])); // true
