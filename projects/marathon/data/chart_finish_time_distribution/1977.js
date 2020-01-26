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
	
	var chart_data = {"seriesData":[{"data": [[1,21]], "label": "21 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[2,48]], "label": "48 people finished between 2:21 and  2:31<br>11.14 miles per hour (5:23 pace) <br>17.94 km per hour (3:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8460},{"data": [[3,109]], "label": "109 people finished between 2:32 and  2:42<br>10.33 miles per hour (5:48 pace) <br>16.64 km per hour (3:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9120},{"data": [[4,237]], "label": "237 people finished between 2:42 and  2:52<br>9.7 miles per hour (6:11 pace) <br>15.61 km per hour (3:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9720},{"data": [[5,328]], "label": "328 people finished between 2:52 and  3:02<br>9.13 miles per hour (6:34 pace) <br>14.71 km per hour (4:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10320},{"data": [[6,310]], "label": "310 people finished between 3:02 and  3:12<br>8.63 miles per hour (6:57 pace) <br>13.9 km per hour (4:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10920},{"data": [[7,405]], "label": "405 people finished between 3:12 and  3:22<br>8.18 miles per hour (7:19 pace) <br>13.18 km per hour (4:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11520},{"data": [[8,448]], "label": "448 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[9,429]], "label": "429 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[10,375]], "label": "375 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[11,288]], "label": "288 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[12,219]], "label": "219 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[13,166]], "label": "166 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[14,142]], "label": "142 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[15,87]], "label": "87 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[16,35]], "label": "35 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[17,19]], "label": "19 people finished between 4:53 and  5:03<br>5.36 miles per hour (11:11 pace) <br>8.63 km per hour (6:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17580},{"data": [[18,17]], "label": "17 people finished between 5:03 and  5:13<br>5.18 miles per hour (11:34 pace) <br>8.35 km per hour (7:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18180},{"data": [[19,9]], "label": "9 people finished between 5:14 and  5:24<br>5 miles per hour (11:59 pace) <br>8.06 km per hour (7:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18840},{"data": [[20,5]], "label": "5 people finished between 5:28 and  5:38<br>4.79 miles per hour (12:31 pace) <br>7.71 km per hour (7:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19680},{"data": [[21,2]], "label": "2 people finished between 5:41 and  5:51<br>4.61 miles per hour (13:01 pace) <br>7.42 km per hour (8:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20460},{"data": [[22,1]], "label": "1 person finished between 5:55 and  6:05<br>4.43 miles per hour (13:33 pace) <br>7.13 km per hour (8:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21300}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,"5:00"],[21,""],[22,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
