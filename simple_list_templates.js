
// library


 function template(objName,elementId,loopVal){
 	createTemplate = {};
	    createTemplate.elementId = elementId + "-TEMPLATE";
	    createTemplate.objName = objName;
	    createTemplate.loopVal = loopVal;  // display keys,values or both
	    var  objNameStorage;
	    var  arrayStorage = [];

	    

	       if(typeof createTemplate.objName === "object"){
	   
	       		for(val in objName){

	       			if(createTemplate.loopVal === "key"){
	       				  objNameStorage = val;
	       			}

	       			else if(createTemplate.loopVal === "val"){
	                      objNameStorage = objName[val];
	       			}

	       			else if(createTemplate.loopVal === "both"){	
	       				  objNameStorage = val +" "+objName[val];


	       			}

          
          arrayStorage.push('<li>'+objNameStorage+'</li>');
          console.log(arrayStorage)
	      document.getElementById(createTemplate.elementId).innerHTML = arrayStorage.join(" ");

					
	        }

	       }

	       else if(typeof objName === "string"){
	       objNameStorage = objName;
	             arrayStorage.push('<li>'+objNameStorage+'</li>');
          console.log(arrayStorage)
	      document.getElementById(createTemplate.elementId).innerHTML = arrayStorage.join(" ");


	       }

	   
      
    

return createTemplate;
};

