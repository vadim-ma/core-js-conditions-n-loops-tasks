/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(...args) {
  let max = args[0];
  for (let i = 0; i < args.length; i += 1) {
    max = args[i] > max ? args[i] : max;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(...sides) {
  let maxI = 0;
  let maxSide = sides[0];
  for (let i = 1; i < sides.length; i += 1) {
    if (sides[i] > maxSide) {
      maxI = i;
      maxSide = sides[i];
    }
  }
  let sum = 0;
  for (let i = 0; i < sides.length; i += 1) {
    if (sides[i] === 0) {
      return false;
    }
    if (i !== maxI) {
      sum += sides[i];
    }
  }
  return maxSide < sum;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let rest = num;
  let str = '';
  while (rest >= 10) {
    str += 'X';
    rest -= 10;
  }
  switch (rest) {
    case 1:
      str += 'I';
      break;

    case 2:
      str += 'II';
      break;

    case 3:
      str += 'III';
      break;

    case 4:
      str += 'IV';
      break;

    case 5:
      str += 'V';
      break;

    case 6:
      str += 'VI';
      break;

    case 7:
      str += 'VII';
      break;

    case 8:
      str += 'VIII';
      break;

    case 9:
      str += 'IX';
      break;

    default:
      break;
  }
  return str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  let word = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        word = 'minus';
        break;

      case '.':
      case ',':
        word = 'point';
        break;

      case '0':
        word = 'zero';
        break;

      case '1':
        word = 'one';
        break;

      case '2':
        word = 'two';
        break;

      case '3':
        word = 'three';
        break;

      case '4':
        word = 'four';
        break;

      case '5':
        word = 'five';
        break;

      case '6':
        word = 'six';
        break;

      case '7':
        word = 'seven';
        break;

      case '8':
        word = 'eight';
        break;

      case '9':
        word = 'nine';
        break;

      default:
        word = '';
        break;
    }
    if (str.length > 0) {
      str += ' ';
    }
    str += word;
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  if (num === 0) {
    return num === digit;
  }
  let rest = num;

  while (rest > 0) {
    if (rest % 10 === digit) {
      return true;
    }
    rest = Math.trunc(rest / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumRight = 0;
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumRight += arr[arr.length - 1 - i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    sumRight -= arr[i];
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */

// let plane = true; // true - row; false - col;
// let dir = 1; // 1 - forward; -1 - reverse

function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  let row = 0;
  let col = 0;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let plane = true;
  let dir = 1;
  let num = 1;

  while (row >= top && row <= bottom && col >= left && col <= right) {
    matrix[row][col] = num;
    num += 1;

    if (plane) {
      if (dir === 1) {
        if (col === right) {
          top += dir;
          row += dir;
          plane = !plane;
        } else {
          col += dir;
        }
      } else if (col === left) {
        bottom += dir;
        row += dir;
        plane = !plane;
      } else {
        col += dir;
      }
    } else if (dir === 1) {
      if (row === bottom) {
        right -= dir;
        col -= dir;
        plane = !plane;
        dir = -1;
      } else {
        row += dir;
      }
    } else if (row === top) {
      left -= dir;
      col -= dir;
      plane = !plane;
      dir = 1;
    } else {
      row += dir;
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const m = matrix;
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix.length - 1;
  let tmp;

  while (top < bottom) {
    for (let col = 0; col < right - left; col += 1) {
      tmp = matrix[top][left + col];
      m[top][left + col] = m[bottom - col][left];
      m[bottom - col][left] = m[bottom][right - col];
      m[bottom][right - col] = m[top + col][right];
      m[top + col][right] = tmp;
    }
    top += 1;
    bottom -= 1;
    left += 1;
    right -= 1;
  }

  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function quickSort(items) {
    if (items.length <= 1) return items;
    const pivot = items[items.length - 1];
    const leftItems = [];
    let leftIndex = 0;
    const rightItems = [];
    let rightIndex = 0;
    for (let i = 0; i < items.length - 1; i += 1) {
      if (items[i] > pivot) {
        rightItems[rightIndex] = items[i];
        rightIndex += 1;
      } else {
        leftItems[leftIndex] = items[i];
        leftIndex += 1;
      }
    }
    return [...quickSort(leftItems), pivot, ...quickSort(rightItems)];
  }
  const sorted = quickSort(arr);
  const arr2 = arr;
  for (let i = 0; i < sorted.length; i += 1) {
    arr2[i] = sorted[i];
  }

  return sorted;
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function shuffleChar1(s) {
    let left = '';
    let right = '';
    for (let i = 0; i < s.length; i += 1) {
      if (i % 2 === 0) {
        left += s[i];
      } else {
        right += s[i];
      }
    }
    return left + right;
  }

  let ret = str;
  let end = iterations;
  for (let i = 1; i <= end; i += 1) {
    ret = shuffleChar1(ret);
    if (ret === str) {
      end = (iterations % i) + i;
    }
  }
  return ret;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
// идем с конца
// находим первый символ меньше предыдущ. его можно заменить
// заменить на минимальный из правых, который больше заменяемого
// справа добавим оставшиесяя цифры в порядке возрастания
function getNearestBigger(number) {
  function mySlice(arr, start, end = arr.length) {
    const ret = [];
    for (let i = start; i < end; i += 1) {
      ret.push(arr[i]);
    }
    return ret;
  }
  function num2arr(n) {
    if (n === 0) {
      return [0];
    }
    const arr = [];
    let rest = n;

    while (rest > 0) {
      arr.push(rest % 10);
      rest = Math.trunc(rest / 10);
    }
    return arr.reverse();
  }
  function arr2num(arr) {
    let n = 0;
    for (let i = 0; i < arr.length; i += 1) {
      n = n * 10 + arr[i];
    }
    return n;
  }

  let digits = num2arr(number);
  let pivotPos = digits.length - 2;
  while (pivotPos >= 0) {
    if (digits[pivotPos] < digits[pivotPos + 1]) {
      break;
    }
    pivotPos -= 1;
  }
  if (pivotPos < 0) {
    return number;
  }

  const pivot = digits[pivotPos];
  let ret = arr2num(mySlice(digits, 0, pivotPos));
  digits = mySlice(digits, pivotPos);
  sortByAsc(digits);

  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i] > pivot) {
      ret = ret * 10 + digits[i];
      digits.splice(i, 1);
      break;
    }
  }
  for (let i = 0; i < digits.length; i += 1) {
    ret = ret * 10 + digits[i];
  }

  return ret;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
