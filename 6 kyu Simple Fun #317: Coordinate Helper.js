/*
Task

Your task is to create a Coordinate Helper function.

Function accept a string array cmd. Each element in cmd is a command of the move.

A valid command has two parts: First part is an uppercase character, it should be one of "A"(move left), "D"(move right), "W"(move up)" and "S"(move down); Second part is a numer represents the distance. A whole command looks like: "A10","S5","D100",etc..

Any other command is invalid and needs to be ignored.

The initial coordinates always be (0,0). You need to return the coordinates after all commands are executed, using an array like [x-coordinate, y-coordinate].

Input/Output

[input] string array cmd

A string array. It contains some commands(valid or invalid).

[output] an integer array

A two-elements array. The first element is x-coordinate; The second element is y-coordinate.

Example

For cmd = ["A10","S10","D20","W20"]

the output should be [10, 10]

initial coordinates: -->[0, 0]
"A10"(move left 10)  --> [-10, 0]
"S10"(move down 10)  --> [-10, -10]
"D20"(move right 20) --> [10, -10]
"W20"(move up 20)    --> [10, 10]
For cmd = ["A10","S20","W10","D30","X","A1A","B10A11","","A10"]

the output should be [10, -10]

initial coordinates: -->[0, 0]
"A10"(move left 10)  --> [-10, 0]
"S20"(move down 20)  --> [-10, -20]
"W10"(move up 10)    --> [-10, -10]
"D30"(move right 30) --> [20, -10]
"X"(invalid command should be ignored)
"A1A"(invalid command should be ignored)
"B10A11"(invalid command should be ignored)
""(invalid command should be ignored)
"A10"(move left 10)  --> [10, -10]
*/

function coordinateHelper(cmd){
    var direction, distance;
    var x = 0;
    var y = 0;
    
    //"A"(move left), "D"(move right), "W"(move up)" and "S"(move down)
    for (var i = 0; i < cmd.length; i++) {
        if (cmd[i].search(/^[A-Z]{1}\d+$/g) + 1) {
            direction = cmd[i].match(/^[A-Z]/g);
            distance = cmd[i].match(/\d+$/g);
            if (distance) {distance = parseInt(distance[0], 10)};
            
            if (direction && distance) {
                switch (direction[0]) {
                    case "A":
                        x -= distance;
                        break;
                    case "D":
                        x += distance;
                        break;
                    case "W":
                        y += distance;
                        break;
                    case "S":
                        y -= distance;
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return [x, y];
}
