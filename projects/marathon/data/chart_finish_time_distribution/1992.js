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
	
	var chart_data = {"seriesData":[{"data": [[1,20]], "label": "20 people finished between 2:09 and  2:19<br>12.18 miles per hour (4:55 pace) <br>19.61 km per hour (3:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7740},{"data": [[2,55]], "label": "55 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[3,145]], "label": "145 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[4,351]], "label": "351 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[5,658]], "label": "658 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[6,942]], "label": "942 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[7,1363]], "label": "1363 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[8,1946]], "label": "1946 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[9,2102]], "label": "2102 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[10,2636]], "label": "2636 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[11,2894]], "label": "2894 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[12,2286]], "label": "2286 people finished between 3:59 and  4:09<br>6.57 miles per hour (9:07 pace) <br>10.58 km per hour (5:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14340},{"data": [[13,2251]], "label": "2251 people finished between 4:09 and  4:19<br>6.31 miles per hour (9:30 pace) <br>10.16 km per hour (5:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14940},{"data": [[14,1972]], "label": "1972 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[15,1698]], "label": "1698 people finished between 4:29 and  4:39<br>5.84 miles per hour (10:16 pace) <br>9.4 km per hour (6:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16140},{"data": [[16,1455]], "label": "1455 people finished between 4:39 and  4:49<br>5.63 miles per hour (10:39 pace) <br>9.07 km per hour (6:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16740},{"data": [[17,1172]], "label": "1172 people finished between 4:50 and  5:00<br>5.42 miles per hour (11:04 pace) <br>8.72 km per hour (6:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17400},{"data": [[18,813]], "label": "813 people finished between 5:00 and  5:10<br>5.24 miles per hour (11:27 pace) <br>8.43 km per hour (7:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18000},{"data": [[19,626]], "label": "626 people finished between 5:10 and  5:20<br>5.07 miles per hour (11:50 pace) <br>8.16 km per hour (7:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18600},{"data": [[20,612]], "label": "612 people finished between 5:20 and  5:30<br>4.91 miles per hour (12:13 pace) <br>7.91 km per hour (7:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19200},{"data": [[21,368]], "label": "368 people finished between 5:30 and  5:40<br>4.76 miles per hour (12:35 pace) <br>7.67 km per hour (7:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19800},{"data": [[22,276]], "label": "276 people finished between 5:40 and  5:50<br>4.62 miles per hour (12:59 pace) <br>7.44 km per hour (8:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20400},{"data": [[23,276]], "label": "276 people finished between 5:50 and  6:00<br>4.49 miles per hour (13:22 pace) <br>7.23 km per hour (8:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21000},{"data": [[24,151]], "label": "151 people finished between 6:00 and  6:10<br>4.36 miles per hour (13:45 pace) <br>7.03 km per hour (8:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21600},{"data": [[25,144]], "label": "144 people finished between 6:10 and  6:20<br>4.25 miles per hour (14:07 pace) <br>6.84 km per hour (8:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22200},{"data": [[26,116]], "label": "116 people finished between 6:20 and  6:30<br>4.13 miles per hour (14:30 pace) <br>6.66 km per hour (9:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22800},{"data": [[27,99]], "label": "99 people finished between 6:30 and  6:40<br>4.03 miles per hour (14:54 pace) <br>6.49 km per hour (9:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23400},{"data": [[28,59]], "label": "59 people finished between 6:40 and  6:50<br>3.93 miles per hour (15:16 pace) <br>6.32 km per hour (9:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24000},{"data": [[29,53]], "label": "53 people finished between 6:50 and  7:00<br>3.83 miles per hour (15:39 pace) <br>6.17 km per hour (9:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24600},{"data": [[30,41]], "label": "41 people finished between 7:01 and  7:11<br>3.73 miles per hour (16:04 pace) <br>6.01 km per hour (9:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25260},{"data": [[31,34]], "label": "34 people finished between 7:11 and  7:21<br>3.64 miles per hour (16:27 pace) <br>5.87 km per hour (10:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25860},{"data": [[32,39]], "label": "39 people finished between 7:21 and  7:31<br>3.56 miles per hour (16:50 pace) <br>5.74 km per hour (10:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26460},{"data": [[33,31]], "label": "31 people finished between 7:31 and  7:41<br>3.48 miles per hour (17:13 pace) <br>5.61 km per hour (10:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27060},{"data": [[34,22]], "label": "22 people finished between 7:41 and  7:51<br>3.41 miles per hour (17:36 pace) <br>5.49 km per hour (10:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27660},{"data": [[35,7]], "label": "7 people finished between 7:53 and  8:03<br>3.32 miles per hour (18:04 pace) <br>5.35 km per hour (11:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28380},{"data": [[36,9]], "label": "9 people finished between 8:04 and  8:14<br>3.25 miles per hour (18:29 pace) <br>5.23 km per hour (11:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29040},{"data": [[37,2]], "label": "2 people finished between 8:15 and  8:25<br>3.17 miles per hour (18:54 pace) <br>5.11 km per hour (11:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29700},{"data": [[38,11]], "label": "11 people finished between 8:28 and  8:38<br>3.09 miles per hour (19:23 pace) <br>4.98 km per hour (12:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30480},{"data": [[39,4]], "label": "4 people finished between 8:41 and  8:51<br>3.02 miles per hour (19:53 pace) <br>4.86 km per hour (12:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31260},{"data": [[40,2]], "label": "2 people finished between 8:55 and  9:05<br>2.94 miles per hour (20:25 pace) <br>4.73 km per hour (12:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32100},{"data": [[41,3]], "label": "3 people finished between 9:05 and  9:15<br>2.88 miles per hour (20:49 pace) <br>4.64 km per hour (12:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32700},{"data": [[42,1]], "label": "1 person finished between 9:52 and  10:02<br>2.65 miles per hour (22:36 pace) <br>4.27 km per hour (14:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35520}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
