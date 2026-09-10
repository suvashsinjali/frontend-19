const fetchUserData = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve({ id: 1, name: "Suvash" });
    } else {
      reject("Failed to fetch user data.");
    }
  }, 2000);
});

fetchUserData
  .then((user) => {
    console.log("Success:", user.name);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation complete.");
  });
