const userRegisteration = (name, role = "User") => ({
  name,
  role
});

console.log(userRegisteration("Rahul"));
console.log(userRegisteration("Edwin", "Administrator"));
