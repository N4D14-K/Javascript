//function_return.js
function add() {
  return(5 + 6);
}

let answer = add(); //dont forget to use the fn
console.log(answer);


function multiply()
{
  return 5 * 3;
}

multiply(); //here we use the fn


function calculategold(bagOne, bagTwo)
{
    return bagOne + bagTwo;
}

let totalgold = calculategold(10, 11);
console.log("total treasure collected", totalgold);


function MixPotion(jarOneEnergy, jarTwoEnergy) {
    return jarOneEnergy + jarTwoEnergy;
}

let totalEnergy = MixPotion(15, 25);
console.log("The potion is ready with " + totalEnergy + " units of magic!");


function vendingMachine(money) {
    if (money >= 10) {
        return "Chocolate Bar";
    } else if (money >= 5) {
        return "Bag of Chips";
    } else {
        return "A piece of gum";
    }
}

let mySnack = vendingMachine(1);
console.log("I inserted my coins and received a: " + mySnack + "!");



function craftItem(rawMaterial) {
  if (rawMaterial === "Wood") {
    return "Crafting Table";
  } else if (rawMaterial === "Iron") {
    return "Iron Sword";
  } else if (rawMaterial === "Diamond") {
    return "Diamond Pickaxe";
  } else {
    return "Stick";
  }
}

let myItem = craftItem("Tree");
console.log("Success! You placed the material in the bench and got a: " + myItem + "!");



function bypassFirewall(securityLevel) {
  if (securityLevel > 90) {
    return "Admin Access Granted";
  } else if (securityLevel >= 50 && securityLevel <= 90) {
    return "User Access Granted";
  } else {
    return "Access Denied: Firewall Locked";
  }
}
let status = bypassFirewall(95); 
console.log("The terminal flashes: " + status);
