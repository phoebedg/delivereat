const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

const storage = {
  menu: {
    1: {
      id: 1,
      name: "Prawn Crackers",
      price: 3.0,
      type: "starter"
    },
    2: {
      id: 2,
      name: "Chicken Satay",
      price: 7.25,
      type: "starter"
    },
    3: {
      id: 3,
      name: "Spring Rolls",
      price: 6.25,
      type: "starter"
    },
    4: {
      id: 4,
      name: "Pad Thai",
      price: 10.75,
      type: "main"
    },
    5: {
      id: 5,
      name: "Massaman Curry",
      price: 12.0,
      type: "main"
    },
    6: {
      id: 6,
      name: "Panang Curry",
      price: 11.75,
      type: "main"
    },
    7: {
      id: 7,
      name: "Jasmine Rice",
      price: 3.25,
      type: "side"
    },
    8: {
      id: 8,
      name: "Egg Fried Rice",
      price: 3.75,
      type: "side"
    },
    9: {
      id: 9,
      name: "Sticky Rice",
      price: 4.0,
      type: "side"
    }
  }
};

function getMenu(storage) {
  return storage.menu;
}

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/menu", function(req, res) {
  const menu = getMenu(storage);
  res.json(menu);
});

app.get("/menu/:menuItemId", function(req, res) {
  const menu = getMenu(storage);
  const item = menu[req.params.menuItemId];
  if (item) {
    return res.json(menu);
  } else {
    return res.status(404).json({ error: "item not found" });
  }
});

app.listen(8080, function() {
  console.log("Listening on port 8080");
});