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
	
	var chart_data = {"seriesData":[{"data": [[1,1]], "label": "1 person finished between 2:22 and  2:32<br>11.06 miles per hour (5:25 pace) <br>17.81 km per hour (3:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8520},{"data": [[2,12]], "label": "12 people finished between 2:33 and  2:43<br>10.27 miles per hour (5:50 pace) <br>16.53 km per hour (3:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9180},{"data": [[3,16]], "label": "16 people finished between 2:43 and  2:53<br>9.64 miles per hour (6:13 pace) <br>15.52 km per hour (3:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9780},{"data": [[4,19]], "label": "19 people finished between 2:54 and  3:04<br>9.03 miles per hour (6:39 pace) <br>14.54 km per hour (4:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10440},{"data": [[5,20]], "label": "20 people finished between 3:06 and  3:16<br>8.45 miles per hour (7:05 pace) <br>13.6 km per hour (4:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11160},{"data": [[6,15]], "label": "15 people finished between 3:16 and  3:26<br>8.01 miles per hour (7:29 pace) <br>12.91 km per hour (4:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11760},{"data": [[7,18]], "label": "18 people finished between 3:26 and  3:36<br>7.63 miles per hour (7:52 pace) <br>12.28 km per hour (4:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12360},{"data": [[8,13]], "label": "13 people finished between 3:37 and  3:47<br>7.24 miles per hour (8:17 pace) <br>11.66 km per hour (5:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13020},{"data": [[9,12]], "label": "12 people finished between 3:47 and  3:57<br>6.92 miles per hour (8:40 pace) <br>11.14 km per hour (5:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13620},{"data": [[10,9]], "label": "9 people finished between 3:57 and  4:07<br>6.63 miles per hour (9:03 pace) <br>10.67 km per hour (5:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14220},{"data": [[11,9]], "label": "9 people finished between 4:08 and  4:18<br>6.33 miles per hour (9:28 pace) <br>10.2 km per hour (5:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14880},{"data": [[12,6]], "label": "6 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[13,3]], "label": "3 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[14,3]], "label": "3 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[15,1]], "label": "1 person finished between 4:56 and  5:06<br>5.31 miles per hour (11:18 pace) <br>8.55 km per hour (7:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17760}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,"4:00"],[14,""],[15,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
