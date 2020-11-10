const express = require("express");
const getFacilities = require("../controllers/getFacilities");
const authController = require("../controllers/authController");
const userContoller = require("../controllers/userController");
const router = express.Router();

router.route("/").get(authController.protect, getFacilities.getAllFacilities);

router.route("/login").post(authController.login);
router.route("/signup").post(authController.signup);
router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").patch(authController.resetPassword);
router.route(
  '/updateMyPassword').patch(
  authController.protect,
  authController.updatePassword)
;
router.route("/updateMe").patch(authController.protect,userContoller.updateMe);
router.route("/deleteMe").delete(authController.protect,userContoller.deleteMe);

module.exports = router;