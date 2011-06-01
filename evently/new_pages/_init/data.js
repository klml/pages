function(e,p) {
  // todo need ability to run other data funs inline
  return {
    states:[{state:"new"},{state:"progress"},{state:"response"},{state:"test"},{state:"archive"}],
    queues:[{queue:"income"},{queue:"Norddeutschland"},{queue:"Sueddeutschland"},{queue:"buchhaltung"},{queue:"technik"}],
    prios:[{prio:"week"},{prio:"alerta"},{prio:"hour"},{prio:"day"},{prio:"week"},{prio:"kuer"}],
    users:[{user:"klml"},{user:"mike"},{user:"hans"},{user:"horst"},{user:"maogus"}],
    today: new Date(),
    
    
  };
}


