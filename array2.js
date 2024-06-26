const marvalHeroes = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]


// marvalHeroes.push(dc)

// console.log(marvalHeroes);
// console.log(marvalHeroes[3][1]); [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// flash



// const allHero=marvalHeroes.concat(dc)
// console.log(allHero); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const allNewhero = [...marvalHeroes,...dc]

// console.log(allNewhero);   //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const anotherArray = [1,2,3, [4,5,6] , 7 , [6,7, [4,5] ]]

// const anotherArray2 = anotherArray.flat(Infinity)

// console.log(anotherArray2);

// [
// 1, 2, 3, 4, 5,
// 6, 7, 6, 7, 4,
// 5
// ]


console.log(Array.isArray("GAgan"));//false
console.log(Array.from("GAgan")); //[ 'G', 'A', 'g', 'a', 'n' ]

console.log(Array.from({name: "gagan"})); //[]

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
