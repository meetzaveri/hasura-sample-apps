import nodemailer from "nodemailer";

export const getUserId = async (req, res) => {
  try {
    console.log("req.body", req.body);

    return res.status(200).json({
      user_id: 2,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      id: 0,
      message: "Failure",
    });
  }
};
