const { Builder, Key, until } = require('selenium-webdriver');
const { ax, bx, rx } = require('./matrices');
const { fillMatrices } = require('./utils');

const setMatrix = async (driver, from, to) => {
  for (let i = 0; i < to.r; i++) {
    for (let j = 0; j < to.c; j++) {
      let elem = await driver.findElement({ xpath: to.mx[i][j] });
      await elem.clear();
      await elem.sendKeys(from[i][j]);
    }
  }
};

const setUpMatrices = async (fromA = null, fromB = null) => {
  let r = {};
  let driver = new Builder().forBrowser('chrome').build();
  await driver.get('http://matrixmultiplication.xyz/');
  r.page_title = await driver.getTitle();
  if (fromA) await setMatrix(driver, fromA, ax);
  if (fromB) await setMatrix(driver, fromB, bx);
  const data = await Promise.all([
    fillMatrices(ax.mx, driver),
    fillMatrices(bx.mx, driver),
  ]);
  r.ma = data[0];
  r.mb = data[1];
  //Multiply
  const multiplyBtn = await driver.findElement({
    className: 'multiply flk4j4b',
  });
  // multiplyBtn.clear
  await multiplyBtn.click();
  const endBtn = await driver.wait(until.elementLocated({ className: 'end fljzbrb' }));
  await endBtn.click();
  const resetBtn = await driver.wait(
    until.elementLocated({ className: 'reset flk4j4b' })
  );
  r.mr = await fillMatrices(rx.mx, driver, (isResult = true));
  await driver.quit();
  return r;
};

module.exports = {
  setUpMatrices: setUpMatrices,
};
