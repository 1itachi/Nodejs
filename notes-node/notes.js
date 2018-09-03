const fs = require('fs');

var fetchNote = () => {
    try{
        return JSON.parse(fs.readFileSync('note.json'));
    }  catch(e) {
        return [];
     };
};


var saveNote = (notes) => {
    fs.writeFileSync('note.json', JSON.stringify(notes));
};

//adding notes
var addNote = (title, body) => {
    var notes = fetchNote();
    var note  = {
        title,
        body
    };
    
   
    fetchNote(notes)
    debugger;
    var duplicateNote = notes.filter((note)=> note.title === title );

    if(duplicateNote.length === 0){
        notes.push(note);
        saveNote(notes);
        console.log('Note created');
        console.log('---');
        console.log(`Title: ${title}`);
        console.log(`Body: ${body}`);
    }else{
        console.log("Note not created!! The title must me unique!!!");
    }

};



//listing all notes
var getAll = () => {
    var notes = fetchNote();
    // var i = 0;
    // var len = notes.length;
    // console.log("Listing the notes: ");
    // if(notes.length !==0){
    // while(i <= len-1 ){
        
    //     console.log(`Note with title ${notes[i].title} is ${notes[i].body}`);
    //     i++;
    // };
    // }else{
    //     console.log('No notes present');
    // }
    console.log(`listing ${notes.length} notes:`)
    notes.forEach((note)=>{
        
        console.log('----');
        console.log('Note: ', note.title);
        console.log('Body: ', note.body);
    } )



};

//removing  notes with matching title
var removeNote = (title) => {
    var notes = fetchNote();
    var removedNote = notes.filter((note)=> note.title !== title);
    saveNote(removedNote);

    notes.length !== removedNote.length?
        console.log(`Note with title ${title} is removed`):
        console.log(`NO note is removed`);
    
};

//reading the note with title
var readNote = (title) => {
    var notes = fetchNote();
    var matchedElement = notes.filter((note)=> note.title === title);
    matchedElement.length === 0?
    console.log(`Note with title ${title} doesnot exist`):
    console.log(`Note with title ${title} is ${matchedElement[0].body}`)
};

module.exports = {
    addNote,  //this is ES6 which is identical to addNote:addnote 
    getAll,
    removeNote,
    readNote
}