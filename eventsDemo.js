import { error } from 'console';
import { EventEmitter } from 'events';

const myEmmiter = new EventEmitter();

function greetHandler(name){
    console.log('Hello' + name);
}


function goodbyeHandler(name){
    console.log('Goodbye' + name);
}

//Register event listeners

myEmmiter.on('greet', greetHandler);
myEmmiter.on('goodbye', goodbyeHandler);

//Emit Events
myEmmiter.emit('greet', 'John'); 
myEmmiter.emit('goodbye', 'Doe'); 

//error handling
myEmmiter.on('error', (err) => {
    console.log('An error occured:', err);
})

//Simulate error
myEmmiter.emmit('error', new Error('Something went wrong'));