  var currentQ=-1;

	 
	 
//register event handler functions 

/////////////////////////////////////////////
function window_onload_shared(){




//Back button
if(document.getElementById("back_button"))document.getElementById("back_button").onclick = function() {goQ(-1);};


//Next button
if(document.getElementById("next_button")) {

document.getElementById("next_button").onclick = goQ;
if(document.getElementById("next_button").style.display !='none')document.getElementById("next_button").style.display ='inline';
}

//Progress bar
if(document.getElementById("prog-border"))document.getElementById("prog-border").style.display ='block';


//a proxy for all the questions							 
myfieldsets =document.getElementsByTagName('fieldset');


//queue up first question: if we have a #, then likely we are reloading, jump to that
var currentQ_cookie_value = readCookie(location.search.substring(3));
//alert('page load cookie value='+currentQ_cookie_value );

//if there is a cookie, go to that question
//if (currentQ_cookie_value!=null)goQ(currentQ_cookie_value); 
//else goQ();//not  yet started


window.onerror = function (msg, url, lno) {
//alert('an error occurred'+msg+url+lno);
						makePOSTRequest('errors.php', 'msg='+msg+'&url='+url+'&line='+lno+'&survey_id='+survey_id+'&browser='+navigator.userAgent,function(){});
}


}



/////////////////////////////////////////////
function goQ(x){
//this is called by links on the survey and the next button
//this updates the query string on the iframe (echo.html) (so the back button works)
//the iframes calls from_echo returning the next page  (so the back button can fire updates)
//alert('goQ'+x);


if (x==currentQ) return; // ignore if there already

var myfieldsets =document.getElementsByTagName('fieldset');
//alert("myfieldsets "+myfieldsets.length);
//if a number is not specified, go to next   (typically used by next button)
if (isNaN(x)) {


//Is there a GoTo? 
//the GoTo is an attribute of some answers, set by the survey creator to jump to a question
//the goto number corresponds to the fieldset legend, which counts from 1, rather than the currentQ number which counts from 0

var gotoQ=-1; //potential fieldsetPosition to go to

if( (!document.getElementById('question_list')) && (currentQ!=-1)){ 
//do not fire when editing or on initial load and display (when currentQ=-1)


//is it a dropdown menu?
if (myfieldsets[currentQ].getElementsByTagName('select').length >0) {    
    var selected =myfieldsets[currentQ].getElementsByTagName('select')[0].selectedIndex;
    var element_array =myfieldsets[currentQ].getElementsByTagName('option');

	//if there is a goto, set gotoQ to it, minus 1
    if(element_array[selected].getAttribute("gotoQ")) gotoQ= element_array[selected].getAttribute("gotoQ") -1;


} else if (myfieldsets[currentQ].getElementsByTagName('input').length >0) {   

//is it a radio button or checkbox?  if it is and it is selected and it has a gotoQ attribute, then set gotoQ to it
    var element_array =myfieldsets[currentQ].getElementsByTagName('input');
	if ((element_array[0].type=='radio')|| (element_array[0].type=='checkbox')) {
		for (a=0; a<element_array.length; a++)  {  
    		//if there is a goto, set gotoQ to it, minus 1
    		if ((element_array[a].checked) && (element_array[a].getAttribute("gotoQ")))gotoQ= element_array[a].getAttribute("gotoQ") -1;
		}//for
	} //if radio or checkbox    
}//if select or input

}//END if(!document.getElementById('question_list')){ //only for survey taking 

//alert(currentQ);

if(gotoQ != -1) x =gotoQ; //there is a goto
else x = parseInt(currentQ) + 1;  //otherwise go to the next one

}//if X is NaN

else {
 //X IS a number

//if it is = -1, then go back 1
if (x==-1) x=parseInt(currentQ) - 1;  

//otherwise, just go to question X
//check if x is beyond the last fieldset (the last question)
if (x>= myfieldsets.length) return false; // do not go past end of question
}


//alert('goQ'+x);

//update the iframe location
x='echo.html?'+x;
frames['ifrm'].location.href=x; 
return false; 

}

////////////////////////////////////////////////////////////
function from_echo(x) {
//alert('from echo'+x);
if (x==currentQ) return; // echo.html calls this function, sometimes multiple times, ignore if there already

var currentQ_cookie_value = readCookie(location.search.substring(3));
//alert('from echo message='+x+' cookie value='+currentQ_cookie_value);


//if x is a number, then go there
if ((!isNaN(x)) && (x!='')) focusOnQ(x);

else {
//for page reloads and the first time page loads, x will='' if there is a cookie, go there
if (currentQ_cookie_value!=null ) goQ(currentQ_cookie_value);
else goQ(); //no x and no cookie, go to first question

}



}

////////////////////////////////////////////////////////////
function focusOnQ(x) {
//alert('focusOnQ x='+x+' currentq='+currentQ );

if (isNaN(x)) {
//THIS SHOULD NOT HAPPEN
alert('error: focusOnDiv NAN current='+currentQ+' x='+x);
return;
}

//set new currentQ
if (x >0) currentQ = x;
else currentQ=0;

createCookie(location.search.substring(3),currentQ,0.002);  //save cookie
//alert('focus on Q function, just after set cookie, cookie value='+readCookie(location.search.substring(3)) );


//hide all fieldsets
myfieldsets =document.getElementsByTagName('fieldset');
for (x=0; x<myfieldsets.length; x++)  {  
	 	 myfieldsets[x].style.display = 'none';
}
//show current fieldset
if (myfieldsets.length >0)myfieldsets[currentQ].style.display = 'block';


//Progress bar
if ((document.getElementById("prog-bar") ) && (myfieldsets.length >1)) {
document.getElementById("prog-bar").style.width = (currentQ /(myfieldsets.length-1) *100)+'%' ;
} else {
document.getElementById("prog-bar").style.width = "100%";
}

document.getElementById("prog-bar").innerHTML = parseInt(currentQ)+1 +"&nbsp;of&nbsp;" +myfieldsets.length+"&nbsp;&nbsp;";

//Back button
// if this question the first or no questions turn off back button
if ( (document.getElementById("back_button") ) && ((currentQ==0)||(myfieldsets.length==0)) )  document.getElementById("back_button").style.display = 'none';
else document.getElementById("back_button").style.display = 'inline';


//Next button


// turn off next button if this is the last question
if ( (document.getElementById("next_button") ) && ( (myfieldsets.length==0) ||(currentQ >= (myfieldsets.length-1)) ) ) document.getElementById("next_button").style.display = 'none';
else document.getElementById("next_button").style.display = 'inline';

//if question is required (but not if editing)
if  (myfieldsets[currentQ].getAttribute("required")==1) {

if (!document.getElementById('question_list')) {
    document.getElementById("next_button").style.display = 'none';
    document.getElementById("next_button").onclick = function() {alert('Please answer this question first');};
    }

}  else {
    document.getElementById("next_button").onclick = function() {goQ();};
}


//later!  give focus to current field
/*
x = 'q' + currentQ;
document.getElementById(x).focus()
//form.elements[elemName].focus(  );;
*/

//editing functions that happen on goQ
if(document.getElementById('question_list')) focusonQ_editing(); 

} //end focusOnDiv






///////////////////////////////////////////////////////////////
var http_request = false;
//duplicated in index.js 
 
 
var http_request = false;

function makePOSTRequest(url, parameters,function_to_do_upon_sucess) {
//   alert(parameters);
	 
	    http_request = false;
      if (window.XMLHttpRequest) { // Mozilla, Safari,...
         http_request = new XMLHttpRequest();
         if (http_request.overrideMimeType) {
         	// set type accordingly to anticipated content type //http_request.overrideMimeType('text/xml');
            http_request.overrideMimeType('text/html');
         }
      } else if (window.ActiveXObject) { // IE
         try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
            try {
               http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
         }
      }
      if (!http_request) {
         alert('Cannot create XMLHTTP instance');
         return false;
      }
            http_request.onreadystatechange =    function() {
      if (http_request.readyState == 4) {
         if (http_request.status != 200) {
				 //alert('There was a problem with the request.');
//				 makePOSTRequest('errors.php', 'msg='+parameters+'&url='+url+'&line='+''+'&survey_id='+survey_id+'&type='+'AJAX'+'&browser='+navigator.userAgent,function(){});
				 return false;
				 }
//				 alert(http_request.responseText);
				 
				 if(http_request.responseText.substring(0,1)!=1 ) {

//				 alert('error'+http_request.responseText);

				 //error
//				 makePOSTRequest('errors.php', 'msg='+http_request.responseText+'&url='+document.location.href+'&line='+''+'&survey_id='+survey_id+'&type='+'phpM'+'&browser='+navigator.userAgent,function(){});

				 //document.getElementById('error_text').innerHTML= http_request.responseText;
				 return;
				 }
				 //result is sucessful, now do something
				 function_to_do_upon_sucess(parameters);
			 
      } //readyState==4
   };  //on readystateChange function


      http_request.open('POST', url, true);
      http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http_request.setRequestHeader("Content-length", parameters.length);
      http_request.setRequestHeader("Connection", "close");
      http_request.send(parameters);
   }
	 
  
var standard_function_to_do_upon_sucess = function(){ 
//if (http_request.responseText.substring(1).length>0)alert('success message'+http_request.responseText.substring(1));	
};


///////////////////////////////////////////////////////////////

	//from http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name)
{
	createCookie(name,"",-1);
}

///////////////////////////////////////////////////////////////
	 
