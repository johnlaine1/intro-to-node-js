// console.log(process);

// console.log(process.argv);

/**
 * Make argv array a little prettier.
 */ 
// process.argv.forEach((arg, i) => {
//     console.log(`ARG-${i} : ${arg}`);
// });


/**
 * Use the first argument passed in when executing a file.
 */ 
// console.log(`Hello ${process.argv[2]}, how are you`);


/**
 * use the event emitter 'on' method.
 */ 
console.log('Program is running');
setTimeout(() => {}, 2000);
process.on('exit', () => {
    console.log(`OK ${process.argv[2]}, let's get out of here!`);
});


