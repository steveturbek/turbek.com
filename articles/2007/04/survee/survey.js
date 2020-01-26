var currentQ=-1;
	 
//register event handler functions 

/////////////////////////////////////////////
window.onload = function (){
// hide non-javasctript form submit button
document.getElementById("no_javascript_submit").style.display = 'none';

//basic functions shared with survey.js and survey_editing.js stored in survey_shared.js
window_onload_shared();


//register survey events
register_survey_events();

}


///////////////////////////////////////////////////////////////


function register_survey_events(){

var element_array =document.getElementsByTagName('input');
		
for (x=0; x<element_array.length; x++)  {  

		switch (element_array[x].type)  { 

		case 'radio':    
		element_array[x].onclick = function() {
		unlock_required_question();
				 //clear all the 'other' texts 
				 var input_array =document.getElementsByTagName('input');
				 for (x=0; x<input_array.length; x++)  {  
    				 if ( (input_array[x].id.indexOf('_other')!=-1) && (input_array[x].id.indexOf(this.parentNode.parentNode.id.substring(3) )!=-1) ) input_array[x].value='';
				 }
				
				//send ajax message to server to record response 
		    var poststr = "r=" + respondent_id+"&" + encodeURI(this.name)+"=" + encodeURI(this.value);
				if(respondent_id!=0)makePOSTRequest('survey_response.php',poststr,function(){} );	}; //respondent_id = 0 in preview mode
				break;
				
		case 'checkbox': 
		element_array[x].onclick = function() {
		unlock_required_question();

					 var otherfield =this.parentNode.parentNode.id.substring(3)+'_'+this.id.substring(1,this.id.length-1)+'_other';//297_964_other
					 //if deselecting, clear field
				 if ( (document.getElementById(otherfield))  && (!this.checked) ) {
					 document.getElementById(otherfield).value='';
				 }
				 var checked=0;
				 if (this.checked) checked=1;
				 //send ajax message to server to record response
		 		var poststr = "r=" + respondent_id+"&" + encodeURI(this.name)+"=" + checked;
				 if(respondent_id!=0) makePOSTRequest('survey_response.php',poststr,function(){});	};  //respondent_id = 0 in preview mode 
				 break;

		case 'text': 
				element_array[x].onkeypress = unlock_required_question;
				 element_array[x].onchange = function() {
				 unlock_required_question();
				 var split_q_and_a = this.id.substring(1).split("_");
				 if (split_q_and_a[2]=='other') {				 //if the checkbox or radio is not selected, select it
				 var element_id = 'a'+split_q_and_a[1]+'a'; 
				 document.getElementById(element_id).checked='true';
				 }
				 //send ajax message to server to record response				 				 
				var poststr = "r=" + respondent_id+"&" + encodeURI(this.name)+"=" + encodeURI(this.value);

				if(respondent_id!=0) makePOSTRequest('survey_response.php',poststr,function(){});	//respondent_id = 0 in preview mode
				 }; 	
				 
				 break;
		}
}	

var element_array =document.getElementsByTagName('select');
for (x=0; x<element_array.length; x++)  {  
		element_array[x].onchange = function() { 
    		unlock_required_question();
				//send ajax message to server to record response
			    var poststr = "r=" + respondent_id+"&" + encodeURI(this.name)+"=" + encodeURI(this.value);
				 if(respondent_id!=0) makePOSTRequest('survey_response.php',poststr,function(){});    }; //respondent_id = 0 in preview mode
}
		


var element_array =document.getElementsByTagName('textarea');
for (x=0; x<element_array.length; x++)  {  
		element_array[x].onkeypress = unlock_required_question;
		element_array[x].onchange = function() {	
		unlock_required_question();
				//send ajax message to server to record response
				var poststr = "r=" + respondent_id+"&" + encodeURI(this.name)+"=" + encodeURI(this.value);
				 if(respondent_id!=0) makePOSTRequest('survey_response.php',poststr,function(){});//respondent_id = 0 in preview mode
}; 
}	

}

///////////////////////////////////////////////////////////////

function unlock_required_question(){
    document.getElementById("next_button").onclick = function() {goQ();};
//don't enable button if this is the last question
var myfieldsets =document.getElementsByTagName('fieldset');
if (currentQ < (myfieldsets.length-1))     document.getElementById("next_button").style.display = 'inline';
		
		//turn off requiredness if already answered question, case they go back
		myfieldsets =document.getElementsByTagName('fieldset');
		myfieldsets[currentQ].setAttribute("required",0);
}

