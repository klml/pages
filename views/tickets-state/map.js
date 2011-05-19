function(doc) {
  if (doc.type == "ticket" && doc.state && doc.state !=="archive" ) { 
    emit([
     doc.state,
     doc.prio,
     doc.ddate,
     doc.queue,
     doc.punct,
     doc.user 
    ], doc);
  };
};
