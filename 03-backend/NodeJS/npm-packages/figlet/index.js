import figlet from 'figlet';

async function writeASCII() {
    try {
        const text = await figlet.text('KaushaL');
        console.log(text);
    } catch (error) {
        console.log('Something went wrong while creating ASCII text.');
        console.log(error);
    }
}

writeASCII();


// This function converts normal text into large ASCII-style terminal text.
