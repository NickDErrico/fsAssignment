 var fs = require('fs');

 //challenge 1
 // fs.readFile('./challenge1/info.txt', 'utf-8', (err, data) => {
 //   if (err) {
 //     throw err;
 //   }
 //   console.log(data);
 // })

 //challenge 2
 // let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
 // names = names + ' Carlos, Jennifer, Nick, Nick & Troy '
 // fs.writeFileSync('./challenge2/info.txt', names)

 //challenge 3
 // fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', function(err) {
 //   if (err) {
 //     console.log(err);
 //   }
 // })

 //challenge 4
 // fs.mkdirSync('./challenge4/copyfolder')
 // fs.copyFile('./challenge4/info.txt', './challenge4/copyfolder/info.txt', function(err) {
 //   if (err) {
 //     throw err;
 //   }
 // })

 //challenge 5

 // function updateFile() {
 //   let origFile = fs.readFileSync('./challenge5/info.txt', 'utf-8')
 //   let newFile = " ";
 //   for (let i = 0; i < origFile.length; i++) {
 //     if (origFile[i] === '-') {
 //       newFile += " "
 //     } else {
 //       newFile += origFile[i]
 //     }
 //   }
 //   fs.writeFileSync('./challenge5/info.txt', newFile)
 // }
 //
 // updateFile()

 //challenge 6
 function findTxtFiles() {
   let allTxtFiles;
   let allFiles = fs.readdirSync('./')
   for (let i = 0; i < allFiles.length; i++) {
     console.log(allFiles[i]);
     let folderFiles = fs.readdirSync('./', allFiles[i])
     console.log(folderFiles);
   }
 }
 }

 findTxtFiles()