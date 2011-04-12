// global stuff for wicketboard
// TODO use as JSON like couchapp.json or editable as wikipage

var ticketprefix = "tick_";   // something like "ticket", "bug_" 
var safetime = "15";



// TODO all below must be one JSON
keys = new Array (
"type" ,
"_id" ,
"prio" ,
"state",
"punct",
"queue",
"user" ,
"ddate"
)



types  = new Array ( "wiki", "ticket", "adr", "ressource");
prios  = new Array ( "week", "Alerta", "hour", "day", "week", "kuer");
states = new Array ( "new", "progress", "response", "test", "onhold", "archive");
puncts = new Array ( "!", "?", "idea", "fyi");
users  = new Array ( "klml", "mike", "sulu", "gwen", "phl0w", "horst", "min", "pater", "kay", "hans-peter");
queues = new Array (
  "os.WickeT",
  "design.gwen",
  "dev.notzp",
  "klml.Home",
  "klml.konzum"
);  

//~ {
//~ "keyz" : [
 //~ "type" ,
 //~ "prio" ,
 //~ "state",
 //~ "punct",
 //~ "queue",
 //~ "user" ,
 //~ "ddate"
 //~ ]
//~ }
