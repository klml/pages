function() {
  var   form = $(this),
        app = $$(form).app,
        f = form.serializeObject();
  
  //~  f.dent = f.markdown.replace (/(.*)\n.*/gi, '$1' ); // doubel to tite ToDo we cak kik it
  f.title = f.markdown.replace (/(.*)\n.*/gi, '$1' );  // dentline
  f.log = [{}]; // just to 'insert' these  prospective wikpages in the recent changes
  f.type = "ticket";
  f.edit_at = new Date();
  f.edit_by = $$("#profile").profile;
  app.db.saveDoc(f, {
    _id : f._id,   // das hier macht gar nix
    success : function() {
      $("#ticketer").trigger("_init");
    }
  })
  return false;
};
