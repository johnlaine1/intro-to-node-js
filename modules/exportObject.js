const private = 'Secret information';
const firstName = 'Ben';
const lastName = 'Franklin';
const fullName = (first, last) => {
    console.log(`${first} ${last}`);
};

module.exports = {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName
};