const user = {
  profile: {
    address: {
      city: "Karaikudi"
    }
  }
};

const city = user?.profile?.address?.city ?? "City Not Available";

const town = user?.profile?.address?.town ?? "town Not Available";

console.log("City:", city);

console.log("Town:", town);