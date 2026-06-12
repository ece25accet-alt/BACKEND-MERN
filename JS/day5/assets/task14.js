const displayUser = ({ name, age, email, city }) =>
`Name: ${name}
Age: ${age}
Email: ${email}
City: ${city}`;

console.log(
  displayUser({name: "Malai", age: 22, email: "malai05@gmail.com",city: "Tirunelveli"})
            );