const book = require("../models/book");
const sendEmail = require("../utils/email");
exports.book = async (req, res) => {
  try {
    data = {
      name: req.user.name,
      type: req.body.type,
      time: req.body.time,
    };
    const newbook = await book.create(data);
    await sendEmail({
      email: req.user.email,
      subject: "Booking Confirmation",
      message:`Your booking for ${data.type} is confirmed on ${data.time}`,
    });
    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err,
    });
  }
};
