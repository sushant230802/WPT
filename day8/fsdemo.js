var fs = require('fs');
const readline = require("readline");
console.log("File Read Operation Started");
fs.readFile("./cdac.txt", function (err, data) {
  console.log(data.toString());
});
const fstream = fs.createReadStream("./cdac.txt");
fstream.on("data", (	)=>{
const rl = readline.createInterface({
  input: fstream,
  crlfDelay: Infinity,
});
});

for (const line of rl) {
  // Each line in input.txt will be successively available here as `line`.
  console.log(`Line from file: ${line}`);
}
console.log("End of Read Operation");
// fs.readFile('./cdac.txt', function(err, data) {
//     if (err) throw err;
//     console.log(data);
//   });

// fs.appendFile("./cdac.txt", "New DATA", function (err, data) {
//     if (err) throw err;
//     console.log("File saved!");
//   });

  