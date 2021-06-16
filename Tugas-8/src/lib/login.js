import fs from 'fs'

const login = (name, password) => {
  const path = "./data.json";
  fs.readFile(__dirname + path, "utf8", (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      obj = JSON.parse(data);
      obj.forEach((el) => {
        if (el.name == name && el.password == password) {
          el.isLogin = true;
        }else{
          console.log('name and password not found.')
        }
      });
      json = JSON.stringify(obj);
      fs.writeFile(__dirname + path, json, "utf8", function (err) {
        if (err) {
          console.log(err.stack);
        }
      });
      console.log('berhasil login')
    }
  });
};
export default login;
