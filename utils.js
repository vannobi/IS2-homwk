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

module.exports = {
  getTextByXpath: getTextByXpath,
  getValueByXpath: getValueByXpath,
  fillMatrices: fillMatrices,
  mxprod: mxprod,
};
