const fs = require("fs");

//challenge 1

// fs.readFile("./challenge1/info.txt", "utf8", (data, err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//
// let file = fs.readFileSync("./challenge1/info.txt", "utf8");
//
// console.log(file);

//challenge 2

// let names = ["Nick", "Marcus", "Dennis", "Greg"];
//
// fs.appendFile("./challenge2/info.txt", names, (data, err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//
// fs.appendFileSync("./challenge2/info.txt", names);

//challenge 3

// fs.rename("./challenge3/binfo.txt", "./challenge3/info.txt", (data, err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//
// fs.renameSync("./challenge3/binfo.txt", "./challenge3/info.txt");

//challenge 4

// fs.mkdir("./challenge4/copyfolder", (data, err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.copyFile(
//       "./challenge4/info.txt",
//       "./challenge4/copyfolder/myCopy.txt",
//       (data, err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       }
//     );
//   }
// });

//challenge 5

let data = fs.readFileSync("./challenge5/info.txt", "utf8");
let newData = "";
for (let i = 0; i < data.length; i++) {
  if (data[i] === "-") {
    newData += " ";
  } else {
    newData += data[i];
  }
}

fs.writeFileSync("./challenge5/info.txt", newData);

//challenge 6

let files;
fs.readdir("./challenge6/", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let txtFiles = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].substring(data[i].length - 4) === ".txt") {
        txtFiles.push(data[i]);
      }
    }
    console.log(txtFiles);
  }
});
