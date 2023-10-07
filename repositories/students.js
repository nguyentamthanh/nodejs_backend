async function getAllStudents({ page, size, searchStrinng }) {
  console.log("get all studednt with paging");
}
async function insertStudent({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) {
  console.log("insert student");
}

export default {
  insertStudent,
  getAllStudents,
};
