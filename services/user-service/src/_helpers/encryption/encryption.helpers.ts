import { compare, hash } from "bcrypt";

export const checkPassword = (password: string, hash: string | null) => {
  return new Promise((resolve, reject) => {
    compare(password, hash || "", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export const hashPassword = (password: string, salt: number) => {
  return new Promise((resolve, reject) => {
    hash(password, salt, (err, hash: string) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};
