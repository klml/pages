function keycopy() {
     for (i=0 ; i<keys.length ; i++) {
         $('#ticketer.hottyper .' + keys[i] + ' input').val($('#wiki .' + keys[i] + ' input').val()) ;
      }
    $('#ticketer.hottyper .rel input').val($('#wiki ._id input').val()) ;
};