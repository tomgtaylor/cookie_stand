`use strict`


//------------------ HTML Form links to JS ------------------------

//--- Step 3: Add Event Listener ----
// let textForm = document.getElementById('logform'); // ID 'logform' connects to HTML <form>
//     // .addEventListener('event', functionName) Takes in event and function name
// logForm.addEventListener('submit', logUserInput);

// //--- Step 4: Code Event Handler ----
// function logUserInput(event){
//     event.preventDefault();
//     let form = event.target;
//     console.log(form.userText.value);
// }

//------------------------------------------ Global variables / functions

    // creates an array of hours.
let hours = [`6:00 am`, `7:00 am`, `8:00 am`, `9:00 am`, `10:00 am`, `11:00 am`, `12:00 pm`, `1:00 pm`, `2:00 pm`, `3:00 pm`, `4:00 pm`, `5:00 pm`, `6:00 pm`, `7:00 pm`];

//-------------------- 

function randomNumberGen(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

//--------------------
    
let locations = [];   //Creates empty array to store the objects made from the constructor function Store

// ------------------------------------------ Location Constructor Function

function Store (name, minimum, maximum, avgCookiesPerHour) {
    this.name = name;
    this.minimum = minimum;
    this.maximum = maximum;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.totalSales = []; // Adds up total cookies sold per location.
    this.hourlySales = []; //
    this.totalSalesPerHour = 0;

    locations.push(this);
}

//-------------------------------------------- Creates 

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// console.log(locations); // 

//-----------------------------------------
let tableLocations = document.getElementById("table-body"); 

Store.prototype.renderRow = function() {

    
            // for loop iterates through an array of "locations" that stores location objects, [];
            // for(let i = 0; i < locations.length; i++) {
            //     let location = locations[i];
        
        let total = 0;
        // creates an id to link variable "table location" to HTML.
        let tableRow = document.createElement('tr');    // Creates table row element <tr>
        let locationName = document.createElement('th');   //table header per location
        
        locationName.innerText = `${this.name}`;
        tableLocations.appendChild(tableRow);
        tableRow.appendChild(locationName);
        //------------------------------------
        for (let j = 0; j <hours.length; j++) {     // loops through each hour in hours array.
            
            let hour = hours[j];
            
            let randomNum = randomNumberGen(this.minimum, this.maximum);
            let avgCookies = Math.round(this.avgCookiesPerHour * randomNum);
            this.hourlySales.push(avgCookies);
            
            total += avgCookies;
            this.totalSales = total;
            
            let hourlyData = document.createElement('td');
            hourlyData.innerText = `${avgCookies}`;
            tableRow.appendChild(hourlyData);
            
        }
        
        let locationTotal = document.createElement('td');
        locationTotal.innerText = `${total}`;
        tableRow.appendChild(locationTotal);  //pushes in total cookies sold per location
        
    // }
    
    // console.log(seattle);
}
    
    //----------------------------------------------------------------------- Creates an array with all object locations' hourlySales data.
    let tableFooter = document.getElementById('table-footer');
    
    function renderTableFooter() {
        
        let tableRow = document.createElement('tr');    // Table row for the Total per hour for all locations.
        let totalTitle = document.createElement('th'); // Table header for "Total" title.
        totalTitle.innerText = 'Total';
    tableFooter.appendChild(tableRow);
    tableRow.appendChild(totalTitle);
    
    let totalHourlyArray = []; //---------------------------- Not used to display data in html, but could be used. 
    let dailyTotal = 0;
    
    //------------------------------------------------------------------------ Nested 'for loops' calculating the sum of each location sales per hour.
    
    for (let j = 0; j < hours.length; j++){
        
        let hourlyTotal = 0;
        
        for (let i = 0; i < locations.length; i++){
            
            hourlyTotal += locations[i].hourlySales[j];
            dailyTotal += locations[i].hourlySales[j];      
        }
        
        totalHourlyArray.push(hourlyTotal);
        let tableFooter = document.getElementById('table-footer');
        let totalCookiesPerHour = document.createElement('td');
        totalCookiesPerHour.innerText = `${hourlyTotal}`;  
        tableRow.appendChild(totalCookiesPerHour);
    }

    //-----------------Creates <td> element for the daily total, and appends it to the row.

    let dailyTotals = document.createElement('td');
    dailyTotals.innerText = `${dailyTotal}`;  
    tableRow.appendChild(dailyTotals);

// console.log(seattle.hourlySales);
}

//------------------------------ Function Slider for <input type="range">

let formElement = document.getElementById('add-location');
formElement.addEventListener('submit', logNewLocation);

function logNewLocation (event) {
    event.preventDefault();
    let location = event.target.location.value;
    let minimum = parseInt(event.target.minimum.value);
    let maximum = parseInt(event.target.maximum.value);
    let avgsales = parseInt(event.target.avgsales.value);
    // return(form.userText.value);
    console.log(location, minimum, maximum, avgsales);
    let newStore = new Store (location, minimum, maximum, avgsales);
    newStore.renderRow();
    tableFooter.textContent = '';
    renderTableFooter();
}

//-------------------------------

for (let i = 0; i < locations.length; i++) {
    locations[i].renderRow();
}

renderTableFooter();





// console.log(totalHourlyArray);
// console.log(dailyTotal);

// let newHourlyArray = [locations[0].hourlySales, locations[1].hourlySales, locations[2].hourlySales, locations[3].hourlySales, locations[4].hourlySales];
// let sumIndexes = newHourlyArray[0] + newHourlyArray[1] + newHourlyArray[2] + newHourlyArray[3] + newHourlyArray[4];
// console.log(sumIndexes);
// let newHourlyArray = [];
// let sum = seattle.hourlySales[0] + tokyo.hourlySales[0] + dubai.hourlySales[0] + paris.hourlySales[0] + lima.hourlySales[0];
// newHourlyArray.push(sum);
// let sum = [];
// for (let x = 0; x < newHourlyArray.length; x++)
//     for (let y = 0; y < location)

// // console.log(sum);
// // console.log(newHourlyArray);

// console.log(newHourlyArray);

//------------------------------------------------------------------------
// Table Footer Row. Create Total cookies per hour.






// for(let x = 0; x < newHourlyArray.length; x++) {
    
// }



// for (let j = 0; j < hours.length; j++){
//     for (let x = 0; x < locations[i].length; x++)
//     let totalHourly = 0;
    
// }

// console.log(seattle);

    // function 
// function calculateSales(i) {
//     let hourlyTotal = 0;
//     let dailyTotal = 0;
//     for(let j = 0; j < hours.length; j++) {
//         let hourlyTotal = 0;
//         for(let i = 0; i <locations.length; i++) {
//             hourlyTotal += locations[i].hourlySales[j];
//             allTotal += locations[i].hourlySales[j];                        
//         }
//         dailyTotal += locations[i]
//     }
    
// }

// calculateSales();

// let dailyTotal = 0;

// for (let j = 0; j < hours.length; j++){
//     for(let i = 0, x = 0; i < locations.length, x < locations.hourlySales.length; i++, x++){
        
//         hourlyTotal += locations[i].hourlySales[j];
//         allTotals[j] += locations[i].hourlySales[j];

//         }
    
//     let hourlyTotal = 0;
//         // dailyTotal += locations[i].daily;
//     }
//     allTotals.push(dailyTotal);
//     //nested for loop iterates through array "hours"
//     for(let j = 0; j < hours.length; j++){
        
//         let hour = hours[j];
        
//         let randomNum = randomNumberGen(location.minimum, location.maximum);  //creates random # using location min and max.
//         let avgCookies = Math.round(location.avgCookiesPerHour * randomNum);
        
//         // this targets the current index in location array, targets totalSales array, and pushes avgCookies amount into it.
//         locations[i].totalSales.push(avgCookies);
        
//         // += is the same as total = total + avgCookies. Total here addes all avg cookies iteration.
//         total += avgCookies;

//         // console.log(hour, randomNum, avgCookies);

//         Store.prototype.render = function () {

//             let tableRow = document.getElementById(location.name.toLowerCase());
//             let td = document.createElement('td');
//             td.innerText = `${this.avgCookies}`;
//             tableRow.appendChild(td);

            // let tableBody = document.getElementById(location.name.toLowerCase());
            // // let tableRow = document.createElement('tr');
            // let locationData = document.createElement('td');
            // locationData.innerText = this.avgCookies;

            // locationData.appendChild(locationData);


        

        // let td = document.createElement('td');
        // td.innnerText = avgCookies;
        // list.appendChild(td);
        // console.log(avgCookies);

        
                // let li = document.createElement('li');
                // li.innerText = `${hour}: ${avgCookies} cookies`;
                // list.appendChild(li);
        
            // };
    
            // let td = document.createElement('tr');
            // td.innerText = total;
            // list.appendChild(td);
            // console.log(total);

    // After all iterations of hours array, code runs below, which adds another <li>
    // let li = document.createElement('li');
    // li.innerText = `${location.name} Total: ${total} Cookies`;
    // list.appendChild(li);
    // console.log(total);
// }


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// Lima.render();


// declares objects named by location. Each object contains keys: name, minimum, maximum, and avgCookiesPerHour.
// Created a location constructor so the object literals don't need to be used.

// let seattle = {
    //     name: 'Seattle',
    //     minimum: 23,
    //     maximum: 65,
    //     avgCookiesPerHour: 6.3,
    //     totalSales: [],
    // };
    
    // let tokyo = {
    //     name: 'Tokyo',
    //     minimum: 3,
    //     maximum: 24,
    //     avgCookiesPerHour: 1.2,
    //     totalSales: [],
    
    // };
    
    // let dubai = {
    //     name: 'Dubai',
    //     minimum: 11,
    //     maximum: 38,
    //     avgCookiesPerHour: 3.7,
    //     totalSales: [],
    // };
    
    // let paris = {
    //     name: 'Paris',
    //     minimum: 20,
    //     maximum: 38,
    //     avgCookiesPerHour: 2.3,
    //     totalSales: [],
    // };
    
    // let lima = {
    //     name: 'Lima',
    //     minimum: 2,
    //     maximum: 16,
    //     avgCookiesPerHour: 4.6,
    //     totalSales: [],
    // };