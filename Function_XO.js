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
        switch(cadena.substring(0,1).toUpperCase()){
            case "O":
                return XO(cadena.slice(1), ctrX, ctrO+1);
                break;
            case "X":
                return XO(cadena.slice(1), ctrX+1, ctrO);
                break;
            default:
                return XO(cadena.slice(1), ctrX, ctrO);
                break
        }
    }
}
