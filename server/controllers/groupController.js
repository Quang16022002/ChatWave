const User = require("../models/userModel");
const Group = require("../models/groupModel");

module.exports.createGroup = async (req, res, next) => {
  try {
    const { name, description, members, avatarImage } = req.body;
    const group = new Group({
      name,
      description,
      members,
      avatarImage,
      createdDate: new Date()
    });
    await group.save();
    res.json({ msg: "Group created successfully", group });
  } catch (ex) {
    next(ex);
  }
};


module.exports.sendGroupInvitation = async (req, res, next) => {
  try {
    const { senderId, receiverId, groupId } = req.body;

    const group = await Group.findById(groupId);

    if (!group) {
      return res.status(404).json({ msg: "Group not found" });
    }

    const isValidSender = group.members.includes(senderId);
    console.log('isValidSender', isValidSender);

    if (!isValidSender) {
      return res.status(400).json({ msg: "Sender is not a member of this group" });
    }

    const receiverUser = await User.findById(receiverId);

    if (!receiverUser) {
      return res.status(404).json({ msg: "Receiver not found" });
    }

    if (receiverUser.groupInvitations.includes(groupId)) {
      return res.status(400).json({ msg: "Group invitation already sent to this user" });
    }

    receiverUser.groupInvitations.push(groupId);
    await receiverUser.save();

    return res.json({ msg: "Group invitation sent" });

  } catch (ex) {
    next(ex);
  }
};

module.exports.acceptGroupInvitation = async (req, res, next) => {
  try {
    const { userId, groupId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ msg: "Group not found" });
    }

    if (!user.groupInvitations.includes(groupId)) {
      return res.status(400).json({ msg: "No group invitation found for this user" });
    }

    group.members.push(userId);
    await group.save();

    user.groupInvitations = user.groupInvitations.filter(invitation => invitation !== groupId);
    await user.save();

    return res.json({ msg: "Group invitation accepted" });

  } catch (ex) {
    next(ex);
  }
};

module.exports.declineGroupInvitation = async (req, res, next) => {
  try {
    const { userId, groupId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.groupInvitations = user.groupInvitations.filter(invitation => invitation !== groupId);
    await user.save();

    return res.json({ msg: "Group invitation declined" });

  } catch (ex) {
    next(ex);
  }
};
