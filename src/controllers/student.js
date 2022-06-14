const Student = require('../models/student');

const findStudent = async (req, res) => {
  const npm = req.params.npm;
  try {
    const student = await Student.findOne({ npm });
    res.json({
      status: 'OK',
      npm,
      nama: student.name,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: 'student not found',
    });
  }
};

module.exports = { findStudent };
