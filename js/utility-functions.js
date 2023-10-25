/* -------------------------------------------------------
   Function for printing weather-specific class on body
   ------------------------------------------------------- */

   function changeTheme(d){
  
    // if the description includes the word "rain"
    if( d.indexOf('rain') > 0 ) {
      $('body').addClass('rainy');
  
    // if the description includes the word "cloud"
    } else if( d.indexOf('cloud') > 0 ) {
      $('body').addClass('cloudy');
  
    // if the description includes the word "sunny"  
    } else if( d.indexOf('sunny') > 0 ) {
      $('body').addClass('sunny');
// if the description includes the word "storm"  
    } else if( d.indexOf('storm') > 0 ) {
      $('body').addClass('stormy');
  
// if the description includes the word "snowy"  
} else if( d.indexOf('snow') > 0 ) {
  $('body').addClass('snowy');
    // if none of those cases are true, assume it's clear
    } else {
      $('body').addClass('clear');
    }
  
  }
  
  
  /* -----------------------------------------------
     Function for printing weather-specific graphic
     ----------------------------------------------- */
  
  function printGraphic(d){
    
    // if the description includes the word "rain"
    if( d.indexOf('rain') > 0 ) {
      return '<img src="img/svg/Cloud-Drizzle-Alt.svg" alt="Rain icon">';
    
    // if the description includes the word "cloud"
    } else if( d.indexOf('cloud') > 0 ) {
      return '<img src="img/svg/Cloud.svg" alt="Cloud icon">';
    
    // if the description includes the word "sunny"
    } else if( d.indexOf('sunny') > 0 ) {
      return '<img src="img/svg/Sun.svg" alt="Cloud icon">';
    
    // if none of those cases are true, assume it's clear
    } else {
      return '<img src="img/svg/Sun.svg" alt="Cloud icon">';
    }
  
  }



//  // TO CHANGE SOLLARYO MOODS

  function printSollaryoGraphic(d){
    
    // if the description includes the word "rain"
    if( d.indexOf('rainy') > 0 || d === 'Rainy') {
      return '<img src="img/rainy-sollaryo.png" alt="Rainy Character">';
    
    // if the description includes the word "cloud"
    } else if( d.indexOf('cloudy') > 0 || d === 'Cloudy' ) {
      return '<img src="img/cloudy-sollaryo.png" alt="Cloudy Character">';
    
    // if the description includes the word "sunny"
    } else if( d.indexOf('sunny') > 0 || d === 'Sunny') {
      return '<img src="img/sunny-sollaryo.png" alt="Sunny Character">';

          // if the description includes the word "stormy"
    } else if( d.indexOf('storm') > 0 || d === 'Storm') {
      return '<img src="img/stormy-sollaryo.png" alt="Storm Character">';

    } else if( d.indexOf('windy') > 0 || d === 'Windy') {
      return '<img src="img/windy-sollaryo.png" alt="Windy Character">';




    // if none of those cases are true, assume it's clear
    } else {
      return '<img src="img/sollaryo-thinking.png" alt= "Sunny Character';
    }
  }
  
  
  
  /* -----------------------------------------------
     Function for converting time to hours/minutes
     ----------------------------------------------- */
  
  function convertTime(t){
  
    var unixTimestamp = t;
    // since javascript works in milliseconds, you should convert 
    // the time into milliseconds by multiplying it by 1000.
    var date = new Date(unixTimestamp * 1000);
    // hours part from the timestamp (extra code needed to convert from military)
    var hours = (date.getHours() + 24) % 12 || 12;;
    // minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // will display time in 11:10 format
    var formatTime = hours + ':' + minutes.substr(-2);
    // send formatted date back
    return formatTime;
  
  }
  
  
  /* -----------------------------------------------
     Function for creating day of the week
     ----------------------------------------------- */
  
  // based on a system where 0 = today, 1 = tomorrow, etc.
  // note: the number system below does not immediately correlate
  // for example, 0 for today does not line up with 0 for Sunday below
  
  // how this works – in the return statement, d.getDay() gets today's date
  // as a number (if today is Thursday, d.getDay() will be 4)
  // adding "n" to this number gives you how many days from today.
  // n is passed as an argument to the displayDay() function
  // in the main body of the code above.
  // if today is Thursday, the 4th day of the week,
  // and the number 2 is passed as an argument, 
  // the function will return the number 6. 6 maps to Saturday in the 
  // weekday array below.
  
  function displayDay(n){
  
    var d = new Date();
    var weekday = new Array();
  
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
  
    var dispDay = d.getDay() + n;
  
    // adjust number system for numbers over 6
    // subtract 7 from totals higher than 6
    // to keep the day numbers in the array range above
    if(dispDay > 6){
      dispDay = dispDay - 7;
    }
  
    return weekday[ dispDay ];
  
  }
  function makeRoundNumber (n){
    return Math.round(n);
    
 

  }