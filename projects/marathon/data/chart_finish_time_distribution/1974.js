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
	
	var chart_data = {"seriesData":[{"data": [[1,5]], "label": "5 people finished between 2:26 and  2:36<br>10.76 miles per hour (5:34 pace) <br>17.33 km per hour (3:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8760},{"data": [[2,6]], "label": "6 people finished between 2:37 and  2:47<br>10.01 miles per hour (6:00 pace) <br>16.11 km per hour (3:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9420},{"data": [[3,26]], "label": "26 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[4,26]], "label": "26 people finished between 3:00 and  3:10<br>8.73 miles per hour (6:52 pace) <br>14.05 km per hour (4:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10800},{"data": [[5,28]], "label": "28 people finished between 3:10 and  3:20<br>8.27 miles per hour (7:15 pace) <br>13.31 km per hour (4:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11400},{"data": [[6,40]], "label": "40 people finished between 3:21 and  3:31<br>7.82 miles per hour (7:40 pace) <br>12.59 km per hour (4:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12060},{"data": [[7,24]], "label": "24 people finished between 3:31 and  3:41<br>7.44 miles per hour (8:03 pace) <br>11.99 km per hour (5:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12660},{"data": [[8,24]], "label": "24 people finished between 3:44 and  3:54<br>7.01 miles per hour (8:33 pace) <br>11.29 km per hour (5:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13440},{"data": [[9,22]], "label": "22 people finished between 3:55 and  4:05<br>6.68 miles per hour (8:58 pace) <br>10.76 km per hour (5:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14100},{"data": [[10,15]], "label": "15 people finished between 4:05 and  4:15<br>6.41 miles per hour (9:21 pace) <br>10.32 km per hour (5:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14700},{"data": [[11,11]], "label": "11 people finished between 4:18 and  4:28<br>6.09 miles per hour (9:50 pace) <br>9.8 km per hour (6:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15480},{"data": [[12,8]], "label": "8 people finished between 4:28 and  4:38<br>5.86 miles per hour (10:14 pace) <br>9.44 km per hour (6:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16080},{"data": [[13,6]], "label": "6 people finished between 4:40 and  4:50<br>5.61 miles per hour (10:41 pace) <br>9.03 km per hour (6:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16800},{"data": [[14,8]], "label": "8 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[15,4]], "label": "4 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[16,5]], "label": "5 people finished between 5:13 and  5:23<br>5.02 miles per hour (11:57 pace) <br>8.08 km per hour (7:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18780},{"data": [[17,1]], "label": "1 person finished between 5:30 and  5:40<br>4.76 miles per hour (12:35 pace) <br>7.67 km per hour (7:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19800},{"data": [[18,1]], "label": "1 person finished between 5:58 and  6:08<br>4.39 miles per hour (13:40 pace) <br>7.07 km per hour (8:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21480}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,"4:00"],[14,""],[15,""],[16,""],[17,""],[18,"5:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
