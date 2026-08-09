let todo = ['Wake up', 'Go for Run', 'Eat breakfast', 'Do coding', 'Play games', 'Sleep'];

while (true) {
    let request = prompt("Enter your choice: 'list', 'add', 'delete', or 'quit'");

    if (request == 'list') {
        console.log('--------------------');
        for (let i = 0; i < todo.length; i++) {
            console.log('Index:', i, todo[i]);
        }
        console.log('--------------------');
    } else if (request == 'add') {
        let task = prompt('Please enter the task you want to add:');
        todo.push(task);
        console.log('Task added!');
        console.log('');
    } else if (request == 'delete') {
        let idx = prompt('please enter the task index no.');
        todo.splice(idx, 1);
        console.log('');

        console.log('Task Deleted, Below is your updated To-Do list:');
        console.log('--------------------');
        for (let i = 0; i < todo.length; i++) {
            console.log('Index:', i, todo[i]);
        }
        console.log('--------------------');
    } else if (request === null) {
        console.log('You pressed Cancel. Exiting...');
        break;
    } else if (request == 'quit') {
        console.log('Quitting the app......!');
        break;
    } else {
        alert('Please enter a valid command.');
    }
}
