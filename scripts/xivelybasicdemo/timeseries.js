/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var xclient = require("xively/xclient");

// retrieve time-series from Xively, using the below credentials
var xivelyCredentials = {
  
  "emailAddress": "your_email",  
  "password": "your_xively_password",  
  "accountId": "your_xively_account"
};

var xively = new xclient.Xively(xivelyCredentials);
var data = xively.retrieveLatestTimeSeries(80);

// transform time-series into a line-chart compatible format
var transformedData = tranformData(data.reverse()); // time-series is in descending order
return transformedData;

/**
 * Data has the following strucutre when retrieved from time-series
 * [{"time": "2016-04-26T12:11:05Z", "category": "temperature", "numericValue": 33}, {"time": "2016-04-26T12:11:05Z", "category": "coke",	"numericValue": 50} ]
 * This function transform the above sturcture into a another one that allows Google charts to display a line chart
 * that shows the evolution through time of the consumption of the different item types contained in the machine
 */
function tranformData(data) {
  
  // sort items by time slots, i.e. create an object that contains the temperatue + remaining stock of every item type at a given time
  var sortedData = {};
  for (var i = 0; data && i < data.length; i++) {
  
    var time = data[i].time;
    if (!sortedData[time]) {      
      sortedData[time] = {};
    }
    
    sortedData[time][data[i].category] = data[i].numericValue;
  }
  
  // transform 
  var rowList = [];
  for (var item in sortedData) {
    
    var dateTime = new Date(item);
    var values = [{"v":dateTime.getHours() + ":" + dateTime.getMinutes()}];
    values.push(sortedData[item]["temperature"] ? {"v":sortedData[item]["temperature"]} : {});
  	values.push(sortedData[item]["coke"] ? {"v":sortedData[item]["coke"]} : {});
    values.push(sortedData[item]["coke-light"] ? {"v":sortedData[item]["coke-light"]} : {});
    values.push(sortedData[item]["kitkat-milk"] ? {"v":sortedData[item]["kitkat-milk"]} : {});
    values.push(sortedData[item]["kitkat-dark"] ? {"v":sortedData[item]["kitkat-dark"]} : {});
    rowList.push({"c": values});
  }
  
  return  {
    "cols":[
       {"id":"","label":"dateTime","pattern":"","type":"string"},
      {"id":"","label":"temperature","pattern":"","type":"number"},
      {"id":"","label":"coke","pattern":"","type":"number"},
      {"id":"","label":"coke-light","pattern":"","type":"number"},
      {"id":"","label":"kitkat-milk","pattern":"","type":"number"},
      {"id":"","label":"kitkat-dark","pattern":"","type":"number"}
    ],
    "rows":rowList
  };
}			