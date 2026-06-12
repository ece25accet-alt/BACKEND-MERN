const getUserName = ()=>{

    let userName = prompt("Enter thr Username: ");

    return(userName==""?"Guest":userName);

}

console.log(getUserName());