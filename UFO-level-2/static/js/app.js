// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   }

// from data.js
var tableData = data;

// variables for adding data, capturing date, and button click
var tbody = d3.select("tbody");
var inputField = d3.select("#filter_value");
var selection = d3.select("#query_item")
var button = d3.select("#filter-btn");

// add information from data.js below (stright from class)
//console.log(data);
data.forEach(event => {
    //console.log(event)
    var newRow = tbody.append('tr');
    Object.entries(event).forEach(([key, value]) => {
        //console.log(`value: ${value}`);
        newRow.append('td').text(value);
    });
});

// extra filters
button.on("click", function() {    
    tbody.html("");
    d3.event.preventDefault();
    console.log("Huzzah! The button has been clicked.");
    var inputElement = inputField.property("value");
    // console.log(inputElement);
    // console.log(selection);

    if (selection.property("value") === "datetime"){
        var stuff = data.filter(dte => dte.datetime === inputElement);
    }else if (selection.property("value") === "city"){
        var stuff = data.filter(dte => dte.city === inputElement);
    }else if (selection.property("value") === "state"){
        var stuff = data.filter(dte => dte.state === inputElement);
    }else if (selection.property("value") === "country"){
        var stuff = data.filter(dte => dte.country === inputElement);
    } else {var stuff = data.filter(dte => dte.shape === inputElement);
    };
    // console.log(stuff);
    // console.log(selection.property("value"))

    stuff.forEach((event) => {
        //console.log(event)
        var newRow = tbody.append('tr');
        Object.entries(event).forEach(([key,value]) => {
            //console.log(`value: ${value}`);
            newRow.append('td').text(value);
        });
    });      
});
