function keycopy() {
     for (i=0 ; i<keys.length ; i++) {
        $(this).closest('.content').find('.new_page form.keyline fieldset.' + keys[i] + ' input').val($(this).closest('.content').find('.exist fieldset.' + keys[i] + ' input').val()) ;
      }
    $(this).closest('.content').find('.new_page form.keyline fieldset.rel input').val($(this).closest('.content').find('.exist fieldset._id input').val()) ;
};