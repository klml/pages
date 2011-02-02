function() {
  var form = $(this), app = $$(form).app,
    f = form.serializeObject();
  function saveDoc(doc) {
    //~ doc._id = doc.id ;
    //~ doc.title = f.title ; // title;
    doc.type = f.type ; 

    doc.prio  = f.prio  ;
    doc.punct = f.punct ;
    doc.state = f.state ;
    doc.queue = f.queue ;
    doc.ddate = f.ddate ;
    doc.user = f.user ;

    doc.edit_at = new Date();
    doc.edit_by = $$("#profile").profile || {};
    doc.log = doc.log || [];
    doc.log.push({
      prev_rev : f.rev,
      rev_num : (parseInt(f.rev.split("-")[0]) + 1) || 1,
      edit_name : doc.edit_by.name,
      edit_at : doc.edit_at
    });
    app.db.saveDoc(doc, {
      success : function() {
        window.location = window.location.pathname;
      }
    });    
  };

    app.db.openDoc(f._id, {
      success : function(doc) {
        doc._rev = f.rev ;
        saveDoc(doc);
      }
    }); 

  
  return false;
};
