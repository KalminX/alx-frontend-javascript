const { createUser, uploadPhoto } = require("./utils");

export default function handleProfileSignup() {
  const info = [];
  return Promise.all([uploadPhoto(), createUser(),])
    .then((values) => {
      values.filter((value) => {
        if (!value.firstName) {
          info.push(value.body);
        } else {
          info.push(value.firstName, value.lastName);
        }
      });
      console.log(...info);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
