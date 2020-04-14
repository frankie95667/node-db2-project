
exports.up = function(knex) {
    return knex.schema.table("cars", tbl => {
        tbl.dropColumn("title_status");
    }).table("cars", tbl => {
        tbl.string("title_status", 128).defaultTo("clean");
    })
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
      tbl.dropColumn("title_status");
  }).table("cars", tbl => {
      tbl.string("title_status");
  })
};
