/* Classics Variables */

let myStrVariable = 'toto';
let myIntVariable = 12;
// same in function: let maVariableObj = () => {
//     propInt: 'toto',
//     propStr: 12
// };
let myObjVariable = {
    propInt: 'toto',
    propStr: 12
};
// same in function: let maVariableArr = () => [1, 2, 3];
let myArrVariable = [1, 2, 3];
// get one parameter 'mul' and return 2 times 'mul'
let myFunVariable = mul => 2 * mul;

/* Constants */
/* constants can't be reassigned */
const myStrConstant = 'toto';
const myIntConstant = 12;
const myObjConstant = {
    propInt: 'toto',
    propStr: 12
};
const myArrConstant = [1, 2, 3];
const myFunConstant = mul => 2 * mul;

// if we try to reassign simple variable, we can
myStrVariable = 'toto2';
// but if we try with a constant, we can't and we have an error in IDE
// myStrConstant = 'toto2';