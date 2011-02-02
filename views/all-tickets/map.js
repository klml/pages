function(doc) {
  if (doc.type == "ticket" && doc.state !=="archive" ) { 
    emit([ doc.edit_at, doc._id], doc);
  };
};
