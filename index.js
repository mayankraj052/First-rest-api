const express = require("express");
const app = express();
const port = 3000;

const users = require("./MOCK_DATA.json");

app.use(express.json());

app
  .route("/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
      // Update only the fields that are provided in the request body
      user.first_name = req.body.first_name || user.first_name;
      user.last_name = req.body.last_name || user.last_name;
      user.email = req.body.email || user.email;
      user.gender = req.body.gender || user.gender;
      user["Job Title"] = req.body["Job Title"] || user["Job Title"];

      return res.json({ message: "User updated successfully", user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  })

  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1); // to delete
      return res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });

app.post("/addUser", (req, res) => {
  const newUser = {
    id: users.length + 1, // Automatically assign new ID
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    "Job Title": req.body["Job Title"], // Ensure the case matches
  };
  users.push(newUser);
  return res.json({ message: "added sucessfully", newUser });
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
