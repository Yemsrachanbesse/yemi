// const age = 18;
// const bank = 20;
// if (age>=20) {
//   console.log("you have acces ");
// }else {
//     console.log("i dont have access");
// }
// function greet(text) {
//   console.log("welcome to our website" + text);
// }
// console.log("rest fo the code");
// function signup() {
//   let name = prompt("waht is you name");
//   greet(name);
// }
// signup();
// function max(nr1,nr2){
//     if(nr1>nr2){
//         return nr1 * 10;
//     }else{
//         return nr2 * 10;
//     }
// }
// let inbox = max(10,5);
// console.log(inbox);

// const user = {
//   name: "ed",
//   age: 25,
//   marrried: false,
//   greet: function () {
//     console.log("hellow there!");
//   },
// };
// user.greet();
// const listUsers=['bita','jonny','you'];
// console.log(typeof listUsers);
// listUsers.pop();
// listUsers.push("new");
// listUsers.shift();
// listUsers.unshift("new");
// const listUsers = ["bita", "jonny", "you"];
// console.log(listUsers.length);
// console.log(listUsers.indexOf("bita"));

// if (text === 'banana'){

// }else if
//     (text ==='apple'){

//     }
// const text = "pinaple";
// let friut = 0;
// switch (text) {
//   case "apple":
//     console.log(`i dont like apples `);
//     friut = 2;
//     break;
//   case "banana":
//     console.log(`wow i love bananas too`);
//     friut = 2;
//     break;
//   case "avocado":
//     console.log(`what it dis like `);
//     default:
//         console.log('whattttt')
// }

// let userInput = prompt("tell me a firut");
// let convertValue=userInput.toLowerCase();
// console.log(convertValue);
// switch (convertValue) {
//   case "kiwi":
//     alert("i hate it ");
//     break;
//   case "banana":
//     alert("i love banana");
//     break;
//   case "orange":
//     alert("whattt");
//     break;
//   default:
//     alert("choose another one");
// }
//loops
// for (let i=0;i<100;i++){
//     console.log(i);
// if (i===20){
//     console.log('you got 20!');
//     break;
// }

// }
// const text = ['singing in the park','wachting myself dance','dogo isdance'];
// for (let i = 0; i < 3; i++) {
//   console.log(text[i]);
// }
// const text = 'yemsrach'
// for (let i = 0; i < text.length; i++) {
//   console.log(i);
// }
// const names=['yemi','hana','logic'];
// for(let name of names)
// {
//     console.log(names.indexOf(name));
// }
// const names=['yemi','hana','logic'];
// names.forEach(function(name,index){
//     console.log(name,index);
// })
// const names=['yemi','hana','logic'];
// for(let name of names){
//     if (name==='hana'){
//         break;
//     }
//     console.log(name);
// }
// const user={
//     name:'yemi',
//     age:10,
//     subscribers:200,
//     money: '222'

// }
// for(let x in user){
// console.log(user[x]);
// }
// let i=20;
// while(i<30){
//     console.log(i)
//     i++;
// }
// gussing game
//generate a randome number
// give the ability to guess
// if they guess and they are wrong ask them(hint)
// if they win say that they win
function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  let guess;
  do {
    guess = prompt("guess a number between 1-10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("your guess is too low");
    } else if (randomNr < guess) {
      console.log("your guse is too high");
    }
  } while (guess != randomNr);
  console.log("you won!");
}
guessGame();
