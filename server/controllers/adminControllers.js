const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

exports.createNewAdmin = async (req, res, next) => {
  try {
    let { username, email } = req.body;
    let [takenUsername, _] = await Admin.findByUsername(username);
    let [takenEmail, __] = await Admin.findByEmail(email);

    if (takenUsername.length > 0) {
      res.status(200).json({ message: "Username has already been taken." });
    } else if (takenEmail.length > 0) {
      res.status(200).json({ message: "Email has already been taken." });
    } else {
      //encryption
      let password = await bcrypt.hash(req.body.password, 10);

      let admin = new Admin(username, password, email);
      admin = await admin.save();
      res.status(201).json({ message: "admin created.", admin });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAllAdmin = async (req, res, next) => {
  try {
    const [admin, _] = await Admin.findAll();

    res.status(200).json({ count: admin.length, admin });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAdminByUsername = async (req, res, next) => {
  try {
    let { username } = req.body;

    let [admin, _] = await Admin.findByUsername(username);

    res.status(200).json({ count: admin.length, admin });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteAdminByUsername = async (req, res, next) => {
  try {
    let { username } = req.body;

    let [admin, _] = await Admin.deleteByUsername(username);

    res.status(200).json({ message: "admin deleted.", admin });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateAdminPasswordByUsername = async (req, res, next) => {
  try {
    let { username, password } = req.body;

    let [admin, _] = await Admin.updatePasswordByUsername(username, password);

    res.status(200).json({ admin });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.findAdminManagementByAdminUsername = async (req, res, next) => {
  try {
    let { admin_username } = req.body;

    let [adminCommunities, _] = await Admin.findManagementByAdminUsername(
      admin_username
    );

    res.status(200).json({ adminCommunities });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.addAdminManagementByAdminUsernameCommunity = async (req, res, next) => {
  try {
    let { admin_username, community } = req.body;

    let [newManagement, _] = await Admin.addManagementByAdminUsernameCommunity(
      admin_username,
      community
    );

    res.status(201).json({ message: "management created.", newManagement });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.deleteAdminManagementByUsername = async (req, res, next) => {
  try {
    let { admin_username, community_name } = req.body;

    let [management, _] = await Admin.deleteManagementByAdminUsernameCommunity(
      admin_username,
      community_name
    );

    res.status(200).json({ message: "admin deleted.", management });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
