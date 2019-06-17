// console.log("Hello Simon ruler of the world!");
var name = "Simon Chief Fridge Magnet";
console.log("Name: ", name);
var greeting = ("Hello");
console.log(greeting);
console.log(greeting + " " + name);
var greet_name = (greeting + " " + name);
console.log(greet_name);
console.log(typeof greet_name);
var age = 46;
var dog_years_multiple = 7;
var age_in_dog_yrs = (age * dog_years_multiple);
console.log("Age: " + age);
console.log(typeof age);
console.log("Dog yrs multiple: " + dog_years_multiple);
console.log(typeof dog_years_multiple);
console.log("Age in dog years: " + age_in_dog_yrs);
console.log(typeof age_in_dog_yrs);

console.log("Boolean value of age in dog years string == to actual age on dog years 322 equals true: " + (age_in_dog_yrs === 322));

var undefined_var_Theresa_May_Charisma;
console.log("Undefined type of equals undefined: " + (typeof undefined_var_Theresa_May_Charisma));

// var name = "Bert"
// console.log("Nul var result: " + (name === "Dave");
console.log("I tried to add string & Int and asked the type: " + (typeof (name + age_in_dog_yrs)));

console.log("I tried to add undefined var and int & asked the type is reported the undefinedandnumber so undefined322:  " + (typeof undefined_var_Theresa_May_Charisma + age_in_dog_yrs));

var fart;
console.log(fart + age_in_dog_yrs)
console.log("undefined variable added to number equals Nan not a number " +(fart + 1));

console.log('This program displays fizz for numbers divisible by 3, buzz for numbers divisible by 5 & nofizz&nobuzz for those that are neither in numbers up to 10.\n');
for (var number = 1; number <= 10; number++) {
	var dBT = number % 3 === 0;
	var dBF = number % 5 === 0;

	if (dBT && dBF) {
		console.log(`${number} FizzBuzz`);
	}
	else if (dBT) {
		console.log(`${number} Fizz`);
	}
	else if (dBF) {
		console.log(`${number} Buzz`);
	}
	else {
		console.log(`${number} Not Fizz & Not Buzz`);
	}
}

console.log(Boolean("a string"));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(0.000007));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log();
// console.log((3 + “hello”))
console.log(2 == 2); // true
console.log(2 == 1); // false
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log();
console.log(2 != 2);		// -> false
console.log(2 != "2");	// -> false
console.log(2 !== "2");	// -> true
console.log();
console.log((1+1 === 2) && (1+1 === 4)); // -> false
console.log((1+1 === 2) || (1+1 === 4)); // -> true
