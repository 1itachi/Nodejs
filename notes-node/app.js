const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
    describe: 'Title',
    demand: true,
    alias:  't'
};

var bodyOptions = {
    describe: 'Body',
    demand:true,
    alias:'b'
};

var argv = yargs
.command('add', 'add title',
    {   title: titleOptions,
        body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a Note',
    {
        title: titleOptions

    })
.command('remove', 'Remove a note',
    {
        title: titleOptions
    })
.help()
.argv;
//var command = process.argv[2];
var command = argv._[0];
// console.log('Command : ', command);
// console.log(argv);
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
