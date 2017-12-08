/*
AESC - SpeedStream
08/12/2017 09:34:35
*/

function XO(cadena, ctrX, ctrO){
    if (ctrX === undefined) ctrX = 0;
    if (ctrO === undefined) ctrO = 0;
    if (cadena.length == 0){
        if(ctrX!=ctrO) {return false;}
        else { return true; }
    }
    else{
        switch(cadena.substring(0,1)){
            case "O":
                return XO(cadena.slice(1), ctrX, ctrO+1);
                break;
            case "o":
                return XO(cadena.slice(1), ctrX, ctrO+1);
                break;
            case "X":
                return XO(cadena.slice(1), ctrX+1, ctrO);
                break;
            case "x":
                return XO(cadena.slice(1), ctrX+1, ctrO);
                break;
            default:
                return XO(cadena.slice(1), ctrX, ctrO);
                break
        }
    }
}


print("TEST CASES");
print("zpzpzpp -> " + XO("zpzpzpp"));
print("xo -> " + XO("xo"));
print("xxOo -> " + XO("xxOo"));
print("xxxm -> " + XO("xxxm"));
print("Oo -> " + XO("Oo"));
print("ooom -> " + XO("ooom"));

print("SPECIAL TEST CASES");
print(" -> " + XO(""));
print("o O -> " + XO("o O"));
print(" X -> " + XO(" X"));
print("y -> " + XO("y"));
print(" a  -> " + XO(" a "));
print("0 -> " + XO("0"));
