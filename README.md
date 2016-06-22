#About this application
This simple application demonstrates how to use the Xively connector to implement a simple inventory (content of a connected vending machine) monitoring application. The status of the inventory is pushed by the vending machine to a Xively time-series channel and is read by a script using the connector. Time-series data is then transformed into a data structure that is used to follow-up on the inventory level using a line chart.

#Application's components
The application is composed the following components:
- timeseries: this script imports the Xively connector and uses it to read from the time series channel. It transforms the obtained data to another structure that can be displayed as a line chart,
- inventory monitor: this is a scriptr.io Google chart script. It uses the latter as a data source to build and populate a line-chart,
- dashboard: a very simple HTML file that includes a pointer to the above script within an iframe that is refreshed every 5 minutes. 

#Pre-requisites and dependencies
- Sign-up to Scriptr.io,
- Sign-up to Xively,
- Create an organization and a device in your Xively account,
- Import the Xively connector to your Scriptr.io workspace
