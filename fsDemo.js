
import fs from "fs/promises";
// fs.readfile() --> to read the file asynchronously
// fs.readFileSync() --> to read a file synchronously
// import fs from 'fs';

// fs.readFile('./test.txt', 'utf8',(err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);
// fs.readFile('./test.txt', 'utf8') // readfile --> with promise & then
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//WriteFile
const WriteFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello I am Dibbojit Das Joy");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};
// append file
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\n This is a appended text");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};
WriteFile();
appendFile();
readFile();
