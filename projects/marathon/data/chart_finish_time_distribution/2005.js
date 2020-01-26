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
	
	var chart_data = {"seriesData":[{"data": [[1,6]], "label": "6 people finished between 1:26 and  1:36<br>18.27 miles per hour (3:16 pace) <br>29.41 km per hour (2:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5160},{"data": [[2,7]], "label": "7 people finished between 1:36 and  1:46<br>16.36 miles per hour (3:40 pace) <br>26.35 km per hour (2:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5760},{"data": [[3,8]], "label": "8 people finished between 1:48 and  1:58<br>14.55 miles per hour (4:07 pace) <br>23.42 km per hour (2:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6480},{"data": [[4,10]], "label": "10 people finished between 1:59 and  2:09<br>13.2 miles per hour (4:32 pace) <br>21.26 km per hour (2:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7140},{"data": [[5,29]], "label": "29 people finished between 2:09 and  2:19<br>12.18 miles per hour (4:55 pace) <br>19.61 km per hour (3:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7740},{"data": [[6,38]], "label": "38 people finished between 2:20 and  2:30<br>11.22 miles per hour (5:20 pace) <br>18.07 km per hour (3:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8400},{"data": [[7,72]], "label": "72 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[8,183]], "label": "183 people finished between 2:41 and  2:51<br>9.76 miles per hour (6:09 pace) <br>15.71 km per hour (3:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9660},{"data": [[9,346]], "label": "346 people finished between 2:51 and  3:01<br>9.19 miles per hour (6:31 pace) <br>14.79 km per hour (4:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10260},{"data": [[10,506]], "label": "506 people finished between 3:01 and  3:11<br>8.68 miles per hour (6:54 pace) <br>13.98 km per hour (4:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10860},{"data": [[11,765]], "label": "765 people finished between 3:11 and  3:21<br>8.22 miles per hour (7:17 pace) <br>13.24 km per hour (4:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11460},{"data": [[12,1115]], "label": "1115 people finished between 3:21 and  3:31<br>7.82 miles per hour (7:40 pace) <br>12.59 km per hour (4:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12060},{"data": [[13,1379]], "label": "1379 people finished between 3:31 and  3:41<br>7.44 miles per hour (8:03 pace) <br>11.99 km per hour (5:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12660},{"data": [[14,1831]], "label": "1831 people finished between 3:41 and  3:51<br>7.11 miles per hour (8:26 pace) <br>11.45 km per hour (5:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13260},{"data": [[15,2442]], "label": "2442 people finished between 3:51 and  4:01<br>6.8 miles per hour (8:49 pace) <br>10.95 km per hour (5:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13860},{"data": [[16,2393]], "label": "2393 people finished between 4:01 and  4:11<br>6.52 miles per hour (9:12 pace) <br>10.5 km per hour (5:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14460},{"data": [[17,2626]], "label": "2626 people finished between 4:11 and  4:21<br>6.26 miles per hour (9:35 pace) <br>10.08 km per hour (5:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15060},{"data": [[18,2766]], "label": "2766 people finished between 4:21 and  4:31<br>6.02 miles per hour (9:58 pace) <br>9.69 km per hour (6:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15660},{"data": [[19,2853]], "label": "2853 people finished between 4:31 and  4:41<br>5.8 miles per hour (10:20 pace) <br>9.33 km per hour (6:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16260},{"data": [[20,2656]], "label": "2656 people finished between 4:41 and  4:51<br>5.59 miles per hour (10:43 pace) <br>9 km per hour (6:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16860},{"data": [[21,2850]], "label": "2850 people finished between 4:51 and  5:01<br>5.4 miles per hour (11:06 pace) <br>8.69 km per hour (6:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17460},{"data": [[22,2286]], "label": "2286 people finished between 5:01 and  5:11<br>5.22 miles per hour (11:30 pace) <br>8.4 km per hour (7:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18060},{"data": [[23,1954]], "label": "1954 people finished between 5:11 and  5:21<br>5.05 miles per hour (11:52 pace) <br>8.13 km per hour (7:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18660},{"data": [[24,1642]], "label": "1642 people finished between 5:21 and  5:31<br>4.89 miles per hour (12:15 pace) <br>7.88 km per hour (7:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19260},{"data": [[25,1385]], "label": "1385 people finished between 5:31 and  5:41<br>4.75 miles per hour (12:38 pace) <br>7.64 km per hour (7:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19860},{"data": [[26,1113]], "label": "1113 people finished between 5:41 and  5:51<br>4.61 miles per hour (13:01 pace) <br>7.42 km per hour (8:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20460},{"data": [[27,865]], "label": "865 people finished between 5:51 and  6:01<br>4.48 miles per hour (13:24 pace) <br>7.21 km per hour (8:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21060},{"data": [[28,567]], "label": "567 people finished between 6:01 and  6:11<br>4.35 miles per hour (13:47 pace) <br>7.01 km per hour (8:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21660},{"data": [[29,463]], "label": "463 people finished between 6:11 and  6:21<br>4.23 miles per hour (14:10 pace) <br>6.82 km per hour (8:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22260},{"data": [[30,379]], "label": "379 people finished between 6:21 and  6:31<br>4.12 miles per hour (14:33 pace) <br>6.64 km per hour (9:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22860},{"data": [[31,295]], "label": "295 people finished between 6:32 and  6:42<br>4.01 miles per hour (14:58 pace) <br>6.45 km per hour (9:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23520},{"data": [[32,219]], "label": "219 people finished between 6:42 and  6:52<br>3.91 miles per hour (15:20 pace) <br>6.29 km per hour (9:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24120},{"data": [[33,181]], "label": "181 people finished between 6:52 and  7:02<br>3.81 miles per hour (15:44 pace) <br>6.14 km per hour (9:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24720},{"data": [[34,148]], "label": "148 people finished between 7:02 and  7:12<br>3.72 miles per hour (16:07 pace) <br>5.99 km per hour (10:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25320},{"data": [[35,103]], "label": "103 people finished between 7:12 and  7:22<br>3.64 miles per hour (16:30 pace) <br>5.86 km per hour (10:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25920},{"data": [[36,78]], "label": "78 people finished between 7:22 and  7:32<br>3.55 miles per hour (16:52 pace) <br>5.72 km per hour (10:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26520},{"data": [[37,61]], "label": "61 people finished between 7:33 and  7:43<br>3.47 miles per hour (17:18 pace) <br>5.58 km per hour (10:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27180},{"data": [[38,76]], "label": "76 people finished between 7:43 and  7:53<br>3.39 miles per hour (17:40 pace) <br>5.46 km per hour (10:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27780},{"data": [[39,37]], "label": "37 people finished between 7:53 and  8:03<br>3.32 miles per hour (18:04 pace) <br>5.35 km per hour (11:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28380},{"data": [[40,33]], "label": "33 people finished between 8:03 and  8:13<br>3.25 miles per hour (18:26 pace) <br>5.24 km per hour (11:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28980},{"data": [[41,26]], "label": "26 people finished between 8:13 and  8:23<br>3.19 miles per hour (18:49 pace) <br>5.13 km per hour (11:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29580},{"data": [[42,7]], "label": "7 people finished between 8:24 and  8:34<br>3.12 miles per hour (19:15 pace) <br>5.02 km per hour (11:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30240},{"data": [[43,4]], "label": "4 people finished between 8:42 and  8:52<br>3.01 miles per hour (19:56 pace) <br>4.85 km per hour (12:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31320},{"data": [[44,2]], "label": "2 people finished between 9:44 and  9:54<br>2.69 miles per hour (22:18 pace) <br>4.33 km per hour (13:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35040},{"data": [[45,2]], "label": "2 people finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"4:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,""],[44,"9:00"],[45,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
