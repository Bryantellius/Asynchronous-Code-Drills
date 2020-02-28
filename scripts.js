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

    let done = () => {
        console.log(`Job's done!`);
    }

    // RECURSION
    let countdown = (num, callback) => {
        setTimeout(() => {
            if (num <= 0) {
                return callback();
            } else {
                countdown(num - 1, callback)
            }
        }, 1000);
    }
    countdown(5, done);

})

let lunchTime = false;

let orderMeSomeFood = () => {
    return new Promise(function (resolve, reject){
        if(lunchTime){
            let meal = {lunch: 'pizza', drink: 'sprite'};
            resolve(meal);
        }else{
            let error = new Error('Not lunch time. Please wait.');
            reject(error);
        }
    });}

    orderMeSomeFood()
    .then((meal) => console.log(`Today's lunch is ${meal.lunch} with ${meal.drink}`))
    .catch((err) => console.log(err))