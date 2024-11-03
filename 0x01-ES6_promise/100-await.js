import { createUser, uploadPhoto } from "./utils";

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      return value;
    })
    .catch(() => {
      return {
        photo: null,
        user: null,
      };
    });
}
