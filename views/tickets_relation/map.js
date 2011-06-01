function(doc) {
  if (doc.type == "ticket" ) { 
    emit( doc._id , doc);
  };
  if (doc.type == "ticket" && doc.rel ) { 
    emit( doc.rel , doc);
  };
};