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
	
	var chart_data = {"seriesData":[{"data": [[1,3]], "label": "3 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[2,7]], "label": "7 people finished between 2:44 and  2:54<br>9.58 miles per hour (6:15 pace) <br>15.42 km per hour (3:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9840},{"data": [[3,9]], "label": "9 people finished between 2:55 and  3:05<br>8.98 miles per hour (6:40 pace) <br>14.45 km per hour (4:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10500},{"data": [[4,4]], "label": "4 people finished between 3:05 and  3:15<br>8.49 miles per hour (7:04 pace) <br>13.67 km per hour (4:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11100},{"data": [[5,9]], "label": "9 people finished between 3:17 and  3:27<br>7.97 miles per hour (7:31 pace) <br>12.84 km per hour (4:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11820},{"data": [[6,4]], "label": "4 people finished between 3:33 and  3:43<br>7.38 miles per hour (8:08 pace) <br>11.88 km per hour (5:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12780},{"data": [[7,3]], "label": "3 people finished between 3:46 and  3:56<br>6.95 miles per hour (8:37 pace) <br>11.19 km per hour (5:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13560},{"data": [[8,4]], "label": "4 people finished between 3:57 and  4:07<br>6.63 miles per hour (9:03 pace) <br>10.67 km per hour (5:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14220},{"data": [[9,3]], "label": "3 people finished between 4:07 and  4:17<br>6.36 miles per hour (9:25 pace) <br>10.24 km per hour (5:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14820},{"data": [[10,2]], "label": "2 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[11,4]], "label": "4 people finished between 4:35 and  4:45<br>5.71 miles per hour (10:30 pace) <br>9.2 km per hour (6:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16500},{"data": [[12,1]], "label": "1 person finished between 4:46 and  4:56<br>5.49 miles per hour (10:55 pace) <br>8.84 km per hour (6:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17160},{"data": [[13,2]], "label": "2 people finished between 5:07 and  5:17<br>5.12 miles per hour (11:43 pace) <br>8.24 km per hour (7:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18420}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,"3:00"],[7,""],[8,""],[9,""],[10,""],[11,"4:00"],[12,""],[13,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
