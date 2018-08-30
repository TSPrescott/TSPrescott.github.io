//Please Pardon the Global Pollution
var currentRoom = 0;

/**********************************************House/Story Module*********************************************************************/

var exposer = (function() {
    var House = {
    name: "Carpenter home",
    rooms: [
        
            {
            name: "kitchen", 
            roomNumber: 0,
            description: "You look around the kitchen as the last rays of the day's sun illuminate the kitchen table. Cupboards rest on the wall above the kitchen sink. To the north is the living room. To the east is a laundry room.",
            items: [
                {
                    name: "table",
                    description: "Graded papers are scattered across the table.",
                    pattern: /table/,
                    isHiding: false
                },
                {
                    name: "sink",
                    description: "A few dirty dishes occupy the sink. The cupboards below only hold cleaning supplies, not your sister.",
                    pattern: /sink/
                },
                {
                    name: "cupboards",
                    description: "The cupboards hold plates, bowls and glasses. Noone is hiding here!",
                    pattern: /cupboard/,
                    isHiding: false
                }
                    ],
            dir: [
                {
                    north: function() {
                            currentRoom = currentRoom + 1;
                    }
                },
                {
                    east: function() {
                            currentRoom = currentRoom + 2;
                    }
                },
                {
                    west: function() {
                       
                            alert("can't go west.");
                    }
                },
                {
                    south: function() {
                            alert("can't go south.");
                    } 
                }
             ]     
            },
        
            {   
            name: "living room", 
            roomNumber: 1,
            description: "A couch sits against the wall. A curtain covers the large sliding glass door. Across from it a tv sits atop a media center. A coffee table lies in the middle of the room. To the east is a hallway leading to the rest of the home. The kitchen is back south.",
            items: [
                {
                    name: "couch",
                    description: "Dog hair covers the couch.",
                    pattern: /couch/
                },
                
                {
                    name: "curtain",
                    description: "You pull the curtain back and find...... a few crumbs on the floor.",
                    pattern: /curtain/,
                    isHiding: false
                },
                
                {
                    name: "tv",
                    description: "This is where the family huddles every halloween to watch scary movies and eat sugar. Your sister may be the champion, but even she can't hide here.",
                    pattern: /tv/
                }
                    ],
            dir: [
                {
                    north: function() {
                            alert("can't go north.");
                    }
                },
                {
                    east: function() {
                            currentRoom = currentRoom + 2;
                    }
                },
                {
                    west: function() {
                            alert("can't go west.");
                    }
                },
                {
                    south: function() {
                            currentRoom = currentRoom - 1;
                    }
                }
            ]
            },
        
            {   
            name: "laundry", 
            roomNumber: 2,
            description: "A laundry machine takes up most of the room in here. There are cabinets that rest above the machines, and a hamper filled with clothes sits beside the washer. The door frame has tick marks that show how tall you were at certain points in your life.  To the west is the kitchen.",
            items: [
                {
                    name: "machine",
                    description: "You open up the washer and dryer, but only find clothes.",
                    pattern: /machine/,
                },
                
                {
                    name: "cabinet",
                    description: "The cabinet doors squeak open, revealing lots of cleaning supplies.",
                    pattern: /cabinet/,
                },
                
                {
                    name: "frame",
                    description: "Looks like I was three feet tall in May of 1994.",
                    pattern: /frame/
                },
                
                {
                    name: "hamper",
                    description: "The hamper only contains dirty clothes right now.",
                    pattern: /hamper/,
                    isHiding: false
                }
            ],
            dir: [
                {
                    north: function() {
                            alert("can't go north.");
                    }
                },
                {
                    east: function() {
                             currentRoom = currentRoom - 2;
                    }
                },
                {
                    west: function() {
                            alert("can't go west.");
                    }
                },
                {
                    south: function() {
                            alert("can't go south.");
                    }
                }
            ]
        },
        
        {   
            name: "hallway", 
            roomNumber: 3,
            description: "The hallway is lined with pictures. Your bedroom is to the south. To the east is the sunroom. The living room is back west.",
            items: [
                {
                    name: "pictures",
                    description: "You look at one of the pictures. It's from the family reunion last year. A smile spreads across your lips as you just notice the bunny ears your sister gave you.",
                    pattern: /pictures/
                }
            ],
            dir: [
                {
                    north: function() {
                            alert("can't go north.");
                    }
                },
                {
                    east: function() {
                            currentRoom = currentRoom + 2;
                    }
                },
                {
                    west: function() {
                            currentRoom = currentRoom - 2;
                    }
                },
                {
                    south: function() {
                            currentRoom = currentRoom + 1;
                    }
                }
            ]
        },
        
        {   
            name: "playerRoom", 
            roomNumber: 4,
            description: "Your bed sits in the far corner of the room. A black nightstand rests beside the bed, and a desk sits on the opposing wall. Your closet door is partially open, revealing the silhouette of a pair of shoes. To the north is the hallway.",
            items: [
                {
                    name: "bed",
                    description: "A black comforter is strewn across the top. Some dirty clothes and food wrappers are underneath.",
                    pattern: /bed/,
                    isHiding: false
                },
                
                {
                    name: "stand",
                    description: "A Captain Underpants book rests on the nightstand. The drawer contains your school ID card, chewing gum, pens, and other odds and ends.",
                    pattern: /stand/
                },
                
                {
                    name: "closet",
                    description: "You fling the door open to reveal...... shoes! shirts! and socks! Oh my!",
                    pattern: /closet/,
                    isHiding: false
                }
            ],
            dir: [
                {
                    north: function() {
                            currentRoom = currentRoom - 1;
                    }
                },
                {
                    east: function() {
                             alert("can't go east.");
                    }
                },
                {
                    west: function() {
                            alert("can't go west.");
                    }
                },
                {
                    south: function() {
                            alert("can't go south.");
                    }
                }
            ]
        },
        
        {   
            name: "sun room", 
            roomNumber: 5,
            description: "Plants line the glass, slightly obscuring the view of the dogwood tree in the front yard. A large basket holding blankets rests on the floor in the far corner of the room. To the north is your parents' master bedroom. To the south lies your sister's room.",
            items: [
                {
                    name: "plants",
                    description: "A closer inspection reveals the plants are fake plastic. Much easier to maintain than the real deal.",
                    pattern: /plants/
                },
                
                {
                    name: "basket",
                    description: "A hand made quilt consisting of red and white wool rests on top. You throw the blankets aside and find the box is empty.",
                    pattern: /basket/,
                    isHiding: false
                }
            ],
            dir: [
                {
                    north: function() {
                            currentRoom = currentRoom + 2;
                    }
                },
                {
                    east: function() {
                             alert("can't go east.");
                    }
                },
                {
                    west: function() {
                            currentRoom = currentRoom - 2;
                    }
                },
                {
                    south: function() {
                            currentRoom = currentRoom + 1;
                    }
                }
            ]
        },
        
        {   
            name: "sis room", 
            roomNumber: 6,
            description: "Your sister's room is sky blue with clouds painted along the top. Her bed is neatly made, the comforter almost exactly matching the blue walls. A cradle holds a baby doll to your left. A closed closet door lies on the other side of the room. To the north is the sun room.",
            items: [
                {
                    name: "bed",
                    description: "pictures of you and your relatives line the walls.",
                    pattern: /bed/,
                    isHiding: false
                },
                
                {
                    name: "cradle",
                    description: "The baby doll is neatly tucked in. Your sister sure takes good care of that thing.",
                    pattern: /cradle/
                }
            ],
            dir: [
                {
                    north: function() {
                            currentRoom = currentRoom - 1;
                    }
                },
                {
                    east: function() {
                             alert("can't go east.");
                    }
                },
                {
                    west: function() {
                            alert("can't go west.");
                    }
                },
                {
                    south: function() {
                            alert("can't go south.");
                    }
                }
            ]
        },
        
        {   
            name: "master bedroom", 
            roomNumber: 7,
            description: "You look around and see a white comforter on the bed, white walls, white carpet, and a black coffee table. The walls are adorned with red, white, and black abstract paintings. To the north lies the walk-in closet. To the south is the sun room.",
            items: [
                {
                    name: "bed",
                    description: "The bed is neatly made. It's spotless underneath, except for some dog hair.",
                    pattern: /bed/,
                    isHiding: false
                },
                
                {
                    name: "table",
                    description: "An issue of Forbes magazine rests on the otherwise bare table. The patterns made by the stained wood grain momentarily mesmerize you.",
                    pattern: /table/
                }
            ],
            dir: [
                {
                    north: function() {
                            currentRoom = currentRoom + 1;
                    }
                },
                {
                    east: function() {
                             alert("can't go east.");
                    }
                },
                {
                    west: function() {
                            alert("can't go west.")
                    }
                },
                {
                    south: function() {
                            currentRoom = currentRoom - 2;
  
                    }
                }
            ]
        },
        
        {   
            name: "closet", 
            roomNumber: 8,
            description: "You see what seems to you must be ten thousand coat hangers lining the walls to the left and right of you. At the end of the closet lies a large oak chest. A rectangular black carpet lies before the chest like a path. To the south is your parent's room.",
            items: [
                {
                    name: "chest",
                    description: "The bed is neatly made. It's spotless underneath.",
                    pattern: /chest/,
                    isHiding: false
                }
            ],
            dir: [
                {
                    north: function() {
                            alert("can't go north.");
                    }
                },
                {
                    east: function() {
                             alert("can't go east.");
                    }
                },
                {
                    west: function() {
                            alert("can't go west.")
                    }
                },
                {
                    south: function() {
                            currentRoom = currentRoom - 1;
  
                    }
                }
            ]
        }
    ]
};
    
    
    
    
    var StorySections = {
        
        Directions: {
            message: "<b>Controls</b>:<br> <b>'north'</b> + enter to go north<br> <b>'east'</b> + enter to go east<br> <b>'inspect item name'</b> + enter to search<br> Example: inspect table<br><br><br> To begin playing, type <b>'start'</b> into the text box below and press enter."
        },
        
        Introduction: {
            message: "It's a nice evening on Fairview Drive. The birds are chirping and squirrels jumping. &#34;Its my turn to hide! You'll never find me!&#34;, your sister yells. She always has been the hide and seek champion, much to your chagrin. Your parents are at a seminar for a few more hours, giving you both an empty house to play in.<br>    Let. the. games. begin. <br><br><br> Press enter to begin.",
            background: "pics/TextAdvSunset.jpeg"
        }, 
    
        GameOver: {
            message: "&#34;Beginner's luck! You won't find me next time.&#34;, your sister screams.<br> You won! Would you like to play again?<br><br> Yes/No",
            background: "pics/TextAdvGirl.png"
        }
};
    
    
    return {
        roomList: House.rooms,
        story: StorySections
    }
})();












/************************************************************************************************************************************************************************************************************************************************************************************************/
/************************************************************************************************************************************************************************************************************************************************************************************************/










var GameEngine = (function(choice, roomNum) {
    
    
    
    function hidingPlaceGenerator() {
        
        var randNum = Math.random();
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DON'T FORGET TO REMOVE CONSOLE.LOGS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (randNum < 0.1) {
            exposer.roomList[0].items[0].isHiding = true;
        } else if (randNum > 0.1 && randNum < 0.2) {
            exposer.roomList[0].items[2].isHiding = true;
        } else if (randNum > 0.2 && randNum < 0.3) {
            exposer.roomList[2].items[3].isHiding = true;
        } else if (randNum > 0.3 && randNum < 0.4) {
            exposer.roomList[4].items[0].isHiding = true;    
        } else if (randNum > 0.4 && randNum < 0.5) {
            exposer.roomList[4].items[2].isHiding = true;      
        } else if (randNum > 0.5 && randNum < 0.6) {
            exposer.roomList[5].items[1].isHiding = true;  
        } else if (randNum > 0.6 && randNum < 0.7) {
            exposer.roomList[6].items[0].isHiding = true;        
        } else if (randNum > 0.7 && randNum < 0.8) {
            exposer.roomList[7].items[0].isHiding = true;    
        } else if (randNum > 0.8 && randNum < 0.99) {
            exposer.roomList[8].items[0].isHiding = true;
        }
    }
    
    
    
    
    
    function itemLookup(choice, roomNo) {
        var screen = document.getElementById("storyText"),
            i;
        
        for (i = 0; i < exposer.roomList[roomNo].items.length; i++) {

                var stringToMatch = exposer.roomList[roomNo].items[i].pattern,
                    pic = document.getElementById("sister");
                if(stringToMatch.test(choice)) {
                    
                    if (exposer.roomList[roomNo].items[i].isHiding === true) {
                        pic.src = "css/TextAdvGirl.png";
                        screen.innerHTML = exposer.story.GameOver.message;
                    } else {
                        screen.innerHTML = exposer.roomList[roomNo].items[i].description;
                    }
                    
                }
        }
    }
    
    
    
    
    
    function roomLogic(choice, roomNum) {
        
        switch (choice) {
            case "north":
                exposer.roomList[roomNum].dir[0].north();
                break;
            case "south":
                exposer.roomList[roomNum].dir[3].south();
                break;
            case "east":
                exposer.roomList[roomNum].dir[1].east();
                break;
            case "west":
                exposer.roomList[roomNum].dir[2].west();
                break;
        }        
    }
    
    

    
    
    return {
        engine: roomLogic,
        itemLookup: itemLookup,
        generateHidingPlace: hidingPlaceGenerator
    }
    
    
})();








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("storyText").innerHTML = exposer.story.Directions.message;
    GameEngine.generateHidingPlace();
});









function initEngine() {
    
    var choice = document.getElementById("userInput").value.toLowerCase(),
        form = document.getElementById("myForm"),
        myRoom = currentRoom,
        screen = document.getElementById("storyText"),
        i;

 
  
    if (/inspect/.test(choice)) {
        GameEngine.itemLookup(choice, myRoom);
        form.reset();
        return false;
    } else if (/start/.test(choice)) {
        screen.innerHTML = exposer.story.Introduction.message;
        form.reset();
        return false;
    } else if (/yes/.test(choice)) {
        location.reload();
    } else {
        GameEngine.engine(choice, myRoom);
        for (i = 0; i < exposer.roomList.length; i++) {
            if (exposer.roomList[i].roomNumber  === currentRoom) {
                screen.innerHTML = exposer.roomList[i].description;
            }
        }
    form.reset();
    return false;
    }

}


