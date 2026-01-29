function calcu() {

    var an1ntd = Number(document.getElementById('an1ntd').value) ;
  
   
  
    var an1ctrl = Number(document.getElementById('an1ctrl').value);
  
    
  
   
  
    var an1tt = document.getElementById('an1tt').value =  Number((an1ntd)*0.4+(an1ctrl*0.6));
  
  
  
  
  
    var ann1ntd = Number(document.getElementById('ann1ntd').value) ;
  
  
    var ann1ctrl = Number(document.getElementById('ann1ctrl').value);
  
  



    var ann1tt = document.getElementById('ann1tt').value = Number((ann1ntd)*0.4+(ann1ctrl*0.6));
  
  
  
  
    var me1td = Number(document.getElementById('me1td').value) ;


    var me1ctrl = Number(document.getElementById('me1ctrl').value);

    
    


    var me1tt = document.getElementById('me1tt').value = Number((me1td)*0.4+(me1ctrl*0.6));
  
    
  
  
  
  
  
    var on1ntd = Number(document.getElementById('on1ntd').value) ;
  
     
  
    var on1ctrl = Number(document.getElementById('on1ctrl').value);

  
    var on1tt = document.getElementById('on1tt').value = Number(((on1ntd)*4+(on1ctrl*6))/10);
  
  
  
  
  
    var po1ntp = Number(document.getElementById('po1ntp').value);
  
    var po1ctrl = Number(document.getElementById('po1ctrl').value);
  
      

  
    var po1tt = document.getElementById('po1tt').value = Number((((po1ntp)*4)+((po1ctrl)*6))/10);
  
  
  
  
  
  
    
    
    var hse1ctrl = Number(document.getElementById('hse1ctrl').value);

    var hse1tt = document.getElementById('hse1tt').value = Number((hse1ctrl)*1);
  
  
  
  
  
  
     
      var el1ctrl = Number(document.getElementById('el1ctrl').value);

    var el1tt = document.getElementById('el1tt').value = Number((el1ctrl*1));
  
  
  
  
  
        

        

        var en1ctrl = Number(document.getElementById('en1ctrl').value);


        var en1tt = document.getElementById('en1tt').value = Number((en1ctrl)*1);


        






        var de1tp = Number(document.getElementById('de1tp').value) ;

        


        var de1tt = document.getElementById('de1tt').value = Number((de1tp)*1);
  


        document.getElementById("tt").innerHTML = ((3*an1tt)+(2*ann1tt)+(3*me1tt)+(3*on1tt)+(2*po1tt)+(1*hse1tt)+(1*el1tt)+(1*en1tt)+(1*de1tt))/17;



  }
