const { setUpMatrices } = require('./setup');
const { ax, bx } = require('./matrices');
const { mxprod } = require('./utils');

const main = async () => {
  // test case: default matrix multiplication
  // using default matrices
  let r = await setUpMatrices();
  if (JSON.stringify(r.mr) == JSON.stringify(mxprod(r.ma, r.mb, ax, bx))) {
    console.log('1st test case: passed');
  } else {
    console.log('1st test case: failed');
  }

  // test case: multiplication with identity matrix
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
  r = await setUpMatrices(test_identity_a, test_identity_b);
  if (JSON.stringify(r.mb) == JSON.stringify(mxprod(r.ma, r.mb, ax, bx))) {
    console.log('2nd test case: passed');
  } else {
    console.log('2nd test case: failed');
  }
};

main();
