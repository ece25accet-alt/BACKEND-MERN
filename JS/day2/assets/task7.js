const markCalculator = ()=>{

    let mark1 = parseInt(prompt("Enter the mark of subject1"));
    let mark2 = parseInt(prompt("Enter the mark of subject2"));
    let mark3 = parseInt(prompt("Enter the mark of subject3"));
    let mark4 = parseInt(prompt("Enter the mark of subject4"));
    let mark5 = parseInt(prompt("Enter the mark of subject5"));

    let total = (mark1+mark2+mark3+mark4+mark5);
    let avg = total/5;

    return (`Total Mark: ${total} & Average: ${avg}`);
}

console.log(markCalculator());

