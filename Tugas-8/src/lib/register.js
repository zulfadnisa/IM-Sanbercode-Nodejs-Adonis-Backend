import fs from 'fs'

const register = (name, password, role) => {
  const dataRegister = {
    name,
    password,
    role,
    isLogin: false,
  };
  var obj = [];
  var path = "./data.json"
  fs.readFile(__dirname + path, "utf8", (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      obj = JSON.parse(data);
      obj.push(dataRegister); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile(__dirname + path, json, "utf8", function (err) {
        if (err) {
          console.log(err.stack);
        }
      });
      console.log("berhasil register");
    }
  });
};
export default register;
