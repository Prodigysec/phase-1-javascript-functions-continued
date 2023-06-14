// code your solution here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(action="go to the office") {
    return `This Monday, I will ${action}.`;
}

// function wrapAdjective(str1="*") {
//     return function (par1="special") {
//         return `You are ${str1}${par1}${str1}!`;
//     }
//     // return innerFunc();
// }


function wrapAdjective(str1="*") {
    let innerFunc = function (par1="special") {
        return `You are ${str1}${par1}${str1}!`;
    }
    return innerFunc;
}

// let encouragingPromptFunction = wrapAdjective("!!!")
// console.log(encouragingPromptFunction);

// let result = wrapAdjective('*')
// let emphatic = result("a hard worker")
// console.log(emphatic);