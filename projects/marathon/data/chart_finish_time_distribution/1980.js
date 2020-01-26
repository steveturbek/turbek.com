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
	
	var chart_data = {"seriesData":[{"data": [[1,30]], "label": "30 people finished between 2:09 and  2:19<br>12.18 miles per hour (4:55 pace) <br>19.61 km per hour (3:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7740},{"data": [[2,88]], "label": "88 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[3,173]], "label": "173 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[4,378]], "label": "378 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[5,668]], "label": "668 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[6,803]], "label": "803 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[7,1027]], "label": "1027 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[8,1330]], "label": "1330 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[9,1365]], "label": "1365 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[10,1400]], "label": "1400 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[11,1367]], "label": "1367 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[12,934]], "label": "934 people finished between 3:59 and  4:09<br>6.57 miles per hour (9:07 pace) <br>10.58 km per hour (5:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14340},{"data": [[13,761]], "label": "761 people finished between 4:10 and  4:20<br>6.28 miles per hour (9:33 pace) <br>10.12 km per hour (5:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15000},{"data": [[14,656]], "label": "656 people finished between 4:20 and  4:30<br>6.04 miles per hour (9:55 pace) <br>9.73 km per hour (6:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15600},{"data": [[15,456]], "label": "456 people finished between 4:30 and  4:40<br>5.82 miles per hour (10:18 pace) <br>9.37 km per hour (6:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16200},{"data": [[16,347]], "label": "347 people finished between 4:40 and  4:50<br>5.61 miles per hour (10:41 pace) <br>9.03 km per hour (6:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16800},{"data": [[17,233]], "label": "233 people finished between 4:50 and  5:00<br>5.42 miles per hour (11:04 pace) <br>8.72 km per hour (6:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17400},{"data": [[18,149]], "label": "149 people finished between 5:00 and  5:10<br>5.24 miles per hour (11:27 pace) <br>8.43 km per hour (7:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18000},{"data": [[19,100]], "label": "100 people finished between 5:10 and  5:20<br>5.07 miles per hour (11:50 pace) <br>8.16 km per hour (7:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18600},{"data": [[20,92]], "label": "92 people finished between 5:20 and  5:30<br>4.91 miles per hour (12:13 pace) <br>7.91 km per hour (7:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19200},{"data": [[21,58]], "label": "58 people finished between 5:30 and  5:40<br>4.76 miles per hour (12:35 pace) <br>7.67 km per hour (7:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19800},{"data": [[22,32]], "label": "32 people finished between 5:40 and  5:50<br>4.62 miles per hour (12:59 pace) <br>7.44 km per hour (8:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20400},{"data": [[23,30]], "label": "30 people finished between 5:50 and  6:00<br>4.49 miles per hour (13:22 pace) <br>7.23 km per hour (8:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21000},{"data": [[24,13]], "label": "13 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[25,5]], "label": "5 people finished between 6:13 and  6:23<br>4.21 miles per hour (14:15 pace) <br>6.78 km per hour (8:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22380},{"data": [[26,5]], "label": "5 people finished between 6:25 and  6:35<br>4.08 miles per hour (14:42 pace) <br>6.57 km per hour (9:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23100},{"data": [[27,4]], "label": "4 people finished between 6:46 and  6:56<br>3.87 miles per hour (15:30 pace) <br>6.23 km per hour (9:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24360},{"data": [[28,1]], "label": "1 person finished between 7:02 and  7:12<br>3.72 miles per hour (16:07 pace) <br>5.99 km per hour (10:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25320},{"data": [[29,4]], "label": "4 people finished between 7:21 and  7:31<br>3.56 miles per hour (16:50 pace) <br>5.74 km per hour (10:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26460},{"data": [[30,2]], "label": "2 people finished between 7:47 and  7:57<br>3.36 miles per hour (17:50 pace) <br>5.42 km per hour (11:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28020}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,"7:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
