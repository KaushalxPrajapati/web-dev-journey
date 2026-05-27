import figlet from 'figlet';

// This function converts normal text into large ASCII-style terminal text.
async function writeASCII() {
    try {
        const text = await figlet.text('KaushaL is doing great');
        console.log(text);
    } catch (error) {
        console.log('Something went wrong while creating ASCII text.');
        console.log(error);
    }
}

writeASCII();
