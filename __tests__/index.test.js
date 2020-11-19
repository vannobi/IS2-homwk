const { setUpMatrices } = require('../setup');
const { ax, bx } = require('../matrices');
const { mxprod } = require('../utils');

const test_identity_a = [
  ['1', '0', '0'],
  ['0', '1', '0'],
  ['0', '0', '1'],
];
const test_identity_b = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6'],
];

test('Matrix Multiplication Default', async () => {
  const r = await setUpMatrices();
  expect(r.mr).toEqual(mxprod(r.ma, r.mb, ax, bx));
});

test('Identity Matrix', async () => {
  const r = await setUpMatrices(test_identity_a, test_identity_b);
  // r.mb  = test_identity_b
  expect(r.mb).toEqual(mxprod(r.ma, r.mb, ax, bx));
});
