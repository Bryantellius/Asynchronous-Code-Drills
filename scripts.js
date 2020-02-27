window.addEventListener('load', () => {

    let showMessage = message => {
        console.log(message);
    }
    showMessage('Hello World!');
    setTimeout(() => showMessage('Hello World, delayed!!'), 2000);

    let getWords = () => {
        console.log('Instant Word');
    }
})