import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  try {
    console.log("req", req);
    const { emailInput } = req.body.input;
    //const inputDomain = emailInput.from.split('@')[1]

    // Get the DKIM details from dailycloak
    // const dkimDetails = await client.request(GET_SES_DOMAIN, {
    //     domain: inputDomain,
    // })

    // if (dkimDetails.aws_ses.length === 0) {
    //     return res.status(400).json({
    //         success: false,
    //         message: `Domain ${inputDomain} is not registered. Cannot send emails.`,
    //     })
    // }

    // create nodemailer transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "meetzaveri96@gmail.com",
        pass: "password",
      },
    });
    // build and send the message
    const message = {
      from: emailInput.from,
      to: emailInput.to,
      subject: emailInput.subject,
      html: emailInput.html,
      attachments: "",
    };

    await transportEmail(transporter, message);
    // if (dkimDetails.aws_ses[0].isVerified === true) {
    //     await transportEmail(transport, message)
    // } else {
    //     throw new Error(
    //         `Domain - ${inputDomain} - is not verified. Cannot send emails.`
    //     )
    // }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const transportEmail = async (transporter, message) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};
