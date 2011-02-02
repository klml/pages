// global stuff for wicketboard
// TODO use as JSON like couchapp.json 
// and ? : why cant I use ccouchapp.json in the client

var ticketprefix = "task_";   // seomthing like "ticket", "bug_" 

types  = new Array ( "wiki", "ticket", "adr", "ressource");
prios  = new Array ( "week", "Alerta", "hour", "day", "week", "kuer");
states = new Array ( "new", "progress", "response", "test", "onhold", "archive");
puncts = new Array ( "!", "?", "idea", "fyi");
users  = new Array ( "klml", "mike", "sulu", "gwen", "hans", "horst", "min", "pater", "kay", "hans-peter");
queues = new Array (
  "com.mcd",
  "com.gwen",
  "dev.notzp",
  "klml.Home",
  "klml.konzum",
  "klml.WW",
  "wiedervorlage",
  "ww.Fotos"
);  
