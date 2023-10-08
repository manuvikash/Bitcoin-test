const sendBitcoin = require("./send.bitcoin");

sendBitcoin("mgeR2CDUwc5cepnbQmm8dFp4YGNwGsWexi", 0.0001)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
