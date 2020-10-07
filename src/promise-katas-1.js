/* 

DO NOT change the names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

*/

// 1 Create a function that returns a resolving promise
// Example:
// returnPromise() resolves

const returnPromise = () => {
    const promise = new Promise((resolve,reject) => {
        resolve();
      });
      return promise;
    };



const returnTen = () => {
    const Ten = new Promise((resolve, reject) => {
      resolve(10);
    });
    return Ten;
  };


const anError = () => { 
  const promise = new Promise((resolve, reject) => {
    reject("An error occurred");
})
return promise;
};

const happySad = (x) => {
    return new Promise((resolve, reject) => {
      if (x >=1) {
        resolve("happy");
      } else {
        reject("sad");
      }
    });
  };

// 5 Create a function that returns a promise which resolves to a function that returns "My name is <input name>" 
// Example:
// myNameIs() resolves to a function that takes one argument, name, and returns "My name is name" Eg name => `Me name is ${name}`

const myNameIs = () => { 
    const name = new Promise ((resolve, reject) => {
        resolve((name) => {
        return `My name is ${name}`;
          });
        });
        return name;
      };









module.exports = {
    returnPromise,
    returnTen,
    anError,
    happySad,
    myNameIs
}