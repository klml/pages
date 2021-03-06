var opts = {};
if (document.location.pathname.indexOf("_design") == -1) {
// we are in a vhost
    opts.db = "pages";
    opts.design = "pages";
};

$.couch.app(function(app) {
  $(".date").prettyDate();
  $("#account").evently("account", app);
  var pr = app.ddoc.evently.profile.profileReady;
  pr.mustache = pr.all; // mod the template for this page
  $("#profile").evently("profile", app);
  $.evently.connect("#account","#profile", ["loggedIn","loggedOut"]);
  
  $(".new_page button").click(function(event) {  
        $(this).parent().evently("new_page", app);
  });
  $(".new_pages button").click(function(event) {  
        $(this).parent().evently("new_pages", app);
  });
}, opts);

$(".autosafe input").change(function () {
    safekeyline($("form.keyline input[name='_id']").val()); // safekeyline is in page.html
    //~ safetime = startsafetime ;
    //~ autosafe() ;
    //~ $("form.keyline .submit input").show('slow');
});

$('#header input[name="queue_get"]').autocomplete(queues, { // TODO
    matchContains: true,
    minChars: 0,
    max: 40,
    scrollHeight: 280,
}); 



// functions
function keyliner() {
        $("form.keyline .submit").show('slow');
        $("form.keyline input").removeAttr('readonly'); // wirklich auf alle?

        $('fieldset.prio div.rail').slider({
            min: 1, 
            max: 5, 
            step: 1,
            slide: function(event, ui) { 
                $('form.keyline input[name="prio"]').val(ui.value); //< uses numbers direct as value for prios
            } 
        });

        $('ul.selectable.puncts').append('<li>' + puncts.join("</li><li>") + '</li>');

        $("ul.selectable.puncts").selectable( {
        selected: function(event, ui) { 
            $('form.keyline input[name="punct"]').val($("ul.selectable.puncts .ui-selected").text() ) ;
            }
        });

        $('.new_page form input[name="state"]').autocomplete(states, { // TODO http://plugins.jquery.com/project/FlexBox http://plugins.jquery.com/project/DDComboBox
            matchContains: true,
            minChars: 0, //< combobox
            max: 40,
            scrollHeight: 280,
        }); 
        $('fieldset.state div.rail').slider({
            min: 0, 
            max: 5, 
            step: 1,
            slide: function(event, ui) { 
                $('form.keyline input[name="state"]').val(ui.value); //< sends numbers...
                nr2state(ui.value); //< ... these will "translated" in to ... will I burn in hell or is this ok?
            } 
        });
        $('form.keyline input[name="queue"]').autocomplete(queues, {
            matchContains: true,
            minChars: 0,
            max: 40,
            scrollHeight: 280,
        }); 
        $(".datepicker").datepicker({
            defaultDate: +7,
            dateFormat: 'yy-mm-dd',
            numberOfMonths: 2,
            showOtherMonths: true,
            selectOtherMonths: true,
            changeMonth: true,
            changeYear: true,
            showWeek: true,
            weekHeader: 'W',
            firstDay: 1,
            currentText: '  Heute',
            showButtonPanel: true 
        });

        $('form.keyline input[name="user"]').autocomplete(users, {
            matchContains: true,
            minChars: 0,
            max: 40,
            scrollHeight: 280,
        });
    };


function autosafe() { // evtl obsolet change
    $("form.keyline .submit input").val(safetime);
    safetime = safetime -1 ;
    if (safetime <= 0) { 
        safekeyline($("form.keyline input[name='_id']").val()); // safekeyline is in page.html
        //~ var safetime = 15; // should reset safetime
        return; 
    } ;
    setTimeout(autosafe,1000); 
};  

function nr2state(number) {
    if (number <= 5 ) { // 0-1 are readable stats, above this are percents, evtl resize to 10, I love this way of data typing ;)))
        state = states[number];
        $('form.keyline input[name="state"]').val(state); //< TODO  need a this 
        }
};
function autofillerswitch() {
    $("#prose").removeAttr("onkeyup");
    $("#ticketer p.warn").show("slow");
};
function autofiller(prose) {
   lines = prose.split('\n');

   if (lines[1]) {
      dentline = lines[0];
      var autolemma = dentline.match(/(?:^|[\s\-])\S/g).join('').replace(/\s/g, ''); // abbr by regexp stolen to todoer
      
      //~ var autolemma = ""; // to define as string 
      //~ dentlinewords = dentline.split(' '); 
      //~ for (i=0 ; i<dentlinewords.length ; i++) {
         //~ autolemma =  autolemma + dentlinewords[i][0] ;
      //~ }

      if (autolemma.length < 4 ) {  // if autolemma to short trigger size to .. toConfig!
            var date = new Date();
            autolemma = autolemma +  date. getFullYear() ; // year, month, second, random, counter, whatever toConfig! 
      }
      $('.new_page form.keyline input[name="_id"]').val(ticketprefix + autolemma);

      // dentline last word is the prio and punct(uation)) !!eins111elf!!!
      // $body_dueversion = "" . $task_details['due_in_version_name']; punct NULL
      var einself = dentline.replace(/.*\s(.*)$/g, '$1' ); 

      var prio = einself.match(/\!/g) ; // number of ! is the prio
      var priolength = "" ;
      if (prio) { priolength = prio.length };
      $('form[name="ticketer"] input[name="prio"]').val(priolength) ;
      $('form[name="ticketer"] input[name="prio"]').addClass('prio_' + priolength ) ;

      var punct = new Array( einself.match(/\?/) , einself.match(/fyi/i) , einself.match(/idee/i) ) ;  // TODO das muss auf glob puncts gehen
      var puncts = punct.join("") ;
      $('form[name="ticketer"] input[name="punct"]').val(puncts) ;

      var user = prose.match(/@.*?\s/g) ;
      var users = user.join("") ;
       //~ var users = prose.replace(/\@([\w\-]+)/g); // would be better  TODO
      $('form[name="ticketer"] input[name="user"]').val(users) ;
      
   }
};