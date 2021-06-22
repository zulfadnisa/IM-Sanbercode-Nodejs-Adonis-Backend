import fs from "fs";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/register", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) console.log(err);
    let existingData = JSON.parse(data);
    let employee = req.body;
    employee["isLogin"] = false;
    existingData.push(employee);
    fs.writeFile("data.json", JSON.stringify(existingData), (err) => {
      if (err) console.log(err);
    });
    res.send({
      message: "Berhasil register",
    });
  });
});
app.get("/karyawan", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) console.log(err);
    let current = JSON.parse(data);
    res.send({
      message: "Berhasil get karyawan",
      data: current,
    });
  });
});
app.post("/login", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) console.log(err);
    let current = JSON.parse(data);
    var status = false;
    for (let check of current) {
      if (check.name == req.body.name && check.password == req.body.password) {
        check["isLogin"] = true;
        status = true;
      }
    }
    if (status === true) {
      fs.writeFile("data.json", JSON.stringify(current), (err) => {
        if (err) console.log(err);
      });
      res.send({
        message: "Berhasil login",
      });
    }
  });
});
app.post("/karyawan/:name/siswa", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) console.log(err);
    let current = JSON.parse(data);
    var name = req.params.name;
    var find = false;
    var empty = true;
    var status = false
    for (let prop of current) {
      if (prop["role"] == "admin" && prop["isLogin"] == true) {
        for (let check of current){
          if (check.name == name && check["role"] == "trainer") {
            for (let prop in check) {
              if (prop == "students") {
                empty = false;
              }
            }
            if (empty == true) {
              check["students"] = [req.body];
            } else {
              check["students"].push(req.body);
            }
            find = true;
          }
        }
        status = true
        break;
      }
    }
    if (status == true&& find==true) {
      fs.writeFile("data.json", JSON.stringify(current), (err) => {
        if (err) console.log(err);
      });
      res.send({
        message: "Berhasil add siswa",
      });
    }else if(status=false){
      res.send({
        message: "Admin belum login",
      });
    }else{
      res.send({
        message: "Data trainer tidak ditemukan",
      });
    }
  });
});
app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
