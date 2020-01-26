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
	
	var chart_data = {"seriesData":[{"data": [[1,4]], "label": "4 people finished between 1:27 and  1:37<br>18.06 miles per hour (3:19 pace) <br>29.08 km per hour (2:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5220},{"data": [[2,14]], "label": "14 people finished between 1:37 and  1:47<br>16.19 miles per hour (3:42 pace) <br>26.08 km per hour (2:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5820},{"data": [[3,14]], "label": "14 people finished between 1:47 and  1:57<br>14.68 miles per hour (4:05 pace) <br>23.64 km per hour (2:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6420},{"data": [[4,7]], "label": "7 people finished between 2:00 and  2:10<br>13.09 miles per hour (4:34 pace) <br>21.08 km per hour (2:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7200},{"data": [[5,31]], "label": "31 people finished between 2:10 and  2:20<br>12.08 miles per hour (4:58 pace) <br>19.46 km per hour (3:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7800},{"data": [[6,48]], "label": "48 people finished between 2:20 and  2:30<br>11.22 miles per hour (5:20 pace) <br>18.07 km per hour (3:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8400},{"data": [[7,84]], "label": "84 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[8,280]], "label": "280 people finished between 2:41 and  2:51<br>9.76 miles per hour (6:09 pace) <br>15.71 km per hour (3:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9660},{"data": [[9,537]], "label": "537 people finished between 2:51 and  3:01<br>9.19 miles per hour (6:31 pace) <br>14.79 km per hour (4:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10260},{"data": [[10,683]], "label": "683 people finished between 3:01 and  3:11<br>8.68 miles per hour (6:54 pace) <br>13.98 km per hour (4:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10860},{"data": [[11,1115]], "label": "1115 people finished between 3:11 and  3:21<br>8.22 miles per hour (7:17 pace) <br>13.24 km per hour (4:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11460},{"data": [[12,1720]], "label": "1720 people finished between 3:21 and  3:31<br>7.82 miles per hour (7:40 pace) <br>12.59 km per hour (4:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12060},{"data": [[13,2013]], "label": "2013 people finished between 3:31 and  3:41<br>7.44 miles per hour (8:03 pace) <br>11.99 km per hour (5:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12660},{"data": [[14,2603]], "label": "2603 people finished between 3:41 and  3:51<br>7.11 miles per hour (8:26 pace) <br>11.45 km per hour (5:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13260},{"data": [[15,3479]], "label": "3479 people finished between 3:51 and  4:01<br>6.8 miles per hour (8:49 pace) <br>10.95 km per hour (5:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13860},{"data": [[16,2972]], "label": "2972 people finished between 4:01 and  4:11<br>6.52 miles per hour (9:12 pace) <br>10.5 km per hour (5:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14460},{"data": [[17,3066]], "label": "3066 people finished between 4:11 and  4:21<br>6.26 miles per hour (9:35 pace) <br>10.08 km per hour (5:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15060},{"data": [[18,3237]], "label": "3237 people finished between 4:21 and  4:31<br>6.02 miles per hour (9:58 pace) <br>9.69 km per hour (6:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15660},{"data": [[19,2906]], "label": "2906 people finished between 4:31 and  4:41<br>5.8 miles per hour (10:20 pace) <br>9.33 km per hour (6:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16260},{"data": [[20,2766]], "label": "2766 people finished between 4:41 and  4:51<br>5.59 miles per hour (10:43 pace) <br>9 km per hour (6:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16860},{"data": [[21,2286]], "label": "2286 people finished between 4:51 and  5:01<br>5.4 miles per hour (11:06 pace) <br>8.69 km per hour (6:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17460},{"data": [[22,1595]], "label": "1595 people finished between 5:01 and  5:11<br>5.22 miles per hour (11:30 pace) <br>8.4 km per hour (7:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18060},{"data": [[23,1350]], "label": "1350 people finished between 5:11 and  5:21<br>5.05 miles per hour (11:52 pace) <br>8.13 km per hour (7:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18660},{"data": [[24,1198]], "label": "1198 people finished between 5:21 and  5:31<br>4.89 miles per hour (12:15 pace) <br>7.88 km per hour (7:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19260},{"data": [[25,888]], "label": "888 people finished between 5:31 and  5:41<br>4.75 miles per hour (12:38 pace) <br>7.64 km per hour (7:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19860},{"data": [[26,688]], "label": "688 people finished between 5:41 and  5:51<br>4.61 miles per hour (13:01 pace) <br>7.42 km per hour (8:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20460},{"data": [[27,513]], "label": "513 people finished between 5:51 and  6:01<br>4.48 miles per hour (13:24 pace) <br>7.21 km per hour (8:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21060},{"data": [[28,337]], "label": "337 people finished between 6:01 and  6:11<br>4.35 miles per hour (13:47 pace) <br>7.01 km per hour (8:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21660},{"data": [[29,314]], "label": "314 people finished between 6:11 and  6:21<br>4.23 miles per hour (14:10 pace) <br>6.82 km per hour (8:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22260},{"data": [[30,243]], "label": "243 people finished between 6:21 and  6:31<br>4.12 miles per hour (14:33 pace) <br>6.64 km per hour (9:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22860},{"data": [[31,188]], "label": "188 people finished between 6:31 and  6:41<br>4.02 miles per hour (14:55 pace) <br>6.47 km per hour (9:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23460},{"data": [[32,191]], "label": "191 people finished between 6:41 and  6:51<br>3.92 miles per hour (15:19 pace) <br>6.31 km per hour (9:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24060},{"data": [[33,132]], "label": "132 people finished between 6:51 and  7:01<br>3.82 miles per hour (15:41 pace) <br>6.15 km per hour (9:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24660},{"data": [[34,83]], "label": "83 people finished between 7:02 and  7:12<br>3.72 miles per hour (16:07 pace) <br>5.99 km per hour (10:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25320},{"data": [[35,69]], "label": "69 people finished between 7:12 and  7:22<br>3.64 miles per hour (16:30 pace) <br>5.86 km per hour (10:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25920},{"data": [[36,66]], "label": "66 people finished between 7:22 and  7:32<br>3.55 miles per hour (16:52 pace) <br>5.72 km per hour (10:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26520},{"data": [[37,40]], "label": "40 people finished between 7:32 and  7:42<br>3.48 miles per hour (17:15 pace) <br>5.6 km per hour (10:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27120},{"data": [[38,33]], "label": "33 people finished between 7:42 and  7:52<br>3.4 miles per hour (17:38 pace) <br>5.48 km per hour (10:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27720},{"data": [[39,17]], "label": "17 people finished between 7:53 and  8:03<br>3.32 miles per hour (18:04 pace) <br>5.35 km per hour (11:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28380},{"data": [[40,11]], "label": "11 people finished between 8:04 and  8:14<br>3.25 miles per hour (18:29 pace) <br>5.23 km per hour (11:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29040},{"data": [[41,5]], "label": "5 people finished between 8:16 and  8:26<br>3.17 miles per hour (18:56 pace) <br>5.1 km per hour (11:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29760},{"data": [[42,1]], "label": "1 person finished between 8:30 and  8:40<br>3.08 miles per hour (19:28 pace) <br>4.96 km per hour (12:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30600},{"data": [[43,1]], "label": "1 person finished between 9:51 and  10:01<br>2.66 miles per hour (22:34 pace) <br>4.28 km per hour (14:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35460}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"4:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
