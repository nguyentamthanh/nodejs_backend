async function login({ email, password }) {
  console.log("login user repository,hahahah");
}
async function register({ name, email, password, phoneNumber, address }) {
  console.log(
    "🚀 ~ file: users.js:5 ~ register ~ password:",
    name,
    email,
    password,
    phoneNumber,
    address
  );

  // validate data done
}
export default {
  login,
  register,
};
