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
	
	var chart_data = {"seriesData":[{"data": [[1,2]], "label": "2 people finished between 1:50 and  2:00<br>14.28 miles per hour (4:12 pace) <br>23 km per hour (2:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6600},{"data": [[2,15]], "label": "15 people finished between 2:04 and  2:14<br>12.67 miles per hour (4:44 pace) <br>20.4 km per hour (2:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7440},{"data": [[3,27]], "label": "27 people finished between 2:17 and  2:27<br>11.47 miles per hour (5:13 pace) <br>18.46 km per hour (3:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8220},{"data": [[4,69]], "label": "69 people finished between 2:28 and  2:38<br>10.61 miles per hour (5:39 pace) <br>17.09 km per hour (3:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8880},{"data": [[5,167]], "label": "167 people finished between 2:38 and  2:48<br>9.94 miles per hour (6:01 pace) <br>16.01 km per hour (3:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9480},{"data": [[6,351]], "label": "351 people finished between 2:48 and  2:58<br>9.35 miles per hour (6:25 pace) <br>15.06 km per hour (3:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10080},{"data": [[7,519]], "label": "519 people finished between 2:58 and  3:08<br>8.83 miles per hour (6:47 pace) <br>14.21 km per hour (4:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10680},{"data": [[8,784]], "label": "784 people finished between 3:08 and  3:18<br>8.36 miles per hour (7:10 pace) <br>13.46 km per hour (4:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11280},{"data": [[9,1179]], "label": "1179 people finished between 3:18 and  3:28<br>7.93 miles per hour (7:33 pace) <br>12.78 km per hour (4:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11880},{"data": [[10,1686]], "label": "1686 people finished between 3:28 and  3:38<br>7.55 miles per hour (7:56 pace) <br>12.16 km per hour (4:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12480},{"data": [[11,2004]], "label": "2004 people finished between 3:38 and  3:48<br>7.21 miles per hour (8:19 pace) <br>11.6 km per hour (5:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13080},{"data": [[12,2647]], "label": "2647 people finished between 3:48 and  3:58<br>6.89 miles per hour (8:42 pace) <br>11.09 km per hour (5:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13680},{"data": [[13,2428]], "label": "2428 people finished between 3:58 and  4:08<br>6.6 miles per hour (9:05 pace) <br>10.63 km per hour (5:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14280},{"data": [[14,2648]], "label": "2648 people finished between 4:08 and  4:18<br>6.33 miles per hour (9:28 pace) <br>10.2 km per hour (5:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14880},{"data": [[15,2504]], "label": "2504 people finished between 4:18 and  4:28<br>6.09 miles per hour (9:50 pace) <br>9.8 km per hour (6:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15480},{"data": [[16,2404]], "label": "2404 people finished between 4:28 and  4:38<br>5.86 miles per hour (10:14 pace) <br>9.44 km per hour (6:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16080},{"data": [[17,2190]], "label": "2190 people finished between 4:38 and  4:48<br>5.65 miles per hour (10:37 pace) <br>9.1 km per hour (6:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16680},{"data": [[18,2057]], "label": "2057 people finished between 4:48 and  4:58<br>5.45 miles per hour (11:00 pace) <br>8.78 km per hour (6:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17280},{"data": [[19,1544]], "label": "1544 people finished between 4:58 and  5:08<br>5.27 miles per hour (11:22 pace) <br>8.49 km per hour (7:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17880},{"data": [[20,1210]], "label": "1210 people finished between 5:08 and  5:18<br>5.1 miles per hour (11:45 pace) <br>8.21 km per hour (7:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18480},{"data": [[21,913]], "label": "913 people finished between 5:18 and  5:28<br>4.94 miles per hour (12:09 pace) <br>7.95 km per hour (7:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19080},{"data": [[22,647]], "label": "647 people finished between 5:28 and  5:38<br>4.79 miles per hour (12:31 pace) <br>7.71 km per hour (7:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19680},{"data": [[23,604]], "label": "604 people finished between 5:38 and  5:48<br>4.65 miles per hour (12:54 pace) <br>7.48 km per hour (8:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20280},{"data": [[24,407]], "label": "407 people finished between 5:48 and  5:58<br>4.51 miles per hour (13:17 pace) <br>7.27 km per hour (8:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20880},{"data": [[25,279]], "label": "279 people finished between 5:58 and  6:08<br>4.39 miles per hour (13:40 pace) <br>7.07 km per hour (8:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21480},{"data": [[26,198]], "label": "198 people finished between 6:08 and  6:18<br>4.27 miles per hour (14:03 pace) <br>6.87 km per hour (8:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22080},{"data": [[27,180]], "label": "180 people finished between 6:18 and  6:28<br>4.16 miles per hour (14:26 pace) <br>6.69 km per hour (8:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22680},{"data": [[28,144]], "label": "144 people finished between 6:29 and  6:39<br>4.04 miles per hour (14:51 pace) <br>6.5 km per hour (9:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23340},{"data": [[29,135]], "label": "135 people finished between 6:39 and  6:49<br>3.94 miles per hour (15:14 pace) <br>6.34 km per hour (9:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23940},{"data": [[30,103]], "label": "103 people finished between 6:49 and  6:59<br>3.84 miles per hour (15:37 pace) <br>6.18 km per hour (9:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24540},{"data": [[31,86]], "label": "86 people finished between 6:59 and  7:09<br>3.75 miles per hour (16:00 pace) <br>6.04 km per hour (9:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25140},{"data": [[32,54]], "label": "54 people finished between 7:09 and  7:19<br>3.66 miles per hour (16:23 pace) <br>5.9 km per hour (10:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25740},{"data": [[33,47]], "label": "47 people finished between 7:19 and  7:29<br>3.58 miles per hour (16:46 pace) <br>5.76 km per hour (10:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26340},{"data": [[34,42]], "label": "42 people finished between 7:30 and  7:40<br>3.49 miles per hour (17:11 pace) <br>5.62 km per hour (10:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27000},{"data": [[35,45]], "label": "45 people finished between 7:40 and  7:50<br>3.41 miles per hour (17:34 pace) <br>5.5 km per hour (10:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27600},{"data": [[36,31]], "label": "31 people finished between 7:51 and  8:01<br>3.34 miles per hour (17:59 pace) <br>5.37 km per hour (11:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28260},{"data": [[37,32]], "label": "32 people finished between 8:02 and  8:12<br>3.26 miles per hour (18:24 pace) <br>5.25 km per hour (11:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28920},{"data": [[38,13]], "label": "13 people finished between 8:12 and  8:22<br>3.19 miles per hour (18:47 pace) <br>5.14 km per hour (11:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29520},{"data": [[39,22]], "label": "22 people finished between 8:22 and  8:32<br>3.13 miles per hour (19:10 pace) <br>5.04 km per hour (11:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30120},{"data": [[40,10]], "label": "10 people finished between 8:33 and  8:43<br>3.06 miles per hour (19:35 pace) <br>4.93 km per hour (12:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30780},{"data": [[41,4]], "label": "4 people finished between 8:43 and  8:53<br>3 miles per hour (19:58 pace) <br>4.84 km per hour (12:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31380},{"data": [[42,5]], "label": "5 people finished between 8:54 and  9:04<br>2.94 miles per hour (20:23 pace) <br>4.74 km per hour (12:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32040},{"data": [[43,6]], "label": "6 people finished between 9:11 and  9:21<br>2.85 miles per hour (21:03 pace) <br>4.59 km per hour (13:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33060},{"data": [[44,4]], "label": "4 people finished between 9:21 and  9:31<br>2.8 miles per hour (21:25 pace) <br>4.51 km per hour (13:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33660},{"data": [[45,4]], "label": "4 people finished between 9:38 and  9:48<br>2.72 miles per hour (22:04 pace) <br>4.38 km per hour (13:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34680},{"data": [[46,11]], "label": "11 people finished between 9:58 and  10:08<br>2.63 miles per hour (22:50 pace) <br>4.23 km per hour (14:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35880}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,""],[44,""],[45,"9:00"],[46,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
