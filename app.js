const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); // Use `public` dir as default
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  // logs on server
  console.log(new Date(), "\nMETHOD:", req.method, "PATH:", req.path);
  next();
});

// GET

app.get("^/$|^/index(.html)?$", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("^/register(.html)?$", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});
app.get("^/login(.html)?$", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
app.get("^/searchid(.html)?$", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "searchId.html"));
});
app.get("^/searchpwd(.html)?$", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "searchPwd.html"));
});

const users = [
  {
    userName: "test user",
    userId: "test id",
    userEmail: "test@test.com",
    userPhone: "01012345678",
    userPwd: "test pwd",
  },
];

app.post("^/register(.html)?$", (req, res) => {
  const user = req.body;
  // console.log( user );
  const result = users.find(
    (data) => data.userId === user.userId && data.userEmail === user.userEmail,
  );
  console.log(result);

  let resdata = undefined;
  if (!result) {
    users.push(user);
    resdata = { success: true, message: "정상 등록되었습니다." };
  } else {
    resdata = { success: false, message: "이미 등록된 사용자입니다." };
  }
  console.log(users);
  res.send(resdata);
});

app.post("^/login(.html)?$", (req, res) => {
  const { userId, userPwd } = req.body;
  console.log(userId, userPwd);

  const result = users.find(
    (data) => data.userId === userId && data.userPwd === userPwd,
  );
  console.log(result);

  let resdata = undefined;
  if (result) {
    resdata = { success: true, message: result.userName };
  } else {
    resdata = { success: false, message: "아이디나 비밀번호를 확인하세요" };
  }

  console.log(users);
  res.send(resdata);
});

// 404

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.set("port", port);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log("====== server listening ====== PORT:", port);
});

module.exports = app;
