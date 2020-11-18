const { result, mmult } = require('../setup');
const { ax, bx } = require('../matrices');

test('Matrix Multiplication', async () => {
  const r = await result;
  expect(r.mr).toEqual(mmult(r.ma, r.mb, ax, bx));
});
