import fs from 'fs'

const addSiswa = (student, trainer) => {
  var obj = [];
  var path = "./data.json";
  fs.readFile(__dirname + path, "utf8", (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      obj = JSON.parse(data);
      var isStatus = false;
      obj.forEach((el) => {
        if (el.role == "admin" && el.isLogin === true) {
          isStatus = true;
        }
      });
      if (isStatus) {
        obj.forEach((el) => {
          if (el.role === "trainer" && el.name == trainer) {
            el.students.push({ name: student });
          } else {
            const newData = {
              name: trainer,
              password: el.password,
              role: "trainer",
              isLogin: false,
              students: [{ name: student }],
            };
            obj.push(newData)
          }
        });
      }
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
export default addSiswa;
