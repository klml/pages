function() {

    var form = $(this),
        app = $$(form).app,
        f = form.serializeObject();
    
    var lines = f.markdown.split('\n');
    for (i=0 ; i<lines.length ; i++) {

        f._id =  lines[i].match(/(?:^|[\s\-])\S/g).join('').replace(/\s/g, ''); // abbr by regexp stolen to todoer aus autolemma
        f.title = lines[i] ;
        f.markdown = lines[i] ;
        
        f.log = [{}]; // just to 'insert' these  prospective wikpages in the recent changes
        f.type = "ticket";
        f.edit_at = new Date();
        f.edit_by = $$("#profile").profile;
        
        app.db.saveDoc(f, {   // TODO must use bulk!
            success : function() {
            var icheck = icheck + 1 ;
            }
        })
    }
  $("#todoer").trigger("_init");
  return false;
};
