function() {
  var row, ddoc = this,
    mustache = require("vendor/couchapp/lib/mustache"),
    markdown = require("vendor/couchapp/lib/markdown"),
    data = {
      title : "Alle Tickets mit toDo",
      site_title : this.couchapp.name,
      path : "/pages/todoer",
      tickets : [],
    };
  provides("html", function() {
    while (row = getRow()) {
      log(row);
      data.tickets.push(row.value)
    }
    send(mustache.to_html(ddoc.templates.todoer, data, ddoc.templates.partials));
  });
};
