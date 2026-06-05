const A = { 
     name : "Gaurav", 
     roll : "112",
 
     callback : function(){      
           arrow=()=>{ 
 
            console.log(this); 
        }    
             arrow(); 
     } } 
 
A.callback(); 



