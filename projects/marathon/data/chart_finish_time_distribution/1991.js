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
	
	var chart_data = {"seriesData":[{"data": [[1,19]], "label": "19 people finished between 2:09 and  2:19<br>12.18 miles per hour (4:55 pace) <br>19.61 km per hour (3:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7740},{"data": [[2,52]], "label": "52 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[3,132]], "label": "132 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[4,255]], "label": "255 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[5,608]], "label": "608 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[6,771]], "label": "771 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[7,1216]], "label": "1216 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[8,1734]], "label": "1734 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[9,2107]], "label": "2107 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[10,2222]], "label": "2222 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[11,2799]], "label": "2799 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[12,2099]], "label": "2099 people finished between 4:00 and  4:10<br>6.55 miles per hour (9:10 pace) <br>10.54 km per hour (5:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14400},{"data": [[13,2168]], "label": "2168 people finished between 4:10 and  4:20<br>6.28 miles per hour (9:33 pace) <br>10.12 km per hour (5:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15000},{"data": [[14,1966]], "label": "1966 people finished between 4:20 and  4:30<br>6.04 miles per hour (9:55 pace) <br>9.73 km per hour (6:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15600},{"data": [[15,1588]], "label": "1588 people finished between 4:30 and  4:40<br>5.82 miles per hour (10:18 pace) <br>9.37 km per hour (6:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16200},{"data": [[16,1328]], "label": "1328 people finished between 4:40 and  4:50<br>5.61 miles per hour (10:41 pace) <br>9.03 km per hour (6:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16800},{"data": [[17,1156]], "label": "1156 people finished between 4:50 and  5:00<br>5.42 miles per hour (11:04 pace) <br>8.72 km per hour (6:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17400},{"data": [[18,744]], "label": "744 people finished between 5:00 and  5:10<br>5.24 miles per hour (11:27 pace) <br>8.43 km per hour (7:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18000},{"data": [[19,638]], "label": "638 people finished between 5:10 and  5:20<br>5.07 miles per hour (11:50 pace) <br>8.16 km per hour (7:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18600},{"data": [[20,448]], "label": "448 people finished between 5:20 and  5:30<br>4.91 miles per hour (12:13 pace) <br>7.91 km per hour (7:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19200},{"data": [[21,378]], "label": "378 people finished between 5:30 and  5:40<br>4.76 miles per hour (12:35 pace) <br>7.67 km per hour (7:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19800},{"data": [[22,292]], "label": "292 people finished between 5:40 and  5:50<br>4.62 miles per hour (12:59 pace) <br>7.44 km per hour (8:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20400},{"data": [[23,232]], "label": "232 people finished between 5:50 and  6:00<br>4.49 miles per hour (13:22 pace) <br>7.23 km per hour (8:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21000},{"data": [[24,181]], "label": "181 people finished between 6:00 and  6:10<br>4.36 miles per hour (13:45 pace) <br>7.03 km per hour (8:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21600},{"data": [[25,138]], "label": "138 people finished between 6:10 and  6:20<br>4.25 miles per hour (14:07 pace) <br>6.84 km per hour (8:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22200},{"data": [[26,120]], "label": "120 people finished between 6:20 and  6:30<br>4.13 miles per hour (14:30 pace) <br>6.66 km per hour (9:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22800},{"data": [[27,44]], "label": "44 people finished between 6:30 and  6:40<br>4.03 miles per hour (14:54 pace) <br>6.49 km per hour (9:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23400},{"data": [[28,65]], "label": "65 people finished between 6:41 and  6:51<br>3.92 miles per hour (15:19 pace) <br>6.31 km per hour (9:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24060},{"data": [[29,56]], "label": "56 people finished between 6:51 and  7:01<br>3.82 miles per hour (15:41 pace) <br>6.15 km per hour (9:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24660},{"data": [[30,46]], "label": "46 people finished between 7:01 and  7:11<br>3.73 miles per hour (16:04 pace) <br>6.01 km per hour (9:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25260},{"data": [[31,31]], "label": "31 people finished between 7:12 and  7:22<br>3.64 miles per hour (16:30 pace) <br>5.86 km per hour (10:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25920},{"data": [[32,18]], "label": "18 people finished between 7:22 and  7:32<br>3.55 miles per hour (16:52 pace) <br>5.72 km per hour (10:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26520},{"data": [[33,10]], "label": "10 people finished between 7:33 and  7:43<br>3.47 miles per hour (17:18 pace) <br>5.58 km per hour (10:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27180},{"data": [[34,9]], "label": "9 people finished between 7:44 and  7:54<br>3.39 miles per hour (17:43 pace) <br>5.45 km per hour (11:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27840},{"data": [[35,14]], "label": "14 people finished between 7:54 and  8:04<br>3.31 miles per hour (18:06 pace) <br>5.34 km per hour (11:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28440},{"data": [[36,6]], "label": "6 people finished between 8:04 and  8:14<br>3.25 miles per hour (18:29 pace) <br>5.23 km per hour (11:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29040},{"data": [[37,3]], "label": "3 people finished between 8:15 and  8:25<br>3.17 miles per hour (18:54 pace) <br>5.11 km per hour (11:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29700},{"data": [[38,5]], "label": "5 people finished between 8:50 and  9:00<br>2.96 miles per hour (20:14 pace) <br>4.77 km per hour (12:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31800},{"data": [[39,5]], "label": "5 people finished between 9:23 and  9:33<br>2.79 miles per hour (21:30 pace) <br>4.49 km per hour (13:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33780},{"data": [[40,2]], "label": "2 people finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,"8:00"],[39,""],[40,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
