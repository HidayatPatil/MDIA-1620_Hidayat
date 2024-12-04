// My Stable Reaction
//                              .      .----..                                                         
//                          .+#####+##########+.                                                      
//                             +################-                                                     
//                   .-####+.  .#################.                                                    
//                  .#########++#################....                                      ...        
//                  .#################################-                             .--++++++++-      
//          .-+########################################.                    ..--++++++++++++++++###+-.
//       .-#######################+++++++++++++++++####-               .-++++++++++++++++++++++######-
//       -###################++++++++++++++++++++++++++#+.        ..-+++++++++++++++++++++++++######- 
//       .-################++++++++++++++++++++++++++++++-.   .--+++++++++++++++++++++-------#####+.  
//        .##############++++++HYDE+HYDE+HYDE+HYDE+++++++++++-+++++++++++++++++++-.             .-.    
//       .+#############++++++++++++++++++++++++++++++++++++++++++++++++++++++-                       
//     .-###########+##++++++++++++++++++++++++++++++++++++++++++++++++++++++.                        
//   .+#############+###+++++++++++++++++##+++++++++++++++++++++++++++++++++.                         
// .+#####################+++++##+#########+++++++++++++++++++++++++++++++-.                          
//.+#-. .+#################+++++###########++++++++++++++++++++++++++++-.                             
//.+.    .+++++##########+++++++++++#+-+########++++++++++++++++++-..                                 
// ..   .+################++++++++++--++++++++++++++++++++++++++++-                                   
//     -+++###############+++#####++##+++++++++++++++++++++++++++++.                                  
//        +###############++#######++++++#######+++++++++++++++++++.                                  
//       -#######################++++++++#########+++++----++++++++.                                  
//     .------..+###########++++++++++++##########++-------++++++++.                                  
//             .+#######++++++++++++++++++######+++--------++++++++.                                  
//             +#+#+-+++++++++++++###++++++###+++---------+++++++++.                                  
//             -.+-+++++++++++++###+.-++++++++++----------++++++++-.                                  
//                .+++++++++++####++-.+++++++++----------+++++++++.                                   
//                 .++++++++###++++++.-++++++++++++-----+++++++++.               --+-.  .+######+.    
//                   -+++####++###+++.++++++++++++------++++++++.           ..+###################-   
//                      .++++++##+++.-+++++++++--------++++++++-           -#######################-  
//                        .---...   -+++++++++++--------+++++++-          +######################++#- 
//                                 -+++++++++++++++----+++++++++         -######################+. .. 
//                                .-+++++++++++++++++++-++++++++-       .########################+.   
//                                .++++++++++++++++++++++++++++++-      .########################+.   
//                                -++++++++++++++++++++-++++++++++.     .########################-    
//                               .-+++++++++++++++++++---++++++++++-.   -########################+.   
//                              .-+++++++++++++++++++----++++++++++++- -#####################-+##+.   
//                           .-++++++++++++++++++++-------++++++++++++################-. .-##+  .     
//                         -++++++++++++++++++++++++------+++++++++++++#################+.  ..        
//                       .++++++++++++++++++++++++++------+++++++++++++##########-+######-            
//                      .+++++++++++++++++++++++++++++++++++++++++++++++.    .-###+.                  
//                     .++++++++++##+++++++++++++++++++++++++++++++++++-       ....                   
//                    .++++++++++#####+++++++++++++++++++++++++++++++++-                              
//                    -++++++++++#######+++++++++++++++++++++++++++++++-                              
//                   .-++++++++++#########++-+++++++++++++++++++++++++++                              
//                   .++++++++++++#####++-.    .........++++++++++++++++-..                           
//                   .++++++++++++++++++               .-+++++++++++++++++++++-                       
//                   .+++++++++++++++++                 -++++++++++++++++++++++.                      
//                   .+++++++++++++++++                 .++++++++++++++++++++++.                      
//                    .-+++++++++++++++-                 .++++++++++++++++++++-.                      
//                       .-+++++++++++++-                  -++++++++++++++++++-                       
//                           .++++++++++-                    -+++++++-.-++++++                        
//                           -+++++++++-                              .++++++.                        
//                          -++++++++.                                -+++++-                         
//                         -++++++-.                                 .++++++.                         
//                       .+++++++-                                  .-++++++.                         
//                      .+++++++-                                   .+++++++.                         
//                     .++++++++-                                   ++++++++.                         
//                    .++++++++++                                  .++++++++.                         
//                   .+########+.                                 .+#######-.                         
//                  .##########-                                 .+#########.                         
//                 .+##########-                                 -##########.                         
//                 -###########-                                 -##########.                         
//                 .--+++++--.                                     ...--...                           


//------------------------- Seting up shop -------------------------//


let horses;
let visitMessage = "Welcome to Hyde's Stable!";
let lateFee = 150;
let availableStalls = 12;


//------------------------- First day -------------------------//


function StableHorse(name, nickname, favoriteTreat, age, monthlyRent, isInside, color, ponyTails) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.color = color;
    this.ponyTails = ponyTails;
    this.horseIntro = function horseIntro() {
        console.log(`Welcome to our stable, this is ${this.name} but you can call him ${this.nickname}. He is ${this.age} year's old and likes to eat ${this.favoriteTreat}.`);
    };
    this.ponyTailCount = function ponyTailCount() {
        console.log(`${this.name} also has ${this.ponyTails} ${this.color} colored ponytails.`);
    };
};

horses = [
    new StableHorse("Mark", "Momo", "Pickles", 5, 250, true, "Brown", 5),
    new StableHorse("Gilbert", "Gilli", "Pumpkins", 12, 400, false, "Orange", 3),
    new StableHorse("Kabutops", "Kabu", "Truffles", 8, 450, true, "Black", 12),
];

let newHorse = {
    name: "Hugo",
    nickname: "Hue",
    favoriteTreat: "candy",
    age: 6,
    monthlyRent: 370,
    isInside: false,
    color: "Ivory",
    ponyTails: 5,
    horseIntro() {
        console.log(`Welcome to our stable, this is ${this.name} but you can call him ${this.nickname}. He is ${this.age} year's old and likes to eat ${this.favoriteTreat}.`);
    },
    ponyTailCount() {
        console.log(`${this.name} also has ${this.ponyTails} ${this.color} colored ponytails.`);
    },
};

horses.push(newHorse);
horses[0]["isHungry"] = true;
horses[1]["isHungry"] = false;
horses[2]["isHungry"] = false;
horses[3]["isHungry"] = true;


//------------------------- Stable roster -------------------------//


// [
//     StableHorse {
//       name: 'Mark',
//       nickname: 'Momo',
//       favoriteTreat: 'Pickles',
//       age: 5,
//       monthlyRent: 250,
//       isInside: true,
//       color: 'Brown',
//       ponyTails: 5,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: true
//     },
//     StableHorse {
//       name: 'Gilbert',
//       nickname: 'Gilli',
//       favoriteTreat: 'Pumpkins',
//       age: 12,
//       monthlyRent: 400,
//       isInside: false,
//       color: 'Orange',
//       ponyTails: 3,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: false
//     },
//     StableHorse {
//       name: 'Kabutops',
//       nickname: 'Kabu',
//       favoriteTreat: 'Truffles',
//       age: 8,
//       monthlyRent: 450,
//       isInside: true,
//       color: 'Black',
//       ponyTails: 12,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: false
//     },
//     {
//       name: 'Hugo',
//       nickname: 'Hue',
//       favoriteTreat: 'candy',
//       age: 6,
//       monthlyRent: 370,
//       isInside: false,
//       color: 'Ivory',
//       ponyTails: 5,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: true
//     }
// ]


//---------------------- Growing business ----------------------//


function stallAvailibility(horseVar){
    availableStalls = availableStalls - horseVar.length;
    if (availableStalls <= 2){
        return (`We need to build more stalls!`);
    } else {
        return (`We have ${availableStalls} remaining!`);
    }
};
console.log(stallAvailibility(horses))

function latePayment(horseVar){
    for(let i = 0; i < horseVar.length; i++){
        let totalLateRent = horseVar[i]["monthlyRent"] + lateFee;
        console.log(`${horseVar[i]["name"]} will have to pay ${horseVar[i]["monthlyRent"]} rent plus an addition late fee of ${lateFee}. Bringing the total to ${totalLateRent}.`);
    };
};
console.log(latePayment(horses));

function likesTreat(horseVar){
    for(let i = 0; i < horseVar.length; i++){
        let treat = horses[2]["favoriteTreat"];
        if(horseVar[i]["favoriteTreat"] === treat){
            return (`${horseVar[i]["name"]} likes ${treat}`);
        } else {
            console.log(`${horseVar[i]["name"]} does not like ${treat}. He preferes ${horseVar[i]["favoriteTreat"]}`);
        }
    };
};
console.log(likesTreat(horses));

function findNickname(horseName){
    for(let i = 0; i < horses.length; i++){
        if(horses[i]["name"] === horseName){
            return (`${horseName}'s nickname is ${horses[i]["nickname"]}`);
        }
    }
    return (`horse named ${horseName} not found`);
};
console.log(findNickname("Hugo"));


//------------------------- Day to day operations -------------------------//


function findHorseColor(hairColor){
    for (let i = 0; i < horses.length; i++){
        if(horses[i]["color"] === hairColor){
            return (`${horses[i]["name"]} has ${horses[i]["color"]} colored ponytails`)
        }
    } 
    return (`No horse has ${hairColor} colored ponytails`);
};
console.log(findHorseColor("blue"));

function goOutHorses (horseVar){
    for(let i = 0; i < horseVar.length; i++){
        if(horseVar[i]["isInside"] === true){
            horseVar[i]["isInside"] = false;
        }
    }
    console.log(`All horses have been brought outside to spend time in the sun`)
};
console.log(goOutHorses(horses));

horses[3].callInside = function (){
    if(this.isInside == false){
        return this.isInside = true;
    } 
        return this.isInside = false;
};

function feedHorses (horseVar){
    for(let i = 0; i < horseVar.length; i++){
        if (horseVar[i].isInside === false){
            horseVar[i].isInside = true;
        }
        console.log(`${horseVar[i].name} is inside with everyone and eating his favorite treat ${horseVar[i].favoriteTreat}`);
    };
};
console.log(feedHorses(horses));

function updateHorseLocation (horseVar){
    console.log(goOutHorses(horseVar));
    for(let i = 0; i < horseVar.length; i++){
        if(horseVar[i].isInside === false){
            horseVar[i].isInside = true;
        };
        console.log(`${horseVar[i].name} come inside it's getting dark outside`);
    };
};
console.log(updateHorseLocation(horses));