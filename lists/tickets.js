function() {
  var row, ddoc = this,
    mustache = require("vendor/couchapp/lib/mustache"),
    markdown = require("vendor/couchapp/lib/markdown"),
    data = {
      title : "Alle Tickets",
      site_title : this.couchapp.name,
      path : "/pages/tickets",
      tickets : []
    };
  provides("html", function() {
    while (row = getRow()) {
      log(row);
      data.tickets.push(row.value)
    }
    send(mustache.to_html(ddoc.templates.tickets, data, ddoc.templates.partials));
  });
};
