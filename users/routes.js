import * as dao from "./dao.js";
function UserRoutes(app) {
  const getCurrentUser = async (req, res) => {};

  const createUser = async (req, res) => {
    console.log("Received DOB:", req.body.dob);
    req.body.dob = req.body.dob
      ? new Date(req.body.dob + "T00:00:00Z").toISOString()
      : null;
    console.log("Converted DOB:", req.body.dob);
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const dateObject = new Date(req.body.dob);
    console.log("Received DOB:", req.body.dob);
    if (!isNaN(dateObject.getTime())) {
      req.body.dob = dateObject.toISOString();
      console.log("Converted DOB:", req.body.dob);
      const { userId } = req.params;
      const status = await dao.updateUser(userId, req.body);
      const currentUser = await dao.findUserById(userId);
      currentUser.dob = currentUser.dob
        ? new Date(currentUser.dob).toLocaleDateString()
        : null;
      req.session["currentUser"] = currentUser;

      res.json(status);
    }
  };
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      return res.status(400).json({ message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    return res.json(currentUser);
  };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (!currentUser) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };
  const account = async (req, res) => {
    res.json(req.session["currentUser"]);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
  app.get("/api/user", getCurrentUser);
}
export default UserRoutes;
