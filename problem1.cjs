const fs = require("fs");

//const dirPath ='./CreatedDir';
function checkDirExists(dirPath) {
  if (fs.existsSync(dirPath)) {
    console.log("The directory exists");
    createFiles(dirPath);
  } else {
    // console.log('The directory does NOT exist');
    fs.mkdir(dirPath, (err) => {
      if (err) {
        console.log(err);
      }
      createFiles(dirPath);
    });
  }
}
function createFiles(dirPath) {
  console.log(dirPath);
  const num = Math.floor(Math.random() * 10 + 1);
  //console.log(num);
  for (let i = 0; i < num; i++) {
    let filePath = dirPath + "/" + "file" + i + ".json";
    fs.writeFile(filePath, " ", (error, dat) => {
      if (error) {
        console.log(error);
      } else {
        console.log("file Created");
        deleteFiles(filePath);
      }
    });
  }
}
function deleteFiles(filePath) {
  fs.unlink(filePath, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(" file deleted  succesfully");
    }
  });
}
module.exports = checkDirExists;
