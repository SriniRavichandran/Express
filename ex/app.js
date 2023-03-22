const express = require("express");
const app = express();

const bodyparse = require("body-parser");

const exhbs = require("express-handlebars");

const dbo = require("./db");
const { ObjectId } = require("mongodb");
app.engine(
  "hbs",
  exhbs.engine({ layoutsDir: "views/", defaultLayout: "main", extname: "hbs" })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyparse.urlencoded());

app.get("/", async (req, res) => {
  let database = await dbo.getDatabase();
  const collection = database.collection("books");
  const cursor = collection.find({});

  let book = await cursor.toArray();

  let message = "";
  let edit_id, edit_book;

  if (req.query.edit_id) {
    edit_id = req.query.edit_id;
    console.log("++" + edit_id);
    const myid = new ObjectId(edit_id);
    edit_book = await collection.findOne({ _id: myid });
    console.log("new book " + edit_book.title, edit_book.author);
  }

  if (req.query.delete_id) {
    console.log(req.query.delete_id);
    const myid = new ObjectId(req.query.delete_id);
    console.log(myid);
    await collection.deleteOne({ _id: myid });
    return res.redirect("/?status=3");
  }

  switch (req.query.status) {
    case "1":
      message = "Inserted success";
      break;

    case "2":
      message = "update success";
      break;

    case "3":
      message = "delete success";
      break;

    default:
      break;
  }
  console.log(edit_book);
  res.render("main", { message, book, edit_id, edit_book });
});

app.post("/store_book", async (req, res) => {
  let database = await dbo.getDatabase();
  const collection = database.collection("books");
  let book = { title: req.body.title, author: req.body.author };
  await collection.insertOne(book);
  return res.redirect("/?status=1");
});

app.post("/Update_book/:edit_id", async (req, res) => {
  let database = await dbo.getDatabase();
  const collection = database.collection("books");
  let book = { title: req.body.title, author: req.body.author };

  const myid = new ObjectId(req.params.edit_id);
  await collection.updateOne({ _id: myid }, { $set: book });
  return res.redirect("/?status=2");
});

app.listen(8000, () => {
  console.log("listening :" + "http://localhost:" + 8000);
});
