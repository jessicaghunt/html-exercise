// let number1 = 10;
// let number2 = 10;

// do {
//   console.log("No other loop would execute this");
// } while (number1 < number2);

// No other loop would execute this

// function getDinoColor(dino) {
//     if (dino == 'tyrannosaurus') {
//       return 'purple';
//     }
//     else if (dino == 'protoceratops') {
//       return 'yellow';
//     }
//     else if (dino == 'triceratops' ) {
//       return 'green';
//     }
//     else {
//       return 'rainbow';
//     }
//   }

//   const expr = 'Spring';

// switch (expr) {
//   case 'Summer':
//     console.log(`The season is ${expr}`);
//     break;
//   case 'Fall':
//   	console.log(`The season is ${expr}`);
//     break;
//   case 'Winter':
//     console.log(`The season is ${expr}`);
//     break;
//   case 'Spring':
//     console.log(`The season is ${expr}`);
//     break;  
//   default:
//     console.log(`Sorry, ${expr} is not a season.`);
// }

var superman = {
    alias: "Superman",
    name: "Clark Kent",
    'location': "Smallville",
    'age in years': 50
  }

// console.log(superman.name); // => "Clark Kent"
// console.log(superman.'location') // => "SyntaxError"
// console.log(superman.location) // => "Smallville"
// console.log(superman.'age in years'); // => "Error: Unexpected String"

// console.log(superman['name']); // => "Clark Kent"
// console.log(superman['location']) // => "Smallville"
// console.log(superman['age in years']); // => 50

// let currentKey = 'alias';

// console.log(superman[currentKey]);

// currentKey = 'location';

// console.log(superman[currentKey]);

// currentKey = 'age in years';

// console.log(superman[currentKey]);


// let behavior = {};
// console.log(behavior); // => {}

// behavior.outward = 'rambunctious';
// console.log(behavior);

// let dog = {name: "Chance", breed: "German shepherd", weight: 100};

// if('age' in dog) console.log("The dog has an age");
// else console.log("The dog has NO age");

// let key = "breed";

// if(key in dog) console.log(`The dog has a ${key}`);
// // else console.log(`The dog has NO ${key}`);
// var unitedStates = {
//     population : 331900000,
//     states : {
//       nd : {
//         capital: 'Bismark',
//         population : 774948,
//         largestCity : {
//           name: 'Fargo',
//           population : 126748
//         }
//       },
//       tx : {
//         capital : 'Austin',
//         population : 29530000,
//         largestCity : {
//           name: 'Houston',
//           population : 2326000
//         }
//       }
//     }
//   }

//   console.log(unitedStates.states.nd.capital); // => 'Bismark'
//   for (key in unitedStates){
//     console.log(key)
//   }
//   for (key in unitedStates){
//     console.log(unitedStates[key])
//   }
// for (key in unitedStates){
//     for (subKey in unitedStates[key]){
//       console.log(subKey);
//     }
//   }
//   for (key in unitedStates){
//     for (subKey in unitedStates[key]){
//       console.log(unitedStates[key][subKey]);
//     }
//   }

// function getFruitObject() {
//     let fruitObject = {};
//       fruitObject.fruit = 'banana';
//    console.log(fruitObject);
//   }

// var myArray = [];
var worldAuthors = ['Edgar Allan Poe', 'Fyodor Dostoevsky', 'J.R.R Tolkien', 'Homer', 'Victor Hugo'];
// console.log(worldAuthors[2]);
worldAuthors[0] = 'Miguel de Cervantes';
worldAuthors[7] = "Paulo Coelho";
// // console.log(worldAuthors);
// // console.log(worldAuthors.length);
// console.log(worldAuthors[ worldAuthors.length - 1 ]);

// for(let index = 0; index < worldAuthors.length; index++){
//     console.log(worldAuthors[index]); 
// }  
// for(let element of worldAuthors){
//     console.log(element); 
// }    

let array = ["dog", "cat", "fish"];

for(let [index, animal] of array.entries()){
	console.log(index, animal)
}