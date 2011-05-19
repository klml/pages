function(doc) {
  if (doc.type == "ticket" && doc.prio && doc.state !=="archive" ) { 
    emit([
     doc.prio,
     doc.ddate,
     doc.queue,
     doc.punct,
     doc.user 
    ], doc);
  };
};
