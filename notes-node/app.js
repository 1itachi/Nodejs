
console.log('Starting app.js');

const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


var argv = yargs.argv;
//var command = process.argv[2];
var command = argv._[0];
console.log('Command : ', command);
console.log(argv);
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
}else if (command === 'list') {
    notes.getAll();
}else if (command === 'remove'){
    notes.removeNote(argv.title);
}else if (command === 'read'){
    notes.readNote(argv.title);
}
else{
    console.log('Command not recognized');
}
