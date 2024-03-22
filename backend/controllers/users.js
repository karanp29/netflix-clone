import { userModel } from "../models/users";

const loginUser = (req, res) => {
  res.status(200).send({
    message: "success",
    token: "",
  });
};

const registerUser = (req, res) => {
  const user = new userModel({
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).send({
    message: "created",
    token: "",
  });
};

export { loginUser, registerUser };
