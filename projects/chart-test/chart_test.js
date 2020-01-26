var hide_log_messages = true; 

var cities=['New York','Los Angeles','Chicago','Houston','Phoenix','Philadelphia','San Antonio','San Diego','Dallas','San Jose','Detroit','San Francisco','Jacksonville','Indianapolis','Austin','Columbus','Fort Worth','Charlotte','Memphis','Boston','Baltimore','El Paso','Seattle','Denver','Nashville-Davidson','Milwaukee','Washington','Las Vegas','Louisville','Portland','Oklahoma city','Tucson','Atlanta','Albuquerque','Kansas city','Fresno','Mesa','Sacramento','Long Beach','Omaha','Virginia Beach','Miami','Cleveland','Oakland','Raleigh','Colorado Springs','Tulsa','Minneapolis','Arlington','Honolulu','Wichita','St. Louis','New Orleans','Tampa','Santa Ana','Anaheim','Cincinnati','Bakersfield','Aurora','Toledo','Pittsburgh','Riverside','Lexington','Stockton','Corpus Christi','Anchorage','St. Paul','Newark','Plano','Buffalo','Henderson','Fort Wayne','Greensboro','Lincoln','Glendale','Chandler','St. Petersburg','Jersey city','Scottsdale','Orlando','Madison','Norfolk','Birmingham','Winston-Salem','Durham','Laredo','Lubbock','Baton Rouge','North Las Vegas','Chula Vista','Chesapeake','Gilbert town','Garland','Reno','Hialeah','Arlington','Irvine','Rochester','Akron','Boise'];

var months = new Array("January ","February ","March ","April ","May ","June ","July ","August ","September ", "October ","November ","December ");

var time_chart_was_drawn = new Date();

var number_of_series_in_chart = 7;//limit to 7 series

var chart_type_array = ['line','pie','column','donut','bar','tilted_pie','points'];
var current_chart_index	=0;

var user_responses_array= []; //what the user answered, correct answer, time to answer, etc.  For scoreboard statistics

var current_question_actual_value =0;

var setTimoutTimer;  //variable for the timeout set if a person takes too long to answer, 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    // do this when the page is loaded and ready
	//uncomment this next line to skip the intro text (good for texting)
	//start_game();
	
	
	
	
	document.onkeypress = function (event) {
    event = event || window.event;
    if (event.keyCode === 13) {
		if ( $('#chart_container').css('display') == 'none'){
		draw_next_chart();
		}
    }
    return true;
}


});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function start_game(){


console_log_with_alert_fallback_for_IE('start');

//draw the chart
draw_chart();
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function on_submit_user_value(){

	user_value = $('#userValue').val();

	if ((user_value =='') || (!user_value.match(/^[0-9]+$/))) return false;  //only numbers allowed
	
		clearTimeout(setTimoutTimer);


	var temp_array={};
	temp_array['current_question_actual_value'] = current_question_actual_value;
	temp_array['user_value'] =  parseInt(user_value);
	temp_array['milliseconds_to_answer'] = Math.floor((new Date() - time_chart_was_drawn));
	temp_array['chart_type'] =chart_type_array[current_chart_index];
	temp_array['percent_off'] =  Math.abs(current_question_actual_value - temp_array['user_value'] ) /current_question_actual_value * 100;
	temp_array['chart_style_index'] = flot_theme_options_style_modifications_index; //which style chart are we using?
	temp_array['ignore'] = document.getElementById('ignore').checked;
	user_responses_array.push(temp_array);


	//save values to db
	$.ajax({
		type: "POST",
		url: "submit.php",
		dataType: "json",
		traditional: true,
		data: { "answer": JSON.stringify(temp_array)},
		success: response_from_server
	});
	
	console_log_with_alert_fallback_for_IE('sent to server' );
	console_log_with_alert_fallback_for_IE({ "answer": JSON.stringify(temp_array)});
	

/*
update_scoreboard();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function update_scoreboard(){
*/
		//update scoreboard
//show the chart
$('#chart_container').hide();  
$('#score_container').show();  





		$("#score_total_header").html('The correct answer was '+ temp_array['current_question_actual_value'] +'. Your entry, '+temp_array['user_value'] +' was '+ Math.floor(Math.abs(current_question_actual_value - temp_array['user_value'] )) +' points off (' + 	Math.round(temp_array['percent_off']) +'%) and took ' + roundNumber(temp_array['milliseconds_to_answer']/1000, 2)  +' seconds');

		
		console_log_with_alert_fallback_for_IE(user_responses_array);
		
		
		//create an object for the user's answers
		//like {"data":[[0,68.06], [1,52.51], [2,70.18], [3,48.10], [4,72.90], [5,25.70], [6,84.65]],"label":"Average"}
		var user_answers ={};
		user_answers.data =new Array();
		user_answers.label = "You";
		
		var user_milliseconds_to_answer ={};
		user_milliseconds_to_answer.data =new Array();
		user_milliseconds_to_answer.label = "You";

		//var scoreboardString = "<table>";
		
		//go through all user_responses_array, get the ones that match the current chart type
		//
		
		for (a=0; a<chart_type_array.length; a++){
			var chart_type_count=0;
			var chart_type_total_error_percents = 0;
			var chart_type_total_milliseconds_to_answer = 0;
			for (b=0; b<user_responses_array.length; b++){
				if (  chart_type_array[a] == user_responses_array[b]['chart_type'] ) {
					//add them up
					chart_type_count++;
					chart_type_total_error_percents += user_responses_array[b]['percent_off'] ;
					chart_type_total_milliseconds_to_answer += user_responses_array[b]['milliseconds_to_answer'] ;
				}
			}

			
			
			//calculate for each chart type -divide by count
			averageError =roundNumber(chart_type_total_error_percents / chart_type_count,2);
			averageTime = roundNumber((chart_type_total_milliseconds_to_answer) / chart_type_count, 2);
			
			if (chart_type_count<2) continue;  //only do it if you have something to average
			
//		if (isNaN(averageError)) averageError=user_responses_array[user_responses_array.length]['percent_off'];
			user_answers.data[a] = new Array(a, averageError);
			user_milliseconds_to_answer.data[a] = new Array(a, averageTime);
			
			


			
			//scoreboardString += "<tr><td>" + chart_type_array[a].replace("_", " ") + " chart</td><td> your average error was  " +  averageError + "% with an average time of  " +  averageTime + " seconds</td></tr>";
		
		}
		
		//scoreboardString += "</table> ";
		//$('#score_total').html(scoreboardString);
		
		
		
		
		//update stats chart
		
			$("#stats_top_label").html(stats_chart_data.topLabelError);
			$("#stats_time_top_label").html(stats_chart_data.topLabelTime);
			

//console.log(user_answers);


if(user_responses_array.length > (chart_type_array.length*2) ) {

$('#stats_charts_container_container_div').show();

 temp_stats_chart_data = new Array();
 temp_stats_chart_data.push(stats_chart_data.averagePercentWrongData[0]);

 temp_stats_chart_data_time = new Array();
 temp_stats_chart_data_time.push(stats_chart_data.millisecondsToAnswerData[0]);
 
 if (user_answers.data.length >0) {
 	temp_stats_chart_data.push(user_answers);
 	temp_stats_chart_data_time.push(user_milliseconds_to_answer); 	
}
 
 
 ////Error chart
	$.plot($("#stats_chart"), temp_stats_chart_data,{
			colors: ["#16193B","#7FB2F0","#4E7AC7","#35478C","#16193B","#07294A","#000000"],
			series:{
			points:{
				show:true
				},
			lines:{
				show:false
				}					
			},
			xaxis:{ ticks: stats_chart_data.xAxisTicksLabels },
			legend:{show: true}
			});  
			




/////// Time chart

	$.plot($("#stats_time_chart"), temp_stats_chart_data_time,{
			colors: ["#16193B","#7FB2F0","#4E7AC7","#35478C","#16193B","#07294A","#000000"],
			series:{
			points:{
				show:true
				},
			lines:{
				show:false
				}					
			},
			xaxis:{ ticks: stats_chart_data.xAxisTicksLabels },
			legend:{show: true}
			});  
			
			}
			
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function response_from_server(response) {
	console_log_with_alert_fallback_for_IE('response_from_server:'+response.serverResponse);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function draw_next_chart(){

	//go to the next chart type, or loop around if at the end
	if (current_chart_index < (chart_type_array.length - 1)) current_chart_index += 1;
	else {
		current_chart_index = 0;
		
//		if (flot_theme_options_style_modifications_index < (chart_style_modification_objects_array.length - 1)) flot_theme_options_style_modifications_index += 1;
//		else flot_theme_options_style_modifications_index =0;		
		}
	draw_chart()
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function draw_chart(){

	$("#introText").hide();  

	$('#chart_container').show();  
	$('#score_container').hide();  

	document.getElementById('userValue').value='';
	document.getElementById('userValue').focus();
	
	console_log_with_alert_fallback_for_IE(chart_type_array[current_chart_index] +' chart selected');

//	eval ('draw_'+chart_type_array[current_chart_index] +'_chart()');  //select current chart type function

	var data = [];
	var tickText= [];  //the text for the columns
	flot_theme_options_style_modifications_index = Math.floor(Math.random() * chart_style_modification_objects_array.length);

switch(chart_type_array[current_chart_index])
{


case 'line':
case 'column':
case 'points':

	//line and column use the same data creation
	//styling is simply applied in chart_type_flot_variations[chart_type_array[current_chart_index]]
	
	
	for( var i = 0; i<number_of_series_in_chart; i++)
	{//the label is a city name
		data[i] = [ i, Math.floor(Math.random()*98)+1];  //var d1 = [[2,0],[2,1],[3,2],[1,3],[2,4],[3,5],[4,6]]; 	
		tickText[i] = [i, cities[Math.floor(Math.random()*100)] ];//[[1,"AA"],[2,"BB"],[3,"CC"],[4,"Q4"],[5,"Q5"]];
	}
	
	
	//pick one item
	var selectedSeriesIndex = Math.floor(Math.random()*number_of_series_in_chart);  
	current_question_actual_value = data[selectedSeriesIndex][1];  
	$("#questionLine").html("How much is " + tickText[selectedSeriesIndex][1] +"?");

	//plot it
	$.plot($("#default"), [data], jQuery.extend(true, {}, flot_theme_options, {xaxis: { ticks: tickText }} , chart_type_flot_variations[chart_type_array[current_chart_index]], chart_style_modification_objects_array[flot_theme_options_style_modifications_index]));


	break;

////////////////////////////////////////////////////////////////////////////////
case 'bar':


	for( var i = 0; i<number_of_series_in_chart; i++)
	{//the label is a city name
		data[i] = [Math.floor(Math.random()*98)+1, i];  //var d1 = [[2,0],[2,1],[3,2],[1,3],[2,4],[3,5],[4,6]]; 	
		tickText[i] = [i, cities[Math.floor(Math.random()*100)] ];//[[1,"AA"],[2,"BB"],[3,"CC"],[4,"Q4"],[5,"Q5"]];
	}



	//pick one item
	var selectedSeriesIndex = Math.floor(Math.random()*number_of_series_in_chart);  

	current_question_actual_value = data[selectedSeriesIndex][0];
	$("#questionLine").html("How much is " + tickText[selectedSeriesIndex][1] +"?");


	//plot it
	$.plot($("#default"), [data], jQuery.extend(true, {}, flot_theme_options, {yaxis: { ticks: tickText }} , chart_type_flot_variations[chart_type_array[current_chart_index]], chart_style_modification_objects_array[flot_theme_options_style_modifications_index]));


  break;

////////////////////////////////////////////////////////////////////////////////
case 'pie':
case 'donut':
case 'tilted_pie':

	for( var i = 0; i<number_of_series_in_chart; i++)
	{//the label is a city name
		data[i] = { label: cities[Math.floor(Math.random()*100)], data: Math.ceil(Math.random()*100)+1 }
	}


	//total all the datas, replace each with its percent
	var total =0;

 	for( var i = 0; i<number_of_series_in_chart; i++)
	{//the label is a city name
		total += data[i].data;
	}
 	for( var i = 0; i<number_of_series_in_chart; i++)
	{//the label is a city name
	data[i].data = Math.floor(data[i].data / total *100);
	//alert(data[i].data);
	}
	

	//pick one item
	var selectedSeriesIndex = Math.floor(Math.random()*number_of_series_in_chart);  
	current_question_actual_value = data[selectedSeriesIndex].data;
	
	$("#questionLine").html("What percent is " + data[selectedSeriesIndex].label +"?");
	

//	//plot it
	$.plot($("#default"), data, jQuery.extend(true, {}, flot_theme_options,  chart_type_flot_variations[chart_type_array[current_chart_index]], chart_style_modification_objects_array[flot_theme_options_style_modifications_index]));


  break;

}





//TIMING
	clearTimeout(setTimoutTimer);
//	setTimoutTimer = setTimeout("timeoutDialog()", 20000); //maximum amount of time is 20 seconds, to avoid long times_to_answer if user gets distracted
	time_chart_was_drawn = new Date();
}

















////////////////////////////////////////////////////////

//Utility functions


////////////////////////////////////////////////////////

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function console_log_with_alert_fallback_for_IE(s) {  //from http://stackoverflow.com/questions/690251/what-happened-to-console-log-in-ie8
	if (hide_log_messages) return;
	try { console.log(s) } catch (e) { alert(s) }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function timeoutDialog(){
	clearTimeout(setTimoutTimer);
	var r=confirm("You appear to have stopped playing.  Click OK to keep playing, cancel to cancel");
	if (r==true)	{
			draw_chart();
	} else	{
		window.location.href=('index.html');
	}
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//http://www.thefutureoftheweb.com/blog/submit-a-form-in-ie-with-enter
/*
$(function(){
    $('#userValue').keydown(function(e){
        if (e.keyCode == 13) {
            on_submit_user_value(	document.getElementById('userValue').value);
            return false;
        }
    });
});


 $("input").keyup(function () {
      var value = $(this).val();
      $("p").text(value);
    }).keyup();
*/


