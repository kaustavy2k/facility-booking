const express = require("express");
const getFacilities = require("../controllers/getFacilities");
const authController = require("../controllers/authController");
const userContoller = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const router = express.Router();
//const app = express();
//const path = require("path");

router.route("/").get(authController.protect, getFacilities.getAllFacilities);

router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);
router.route("/signup").post(authController.signup);
router.route("/book").post(authController.protect, bookController.book);
router
  .route("/deleteBook")
  .post(authController.protect, bookController.deleteBook);
router.route("/show").get(authController.protect, bookController.show);
router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").patch(authController.resetPassword);
router
  .route("/updateMyPassword")
  .patch(authController.protect, authController.updatePassword);
router.route("/updateMe").patch(authController.protect, userContoller.updateMe);
router
  .route("/deleteMe")
  .delete(authController.protect, userContoller.deleteMe);


module.exports = router;
