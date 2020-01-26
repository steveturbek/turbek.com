$(document).ready(function() {




	

	$("#chart_finish_time_distribution #placeholder").bind("plothover", function (event, pos, item) {
	$("#x").text(pos.x.toFixed(2));
	$("#y").text(pos.y.toFixed(2));
	if (item) {
	$("#charttooltip").remove();
	var x = item.datapoint[0];//.toFixed(2),
	y = item.datapoint[1];//.toFixed(2);
	
	var d = new Date(x).getFullYear();
	
	
	showChartTooltip(item.pageX, item.pageY, item.series.label );


	} else {
	$("#charttooltip").remove();
	}
	});
	
	var chart_data = {"seriesData":[{"data": [[1,26]], "label": "26 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[2,70]], "label": "70 people finished between 2:21 and  2:31<br>11.14 miles per hour (5:23 pace) <br>17.94 km per hour (3:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8460},{"data": [[3,116]], "label": "116 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[4,242]], "label": "242 people finished between 2:41 and  2:51<br>9.76 miles per hour (6:09 pace) <br>15.71 km per hour (3:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9660},{"data": [[5,419]], "label": "419 people finished between 2:51 and  3:01<br>9.19 miles per hour (6:31 pace) <br>14.79 km per hour (4:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10260},{"data": [[6,571]], "label": "571 people finished between 3:01 and  3:11<br>8.68 miles per hour (6:54 pace) <br>13.98 km per hour (4:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10860},{"data": [[7,817]], "label": "817 people finished between 3:11 and  3:21<br>8.22 miles per hour (7:17 pace) <br>13.24 km per hour (4:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11460},{"data": [[8,1107]], "label": "1107 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[9,1254]], "label": "1254 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[10,1389]], "label": "1389 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[11,1511]], "label": "1511 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[12,1332]], "label": "1332 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[13,1322]], "label": "1322 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[14,1139]], "label": "1139 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[15,966]], "label": "966 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[16,847]], "label": "847 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[17,773]], "label": "773 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[18,480]], "label": "480 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[19,407]], "label": "407 people finished between 5:12 and  5:22<br>5.03 miles per hour (11:55 pace) <br>8.11 km per hour (7:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18720},{"data": [[20,314]], "label": "314 people finished between 5:22 and  5:32<br>4.88 miles per hour (12:18 pace) <br>7.86 km per hour (7:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19320},{"data": [[21,241]], "label": "241 people finished between 5:32 and  5:42<br>4.73 miles per hour (12:40 pace) <br>7.62 km per hour (7:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19920},{"data": [[22,208]], "label": "208 people finished between 5:42 and  5:52<br>4.59 miles per hour (13:03 pace) <br>7.4 km per hour (8:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20520},{"data": [[23,127]], "label": "127 people finished between 5:52 and  6:02<br>4.46 miles per hour (13:26 pace) <br>7.19 km per hour (8:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21120},{"data": [[24,52]], "label": "52 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[25,47]], "label": "47 people finished between 6:13 and  6:23<br>4.21 miles per hour (14:15 pace) <br>6.78 km per hour (8:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22380},{"data": [[26,31]], "label": "31 people finished between 6:23 and  6:33<br>4.1 miles per hour (14:37 pace) <br>6.6 km per hour (9:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22980},{"data": [[27,18]], "label": "18 people finished between 6:33 and  6:43<br>4 miles per hour (15:00 pace) <br>6.44 km per hour (9:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23580},{"data": [[28,15]], "label": "15 people finished between 6:46 and  6:56<br>3.87 miles per hour (15:30 pace) <br>6.23 km per hour (9:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24360},{"data": [[29,5]], "label": "5 people finished between 6:57 and  7:07<br>3.77 miles per hour (15:55 pace) <br>6.07 km per hour (9:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25020},{"data": [[30,12]], "label": "12 people finished between 7:09 and  7:19<br>3.66 miles per hour (16:23 pace) <br>5.9 km per hour (10:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25740},{"data": [[31,6]], "label": "6 people finished between 7:20 and  7:30<br>3.57 miles per hour (16:48 pace) <br>5.75 km per hour (10:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26400},{"data": [[32,1]], "label": "1 person finished between 8:04 and  8:14<br>3.25 miles per hour (18:29 pace) <br>5.23 km per hour (11:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29040},{"data": [[33,2]], "label": "2 people finished between 9:36 and  9:46<br>2.73 miles per hour (22:00 pace) <br>4.39 km per hour (13:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34560},{"data": [[34,1]], "label": "1 person finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,""],[22,"5:00"],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,"8:00"],[33,"9:00"],[34,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

	$("#chart_finish_time_distribution #top-label").html(chart_data.topLabel);
  
  	$("#chart_finish_time_distribution #x-axis-label").html(chart_data.xAxis);
	
	$("#chart_finish_time_distribution #y-axis-label").html(chart_data.yAxis);
	$("#chart_finish_time_distribution #y-axis-label").flipv_up();


	$("#chart_finish_time_distribution #metrics").html("Note: this contains both runners and wheelchair racers (who are often faster than runners)");
	
	

	chart_style_options.xaxis.ticks = chart_data.xAxisTicksLabels;
	chart_style_options.colors =  ["#70B0FF", "#EB53F7"]; 
	chart_style_options.series.lines.fill=false;
	chart_style_options.series.lines.lineWidth=2;
	chart_style_options.legend.show=false;	
	chart_style_options.yaxis.min= null; // min. value to show, null means set automatically
	chart_style_options.legend.container = $("#chart_finish_time_distribution #legend-container");
	chart_style_options.xaxis.mode= "time";
	


	var runner_time_in_seconds =  window.basic_info_about_runner.runner_total_time_in_seconds;

	//find correct series to match runner's time
	//update series with color, runner's name
	for (var a=0; a < chart_data.seriesData.length; a++){
		if ( runner_time_in_seconds <= chart_data.seriesData[a].start_time_in_seconds ) {
			chart_data.seriesData[a].color="#99ff00";
			chart_data.seriesData[a].label = window.basic_info_about_runner.name + " and " + chart_data.seriesData[a].label;
			break;
		}
	}



	$.plot($("#chart_finish_time_distribution #placeholder"), chart_data.seriesData, {
		lines: {show:false},
		bars: {show:true, barWidth:.8, fill:1},
		legend: {show:false},
		xaxis: {tickLength: 0, ticks :chart_data.xAxisTicksLabels},
		grid: {clickable: true, hoverable: true,  mouseActiveRadius:10, 	borderWidth: 1, // in pixels
	borderColor: "#dddddd", // set if different from the grid color	
}
	});
	
});
