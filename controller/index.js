const User = require("../models/user");

async function getAllUsers(req, res) {
  const users = await User.find({});
  const html = `<ul> 
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>`;
  res.setHeader("X-MyName", "Suresh Krishna");
  return res.send(html);
}

async function getUserById(req, res) {
  const id = req.params.id;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(user);
}

async function getUserByIdAndUpdate(req, res) {
  const id = req.params.id;
  await User.findByIdAndUpdate(id, { first_name: "Updated" });
  return res.status(201).json({ message: "User Updated" });
}

async function getUserByIdAndDelete(req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);

  return res.status(201).json({ message: `User ${id} deleted` });
}

async function createUser(req, res) {
  const body = req.body;

  if (!body.first_name || !body.last_name || !body.email || !body.job_title) {
    return res.status(400).json({ message: "All fields are required !!" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    job_title: body.job_title,
  });

  console.log(result);

  return res.status(201).json({ message: "Success" });
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByIdAndUpdate,
  getUserByIdAndDelete,
  createUser,
};
