function(doc) {
  if (doc.type == "ticket" && doc.punct && doc.state !=="archive" ) { 
    emit([
     doc.punct,
     doc.prio,
     doc.ddate,
     doc.queue,
     doc.user 
    ], doc);
  };
};
