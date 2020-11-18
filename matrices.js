let ax = [
  [
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[2]/div[1]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[2]/div[2]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[2]/div[3]/input',
  ],
  [
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[3]/div[1]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[3]/div[2]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[3]/div[3]/input',
  ],
  [
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[4]/div[1]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[4]/div[2]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[1]/tr[1]/td[2]/div/div[4]/div[3]/input',
  ],
];
let bx = [
  [
    '//*[@id="main-container"]/div/div/div[1]/table[2]/tr[1]/td[1]/div/div[2]/div[1]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[2]/tr[1]/td[1]/div/div[2]/div[2]/input',
  ],
  [
    '//*[@id="main-container"]/div/div/div[1]/table[2]/tr[1]/td[1]/div/div[3]/div[1]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[2]/tr[1]/td[1]/div/div[3]/div[2]/input',
  ],
  [
    '//*[@id="main-container"]/div/div/div[1]/table[2]/tr[1]/td[1]/div/div[4]/div[1]/input',
    '//*[@id="main-container"]/div/div/div[1]/table[2]/tr[1]/td[1]/div/div[4]/div[2]/input',
  ],
];
let rx = [
  [
    '//*[@id="main-container"]/div/div/div[1]/div/div/div[2]/div[1]/span',
    '//*[@id="main-container"]/div/div/div[1]/div/div/div[2]/div[2]/span',
  ],
  [
    '//*[@id="main-container"]/div/div/div[1]/div/div/div[3]/div[1]/span',
    '//*[@id="main-container"]/div/div/div[1]/div/div/div[3]/div[2]/span',
  ],
  [
    '//*[@id="main-container"]/div/div/div[1]/div/div/div[4]/div[1]/span',
    '//*[@id="main-container"]/div/div/div[1]/div/div/div[4]/div[2]/span',
  ],
];

module.exports.ax = { mx: ax, r: 3, c: 3 };
module.exports.bx = { mx: bx, r: 3, c: 2 };
module.exports.rx = { mx: rx, r: 3, c: 2 };
