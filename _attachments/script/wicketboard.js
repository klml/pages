var opts = {};
if (document.location.pathname.indexOf("_design") == -1) {
// we are in a vhost
    opts.db = "pages";
    opts.design = "pages";
};


  $(".keyline").click(function(event) {
      
        $("form.keyline input").removeAttr("readonly"); // wirklich auf alle?

        $('fieldset.prio div.rail').slider({
            min: 1, 
            max: 5, 
            step: 1,
            slide: function(event, ui) { 
                $('[name="prio"]').val(ui.value); //< uses numbers direct as value for prios
            } 
        });

        $('ul.selectable.puncts').append('<li>' + puncts.join("</li><li>") + '</li>');

        $("ul.selectable.puncts").selectable( {
        selected: function(event, ui) { 
            $('[name="punct"]').val($("ul.selectable.puncts .ui-selected").text() ) ;
            }
        });

        $('input[name="state"]').autocomplete(states, {
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
                $('[name="state"]').val(ui.value); //< sends numbers...
                nr2state(ui.value); //< ... these will "translated" in to ... will I burn in hell or is this ok?
            } 
        });

        $('input[name="queue"]').autocomplete(queues, {
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

        $('input[name="user"]').autocomplete(users, {
            matchContains: true,
            minChars: 0,
            max: 40,
            scrollHeight: 280,
        });
});



$.couch.app(function(app) {
  $(".date").prettyDate();
  $("#account").evently("account", app);
  var pr = app.ddoc.evently.profile.profileReady;
  pr.mustache = pr.all; // mod the template for this page
  $("#profile").evently("profile", app);

  $.evently.connect("#account","#profile", ["loggedIn","loggedOut"]);
  $("#ticketer button").click(function(event) {
        $("#ticketer").evently("ticketer", app);
  });
  $("#todoer button").click(function(event) {  
        $("#todoer").evently("todoer", app);
  });
  $("#pager button").click(function(event) {  
        $("#pager").evently("pager", app);
  });
  
  
  
  $("#changelemma").click(function(event) {  
        $("input[name=_id]").removeAttr("readonly");
        alert("klml");
  });

  
  $(".hottyper button").click(function(event) { /// das da unten muss in eine function
        


        $("form.keyline input").removeAttr("readonly"); // wirklich auf alle?

        $('fieldset.prio div.rail').slider({
            min: 1, 
            max: 5, 
            step: 1,
            slide: function(event, ui) { 
                $('[name="prio"]').val(ui.value); //< uses numbers direct as value for prios
            } 
        });

        $('ul.selectable.puncts').append('<li>' + puncts.join("</li><li>") + '</li>');

        $("ul.selectable.puncts").selectable( {
        selected: function(event, ui) { 
            $('[name="punct"]').val($("ul.selectable.puncts .ui-selected").text() ) ;
            }
        });

        $('input[name="state"]').autocomplete(states, {
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
                $('[name="state"]').val(ui.value); //< sends numbers...
                nr2state(ui.value); //< ... these will "translated" in to ... will I burn in hell or is this ok?
            } 
        });

        $('input[name="queue"]').autocomplete(queues, {
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

        $('input[name="user"]').autocomplete(users, {
            matchContains: true,
            minChars: 0,
            max: 40,
            scrollHeight: 280,
        });


   });

}, opts);



function nr2state(number) {
    if (number <= 5 ) { // 0-1 are readable stats, above this are percents, evtl resize to 10, I love this way of data typing ;)))
        state = states[number];
        document.ticketer.state.value = state; //< TODO not sure, better with jQuery?
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
      $('input[name="_id"]').val(ticketprefix + autolemma);

      // dentline last word is the prio and punct(uation)) !!eins111elf!!!
      // $body_dueversion = "" . $task_details['due_in_version_name']; punct NULL
      var einself = dentline.replace(/.*\s(.*)$/g, '$1' ); 

      var prio = einself.match(/\!/g) ; // number of ! is the prio
      var priolength = "" ;
      if (prio) { priolength = prio.length };
      $('input[name="prio"]').val(priolength) ;
      $('input[name="prio"]').addClass('prio_' + priolength ) ;

      var punct = new Array( einself.match(/\?/) , einself.match(/fyi/i) , einself.match(/idee/i) ) ;  // das muss auf glob puncts gehen
      
      
      
      var puncts = punct.join("") ;
      
      
      // expect is what a write expects after his note. answer to a ?, fyi (nothing expected), just an idea  /// solution without + and null? 
      
      $('input[name="punct"]').val(puncts) ;

   }
};
