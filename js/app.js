//Create diner objects which represent a single diner.
var Person = function(name) {
	// Add dishes to a diner's meal
	this.dishes = [];
	this.name = name;
};

//Dish object which represent a single Dish and its cost.
var Dish = function(name, cost) {
	this.name = name;
	this.cost = cost;
};

//new Person object and new Dish object:
// var bracha = new Person('bracha');	
// var danny = new Person('Danny');

// var people = [bracha, danny];

var people = [];

// var pasta = new Dish('pasta', 5);
// var pizza = new Dish('pizza', 3);

	 // bracha.dishes.push(pizza, pasta); 
	 // danny.dishes.push(pasta);
	 // console.log(bracha.dishes); //--> ["pizza", "pasta"]


// Total up the cost of all of the diner's meals
 // var sum = 
 // var total = 0
 // for (var i = 0; i < bracha.dishes.length; i++) {
 // 		total+= bracha.dishes[i].cost; 
 // };

 // console.log(total + "total")



 function display() {

		$(".diner").submit(function( event ) {
			event.preventDefault();

			var diner = new Person($('.name').val()); 
			people.push(diner); 

			var food = new Dish($('.dish').val(), $('.cost').val());	
			diner.dishes.push(food);
			calculateTotal();
			$( ".output" ).html("<b>Name:</b>" + diner.name + "<br>" + " <b>Dish:</b>" + food.name + "<br>" + " <b>Price:</b>" + food.cost);

			// ( "<b>Name:</b> " + name +
			// " <b>dish:</b> " + dish); 
		});

};


//loop through each person each person
var calculateTotal = function() {
	var total = 0;
	for (var i = 0; i < people.length; i++) {
		var person = people[i]
			//loop through each dish
			var individualTotal = 0;
			for (var j = 0; j < person.dishes.length; j++) {
				var dish = person.dishes[j]
				individualTotal+= dish.cost;
			};

			person.individualTotal = individualTotal;
			console.log(individualTotal + " total before tax and tip");

			total += individualTotal
			var tip = 0.2;
			var tax = 0.08;
			// Each diner should pay the tax on their own food
			person.tax = individualTotal * tax; 
			console.log(person.tax + " add tax"); 

			//Each diner should pay fixed tip (pre-tax)
			person.tip = individualTotal * tip;
			console.log(person.tip + " add tip");

			//Each diner total
			person.newTotal = individualTotal + person.tip + person.tax;
			console.log(person.newTotal + " new total");


	};
};



 // ------Print out a total bill

//loop through each person
var totalBill = 0;
for (var i = 0; i < people.length; i++) {
	var person = people[i]

	totalBill += person.newTotal; 
};

console.log(totalBill + " Total bill");


 // Print a breakdown for what each diner owes	



console.log(people);

display();








 



 






