function(view) {
    linkup = $$("#wiki").app.require("vendor/couchapp/lib/linkup");
  return {
    _id : $$("#wiki").docid,
    title : $$("#wiki").title,
    rev :  $$("#wiki").rev,
    // notzp
    type :  $$("#wiki").type,
    prio :  $$("#wiki").prio,
    state :  $$("#wiki").state,
    punct :  $$("#wiki").punct,
    queue :  $$("#wiki").queue,
    user :  $$("#wiki").user,
    duedate :  $$("#wiki").duedate,

    types :  $$("#wiki").types,
    prios :  $$("#wiki").prios,
    states :  $$("#wiki").states,
    puncts :  $$("#wiki").puncts,
    queues :  $$("#wiki").queues,
    users :  $$("#wiki").users,
  } 
};
