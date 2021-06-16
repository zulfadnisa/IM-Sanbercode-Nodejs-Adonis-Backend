import fs from 'fs'

const readData = () => {
  const path = "./data.json";
  fs.readFile(__dirname + path, "utf8", (err, data) => {
    if (err) {
      console.log(err.stack);
    } 
    else {
      obj = JSON.parse(data);
      console.log(obj);
    }
  });
};

export default readData;
