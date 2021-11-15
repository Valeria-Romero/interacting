var tigger = { character: "Tigger",
                greet: function(){
                        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
                        }
            }; 

var pooh = { character: "Winnie the Pooh",
            greet: function(){
                    console.log("Hi, I love honey");
                    } 
            };
var piglet = { character: "Piglet",
            greet: function(){
                console.log("Piglet says hi");
            }  };
var bees = { character: "Bees",
    greet: function(){
    console.log("Bees says hi");
} };
var christopherRobin = { character: "Christopher Robin",
    greet: function(){
    console.log("CR says hi");
} };
var owl = { character: "Owl",
    greet: function(){
    console.log("Owl says hi");
} };
var rabbit = { character: "Rabbit",
    greet: function(){
    console.log("Rabbit says hi");
} };
var gopher = { character: "Gopher",
    greet: function(){
    console.log("Gopher says hi");
} };
var kanga = { character: "Kanga",
    greet: function(){
    console.log("Kanga says hi");
} };
var Eeyore = { character: "Eeyore",
    greet: function(){
    console.log("Eeyore says hi");
} };
var heffalumps = { character: "Heffalumps",
    greet: function(){
    console.log("Heffalumps says hi");
} };

tigger.north = pooh;
tigger.south = null;
tigger.west = null;
tigger.east = null;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = christopherRobin;

piglet.north = owl;
piglet.east = pooh;
piglet.west = null;
piglet.south = null;

bees.north = rabbit;
bees.west = pooh;
bees.south = null;
bees.east = null;

owl.east = christopherRobin;
owl.south = piglet;
owl.north = null;
owl.west = null;

christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

rabbit.west = christopherRobin;
rabbit.east = gopher;
rabbit.south = bees;
rabbit.north = null;

kanga.south = christopherRobin;
kanga.north = Eeyore;
kanga.west = null;
kanga.east = null;

Eeyore.south = kanga;
Eeyore.east = heffalumps;
Eeyore.north = null;
Eeyore.west = null;

heffalumps.west = Eeyore;
heffalumps.north = null;
heffalumps.south = null;
heffalumps.east = null;

gopher.north = null;
gopher.south = null;
gopher.west = rabbit;
gopher.east = null;



var player = {
        location: tigger
    }

function move(direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("You may not go that way!");
            return
        }

        let newLocation = player.location.north;
        console.log("You are now at " + newLocation.character + "'s house");
        newLocation.greet();
        player.location = newLocation;

    }

    if(direction == "south"){
        if(player.location.south == null){
            console.log("You may not go that way!");
            return
        }
        let newLocation = player.location.south;
        console.log("You are now at " + newLocation.character + "'s house");
        newLocation.greet();
        player.location = newLocation;
    }

    if(direction == "west"){
        if(player.location.west == null){
            console.log("You may not go that way!");
            return
        }
        let newLocation = player.location.west;
        console.log("You are now at " + newLocation.character + "'s house");
        newLocation.greet();
        player.location = newLocation;
    }

    if(direction == "east"){
        if(player.location.east == null){
            console.log("You may not go that way!");
            return
        }
        let newLocation = player.location.east;
        console.log("You are now at " + newLocation.character + "'s house");
        newLocation.greet();
        player.location = newLocation;
    }
    
}

move("north");
move("west");
move("north");
move("east");
move("east");
move("east");

