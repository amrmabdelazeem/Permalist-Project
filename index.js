import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

let items = [];
let listTitle = "Daily";

app.get("/", async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM items INNER JOIN time_table ON time_id = time_table.id WHERE duration =$1 ORDER BY items.id ASC`,
      [listTitle]
    );
    items = result.rows;

    res.render("index.ejs", {
      listTitle,
      listItems: items,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
    const item = req.body.newItem;
    await db.query("INSERT INTO items (title) VALUES($1)", [item]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/edit", async (req, res) => {
  try {
    const itemId = req.body.updatedItemId;
    const itemTitle = req.body.updatedItemTitle;

    await db.query(`UPDATE items SET title = $1 WHERE id = $2`, [itemTitle, itemId]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  try {
    const itemId = req.body.deleteItemId;
    await db.query("DELETE FROM items WHERE id = $1", [itemId]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
