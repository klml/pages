function(doc) {
  if (doc.type == "ticket" && doc.user && doc.state !=="archive" ) { 
    emit( doc.user , doc);
  };
};
