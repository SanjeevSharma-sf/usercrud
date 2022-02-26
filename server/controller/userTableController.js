const UserDetail = require("../model/userModel");
const catchAsyncErrors = require("../config/catchAsyncErrors");
//create new user
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  if (!req.body) {
    res
      .status(400)
      .json({ sucess: false, message: "Content can not be empty" });

    return;
  }
  const { name, email, gender, status } = req.body;
  
  try {
    const user = await UserDetail.create({
      name,
      email,
      gender,
      status,
    });
    // res.status(201).json({
    //   success: true,
    //   user,
    // });
    res.redirect("/add-user");
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message || "Some error occured while creating a create operation",
    });
  }
});

//retrieve and return all users
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    if (req.query.id) {
        const id = req.query.id;
        try {
          const user = await UserDetail.findById(id);
          res.status(200).json({
            success: true,
            user,
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message:
              error.message ||
              "Some error occured while retreiving user from database",
          });
        }
      } else {
        try {
          const users = await UserDetail.find();
          res.status(200).json({
            success: true,
            users,
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message:
              error.message ||
              "Some error occured while retreiving user from database",
          });
        }
      }
    });

//get single user
// exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
//   if (req.query.id) {
//     const id = req.query.id;
//     try {
//       const user = await UserDetail.findById(id);
//       res.status(200).json({
//         success: true,
//         user,
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message:
//           error.message ||
//           "Some error occured while retreiving user from database",
//       });
//     }
//   } else {
//     try {
//       const users = await UserDetail.find();
//       res.status(200).json({
//         success: true,
//         users,
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message:
//           error.message ||
//           "Some error occured while retreiving user from database",
//       });
//     }
//   }
// });

//update a user by id
exports.updateSingleUser = catchAsyncErrors(async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Data to update can not be empty",
    });
  }
  try {
    let user = await UserDetail.findById(req.params.id);
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User not found",
      });
    }
    user = await UserDetail.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error Update user information",
    });
  }
});

//Delete single user by id
exports.deleteSingleUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await UserDetail.findById(req.params.id);
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User not found",
      });
    }
    await user.remove();
    res.status(200).json({
      succes: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error deleting user information",
    });
  }
});
