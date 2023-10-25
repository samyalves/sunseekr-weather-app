/* ---------------------------------------------------------
   Connect to Weather API to access weather information
   --------------------------------------------------------- */

  function weatherBalloon() {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=aa1b4ad5f0744697827172526231110&q=New York, NY&days=6&aqi=ye&alerts=no')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  

/* ---------------------------------------------------------
   Display weather information
   --------------------------------------------------------- */

  function drawWeather( d ) {

    // $('.current h2').html(d.current.temp_f);
    $('.current h2').html(makeRoundNumber(d.forecast.forecastday[0].day.avgtemp_f));
    $('.low-temp').html(makeRoundNumber(d.forecast.forecastday[0].day.mintemp_f));
    $('.high-temp').html( makeRoundNumber (d.forecast.forecastday[0].day.maxtemp_f));
    $('.humidity p').html(makeRoundNumber(d.current.humidity));
    $('.feels-like p').html(makeRoundNumber(d.current.feelslike_f));
    $('.sunrise p').html(d.forecast.forecastday[0].astro.sunrise);
    $('.sunset p').html(d.forecast.forecastday[0].astro.sunset);
    $('.uv-index p').html(d.current.uv);



    // to change weekday
//today
    $('.extended li:nth-child(1) .day').html(displayDay(0));
    $('.extended li:nth-child(1) .low').html( makeRoundNumber(d.forecast.forecastday[0].day.mintemp_f));
    $('.extended li:nth-child(1) .high').html(makeRoundNumber(d.forecast.forecastday[0].day.maxtemp_f));
    $('.extended li:nth-child(1) .icon').html( printGraphic(d.forecast.forecastday[0].day.condition.text) );

//day1
$('.extended li:nth-child(2) .day').html(displayDay(1));
$('.extended li:nth-child(2) .low').html( makeRoundNumber(d.forecast.forecastday[1].day.mintemp_f));
$('.extended li:nth-child(2) .high').html(makeRoundNumber(d.forecast.forecastday[1].day.maxtemp_f));
$('.extended li:nth-child(2) .icon').html( printGraphic(d.forecast.forecastday[1].day.condition.text) );

//day2
$('.extended li:nth-child(3) .day').html(displayDay(0));
$('.extended li:nth-child(3) .low').html( makeRoundNumber(d.forecast.forecastday[2].day.mintemp_f));
$('.extended li:nth-child(3) .high').html(makeRoundNumber(d.forecast.forecastday[2].day.maxtemp_f));
$('.extended li:nth-child(3) .icon').html( printGraphic(d.forecast.forecastday[2].day.condition.text) );
//day3

$('.extended li:nth-child(4) .day').html(displayDay(0));
$('.extended li:nth-child(4) .low').html( makeRoundNumber(d.forecast.forecastday[3].day.mintemp_f));
$('.extended li:nth-child(4) .high').html(makeRoundNumber(d.forecast.forecastday[3].day.maxtemp_f));
$('.extended li:nth-child(4) .icon').html( printGraphic(d.forecast.forecastday[3].day.condition.text) );
//day4
$('.extended li:nth-child(5) .day').html(displayDay(0));
$('.extended li:nth-child(5) .low').html( makeRoundNumber(d.forecast.forecastday[4].day.mintemp_f));
$('.extended li:nth-child(5) .high').html(makeRoundNumber(d.forecast.forecastday[4].day.maxtemp_f));
$('.extended li:nth-child(5) .icon').html( printGraphic(d.forecast.forecastday[4].day.condition.text) );
//day5
$('.extended li:nth-child(6) .day').html(displayDay(0));
$('.extended li:nth-child(6) .low').html( makeRoundNumber(d.forecast.forecastday[5].day.mintemp_f));
$('.extended li:nth-child(6) .high').html(makeRoundNumber(d.forecast.forecastday[5].day.maxtemp_f));
$('.extended li:nth-child(6) .icon').html( printGraphic(d.forecast.forecastday[5].day.condition.text) );


//to change background on CSS when the weather changes
// changeTheme( d.current.condition.text);
// $('.weather-hero').html(printSollaryoGraphic(d.current.condition.text));




  }

/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */
  
  window.onload = function() {
    weatherBalloon();
  }

/* -----------------------------------------------------------
   Event to enter the main content display from the Home page
   ----------------------------------------------------------- */


$('.cover button').click(function(){
  $('.cover').addClass('open');
})