let fuellevel = 45
if(fuellevel > 80)
{
    console.log("FULL TANK DRIVE TO THE SECRET BASE")
}
else if(fuellevel > 20)
{
    console.log("running low, drive to gas station")
}
else
{
    console.log("empty, grab your running shoes")
}

let zombieCount = 0
if(zombieCount == 0)
{
    console.log("Scanning... all clear!")
}
else if(zombieCount < 10)
{
    console.log("Target locked. Initializing Laser Beam.")
}
else
{
    console.log("Too many zombies! Deploying Smoke Bomb!")
}