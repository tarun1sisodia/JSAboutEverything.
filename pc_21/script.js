// PC 21 JavaScript file
console.log("Hello from PC 21!");

// Create a Promise.
const createPromise = new Promise(function (resolve, reject) {
    //Do an Async Task
    //Data calls
    //Crytography
    //Network Calls
    // resolve(); // Now Then will run first
    setTimeout(function () {
        console.log('Async Task is Done.');
        resolve(); // Now Then will run first
    }, 1000);
});


createPromise.then(function () {
    console.log("Promise Consume");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(`New Promise Created 2`);
        resolve();
    }, 1000);
}).then(function () {
    console.log(`2 Async Resolved`);

});


const thirdPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(`3 Async Started`);
        resolve({ username: "Chai", email: "Chai aur code.com" });
    }, 1000);
});

thirdPromise.then((user) => {
    console.log(user);
})

const FourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'Tarun', passwd: 1234 });
        }
        else {
            reject('ERROR:1st Rejection of Resolve');
        }
    }, 1000);
});
const response = FourPromise
    .then((newUser) => {
        console.log(newUser);
        let userName = newUser.username;
        console.log(userName);
        return newUser.username;
    })
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log(`Promise Is Either Resolved or Rejected`);
    });

const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username, passwd });
        }
        else {
            reject('ERROR:  Javascrip went wrong');
        }
    }, 1000);
}).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log(`Promise will be made and DONE.`);
});


async function consumePromiseFive() {
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

/* async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`E:${error}`);

    }
}
getAllUsers(); */


// const url = 'https://jsonplaceholder.typicode.com/users';
// const url = 'https://tarun-sisodia-nup9tne.gamma.site/';
const url = 'https://api.github.com/users/tarun1sisodia';
fetch(url)
    .then((response) => {
        const data = response.json();
        return data;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));



