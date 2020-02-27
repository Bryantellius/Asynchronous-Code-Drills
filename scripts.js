window.addEventListener('load', () => {

    let showMessage = message => {
        console.log(message);
    }
    // showMessage('Hello World!');
    // setTimeout(() => showMessage('Hello World, delayed!!'), 2000);

    let getWords = () => {
        console.log('Instant Word');
        setTimeout(() => showMessage('After 3 seconds.'), 3000);
        setTimeout(() => showMessage('After 2 seconds.'), 2000);
        setTimeout(() => showMessage('After 1 seconds.'), 1000);
    }
    getWords();
    
})