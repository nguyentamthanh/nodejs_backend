async function getAllStudents(req, res) {
  res.status(200).json({
    message: "get student suggestfully",

    data: [
      {
        name: "thanh kun",
        email: "thanhh16012k@gmail.com",
      },
      {
        name: "thanh kun",
        email: "thanhh16012k@gmail.com",
      },
      {
        name: "thanh kun",
        email: "thanhh16012k@gmail.com",
      },
      {
        name: "thanh kun",
        email: "thanhh16012k@gmail.com",
      },
      {
        name: "thanh kun",
        email: "thanhh16012k@gmail.com",
      },
    ],
  });
}
async function getStudentById(req, res) {}
async function updateStudent(req, res) {}
async function insertStudent(req, res) {}

export default {
  getAllStudents,
  getStudentById,
  updateStudent,
  insertStudent,
};
