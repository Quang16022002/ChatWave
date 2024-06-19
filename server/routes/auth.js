const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
  getDetailUsers,
  sendFriendRequest, 
  acceptFriendRequest, 
  rejectFriendRequest 
} = require("../controllers/userController");

const { 
  sendGroupInvitation, 
  acceptGroupInvitation, 
  declineGroupInvitation 
} = require("../controllers/groupController");
const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.get("/detailUsers/:id", getDetailUsers);

router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);
router.post("/sendFriendRequest", sendFriendRequest); 
router.post("/acceptFriendRequest", acceptFriendRequest); 
router.post("/rejectFriendRequest", rejectFriendRequest); 
router.post("/sendGroupInvitation", sendGroupInvitation); 
router.post("/acceptGroupInvitation", acceptGroupInvitation);
router.post("/declineGroupInvitation", declineGroupInvitation); 


module.exports = router;
