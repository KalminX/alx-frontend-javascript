import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([acc, userprofile]) => ({
      photo: acc,
      user: userprofile,
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
