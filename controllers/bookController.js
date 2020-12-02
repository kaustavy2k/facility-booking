const book = require("../models/book");
const sendEmail = require("../utils/email");
exports.book = async (req, res) => {
  try {
    data = {
      id: req.user.id,
      name: req.user.name,
      type: req.body.type,
      time: req.body.time,
    };
    const newbook = await book.create(data);
    await sendEmail({
      email: req.user.email,
      subject: "Booking Confirmation",
      message: `Your booking for ${data.type} is confirmed on ${data.time}`,
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
exports.show = async (req, res) => {
  try {
    const bookings = await book.find({ id: req.user.id });
    if (bookings.length != 0) {
      res.status(200).json({
        message: "your bookings",
        bookings: bookings,
        bookedmsg: "Bookings done",
      });
    } else {
      res.status(200).json({
        message: "your bookings",
        bookings: [],
        bookedmsg: "You dont have any current bookings!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err,
    });
  }
};
exports.deleteBook = async (req, res) => {
  try {
    const delbook = await book.findOneAndDelete({ _id: req.body._id });
    await sendEmail({
      email: req.user.email,
      subject: "Booking Deletion",
      message: `Your booking for ${delbook.type} on ${delbook.time} is caccelled`,
    });
    const bookings = await book.find({ id: req.user.id });
    if (bookings.length != 0) {
      res.status(200).json({
        message: "your bookings",
        bookings: bookings,
        bookedmsg: "Bookings done",
      });
    } else {
    res.status(200).json({
      message: "your bookings",
      bookings: [],
      bookedmsg: "You dont have any current bookings!",
      delbook
      
    });
    }
  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err,
    });
  }
};
