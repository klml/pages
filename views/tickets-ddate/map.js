function(doc) {
  if (doc.type == "ticket" && doc.ddate && doc.state !=="archive" ) { 
    emit([
     doc.ddate,
     doc.prio,
     doc.queue,
     doc.punct,
     doc.user 
    ], doc);
  };
};
