const path = require("path");

const filepath =
  "/home/asplap3282/srini/NodeAndMongo/Error/fileerror/hello.txt";

const fs = require("fs");

fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) throw new Error("Something went wrong");
  console.log(data.toString());
});

try {
  const data = fs.readFileSync(
    path.join(__dirname, "files", "sample.txt"),
    "utf-8"
  );
  console.log(data);
} catch (err) {
  console.log("not my fault");
  console.log(err);
}
