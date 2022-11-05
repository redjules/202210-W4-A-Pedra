// eslint-disable-next-line import/extensions
import strictEquals from './strictEquals.js';

const tbodyRef = document.getElementById('myTable');
const tests = [
    [1, 1, strictEquals(1, 1)],
    [NaN, NaN, strictEquals(NaN, NaN)],
    [0, '-0', strictEquals(0, -0)],
    ['-0', 0, strictEquals(-0, 0)],
    [1, '"1"', strictEquals(1, '1')],
    [true, false, strictEquals(true, false)],
    [false, true, strictEquals(NaN, NaN)],
    ['water', 'oil', strictEquals(false, true)],
    [null, null, strictEquals(null, null)],
    [undefined, undefined, strictEquals(undefined, undefined)],
    ['15n', 15, strictEquals(15n, 15)],
    ['15n', '15n', strictEquals(15n, 15n)],
];

// console.table([
//   ['A', 'B', 'RESULT'],
//   [1, 1, strictEquals(1, 1)],
//   [NaN, NaN, strictEquals(NaN, NaN)],
//   [0, -0, strictEquals(0, -0)],
//   [-0, 0, strictEquals(-0, 0)],
//   [1, '1', strictEquals(1, '1')],
//   [true, false, strictEquals(true, false)],
//   [false, true, strictEquals(NaN, NaN)],
//   ['water', 'oil', strictEquals(false, true)],
//   [null, null, strictEquals(null, null)],
//   [undefined, undefined, strictEquals(undefined, undefined)],
//   [15n, 15, strictEquals(15n, 15)],
//   [15n, 15n, strictEquals(15n, 15n)],
// ]);

const createTable = (...testData) => {
    const newRow = tbodyRef.insertRow();

    testData.forEach((element) => {
        const newCell = newRow.insertCell();
        const newText = document.createTextNode(element);
        newCell.appendChild(newText);
    });
};

tests.forEach((element) => {
    createTable(element[0], element[1], element[2]);
});
