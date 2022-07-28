`use strict`

//------------------------------------------ Global variables / functions

let hours = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];
//--------------------
function randomNumberGen(minimum, maximum) {
    // minimum = Math.ceil(minimum);
    // maximum = Math.floor(maximum);
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}
// ------------------------------------------ Objects (by location)

// declares objects named by location. Each object contains keys: name, minimum, maximum, and avgCookiesPerHour.

let seattle = {
    name: 'Seattle',
    minimum: 23,
    maximum: 65,
    avgCookiesPerHour: 6.3,
};

let tokyo = {
    name: 'Tokyo',
    minimum: 3,
    maximum: 24,
    avgCookiesPerHour: 1.2
};

let dubai = {
    name: 'Dubai',
    minimum: 11,
    maximum: 38,
    avgCookiesPerHour: 3.7,
};

let paris = {
    name: 'Paris',
    minimum: 20,
    maximum: 38,
    avgCookiesPerHour: 2.3,
};

let lima = {
    name: 'Lima',
    minimum: 2,
    maximum: 16,
    avgCookiesPerHour: 4.6,
};

let locations = [seattle, tokyo, dubai, paris, lima];
// let totalCookies = 0;

//-----------------------------------------
    // for loop iterating through array "locations"
for(let i = 0; i < locations.length; i++){
    let location = locations[i];
    let list = document.getElementById(location.name.toLowerCase());
        //nested for loop going through hours from left to right in array "hours"
    for(let j = 0; j < hours.length; j++){
        
        let hour = hours[j];
        
        let randomNum = randomNumberGen(location.minimum, location.maximum);
        let avgCookies = location.avgCookiesPerHour * randomNum;
        console.log(hour, randomNum, avgCookies);
        
        let li = document.createElement('li');
        li.innerText = `${hour}: ${avgCookies} cookies`;
        list.appendChild(li);
    }
}

