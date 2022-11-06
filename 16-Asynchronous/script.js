'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderErr = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}
///////////////////////////////////////

const renderCountry = function (data, className = '') {
    const html = `<article class="country ${className}" >
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${Math.round((data.population / 1000000), 2)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)].name}</p>
        </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}
/*
const getCountryAndNeighbour = function (country) {

    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    console.log(request.responseText);

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        //render country
        renderCountry(data);

        //get neighbour country 2
        const [neighbour] = data.borders;

        if (!neighbour) return;

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();
        console.log(request2.responseText);

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2[0], 'neighbour');
        });
    });
}

getCountryAndNeighbour('Portugal');
// getCountryAndNeighbour('Usa');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/


const getJson = function (url, errMsg = 'Something went wrong') {
    return fetch(url).then((response) => {
        if (!response.ok)
            throw new Error(`${errMsg} ${response.status}`);
        return response.json();
    })
}

/* const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
            if (!response.ok)
                throw new Error(`Country cannot be found ${response.status}`)
            return response.json()
        })
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        })
        // .then((response) => response.json(), err => alert(err))
        .then((response) => {
            if (!response.ok)
                throw new Error(`Country cannot be found ${response.status}`)
            return response.json();
        })
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch((err) => {
            console.log(`${err} - please check internet connection`);
            renderErr(`Something went wrong - ${err}💥 💥 💥`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
} */
// getCountryData('Portugal');

/* const getCountryData = function (country) {
    getJson(`https://restcountries.com/v3.1/name/${country}`, `Country cannot be found`)
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            if (!neighbour) throw new Error('No new error found!');

            // Country 2
            return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country cannot be found')
        })
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch((err) => {
            console.log(`${err} - please check internet connection`);
            renderErr(`Something went wrong - ${err}💥 💥 💥`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
} */
/*
btn.addEventListener('click', function () {
    getCountryData('Portugal');
});
getCountryData('Portugal'); */
// getCountryData('australia');
// getCountryData('Poghjklrtugal');


///////////////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/


/* const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then((res) => {
            if (!res.ok) throw new Error(`location not found ${res.status}`)
            return res.json()
        })
        .then((data) => {
            console.log(`You are in ${data.region}`)
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        })
        .then((resp) => {
            if (!resp.ok)
                throw new Error(`Country cannot be found ${resp.status}`)
            return resp.json()
        })
        .then(data => renderCountry(data[0]))
        .catch((err) => console.error(`${err.message}💥💥💥`))
        .finally(() => countriesContainer.style.opacity = 1);
} */

/* whereAmI(51.50354, -0.12768);
whereAmI(52.508, 13.381);
whereAmI(9.037, 72.873);
whereAmI(-33.933, 18.474); */

/***
 * The priority of execution goes as enumerated below
 * normal call stack
 * promise microtasks
 * call back queue
 */
/* console.log('Test start');
setTimeout(() => {
    console.log('0sec timer');
}, 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 10000000; i++) { }
    console.log(res)
})

console.log('Test end'); */
/*
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log("Lottery draw is happening 🔮");
    setTimeout(() => {
        if (Math.random() > 0.5)
            resolve('You won 💰');
        else reject(new Error('You lost 💩'));
    }, 2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    })
};

wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('4 second passed');
        // return wait(1);
    });


Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(err));
 */
/* navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.error(`raja says ${err.message}`));

console.log('getting geolocation') */
/*
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getPosition().then(pos => console.log(pos))

//altering the given coding challenge solution
const whereAmI = function () {
    getPosition().then(pos => {
        // console.log(pos.coords);
        const { latitude: lat, longitude: lng } = pos.coords;
    })
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then((res) => {
            if (!res.ok) throw new Error(`location not found ${res.status}`)
            return res.json()
        })
        .then((data) => {
            console.log(`You are in ${data.region}`)
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        })
        .then((resp) => {
            if (!resp.ok)
                throw new Error(`Country cannot be found ${resp.status}`)
            return resp.json()
        })
        .then(data => renderCountry(data[0]))
        .catch((err) => console.error(`${err.message}💥💥💥`))
        .finally(() => countriesContainer.style.opacity = 1);
}

btn.addEventListener('click', whereAmI); */


///////////////////////////////////////
// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
//created wait function which returns a promise
/* const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};


// DOM element with the 'images' class
const imageContainer = document.querySelector('.images');

const createImage = function (imagePath) {
    // returns a promise
    return new Promise(function (resolve, reject) {
        //creates a new image
        const img = document.createElement('img');

        //sets the .src attribute to the provided image path
        img.src = imagePath;

        //When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise
        img.addEventListener('load', function () {

            //append it to the DOM element with the 'images' class
            imageContainer.append(img);

            //resolve the promise
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        })
    })
}
let currentImg;
//In case there is an error loading the image ('error' event), reject the promise.
createImage('img/img-1.jpg').then(img => {
    currentImg = img
    console.log('Image 1 loaded')
    return wait(2);
})
    .then(() => {
        currentImg.style.display = 'none'
        return createImage('img/img-2.jpg')
    })
    .then((img) => {
        currentImg = img
        console.log('Image 2 loaded')
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none'
        // return createImage('img/img-2.jpg')
    })
    .catch(err => console.log(err)); */

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
    /* const whereAmI = async function (country) {
        // fetch(`https://restcountries.com/v3.1/name/${country}`).then((res)=>console.log(res))
    
        //Geolocation
        try {
            const pos = await getPosition();
            const { latitude: lat, longitude: lng } = pos.coords;
    
            //reverse geocoding
            const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
            if (!resGeo.ok) throw new Error('Problem getting location data')
            const dataGeo = await resGeo.json();
    
            //Country data
            const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
            if (!res.ok) throw new Error('Problem getting country')
            const data = await res.json();
            console.log(data)
            renderCountry(data[0]);
            return `you are in ${data.region}`;
        } catch (err) {
            console.error(err);
            // console.log(err);
            renderErr(`💥 ${err.message}`);
    
            //Reject promise returned from async function
            throw err;
        }
    
    }
    console.log('1. Will get location'); */
    // const city = whereAmI('Portugal');
    // console.log(city);//returns a promise
    /* whereAmI().
        then((city) => console.log(`2a. ${city}`))
        .catch((err) => console.log(`2b. ${err.message} 💥`))
        .finally(() => console.log('3. Finished getting location')); */

    /* (async function () {
        try {
            const city = await whereAmI();
            console.log(`2a. ${city}`)
        } catch (err) {
            console.log(`2b. ${err.message} 💥`);
        }
    })(); */

    /* const get3Countries = async function (c1, c2, c3) {
        try {
            const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
            const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
            const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);
            console.log([data1.capital, data2.capital, data3.capital]);
    
            const data = await Promise.all([getJson(`https://restcountries.com/v3.1/name/${c1}`), getJson(`https://restcountries.com/v3.1/name/${c2}`)], getJson(`https://restcountries.com/v3.1/name/${c3}`));
    
            console.log(data.map(d => d[0].capital))
        } catch (err) {
            console.log(err);
        }
    } */


    //Promise.race
    (async function () {
        const res = await Promise.race([
            getJson(`https://restcountries.com/v3.1/name/italy`),
            getJson(`https://restcountries.com/v3.1/name/egypt`),
            getJson(`https://restcountries.com/v3.1/name/mexico`)
        ]);
        console.log(res[0]);
    });

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'))
        }, sec * 1000)
    });
};

Promise.race([
    getJson(`https://restcountries.com/v3.1/name/italy`),
    timeout(5),
])
    .then((res) => console.log(res))
    .catch(err => console.log(err));

//Promise.allSettled

Promise.allSettled([
    Promise.resolve('success'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
])
    .then(res => console.log(res));

Promise.all([
    Promise.resolve('success'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
])
    .then(res => console.log(res))
    .catch(err => console.log(err));


//Promise.any
Promise.any([
    Promise.resolve('success'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
])
    .then(res => console.log(res))
    .catch(err => console.log(err));

//////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/


const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
    try {
        // Load image 1
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 1
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.error(err);
    }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);


