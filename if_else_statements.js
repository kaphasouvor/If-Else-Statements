// practicing if, else and else if statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }
    else if (val < 10) {
        return "Less than 10";
    }
    else {
        return "Greater than or equal to 10";
    }
}


//orderMyLogic(7); // should print out Less than 10
orderMyLogic(2)
orderMyLogic(20)
orderMyLogic(10)

