import figlet from 'figlet';

async function doStuff() {
    const text = await figlet.text('I  DO  CODING');
    console.log(text);
}

doStuff();
