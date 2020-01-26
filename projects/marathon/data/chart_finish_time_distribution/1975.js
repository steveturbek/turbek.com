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
	
	var chart_data = {"seriesData":[{"data": [[1,6]], "label": "6 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[2,9]], "label": "9 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[3,18]], "label": "18 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[4,44]], "label": "44 people finished between 2:50 and  3:00<br>9.24 miles per hour (6:29 pace) <br>14.88 km per hour (4:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10200},{"data": [[5,29]], "label": "29 people finished between 3:00 and  3:10<br>8.73 miles per hour (6:52 pace) <br>14.05 km per hour (4:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10800},{"data": [[6,38]], "label": "38 people finished between 3:10 and  3:20<br>8.27 miles per hour (7:15 pace) <br>13.31 km per hour (4:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11400},{"data": [[7,42]], "label": "42 people finished between 3:20 and  3:30<br>7.85 miles per hour (7:38 pace) <br>12.65 km per hour (4:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12000},{"data": [[8,26]], "label": "26 people finished between 3:30 and  3:40<br>7.48 miles per hour (8:01 pace) <br>12.05 km per hour (4:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12600},{"data": [[9,33]], "label": "33 people finished between 3:41 and  3:51<br>7.11 miles per hour (8:26 pace) <br>11.45 km per hour (5:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13260},{"data": [[10,38]], "label": "38 people finished between 3:51 and  4:01<br>6.8 miles per hour (8:49 pace) <br>10.95 km per hour (5:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13860},{"data": [[11,18]], "label": "18 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[12,9]], "label": "9 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[13,13]], "label": "13 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[14,9]], "label": "9 people finished between 4:35 and  4:45<br>5.71 miles per hour (10:30 pace) <br>9.2 km per hour (6:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16500},{"data": [[15,2]], "label": "2 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[16,2]], "label": "2 people finished between 5:04 and  5:14<br>5.17 miles per hour (11:36 pace) <br>8.32 km per hour (7:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18240},{"data": [[17,2]], "label": "2 people finished between 5:16 and  5:26<br>4.97 miles per hour (12:04 pace) <br>8.01 km per hour (7:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18960},{"data": [[18,1]], "label": "1 person finished between 5:27 and  5:37<br>4.8 miles per hour (12:29 pace) <br>7.74 km per hour (7:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19620}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,"4:00"],[14,""],[15,""],[16,""],[17,""],[18,"5:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
