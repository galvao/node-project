const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let galvao = new Person('Galvão');

galvao.on('name', () => {
    console.log('my name is ' + galvao.name);
});

let christina = new Person('Christina');
christina.on('name', () => {
    console.log('my name is ' + christina.name);
});

galvao.emit('name');
christina.emit('name');
