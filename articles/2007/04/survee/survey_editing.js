
//this file provides all the editing functions, and is ONLY loaded when editing
//it expects that we will be using prototype.js and survey_shared.js

var currentQ=-1;  //this is the position in the list of fieldsets
var css_style;  //this variable holds the css color information that store the color of the page, fieldsets and text
//this is a hack for safari, which apparently doesn't update form elements if they are hidden		

		
/////////////////////////////////////////////
window.onload = function (){
	//basic functions shared with survey.js and survey_editing.js stored in survey_shared.js
	window_onload_shared();
	

	//fill out the list of links in the left nav
	if ($('question_list')) setup_questions_list ();
	
	//register editing fields highlight onmouseover and off highlight colors & update on onblur 		
	register_editing_events_onetimers();
	
	//show instructions if is a newly created survey, but not if a poll        
	var survey_is_new_cookie_value = readCookie('survey_is_new');
	if ((survey_is_new_cookie_value)  ) showModal('instructions');

if($('loadingpage')) $('loadingpage').style.display='none';
}


//////////////////////////////////////////////////////////////////////////////
function focusonQ_editing() {
	myfieldsets =document.getElementsByTagName('fieldset');

if (currentQ >= (myfieldsets.length-1)) {
	//if last fieldset, hide add question, duplicate question buttons
	document.getElementById("add_q_button").style.display='none';
	document.getElementById("dupe_q_button").style.display='none';
	document.getElementById("delete_q_button").style.display='none';
} else {
	//if last fieldset, hide add question, duplicate question buttons
	document.getElementById("add_q_button").style.display='inline';
	document.getElementById("dupe_q_button").style.display='inline';
	document.getElementById("delete_q_button").style.display='inline';
}

//refresh leftnav links
style_questions_list();

}






//////////////////////////////////////////////////////////////////////////////

//register event handler functions for editing fields highlight onmouseover and off highlight colors & update on onblur 		
function editing_fields_onmouseover (){ this.style.background='#ffa'; }
function editing_fields_onmouseout() {	if( (!this.style.border) ||(this.style.border !='0px solid transparent') ) this.style.background='transparent'; }
function editing_fields_onfocus() {	this.style.border='0px solid transparent';this.style.background='#ffa'; this.select();}
function editing_fields_onblur() {	this.style.border='0px solid #AAAAAA'; this.style.background='transparent';}
function editing_fields_onchangeit() { 
	editing_fields_onchangeit_param(this);
}//some functions can use this function, others need to pass this as a param

function editing_fields_onchangeit_param(this_param) { 
	// makePOSTRequest('edit_element_update.php', 'a=EU&s=&q=&p='+this_param.id.substring(0,1)+'&n='+this_param.id.substring(1)+'&o='+this_param.value,function(){});
}//if user edited, update database				



//////////////////////////////////////////////////////////////////////////////

function register_editing_events_onetimers(){
//register events for when a user interacts with the survey when editing for the highlights, rollovers, ajax updates
//this gets run whenever the page is reloaded

/*
//add question link
if ($("add_q_button") && ($("add_q_button").onclick ==null)) $("add_q_button").onclick =addQ;

//duplicate question link
if ($("dupe_q_button") && ($("dupe_q_button").onclick ==null) )$("dupe_q_button").onclick =duplicateQ;

//delete question link
if ($("delete_q_button") && ($("delete_q_button").onclick ==null) )$("delete_q_button").onclick =deleteQ;
*/




//OnCLick functions for left hand buttons
if ($("show_instructions")) $("show_instructions").onclick = function() {showModal('instructions');};

if ($("leave_instructions")) $("leave_instructions").onclick = function() {hideModal('instructions');};



if ($("style_survey_button") )$("style_survey_button").onclick  = function() {showModal('style_survey');};

if ($("leave_style") )$("leave_style").onclick  = function() {hideModal('style_survey');};

	
//css text field
if($("css_button")) $('css_button').onclick = function() {$("css_field").style.display='block';};
    


if ($("send_out_survey_button") ) $("send_out_survey_button").onclick = function() {
	if($('poll_html_form') ) {
	
	$('poll_html_form').style.display='none';
		var myAjax = new Ajax.Request( 'survey.php', { method: 'get', parameters: 's='+survey_id +'&m=just_poll_form', onComplete: function (originalRequest){$('poll_html_form').value =originalRequest.responseText; 	$('poll_html_form').style.display='block';
$('poll_html_form').select();} }); 	
	}
showModal('send_out_survey');};

if ($("leave_done") ) $("leave_done").onclick = function() {hideModal('send_out_survey');};




//the modal editing windows, make the backgrounds hide the modal windows
var element_array =document.getElementsByClassName('modalBackground');
for (a=0; a<element_array.length; a++) {
	element_array[a].onclick=function() {hideModal(this.parentNode.id);}
}


//STYLE SECTION ///////////////////////////////////////////////////////////////

//the button to apply the css
if ( (document.getElementById('apply_css')) && (document.getElementById('apply_css').onclick == null) ) document.getElementById('apply_css').onclick = function() {
				 makePOSTRequest('edit_element_update.php', 'p=c&n='+survey_id+'&o='+document.getElementById('css_entry').value,function(){document.location.reload();} );
				 };

//the link to leave the styling section				 
if ( (document.getElementById('leave_style') )&& (document.getElementById('leave_style').onclick == null)) document.getElementById('leave_style').onclick =  show_survey_form;


// the code to create the color squares
var colors_array = new Array('#000000','#6f6f6f','#8e8e8e','#cecece','#ffffff',
'#9e0000','#de0000','#ff1e1e','#ff5e5e','#ff9e9e',
'#009e00','#00de00','#1eff1e','#5eff5e','#9eff9e',
'#00009e','#0000de','#1e1eff','#5e5eff','#C9DDEC',
'#9e009e','#de00de','#ff1efe','#ff5efe','#ff9eff',
'#9e9e00','#dede00','#fffe1e','#fffe5e','#fffe9e');

/*
Notes C9DDEC should be 9e9eff, programattically, but was changed to match brand color 
white box needs border:solid 1px #000  -->
*/


//set the onclick function for the color selectors
function background_color_table_onclick () { 
	document.getElementsByTagName('body')[0].style.backgroundColor=this.style.backgroundColor;
	//put text in the field
	create_css_style("body","background-color",this.style.backgroundColor);
	//update the database
	makePOSTRequest('edit_element_update.php', 'p=c&n='+survey_id+'&o='+document.getElementById('css_entry').value,function(){} );
}
	
function fieldset_color_table_onclick() {   
	var element_array =document.getElementsByTagName('fieldset');
	for (b=0; b<element_array.length; b++){ element_array[b].style.backgroundColor=this.style.backgroundColor; 			}
	
	document.getElementById('prog-bar').style.backgroundColor=this.style.backgroundColor;
	
	if ($('color_table_example')) $('color_table_example').style.backgroundColor=this.style.backgroundColor;
	//put text in the field

	create_css_style("fieldset,#prog-bar,#color_table_example","background-color",this.style.backgroundColor);
	//update the database							
	makePOSTRequest('edit_element_update.php', 'p=c&n='+survey_id+'&o='+document.getElementById('css_entry').value,function(){} );
}
	
	
function text_color_table_onclick() { 
	var element_array =document.getElementsByTagName('h2');
	for (b=0; b<element_array.length; b++){ element_array[b].style.color=this.style.backgroundColor; 			}
	
	var element_array =document.getElementsByTagName('p');
	for (b=0; b<element_array.length; b++){ element_array[b].style.color=this.style.backgroundColor; 			}
	
	var element_array =document.getElementsByTagName('label');
	for (b=0; b<element_array.length; b++){ element_array[b].style.color=this.style.backgroundColor; 			}
	
	var element_array =document.getElementsByTagName('input');
	for (b=0; b<element_array.length; b++){ element_array[b].style.color=this.style.backgroundColor; 			}
	
	var element_array =document.getElementsByTagName('li');
	for (b=0; b<element_array.length; b++){ element_array[b].style.color=this.style.backgroundColor; 			}
	
	var element_array =document.getElementsByTagName('textarea');
	for (b=0; b<element_array.length; b++){ element_array[b].style.color=this.style.backgroundColor; 			}
	
	
	//put text in the field
	create_css_style("h2, p, label, input, li, textarea","color",this.style.backgroundColor);
	//update the database
	makePOSTRequest('edit_element_update.php', 'p=c&n='+survey_id+'&o='+document.getElementById('css_entry').value,function(){} );
}



function build_table(color_table_ref,onclick_ref){

var mytablebody = document.createElement("tbody");
	var mycurrent_row = document.createElement("tr");
	
	// creating all cells
	for(var i = 0; i < colors_array.length; i++) {
		var mycurrent_cell = document.createElement("td");	 // creates a <td> element
		mycurrent_cell.style.background=colors_array[i];
		mycurrent_cell.onclick=onclick_ref;
		mycurrent_row.appendChild(mycurrent_cell); // appends the cell <td> into the row <tr>
	}
	
	mytablebody.appendChild(mycurrent_row);	// appends the row <tr> into <tbody>
	color_table_ref.appendChild(mytablebody);	// appends <tbody> into <table>
}


if( $('background_color_table'))build_table( $('background_color_table'),background_color_table_onclick );
if( $('fieldset_color_table'))  build_table($('fieldset_color_table'),fieldset_color_table_onclick );
if( $('text_color_table')) build_table($('text_color_table'),text_color_table_onclick);


//reset the styles and reload to clear them				 
if ( (document.getElementById('reset_style')) &&(document.getElementById('reset_style').onclick == null) ) document.getElementById('reset_style').onclick = function () {
	if (document.getElementById('css_entry').value!='') {  //there was no submitted styles
      				document.getElementById('css_entry').value='';
      				makePOSTRequest('edit_element_update.php', 'p=c&n='+survey_id+'&o='+'',function(){document.location.reload();} );
				 }
};




///////////////////////////////////////////////////
//Done section

if ( (document.getElementById('survey.title')) && (document.getElementById('survey.title').onchange == null)) document.getElementById('survey.title').onchange = function () {
makePOSTRequest('edit_element_update.php', 'p=t&n='+survey_id+'&o='+document.getElementById('survey.title').value, function(){} );
				 };
				 

//register all the questions content
register_editing_events();

}
//////////////////////////////////////////////////////////////////////////////

function register_editing_events(){
//register events for when a user interacts with the survey when editing for the highlights, rollovers, ajax updates
//this gets run whenever the page is reloaded or a question is added, etc



//questions
var element_array =document.getElementsByClassName('editing_question');
for (x=0; x<element_array.length; x++)  {  
						if (element_array[x].onmouseover == null) element_array[x].onmouseover =  editing_fields_onmouseover;
						if (element_array[x].onmouseout == null)	element_array[x].onmouseout = 	editing_fields_onmouseout;
		/*				if (element_array[x].onfocus == null)			element_array[x].onfocus =  		editing_fields_onfocus;
						if (element_array[x].onblur == null)			element_array[x].onblur = 			editing_fields_onblur;
			*/			if (element_array[x].onchange == null)		element_array[x].onchange =  function() {
						//update editing_list of questions
						if ($('qltext'+this.id.substring(1))) $('qltext'+this.id.substring(1)).innerHTML = this.value;
						setup_goto_select_menus();
						makePOSTRequest('edit_element_update.php', 'a=EU&s=&q=&p='+this.id.substring(0,1)+'&n='+this.id.substring(1)+'&o='+this.value,function(){});
						}
}


//question instruction text
var element_array =document.getElementsByClassName('editing_question_instructions');
for (x=0; x<element_array.length; x++)  {  
						if (element_array[x].onmouseover == null) element_array[x].onmouseover =  editing_fields_onmouseover;
						if (element_array[x].onmouseout == null)	element_array[x].onmouseout = 	editing_fields_onmouseout;
	/*					if (element_array[x].onfocus == null)			element_array[x].onfocus =  		editing_fields_onfocus;
						if (element_array[x].onblur == null)			element_array[x].onblur = 			editing_fields_onblur;
						if (element_array[x].onchange == null)		element_array[x].onchange = 		editing_fields_onchangeit;
		*/				if (element_array[x].onkeypress == null)		element_array[x].onkeypress = function (){
								//size the textarea based on the text that is in it
								var theLines = this.value.replace((new RegExp(".{"+this.cols+"}","g")),"\n").split("\n");
    						if(theLines[theLines.length-1]=="") theLines.length--;
    						if (theLines.length <=1) this.rows=2;
    						else this.rows=theLines.length;
    						};
}


//question answer labels
var element_array =document.getElementsByClassName('editing_label');
for (x=0; x<element_array.length; x++)  {  
						if (element_array[x].onmouseover == null) element_array[x].onmouseover =  editing_fields_onmouseover;
						if (element_array[x].onmouseout == null)	element_array[x].onmouseout = 	editing_fields_onmouseout;
//						if (element_array[x].onfocus == null)			element_array[x].onfocus =  		editing_fields_onfocus;
//						if (element_array[x].onblur == null)			element_array[x].onblur = 			editing_fields_onblur;
//						if (element_array[x].onchange == null)		element_array[x].onchange = 		editing_fields_onchangeit;
}




//answer delete onclicks
var element_array =document.getElementsByClassName('answer_delete');
for (var x=0; x< element_array.length; x++) {
				if (element_array[x].onclick == null) element_array[x].onclick =function() {
						var deletedElem = this.parentNode.parentNode.removeChild(this.parentNode);		
			//			makePOSTRequest('edit_answer_delete.php', 'a='+this.id.substring(3),function(parameters){});
						};
}		


/*	
//add answer link
var element_array =document.getElementsByClassName('add_answer');
for (x=0; x<element_array.length; x++)  {  
						if (element_array[x].onclick == null)		element_array[x].onclick = 		function(){
						
						makePOSTRequest('edit_answer_add.php', 'q='+this.id+'&t=text',function(parameters){
						var question_id =parameters.substring( parameters.indexOf('q=')+2,parameters.indexOf('&t=') );
						var new_li = http_request.responseText.substring(1);
						
						new Insertion.Bottom("qas"+question_id, http_request.responseText.substring(1));
						//change text color
						$("qas"+question_id).lastChild.childNodes[1].style.color = document.getElementsByTagName('textarea')[0].style.color;
						register_editing_events();
						//focus on new answer  (it is position 1 as there is always an survey form element in front of the text field)
					$("qas"+question_id).lastChild.childNodes[1].focus();
						
						});
						}//function
}


//add "other" answer link
var element_array =document.getElementsByClassName('add_other_answer');
for (x=0; x<element_array.length; x++)  {  
						if (element_array[x].onclick == null)		element_array[x].onclick = 		function(){
						makePOSTRequest('edit_answer_add.php', 'q='+this.id+'&t=othr',function(parameters){
						var question_id =parameters.substring( parameters.indexOf('q=')+2,parameters.indexOf('&t=') );
						var new_li = http_request.responseText.substring(1);
						new Insertion.Bottom("qas"+question_id, http_request.responseText.substring(1));
						//change text color
						$("qas"+question_id).lastChild.childNodes[1].style.color = document.getElementsByTagName('textarea')[0].style.color;

						register_editing_events();
						//focus on new answer  (there is always an element in front of the text field)
						$("qas"+question_id).lastChild.childNodes[1].focus();
		
						});
						}//function
}
	
	

//question type dropdown 
var element_array =document.getElementsByClassName('qtype');
for (var x=0; x< element_array.length; x++) {
		if (element_array[x].onchange == null) element_array[x].onchange = function () {

		 makePOSTRequest('edit_element_update.php', 'p='+this.id.substring(0,1)+'&n='+this.id.substring(1)+'&o='+this.value,function(parameters){
				 //receive the html from the server, insert it in the correct div
				 
				 var fieldset_array =document.getElementsByTagName('fieldset');
				 
				 if(currentQ==-1) currentQ=0; //bug fix for polls which have but one question and do not advance via goQ (which increments to 0)
				 var thisfieldset = fieldset_array[currentQ];
				 thisfieldset.innerHTML = http_request.responseText.substring(1);
				 
				 style_new_fieldset( thisfieldset);
														 	
				 register_editing_events();				//re-register editing events because the new fields have no events 
				 renumber_questions_list();
				 
				 });		
		};
}


		
//question is required checkbox onChange
var element_array =document.getElementsByClassName('required_checkbox');
for (x=0; x<element_array.length; x++)  {  
if (element_array[x].onchange == null) element_array[x].onchange = function () {
makePOSTRequest('edit_element_update.php', 'a=EU&p='+this.id.substring(0,1)+'&n='+this.id.substring(1)+'&o='+this.checked,function(parameters){} );
				 };
}


//the GO TO links 

//populate existing select menus
setup_goto_select_menus();

//	set up on clicks
var element_array =document.getElementsByClassName("gotoQ_link");
for (var x=0; x< element_array.length; x++) {
		if (element_array[x].onclick == null) element_array[x].onclick =  function() { 
		this.style.display='none'; //hide me
		//create a select menu
		new_goto_select = document.createElement( 'SELECT' );
		insertAfter(new_goto_select, this)
		new_goto_select.className ="goto_select";
		new_goto_select.title="If the user selects this answer, jump to this question"
		new_goto_select.name="g"+this.parentNode.id.substring(1);
		new_goto_select.id="g"+this.parentNode.id.substring(1);
		//populate it
		populate_goto_select_menu([new_goto_select]);
		}		
}


// if a poll, update the poll code (the height changes when questions are added)
populate_poll_url_textarea();


*/
}



 //////////////////////////////////////////////////////////////////////////////
 
 //Add / Duplicate question section

 //////////////////////////////////////////////////////////////////////////////

function addQ() {

//if at the last slide of the survey, insert before
//not work if (currentQ >= fieldset_array.length-1) currentQ = currentQ-1;
			
//note this currently adds the next question after the current question, may want to change it if we have multiuple addQs in each fieldset
makePOSTRequest('edit_question_add.php', 's='+survey_id+'&o='+(parseInt(currentQ)),function(parameters){insert_Q_html (parameters);});

}

 //////////////////////////////////////////////////////////////////////////////
function duplicateQ() {
//get current question id from fieldset id
var fieldset_array =document.getElementsByTagName('fieldset');

var  qid = fieldset_array[parseInt(currentQ)].id.substring(1);//THE ID OF THE current question
makePOSTRequest('edit_question_add.php', 's='+survey_id+'&o='+(parseInt(currentQ))+'&duplicate_id='+qid,function(parameters){ insert_Q_html (parameters);});

}

 //////////////////////////////////////////////////////////////////////////////
function insert_Q_html(parameters){

//get the question_id# by digging it out of the text
var x =http_request.responseText.indexOf('id="q')+5;
var y = http_request.responseText.substring(x).indexOf('"');
var question_id =http_request.responseText.substring(x,x+y);


//create the qlist LI element
//get question_text by digging it out of the text
x =http_request.responseText.indexOf('value="')+7;
y = http_request.responseText.substring(x).indexOf('"');
var question_text =http_request.responseText.substring(x,x+y);



var new_li = return_question_list_LI (question_id, question_text,0,0); 

var fieldset_array =document.getElementsByTagName('fieldset');

//hide all fieldsets
for (x=0; x<fieldset_array.length; x++)  {  
	 	 fieldset_array[x].style.display = 'none';
}

//if there are fieldsets, add after current, otherwise, add at end
if (fieldset_array.length>=1) {
	//insert the new fieldset
	new Insertion.After(fieldset_array[currentQ].id, http_request.responseText.substring(1));
	var question_order_number = parseInt(currentQ)+1;
	
	//insert new LI in the editing list
	var mylist = $('question_list');
	var myLis =mylist.getElementsByTagName('li');
	new Insertion.After(myLis[currentQ].id, new_li);
} else  {
	//insert the new fieldset
	new Insertion.Top(document.forms[0], http_request.responseText.substring(1));
	var question_order_number = 0;
	
	//insert new LI in the list
	new Insertion.Top($('question_list'), new_li);
	currentQ=-1;
}




style_new_fieldset ( document.getElementsByTagName('fieldset')[question_order_number]);


register_editing_events();

goQ();

register_questions_list_onclick();

renumber_questions_list();


//update goto attributes
var the_select_menu_array =document.getElementsByClassName("goto_select");
for (a=0; a<the_select_menu_array.length; a++){
	if (the_select_menu_array[a].getAttribute("gotoQ") > question_order_number){
	
	//if the attribute is greater than this question, increment it
		the_select_menu_array[a].setAttribute("gotoQ", parseInt(the_select_menu_array[a].getAttribute("gotoQ"))+1 );
		 //force value as list is not updated yet
		the_select_menu_array[a].value=the_select_menu_array[a].getAttribute("gotoQ");
		
		// register editing events (which rebuilds go to lists has to be before this or the list of goto elements will be out of synch	
		editing_fields_onchangeit_param(the_select_menu_array[a]);//send update to database
	}

}


//setup_goto_select_menus();  //rebuild the goto menus


} 


////////////////////////////////////////////////////////////////////////////////

function style_new_fieldset (new_fieldset) {
//change color (when DOM adding items, they do not follow colors javascript assigned to all the other elements.  
//Only affects new questions added after a style has been changed, but before reload (which loads the css code)  

//fieldset background color
if (document.getElementById('prog-bar')) new_fieldset.style.backgroundColor = document.getElementById('prog-bar').style.backgroundColor;

//textarea text color
var element_array = new_fieldset.getElementsByTagName('textarea');
for (b=0; b<element_array.length; b++){ element_array[b].style.color=document.getElementsByTagName('textarea')[0].style.color;}

//input fields text color
var element_array = new_fieldset.getElementsByTagName('input');
for (b=0; b<element_array.length; b++){ element_array[b].style.color=document.getElementsByTagName('textarea')[0].style.color;}

//input fields text color
var element_array = new_fieldset.getElementsByTagName('label');
for (b=0; b<element_array.length; b++){ element_array[b].style.color=document.getElementsByTagName('textarea')[0].style.color;}

}





////////////////////////////////////////////////////////////////////////

//the question list of links






////////////////////////////////////////////////////////////////////////
function setup_questions_list () {

//delete existing lists
var question_list =$('question_list');

//for (a=0; a<
//var deleted = question_list.removeChild(the_select_menu_array[a]);  //remove go to select menu


//add new links
var fieldset_array =document.getElementsByTagName('fieldset');

for (x=0; x<fieldset_array.length; x++)  {  

	question_id = "q" +fieldset_array[x].id.substring(1);
	question_text = document.getElementById(question_id).value;
	new_li = return_question_list_LI (question_id.substring(1), question_text, x+1 );
	new_li.onclick = function (){ 
		show_survey_form();
		goQ(parseInt(this.childNodes[0].innerHTML)-1); 
	};

	new Insertion.Bottom($('question_list'), new_li);
}

//register question list onclicks for the delete icon and the name
register_questions_list_onclick();

//color links
style_questions_list();

}





////////////////////////////////////////////////////////////////////////
function return_question_list_LI (question_id, question_text, order_num) {

return  '<li id="ql' + question_id+ '" class="question_list_LI"><span class="question_list_item"><span class="question_list_order_number">'+order_num+'</span> <span id="qltext' +question_id +'">'+question_text+'</span></span></li>';
}


 //////////////////////////////////////////////////////////////////////////////

function renumber_questions_list (){
	var myLis =document.getElementsByClassName("question_list_order_number");
	for (x=0; x<myLis.length; x++)  {  
			myLis[x].innerHTML = (x+1);
	}
}


//////////////////////////////////////////////////////////////////////////////


function style_questions_list () {  
	/*
	//define the link color
	if (document.getElementsByTagName('textarea')[0].style.color !='') var nav_link_color= document.getElementsByTagName('textarea')[0].style.color;
	else var nav_link_color = '#3333FF';
	*/
	
	//de-style all the editing sidebar list items
	var mylist = document.getElementById('question_list');
	var myLis =mylist.getElementsByTagName('li');
	for (x=0; x<myLis.length; x++) {	myLis[x].style.color = '#3333FF'; 			}  //nav_link_color;
	//style the current one

if ((myLis.length>0) &&(currentQ >=0)) myLis[currentQ].style.color = '#000000';
}









 //////////////////////////////////////////////////////////////////////////////
		
function register_questions_list_onclick(){
//alert('register_questions_list_onclick');
//question_list links to questions 
var element_array =document.getElementsByClassName("question_list_item");
for (var x=0; x< element_array.length; x++) {
//alert(element_array[x].childNodes[1].innerHTML);
	if (element_array[x].onclick == null) element_array[x].onclick = function (){ 
		show_survey_form();
		goQ(parseInt(this.childNodes[0].innerHTML)-1); 
	};
}

}

/////DELETE IMAGE in lEFT NAV
function deleteQ (){

myfieldsets =document.getElementsByTagName('fieldset');


	var question_id =myfieldsets[currentQ].id.substring(1);
	
	//which fieldset are we deleting?
	var thisfieldset_element = myfieldsets[currentQ];
	
	var question_order_number = currentQ+1;


	//alert('question_order_number= '+question_order_number);
	var first_question_with_goto_link=-1;//a flag 
	
	//first are there any gotos pointing here?
	var the_select_menu_array =document.getElementsByClassName("goto_select");
	if (the_select_menu_array.length >0){  //if there are no selectmenus, skip this whole part
	
	for (a=0; a<the_select_menu_array.length; a++){
		if (the_select_menu_array[a].value==question_order_number){							first_question_with_goto_link=the_select_menu_array[a].parentNode.parentNode.parentNode.parentNode.childNodes[0].innerHTML;
		break
		}
	}
	
	//see if any goto links point to it and also confirm delete
	if( (first_question_with_goto_link>-1) &&(!confirm("Question "+first_question_with_goto_link+" has an answer that GoTo's to this question.  Do you still want to delete this question? (the GoTo will be removed)") ) )return

	
	//find and remove the goTo select menus that point to this question OR update goto attributes
	for (a=0; a<the_select_menu_array.length; a++){
		if (the_select_menu_array[a].value==question_order_number){
			//if this select menu is point ing to this question, delete it
			//this deleting of the select menu code is duplicated in onblur of the menu itself														
			//update server
makePOSTRequest('edit_element_update.php','a=EU&s=&q=&p='+the_select_menu_array[a].id.substring(0,1)+'&n='+the_select_menu_array[a].id.substring(1)+'&o='+'NULL',function(){});
			
		the_select_menu_array[a].previousSibling.style.display="inline";  //show GoTo link again
		var deleted = the_select_menu_array[a].parentNode.removeChild(the_select_menu_array[a]);  //remove go to select menu

			} else {  //this select menu is NOT pointing to this question, so decrement the selectmenu gotoQ attribute if it is after this question
			//alert('gotoQ= '+the_select_menu_array[a].getAttribute("gotoQ") +'question_order_number '+question_order_number);
			
			if (the_select_menu_array[a].getAttribute("gotoQ") > question_order_number) {
			the_select_menu_array[a].setAttribute("gotoQ", the_select_menu_array[a].getAttribute("gotoQ")-1 );  //update the goto attribute
			 the_select_menu_array[a].selectedIndex = the_select_menu_array[a].getAttribute("gotoQ")-1;  //upate selectedindex
			 //force value as list is not updated yet
			the_select_menu_array[a].value=the_select_menu_array[a].getAttribute("gotoQ");

			//alert(the_select_menu_array[a].id);
			editing_fields_onchangeit_param(the_select_menu_array[a]);//send update to database
			}
		}//if the select menu pointing to this deleting question?
		
	}//for loop
		}//if statement for are there any select menus?
	
	//remove question list li element

	questionlist_item =$('ql'+question_id);
	var deletedql = questionlist_item.parentNode.removeChild(questionlist_item);
	
	//delete the fieldset
	var deletedfieldset = thisfieldset_element.parentNode.removeChild(thisfieldset_element);

	renumber_questions_list();
	
	//go to correct one, back one
	
	/////////////
	//i think the weird delete Q, go back to question 1 bug is here
	/////////
	
	fieldset_array =document.getElementsByTagName('fieldset');
	if (currentQ >= fieldset_array.length-1)  focusOnQ(fieldset_array.length-1);
	else focusOnQ(currentQ-1);  //negative qnums get set to 0 in focus on div

	register_questions_list_onclick();

	setup_goto_select_menus();  //rebuild the goto menus

	//makePOSTRequest('edit_question_deactivate.php', 'q='+question_id,function(){});

}//delete Q function








//////////////////////////////////////////////////////////////////////////////

//The select menu



//////////////////////////////////////////////////////////////////////////////
function populate_goto_select_menu(the_select_menu_array){

//alert('populate_goto_select_menu');

//return an array of all the questions text, preceded by the question number (+1)
var fieldset_array =document.getElementsByTagName('fieldset');
var questions_array = new Array();
for (var a=0; a< fieldset_array.length; a++) {
	questions_array[a]=(a+1)+" " +fieldset_array[a].childNodes[1].value;  //the second child is the editing_question field
}

//alert(the_select_menu_array.length);

for (var zz=0; zz< the_select_menu_array.length; zz++) {

var the_select_menu = the_select_menu_array[zz];
//alert(the_select_menu.id +" "+zz);

//clear out the array
the_select_menu.options.length=0;


//default selection
the_select_menu.options[0]= new Option("Please Select a Question to GoTo","NULL");


//get the order number of this question(counting from 1)
the_select_menu_question_order_number = parseInt(the_select_menu.parentNode.parentNode.parentNode.parentNode.childNodes[0].innerHTML)-1;

//loop through the questions_array and add options
for (var a=0; a< questions_array.length; a++) {
	//if not itself, add it to the list  the option element format is (text, value)
		//the value is the question order number, so that non javascript people can still get a message to go to question 4, e.g.
	if (a!=the_select_menu_question_order_number) the_select_menu.options[the_select_menu.options.length]= new Option(questions_array[a],a+1);
}

// add a delete option
the_select_menu.options[the_select_menu.options.length]= new Option("Remove This","NULL");


//alert("select menu id= "+the_select_menu.id);

//set selected index if there is a recorded goto parameter in the select menu, set it here 
if (the_select_menu.getAttribute("gotoQ")) {  
//alert("question (visble) order number "+(the_select_menu_question_order_number+1 )+" has a GoTo to question (visible) order_number "+the_select_menu.getAttribute("gotoQ")); // +" and the select menu length= "+the_select_menu.length);
//the current item is skipped, so the selected index needs to be corrected by subtracting one if it is greater than the order number


if (the_select_menu.getAttribute("gotoQ") > the_select_menu_question_order_number) the_select_menu.selectedIndex = the_select_menu.getAttribute("gotoQ")-1;
else the_select_menu.selectedIndex = the_select_menu.getAttribute("gotoQ");
}


	//	set up menus events
    if (the_select_menu.onfocus == null) the_select_menu.onfocus =  function() { 
        //make wider, make text narrower
    		this.style.width='80%';
    		this.parentNode.childNodes[1].style.width='5%' ;//the text field
    }		

	////// onblur	(update server happens in onChange event)
		if (the_select_menu.onblur == null) the_select_menu.onblur =  function() { 
        //make narrower, make text wider
    		this.style.width='70px';

//////// if it has this classname, then make it smaller because it has an other field
if (this.parentNode.childNodes[1].className.indexOf('editing_label_with_other_text_field') !=-1) this.parentNode.childNodes[1].style.width='35%' ;//the text field
else this.parentNode.childNodes[1].style.width='60%' ;//the text field
		}		

	////// onchange	
		if (the_select_menu.onchange == null) the_select_menu.onchange =  function (){
		//alert('onchange select menuid= '+this.id);

    		//update setAtttribute	
    		this.setAttribute("gotoQ",this.value);
    		
 //   		alert("the goto attribute is now "+the_select_menu.getAttribute("gotoQ"));
    		if (this.value=="NULL") {     		//if the user selected to remove the go to menu
				this.parentNode.childNodes[1].style.width='60%' ;//the text field
				this.previousSibling.style.display="inline";				//show go to link again
				var deletedql = this.parentNode.removeChild(this);				//remove go to select menu
}

//send update to database
		editing_fields_onchangeit_param(this);
	}

}//for loop for the_select_menu_array
}





 //////////////////////////////////////////////////////////////////////////////
function setup_goto_select_menus(){
//populate the GoTo menus for all of the answers that have one
//alert('setup_goto_select_menus');

//create an array of all the goto_lists	
var the_select_menu_array =document.getElementsByClassName("goto_select");

	
//then populate all the GoTo select menus
populate_goto_select_menu(the_select_menu_array);

}
 
 
 //////////////////////////////////////////////////////////////////////////////









//RANDOM functions


/* elapsed time tester
	var dater = new Date();		//stamp current date & time
	var start_time =dater.getTime();

//end
	var end_dater = new Date();		//stamp current date & time
	var end_time =end_dater.getTime();
	var time_difference = (end_time - start_time) / 1000;	//compute elapsed time
alert(time_difference);
*/










 //////////////////////////////////////////////////////////////////////////////



//this one is referenced in goQ as well as a few buttons, so it gets a function
function show_survey_form () {
    if($("survey_form")) $("survey_form").style.display='block';
}





//////////////////////////////////////////////////////////////////////////////

function convertHex2rgb(h) {

//cut the # if
h =  (h.charAt(0)=="#") ? h.substring(1,7):h;

return "rgb("+  parseInt(h.substring(0,2),16) +","+ parseInt(h.substring(2,4),16) +","+ parseInt(h.substring(4,6),16) +")";

/*
function HexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function HexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function HexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
*/

}



//////////////////////////////////////////////////////////////////////////////

function hexer(rgbcolor) {
//	alert("convert2Hex(" + rgbcolor + ")");

	//clean up javascript color string
	rgbcolor =rgbcolor.substring(4);
	rgbcolor =rgbcolor.substring(0,rgbcolor.length-1);
	
	var colors = new Array();
	colors = rgbcolor.split(",");
	
	var hex_value_to_return = "#";
	var hex_digits =  new Array( "0","1","2","3","4","5", "6","7","8","9","a","b", "e","d","e","f");
	var d1;
	var d2;
	
//convert each color to a hex string, add to final string to be returned
	for (var i=0;i<colors.length;i++) {
      	hex_channel = "ff";
      	if (colors[i] == "0") hex_value_to_return += "00";       	// can not divide by zero!
      	else {
          		d1 = Math.floor(colors[i]/16);
          		d2 = ((colors[i]/16) - d1) * 16;
          		d1 = hex_digits[d1];
          		d2 = hex_digits[d2];
          		hex_value_to_return += d1 + d2;
            	}
      	}
	return hex_value_to_return;
}


function create_css_style(css_style_descriptor,style_to_change,new_color){

if (new_color.indexOf(',')!=-1) new_color = hexer(new_color); //netscape colors look like this (255,255,255)


	if (document.getElementById('css_entry').value.indexOf(css_style_descriptor) ==-1){
	//there is no style, create one
	document.getElementById('css_entry').value += css_style_descriptor+"{"+style_to_change+":"+new_color+";}\n";;
	} else {
	//there is a style, replace
	var start_of_style =document.getElementById('css_entry').value.indexOf('\n'+css_style_descriptor)+1;
	var end_of_style = document.getElementById('css_entry').value.substring(start_of_style).indexOf("}");
	document.getElementById('css_entry').value = document.getElementById('css_entry').value.substring(0,start_of_style) +css_style_descriptor+"{"+style_to_change+":"+new_color+";}" +document.getElementById('css_entry').value.substring(start_of_style + end_of_style + 1);
	}



}


//////////////////////////////////////////////////////////////////////////////

function populate_poll_url_textarea(){

// if a poll, update the poll code (the height changes when questions are added)
//heignt = 

if($('poll_url')) $('poll_url').value = "<iframe src=\"http://www.survee.com/survey.php?s="+ survey_id  +"\" scrolling=\"auto\" width=\"100%\" height=\"300px\"></iframe>";

}


//////////////////////////////////////////////////////////////////////////////
function insertAfter(node, referenceNode) {
	referenceNode.parentNode.insertBefore(node, referenceNode.nextSibling);

}


//////////////////////////////////////////////////////////////////////////////


function showModal(divID){

//hide select fields (bug fix for IE show through a div)

var element_array =document.getElementsByTagName('select');
for (var x=0; x< element_array.length; x++) {
	element_array[x].style.display = "none";
}

    window.onscroll = function () { document.getElementById(divID).style.top = document.body.scrollTop; };
    document.getElementById(divID).style.display = "block";
    document.getElementById(divID).style.top = document.body.scrollTop;
}

function hideModal(divID){

//show select fields (bug fix for IE show through a div)
var element_array =document.getElementsByTagName('select');
for (var x=0; x< element_array.length; x++) {
	element_array[x].style.display = "";
}

    document.getElementById(divID).style.display = "none";
}





	/*
						function countLines(theArea){
  var theLines = theArea.value.replace((new RegExp(".{"+theArea.cols+"}","g")),"\n").split("\n");
  if(theLines[theLines.length-1]=="") theLines.length--;
  theArea.form.lineCount.value = theLines.length;
}

function keyhandler(e) {
    if (document.layers)
        Key = e.which;
    else
        Key = window.event.keyCode;
    if (Key != 0)
        alert("Key pressed! ASCII-value: " + Key);
}

*/
//////////////////////////////////////////////////////////////////////////////

