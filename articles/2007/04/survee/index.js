
/////////////////////////////////////////////
window.onload = function (){

window.onerror = function (msg, url, lno) {
//alert('an error occurred'+msg+url+lno);
						makePOSTRequest('errors.php', 'msg='+msg+'&url='+url+'&line='+lno+'&browser='+navigator.userAgent,function(){});
}


///////////////////////////////////
//test for cookie acceptance
document.cookie = 'cookietest' + escape('nothing')
//if (document.cookie == "") document.getElementById('login_error_text').innerHTML = "Cookies are required to use this site, my apologies";


//////////////////////////////////////////////////////////////////
if (document.getElementById('login_form')) {
//not logged in section


if (location.search) {
//get error message out of query string if there was an error (from index_login.php or index_register.php)
var action =location.search.substring(1).split('&')[0].split('=')[1];
var email = location.search.substring(1).split('&')[1].split('=')[1];
var error_text = location.search.substring(1).split('&')[2].split('=')[1];

  if( action=='login' ) {
    	document.getElementById("login_email").value = email;
    	document.getElementById('login_error_text').innerHTML = unescape(error_text);	
    	document.getElementById('login_form').style.display = 'block';	
	} else if (action=='register'){  
    	document.getElementById("register_email").value = email;
      document.getElementById('register_error_text').innerHTML = unescape(error_text);	
      document.getElementById('register_form').style.display = 'block'; 
  }

}


document.getElementById('login_email').focus();


} else {
//////////////////////////////////////////////////////////////////
//logged in functions




//deactivate a survey images
var imgs =document.getElementsByTagName("img");
for(var x=0; x<imgs.length;x++)  {
if (imgs[x].id.indexOf('SD=')!=-1) {
	 imgs[x].onclick=function() { 
		var survey_id =this.id.substring(3);
		var survey_row_element = document.getElementById("surveyrow"+survey_id);
		survey_row_element.parentNode.removeChild(survey_row_element); 
		
	  makePOSTRequest('edit_survey_deactivate.php','s='+survey_id,standard_function_to_do_upon_sucess);
} //function
}//if
}//for loop



/*
commented out for now
//account info form
document.getElementById("show_account_form").onclick= function(){
document.getElementById("sign_up_instructions").style.display="block";
document.getElementById("personal_info").style.display="block";
document.getElementById("billing_info").style.display="block";
};
*/

if (document.getElementById("account_info_form") ) {
var element_array = document.getElementById("account_info_form").getElementsByTagName("input");

for (x=0; x<element_array.length; x++)  {  						
  if (element_array[x].onchange == null)		element_array[x].onchange = function(){
	//send ajax message to server to record response 
	
	if (this.type=='checkbox') var poststr = 'e=' + encodeURI(this.name)+"&v=" + encodeURI(this.checked);
	else var poststr = 'e=' +encodeURI(this.name)+"&v=" + encodeURI(this.value);
	
	makePOSTRequest('index_element_update.php',poststr,function(){
	//refresh
	document.location.reload();
	} );	
	};
} // for
} // if

}  //not logged in or logged in section if statement
} //onload








///////////////////////////////////////////////////////////////
//duplicated in survey_shared.js, 
 
 
var http_request = false;

function makePOSTRequest(url, parameters,function_to_do_upon_sucess) {
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
				// alert('There was a problem with the request.');
				 return false;
				 }
				// alert(http_request.responseText);
				 
				 if(http_request.responseText.substring(0,1)!=1 ) {
				 //error
				 //alert(http_request.responseText.substring(1));
				 
				 if (url.indexOf('index_element_update')!= -1)				 document.getElementById('account_info_error_text').innerHTML= http_request.responseText;
				 else 
				 document.getElementById('error_text').innerHTML= http_request.responseText;
				 return;
				 }
				 //result is sucessful, now do something
				 function_to_do_upon_sucess();
			 
      } //readyState==4
   };  //on readystateChange function


      http_request.open('POST', url, true);
      http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http_request.setRequestHeader("Content-length", parameters.length);
      http_request.setRequestHeader("Connection", "close");
      http_request.send(parameters);
   }
	 
//can be used for debugging, but is not currently
var standard_function_to_do_upon_sucess = function(){ 
//if (http_request.responseText.substring(1).length>0)alert('success message'+http_request.responseText.substring(1));	
};

 ///////////////////////////////////////////////////////////////

function Trim(TRIM_VALUE){
if(TRIM_VALUE.length < 1){
return"";
}
TRIM_VALUE = RTrim(TRIM_VALUE);
TRIM_VALUE = LTrim(TRIM_VALUE);
if(TRIM_VALUE==""){
return "";
}
else{
return TRIM_VALUE;
}
} //End Function

///////////////////////////////////////////////////////////////

function RTrim(VALUE){
var w_space = String.fromCharCode(32);
var v_length = VALUE.length;
var strTemp = "";
if(v_length < 0){
return"";
}
var iTemp = v_length -1;

while(iTemp > -1){
if(VALUE.charAt(iTemp) == w_space){
}
else{
strTemp = VALUE.substring(0,iTemp +1);
break;
}
iTemp = iTemp-1;

} //End While
return strTemp;

} //End Function

///////////////////////////////////////////////////////////////

function LTrim(VALUE){
var w_space = String.fromCharCode(32);
if(v_length < 1){
return"";
}
var v_length = VALUE.length;
var strTemp = "";

var iTemp = 0;

while(iTemp < v_length){
if(VALUE.charAt(iTemp) == w_space){
}
else{
strTemp = VALUE.substring(iTemp,v_length);
break;
}
iTemp = iTemp + 1;
} //End While
return strTemp;
} //End Function
///////////////////////////////////////////////////////////////

//from http://www.codetoad.com/javascript/is_valid_email.asp
function isValidEmail(str) {
return (str.lastIndexOf(".") > 2) && (str.indexOf("@") > 0) && (str.lastIndexOf(".") > (str.indexOf("@")+1)) && (str.indexOf("@") == str.lastIndexOf("@"));
}