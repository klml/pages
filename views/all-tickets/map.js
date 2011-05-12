function(doc) {
  if (doc.type == "ticket" && doc.state !=="archive" ) { 
    emit([
     doc.edit_at,
     doc._id,
     doc.ddate,
     doc.prio,
     doc.punct,
     doc.queue,
     doc.rel,
     doc.user 
    ], doc);
  };
};
