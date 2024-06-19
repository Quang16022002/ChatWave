const express = require("express");
const router = express.Router();
const GroupController = require("../controllers/groupController");


router.post("/create", GroupController.createGroup);
router.post("/decline", GroupController.declineGroupInvitation);
router.post("/accept", GroupController.acceptGroupInvitation);
router.post("/sent", GroupController.sendGroupInvitation);


module.exports = router;
