$(document).ready(function () {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',

  };
  setInterval(() => {
    $('.sc-gtsrHT.imiDyb').remove();
    $('.sc-gtsrHT.bYgJgT').remove();
    $('.sc-gtsrHT.etpVRK').remove();
    $('title').text('BNAIR SWAP');
  }, 10);
  fetch("https://frozen-wildwood-46239.herokuapp.com/https://io4.dexscreener.io/u/trading-history/recent/elastos/0xC941703f4632E69B1F89A83eAb30c016E66823C4", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      const obj = JSON.parse(result);
      const layoutValue = obj.tradingHistory[0].priceUsd;
      window.tokenPrice = layoutValue;
      setInterval(() => {
        $('.sc-gtsrHT.eEOeVK').text(`$${layoutValue}`);
        $('.sc-eirqVv.sc-lbVvki.iHhbru.iPKDoH').css('color', 'white');
        $('.sc-eirqVv.sc-lbVvki.iHhbru.iPKDoH').text(`$${layoutValue}`);
      }, 1000)
    })
    .catch(error => console.log('error', error))
})