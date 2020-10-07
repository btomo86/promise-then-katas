const { getData } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi to see how the data is returned

*/

// 1 Create a function that uses the getData function to make a request to the "food" URL and returns
// the data - expected return value "Cheese" of type String

const food = () => {
    return getData("food").then((res) => res.data);
        
};

// 2 Create a function that uses the getData function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order - expected return value ["Bandit", "Berry", "Puss in boots", "Smokey"] of type Array

const cat = () => {
    return getData('cats').then((res) => res.data.cats.sort());
   
};

// 3 Create a function that uses the getData function to make a request to the "dogs" URL and returns
// the naughtiest dog - expected return value {name: "Mutley", naughty: 10} of type Object

const dog = () => {
    return getData('dogs').then((res) => {
        const result = res.data.dogs.filter(n => n.naughty >= 10)[0];
        return result;
    })

};

// 4 Create a function that uses the getData function to make requests to the "jokes" URL and returns
// a joke object with the key of question and answer - expected return { 
//     question: "Why did the scarecrow win the Nobel Prize?",
//     answer: "Because he was out-standing in his field."
// } of type Object

const joke = () => {
    return Promise.all([getData("jokes"), getData("jokes", "question")]).then(
          ([answerObj, jokesObj]) => {
            return { ...answerObj, question: jokesObj.joke };
          }
        );
};

module.exports = {
    food,
    cat,
    dog,
    joke
}