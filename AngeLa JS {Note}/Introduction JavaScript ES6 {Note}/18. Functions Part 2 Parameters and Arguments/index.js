/**************************************************************************
So you should be able to say something like get milk maybe $5 and if one 
bottle of milk is say $1.5 then that should mean that your robot should be 
able to buy $5 / $1.5 which equals 3.33333 so it won't be up to 
buy a point three bottle.
****************************************************************************/
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numberOfBottles = Math.floor(money / 1.5);
  console.log("Buy " + numberOfBottles + " Bottles of Milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(5);
