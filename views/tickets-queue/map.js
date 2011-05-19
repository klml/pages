function(doc) {
  if (doc.type == "ticket" && doc.queue && doc.state !=="archive" ) { 
    emit( doc.queue, doc);
  };
};
