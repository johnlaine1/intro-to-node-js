exports.firstName = 'Bob';
exports.lastName = 'Marley';
module.exports.fullName = 'Bob Marley';
// returns: {firstName: 'Bob', lastName: 'Marley', fullName: 'Bob Marley'}

exports = {firstName: 'Bob', lastname: 'Marley'};
// returns: {} 
// Becuase module.exports is initially set to {}

exports.firstName = 'Bob';
module.exports = {firstName: 'Fred'};
// returns: {firstName: 'Fred'}
// The object that exports mutated is not the object that was returned