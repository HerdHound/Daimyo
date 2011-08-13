$(document).ready(function() {
  var merchantKey = '2a56f7a86e5571c7b60040ee';
  var redirectUrl = 'https://herdhound.github.com/Daimyo/examples/ashigaru/success.html';

  var cardData = {
    firstName: 'Foo',
    lastName: 'Bar',
    address1: '123 Bar St',
    address2: '',
    city: '',
    state: '',
    zip: '99921',
    number: '4111-1111-1111-1111',
    csc: '111',
    year: '2012',
    month: '05'
  };

  $.ashigaru(cardData, merchantKey, redirectUrl, function(err, res) {
    console.log(err, res);
  });

});
