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
	
	var chart_data = {"seriesData":[{"data": [[1,21]], "label": "21 people finished between 2:08 and  2:18<br>12.27 miles per hour (4:53 pace) <br>19.76 km per hour (3:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7680},{"data": [[2,44]], "label": "44 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[3,84]], "label": "84 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[4,232]], "label": "232 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[5,471]], "label": "471 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[6,645]], "label": "645 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[7,996]], "label": "996 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[8,1453]], "label": "1453 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[9,1572]], "label": "1572 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[10,1905]], "label": "1905 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[11,2265]], "label": "2265 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[12,1920]], "label": "1920 people finished between 3:59 and  4:09<br>6.57 miles per hour (9:07 pace) <br>10.58 km per hour (5:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14340},{"data": [[13,1886]], "label": "1886 people finished between 4:09 and  4:19<br>6.31 miles per hour (9:30 pace) <br>10.16 km per hour (5:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14940},{"data": [[14,1795]], "label": "1795 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[15,1486]], "label": "1486 people finished between 4:29 and  4:39<br>5.84 miles per hour (10:16 pace) <br>9.4 km per hour (6:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16140},{"data": [[16,1223]], "label": "1223 people finished between 4:39 and  4:49<br>5.63 miles per hour (10:39 pace) <br>9.07 km per hour (6:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16740},{"data": [[17,1150]], "label": "1150 people finished between 4:49 and  4:59<br>5.44 miles per hour (11:02 pace) <br>8.75 km per hour (6:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17340},{"data": [[18,689]], "label": "689 people finished between 4:59 and  5:09<br>5.25 miles per hour (11:25 pace) <br>8.46 km per hour (7:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17940},{"data": [[19,574]], "label": "574 people finished between 5:09 and  5:19<br>5.08 miles per hour (11:48 pace) <br>8.19 km per hour (7:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18540},{"data": [[20,462]], "label": "462 people finished between 5:19 and  5:29<br>4.92 miles per hour (12:10 pace) <br>7.93 km per hour (7:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19140},{"data": [[21,352]], "label": "352 people finished between 5:29 and  5:39<br>4.77 miles per hour (12:34 pace) <br>7.69 km per hour (7:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19740},{"data": [[22,268]], "label": "268 people finished between 5:39 and  5:49<br>4.63 miles per hour (12:56 pace) <br>7.46 km per hour (8:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20340},{"data": [[23,233]], "label": "233 people finished between 5:49 and  5:59<br>4.5 miles per hour (13:19 pace) <br>7.25 km per hour (8:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20940},{"data": [[24,149]], "label": "149 people finished between 5:59 and  6:09<br>4.38 miles per hour (13:42 pace) <br>7.05 km per hour (8:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21540},{"data": [[25,114]], "label": "114 people finished between 6:09 and  6:19<br>4.26 miles per hour (14:05 pace) <br>6.86 km per hour (8:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22140},{"data": [[26,85]], "label": "85 people finished between 6:20 and  6:30<br>4.13 miles per hour (14:30 pace) <br>6.66 km per hour (9:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22800},{"data": [[27,49]], "label": "49 people finished between 6:30 and  6:40<br>4.03 miles per hour (14:54 pace) <br>6.49 km per hour (9:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23400},{"data": [[28,51]], "label": "51 people finished between 6:40 and  6:50<br>3.93 miles per hour (15:16 pace) <br>6.32 km per hour (9:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24000},{"data": [[29,57]], "label": "57 people finished between 6:51 and  7:01<br>3.82 miles per hour (15:41 pace) <br>6.15 km per hour (9:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24660},{"data": [[30,30]], "label": "30 people finished between 7:01 and  7:11<br>3.73 miles per hour (16:04 pace) <br>6.01 km per hour (9:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25260},{"data": [[31,21]], "label": "21 people finished between 7:11 and  7:21<br>3.64 miles per hour (16:27 pace) <br>5.87 km per hour (10:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25860},{"data": [[32,9]], "label": "9 people finished between 7:22 and  7:32<br>3.55 miles per hour (16:52 pace) <br>5.72 km per hour (10:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26520},{"data": [[33,9]], "label": "9 people finished between 7:33 and  7:43<br>3.47 miles per hour (17:18 pace) <br>5.58 km per hour (10:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27180},{"data": [[34,8]], "label": "8 people finished between 7:43 and  7:53<br>3.39 miles per hour (17:40 pace) <br>5.46 km per hour (10:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27780},{"data": [[35,15]], "label": "15 people finished between 7:54 and  8:04<br>3.31 miles per hour (18:06 pace) <br>5.34 km per hour (11:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28440},{"data": [[36,3]], "label": "3 people finished between 8:05 and  8:15<br>3.24 miles per hour (18:31 pace) <br>5.22 km per hour (11:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29100},{"data": [[37,1]], "label": "1 person finished between 8:32 and  8:42<br>3.07 miles per hour (19:33 pace) <br>4.94 km per hour (12:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30720},{"data": [[38,1]], "label": "1 person finished between 8:43 and  8:53<br>3 miles per hour (19:58 pace) <br>4.84 km per hour (12:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31380},{"data": [[39,5]], "label": "5 people finished between 9:05 and  9:15<br>2.88 miles per hour (20:49 pace) <br>4.64 km per hour (12:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32700},{"data": [[40,1]], "label": "1 person finished between 9:36 and  9:46<br>2.73 miles per hour (22:00 pace) <br>4.39 km per hour (13:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34560},{"data": [[41,2]], "label": "2 people finished between 9:54 and  10:04<br>2.64 miles per hour (22:41 pace) <br>4.26 km per hour (14:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35640}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,"7:00"],[34,""],[35,""],[36,""],[37,""],[38,"8:00"],[39,""],[40,""],[41,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
