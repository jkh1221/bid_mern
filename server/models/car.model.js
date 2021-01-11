const sql = require("./db.js");
const moment = require('moment');

// constructor
const Car = function(car) {
};

Car.getCarousel = result => {
  const todays_dateTime = moment().format('YYYY-MM-DD hh:mm:ss');
  const query_string = `
    SELECT id, name, featured_image, listing_price, price_on_request, country_id, until_removed_manually, start_end 
    FROM auctions 
    WHERE (STATUS>3 OR STATUS<7) 
    AND parent_category=4 
    AND start_date<='${todays_dateTime}' 
    AND (start_end>='${todays_dateTime}' OR until_removed_manually='2') 
    AND (private_item='1' OR (private_item='2' AND open_for_public_for_time='2' AND open_public_start_date<='${todays_dateTime}' AND open_public_start_end>='${todays_dateTime}') OR (private_item='2' AND '$user_email'!='' AND ('$user_email' IN (list_of_customers_emails)))) 
    AND (1 NOT IN (restricted_countries)) 
    ORDER BY premuim_item DESC, dateTimeAdded DESC
    LIMIT 0, 4`;
  sql.query(query_string, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Car.getList = result => {
  const todays_dateTime = moment().format('YYYY-MM-DD hh:mm:ss');
  const query_string = `
    SELECT t1.id, t1.name, featured_image, listing_price, price_on_request, country_id, until_removed_manually, start_end, flag_img 
    FROM auctions t1 
    LEFT JOIN locations ON locations.id = t1.country_id 
    WHERE (STATUS>3 OR STATUS<7) 
    AND parent_category=4 
    AND start_date<='${todays_dateTime}' 
    AND (start_end>='${todays_dateTime}' OR until_removed_manually='2') 
    AND (private_item='1' OR (private_item='2' AND open_for_public_for_time='2' AND open_public_start_date<='${todays_dateTime}' AND open_public_start_end>='${todays_dateTime}') OR (private_item='2' AND '$user_email'!='' AND ('$user_email' IN (list_of_customers_emails)))) 
    AND (1 NOT IN (restricted_countries)) 
    ORDER BY premuim_item DESC, dateTimeAdded DESC
    LIMIT 0, 12`;
  sql.query(query_string, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Car.getYears = result => {
  const query_string = "select id, name from auctions_categories_fitlers_items where status='1' AND filter_id='3' order by name";
  sql.query(query_string, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
}

Car.getFilter0 = result => {
  const query_string = `SELECT id, name, on_main_page 
      FROM auctions_categories_fitlers 
      WHERE parent_filter='0' AND STATUS='1' AND on_main_page='2' 
      AND (id IN (SELECT filter_id FROM auctions_filters_category_relation WHERE auction_id='4')) 
      AND id!='3' 
      ORDER BY filter_order_main_page`;
  sql.query(query_string, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
}

Car.getFilters = result => {
  const query_string = `SELECT id, name FROM auctions_categories_fitlers_items WHERE STATUS='1' AND filter_id='1' ORDER BY NAME DESC`;
  sql.query(query_string, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
}

module.exports = Car;