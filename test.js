// Дан массив с numbers внутри.
// Вам необходимо написать функцию,
// которая выведет только четные элементы данного массива
// по очереди.

// На решение дается 8 - 10 минут
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const result = array.filter(number => number % 2 == 0)
console.log(result)

// Ahoy Matey!
// Welcome to the seven seas.
// You are the captain of a pirate ship.
// You are in battle against the royal navy.
// You have cannons at the ready.... or are they?
// Your task is to check if the gunners are loaded and ready,
// if they are: Fire!
// If they aren't ready: We are not ready!
// Your gunners for each test case are 4 or less.
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum
// (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire! If one or more are 'nay' then We are not ready!

const a = {
  Mike: "aye",
  Joe: "aye",
  Johnson: "aye",
  Peter: "aye"
};

const b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

const goToGames = (odj) => Object.values(odj).every(values=>values==="aye")
console.log(goToGames(a))
console.log(goToGames(b))