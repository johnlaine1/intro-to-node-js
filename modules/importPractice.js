// exportFunction
const saySomething = require('./exportFunction');
saySomething('Hello');

// exportObject
const myObj = require('./exportObject');
myObj.fullName(myObj.firstName, myObj.lastName);
myObj.fullName('Peter', 'Pan');
