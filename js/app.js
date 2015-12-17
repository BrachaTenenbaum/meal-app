//Create diner objects which represent a single diner.
var Person = function(name) {
	this.dishes = [];
	this.name = name;
	this.id = Person.count;
	Person.count++;
};

Person.count = 0;

//Dish object which represent a single Dish and its cost.
var Dish = function(name, cost) {
	this.name = name;
	this.cost = cost;
};

var people = [];


 function creatEventHandlers() {

	$(".diner").submit(function( event ) {
		event.preventDefault();

		var diner = new Person($('.name').val()); 
		people.push(diner); 
		$( "select" ).append('<option value="' + diner.id + '">' + diner.name + '</option>');  //value needs to be in strings in html
	});

	$(".dish-price").submit(function( event ) {
		event.preventDefault();

		var food = new Dish($('.dish').val(), Number($('.cost').val()));
		var selectedID = $( "select" ).val(); 
		selectedID = Number(selectedID);
		// loop through each id until find one that matches the one user clicked on to remove
		for (var i = 0; i < people.length; i++) {
			var person = people[i]
			if (selectedID === person.id) { //or -- people[i].id
				// then add dish to person here
				person.dishes.push(food); 
			}
		}; 
		calculateTotal();	 
		display();
	});


	$(".remove").click(function() {
		var selectedID = $( "select" ).val();
		selectedID = Number(selectedID);
		$('select option[value="' + selectedID + '"]').remove();
		//remove person from people array   
		for (var i = 0; i < people.length; i++) {
			var person = people[i]

			if (selectedID === person.id) {
				// then remove person and dish
				people.splice(i, 1); 
				break
			};
		};
		// rerender html
		display();
	});
 };

 //loop through and generate html one at a time.
 function display() { 
 	var HTML = '';
 	// var personHTML = '';
 	// var dishHTML = '';

 	for (var i = 0; i < people.length; i++) {
 		var person = people[i];
 		HTML += ('<p> Name: ' + person.name + '</p>');
 			for (var j = 0; j < person.dishes.length; j++) {
 				var  dish = person.dishes[j];
 				HTML += ('<ul><li>' + dish.name + '<p>Price:<p>' + dish.cost + '</li></ul>');
 			};
 	};
 	$(".output").html(HTML);
 	
 };


//loop through each person 
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

creatEventHandlers();









 



 






