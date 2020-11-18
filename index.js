const { Builder, Key, until } = require('selenium-webdriver');

const { ax, bx, rx } = require('./matrices');

const mxprod = (a, b, ax, bx) => {
  let r = [];
  for (let i = 0; i < ax.r; i++) {
    for (let j = 0; j < bx.c; j++) {
      r[i * bx.c + j] = 0;
      for (let k = 0; k < ax.c; k++) {
        let ea = a[i * ax.c + k];
        let eb = b[k * bx.c + j];
        r[i * bx.c + j] += ea * eb;
      }
    }
  }
  return r;
};

const getValueByXpath = async (xpath, driver) => {
  return driver.findElement({ xpath: xpath }).getAttribute('value');
};

const getTextByXpath = async (xpath, driver) => {
  return driver.findElement({ xpath: xpath }).getText();
};

const fillMatrices = async (mx, driver, isResult = false) => {
  let m = [];
  for (let i = 0; i < mx.length; i++) {
    for (let j = 0; j < mx[i].length; j++) {
      m[i * mx[i].length + j] = isResult
        ? getTextByXpath(mx[i][j], driver)
        : getValueByXpath(mx[i][j], driver);
    }
  }
  return Promise.all(m).then(values => values.map(value => Number(value)));
};

(async () => {
  let driver = new Builder().forBrowser('chrome').build();
  await driver.get('http://matrixmultiplication.xyz/');
  let r = {};
  r.page_title = await driver.getTitle();
  // r.html = await driver.getPageSource();
  // r.title = await driver.findElement({ className: 'title fq5xi0j' }).getText();
  const data = await Promise.all([
    fillMatrices(ax.mx, driver),
    fillMatrices(bx.mx, driver),
  ]);
  r.ma = data[0];
  r.mb = data[1];
  //MULTIPLY
  const multiplyBtn = await driver.findElement({
    className: 'multiply flk4j4b',
  });
  await multiplyBtn.click();
  const endBtn = await driver.wait(
    until.elementLocated({ className: 'end fljzbrb' })
  );
  await endBtn.click();
  const resetBtn = await driver.wait(
    until.elementLocated({ className: 'reset flk4j4b' })
  );
  r.mr = await fillMatrices(rx.mx, driver, (isResult = true));
  console.log(r);
  let result = mxprod(r.ma, r.mb, ax, bx);
  // search.sendKeys();
  if (JSON.stringify(result) === JSON.stringify(r.mr)) {
    console.log('same');
  } else {
    console.log('different');
  }
  driver.quit();
})();
