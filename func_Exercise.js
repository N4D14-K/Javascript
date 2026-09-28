//challenge 1
function doubleXp(points)
{
    let newpoints = points * 2;
    console.log(newpoints);
}

doubleXp(50);

//challenge 2

function makeHeroName(adjective, animal) {
    console.log("Look out! It's " + adjective + " " + animal + "!");
}

makeHeroName("Wonder", "Woman")


function pizzaParty(cheesePizzas, pepperoniPizzas, veggiePizzas) {
  let totalPizzas = cheesePizzas + pepperoniPizzas + veggiePizzas;
  console.log("Total pizzas ordered: " + totalPizzas);
}

pizzaParty(3, 4, 2); 

function robotGreet(userName) {
  console.log("BEEP BOOP! HELLO " + userName.toUpperCase() + ". I AM A ROBOT.");
}

robotGreet("Leo");


function dogYears(humanAge) {
  let dogAge = humanAge * 7;
  console.log("In dog years, your pet is: " + dogAge);
}


dogYears(10); // Outputs: In dog years, your pet is: 70
