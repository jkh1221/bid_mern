const sql = require("./db.js");

// constructor
const Category = function(category) {
  this.email = category.email;
  this.name = category.name;
  this.active = category.active;
};

Category.getAll = result => {
  sql.query("select id, name, inActive_image, Active_image from auctions_categories where status='1' AND parent_category='0' order by name", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Category;