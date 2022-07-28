`use strict`

//------------------------------------------ Global variables / functions

    // creates an array of hours.
let hours = [`6:00 am`, `7:00 am`, `8:00 am`, `9:00 am`, `10:00 am`, `11:00 am`, `12:00 pm`, `1:00 pm`, `2:00 pm`, `3:00 pm`, `4:00 pm`, `5:00 pm`, `6:00 pm`, `7:00 pm`];

//--------------------
function randomNumberGen(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}
// ------------------------------------------ Objects (by location)

// declares objects named by location. Each object contains keys: name, minimum, maximum, and avgCookiesPerHour.

let seattle = {
    name: 'Seattle',
    minimum: 23,
    maximum: 65,
    avgCookiesPerHour: 6.3,
    totalSales: [],
};

let tokyo = {
    name: 'Tokyo',
    minimum: 3,
    maximum: 24,
    avgCookiesPerHour: 1.2,
    totalSales: [],
    
};

let dubai = {
    name: 'Dubai',
    minimum: 11,
    maximum: 38,
    avgCookiesPerHour: 3.7,
    totalSales: [],
};

let paris = {
    name: 'Paris',
    minimum: 20,
    maximum: 38,
    avgCookiesPerHour: 2.3,
    totalSales: [],
};

let lima = {
    name: 'Lima',
    minimum: 2,
    maximum: 16,
    avgCookiesPerHour: 4.6,
    totalSales: [],
};

let locations = [seattle, tokyo, dubai, paris, lima];

//-----------------------------------------
// for loop iterates through array "locations" 
for(let i = 0; i < locations.length; i++){
    let location = locations[i];
    let list = document.getElementById(location.name.toLowerCase());

        // total starts at 0, increments per hour iteration, and restarts with every new location index.
    let total = 0;
       
    //nested for loop iterates through array "hours"
    for(let j = 0; j < hours.length; j++){
        
        let hour = hours[j];
        
        let randomNum = randomNumberGen(location.minimum, location.maximum);
        let avgCookies = Math.round(location.avgCookiesPerHour * randomNum);

            // this targets the current index in location array, targets totalSales array, and pushes avgCookies amount into it.
        locations[i].totalSales.push(avgCookies);

            // += is the same as total = total + avgCookies. Total here addes all avg cookies iteration.
        total += avgCookies;
        // console.log(hour, randomNum, avgCookies);
        
        let li = document.createElement('li');
        li.innerText = `${hour}: ${avgCookies} cookies`;
        list.appendChild(li);
       
    }
    
    // After all iterations of hours array, code runs below, which adds another <li> 

    let li = document.createElement('li');
    li.innerText = `Total Cookies Sold in ${location.name}: ${total} Cookies`;
    list.appendChild(li);
    // console.log(total);
}



