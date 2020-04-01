var countryData = window.intlTelInputGlobals.getCountryData(),
//   input = document.querySelector("#phone"),
  addressDropdown = document.querySelector("#address-country");

// init plugin
// var iti = window.intlTelInput(input, {
//   utilsScript: "../../build/js/utils.js?1562189064761" // just for formatting/placeholders etc
// });

// populate the country dropdown
for (var i = 0; i < countryData.length; i++) {
  var country = countryData[i];
  var optionNode = document.createElement("option");
  optionNode.value = country.iso2;
  var textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener('countrychange', function(e) {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
  console.log('countrychange');
  
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', function() {
  iti.setCountry(this.value);
  console.log('addressDropdown');
  
});
$( document ).ready(function() {
    $('select').not('.disabled').material_select();
    $('#address-country').on('change', function(e) {
        iti.setCountry(this.value);
        console.log('addressDropdown');
    });
  });
