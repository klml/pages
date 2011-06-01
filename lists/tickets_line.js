function() {
  var row, ddoc = this,
    mustache = require("vendor/couchapp/lib/mustache"),
    markdown = require("vendor/couchapp/lib/markdown"),
    data = {
      title : "flache todos",
      site_title : this.couchapp.name,
      path : "/pages/todoer",
      tickets : [],
    };
  provides("html", function() {
    while (row = getRow()) {
      log(row);
      data.tickets.push(row.value)
    }
    send(mustache.to_html(ddoc.templates.tickets_line, data, ddoc.templates.partials));
  });
};
