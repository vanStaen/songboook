const { User } = require("../../models/User");
const checkUsernameforbidden = require("../../helpers/checkUsernameforbidden");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { mailService } = require("./mailService");

exports.userService = {
  async getUsers() {
    return await User.findAll({
      order: [
        ["id", "ASC"],
        ["last_login", "DESC"],
      ],
    });
  },

  async getUser(userId) {
    return await User.findAll({
      where: {
        id: userId,
      },
    });
  },

  async addUser(input) {
    const foundUserEmail = await User.findOne({
      where: {
        email: input.email,
      },
    });
    if (foundUserEmail) {
      throw new Error("This email is already associated with an account.");
    }
    const foundUserUsername = await User.findOne({
      where: {
        username: input.username,
      },
    });
    if (foundUserUsername) {
      throw new Error("This username is already associated with an account.");
    }

    try {
      hashedPassword = await bcrypt.hash(input.pwd, 12);
      const user = new User({
        username: input.username,
        language: input.language,
        email: input.email,
        pwd: hashedPassword,
      });
      return await user.save();
    } catch (err) {
      console.log(err);
    }
  },

  async updateUser(userId, data) {
    const updateFields = [];
    const updatableFields = [
      "avatar",
      "username",
      "emailSettings",
      "profilSettings",
      "language",
      "active",
    ];
    updatableFields.forEach((field) => {
      if (field in data.input) {
        updateFields[field] = data.input[field];
      }
    });
    if (data.input.password) {
      updateFields.password = await bcrypt.hash(data.input.password, 12);
    }
    try {
      const updatedUser = await User.update(updateFields, {
        where: {
          id: userId,
        },
        returning: true,
        plain: true,
      });
      // updatedUser[0]: number or row udpated
      // updatedUser[1]: rows updated
      return updatedUser[1];
    } catch (err) {
      console.log(err);
    }
  },

  async deleteUser(args, req) {
    if (!req.isAuth) {
      throw new Error("Unauthorized!");
    }
    await User.destroy({
      where: {
        id: req.userId,
      },
    });
    req.session = null;
    return true;
  },

  async taken(username) {
    foundUser = await User.findOne({
      where: { username: username },
    });
    if (foundUser) {
      return true;
    }
    if (checkUsernameforbidden(username)) {
      return true;
    }
    return false;
  },

  async email(email) {
    foundUser = await User.findOne({
      where: { email: email },
    });
    if (!foundUser) {
      return false;
    } else {
      return true;
    }
  },

  async changepassword(token, password) {
    try {
      decodedToken = jsonwebtoken.verify(
        token,
        process.env.AUTH_SECRET_KEY_RECOVERY
      );
      const email = decodedToken.email;
      const hashedPassword = await bcrypt.hash(password, 12);
      await User.update(
        { pwd: hashedPassword },
        {
          where: {
            email: email,
          },
          returning: true,
          plain: true,
        }
      );
      return true;
    } catch (err) {
      return false;
    }
  },

  async emailverified(token) {
    try {
      decodedToken = jsonwebtoken.verify(
        token,
        process.env.AUTH_SECRET_KEY_EMAILVERIFY
      );
      const email = decodedToken.email;
      await User.update(
        { verifiedEmail: true },
        {
          where: {
            email: email,
          },
          returning: true,
          plain: true,
        }
      );
      // Send a mail to admin
      await mailService.mail(
        process.env.ADMIN_EMAIL,
        "Songboook | New User's email validated!",
        `The following email has just been validated: ${email}`
      );
      return true;
    } catch (err) {
      return false;
    }
  },

  async validtoken(token) {
    try {
      decodedToken = jsonwebtoken.verify(
        token,
        process.env.AUTH_SECRET_KEY_RECOVERY
      );
    } catch (err) {
      return false;
    }
    return true;
  },
};
