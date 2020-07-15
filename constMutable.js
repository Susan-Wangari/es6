//objects and functions defined using const are still mutable
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // Using s = [2, 5, 7] would be invalid
}
editInPlace();
