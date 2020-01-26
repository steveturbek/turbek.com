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
	
	var chart_data = {"seriesData":[{"data": [[1,6]], "label": "6 people finished between 1:32 and  1:42<br>17.07 miles per hour (3:30 pace) <br>27.5 km per hour (2:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5520},{"data": [[2,10]], "label": "10 people finished between 1:43 and  1:53<br>15.25 miles per hour (3:55 pace) <br>24.56 km per hour (2:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6180},{"data": [[3,11]], "label": "11 people finished between 1:56 and  2:06<br>13.54 miles per hour (4:25 pace) <br>21.81 km per hour (2:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6960},{"data": [[4,21]], "label": "21 people finished between 2:06 and  2:16<br>12.47 miles per hour (4:48 pace) <br>20.08 km per hour (2:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7560},{"data": [[5,29]], "label": "29 people finished between 2:17 and  2:27<br>11.47 miles per hour (5:13 pace) <br>18.46 km per hour (3:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8220},{"data": [[6,52]], "label": "52 people finished between 2:28 and  2:38<br>10.61 miles per hour (5:39 pace) <br>17.09 km per hour (3:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8880},{"data": [[7,88]], "label": "88 people finished between 2:38 and  2:48<br>9.94 miles per hour (6:01 pace) <br>16.01 km per hour (3:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9480},{"data": [[8,209]], "label": "209 people finished between 2:48 and  2:58<br>9.35 miles per hour (6:25 pace) <br>15.06 km per hour (3:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10080},{"data": [[9,333]], "label": "333 people finished between 2:58 and  3:08<br>8.83 miles per hour (6:47 pace) <br>14.21 km per hour (4:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10680},{"data": [[10,652]], "label": "652 people finished between 3:08 and  3:18<br>8.36 miles per hour (7:10 pace) <br>13.46 km per hour (4:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11280},{"data": [[11,929]], "label": "929 people finished between 3:18 and  3:28<br>7.93 miles per hour (7:33 pace) <br>12.78 km per hour (4:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11880},{"data": [[12,1257]], "label": "1257 people finished between 3:28 and  3:38<br>7.55 miles per hour (7:56 pace) <br>12.16 km per hour (4:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12480},{"data": [[13,1670]], "label": "1670 people finished between 3:38 and  3:48<br>7.21 miles per hour (8:19 pace) <br>11.6 km per hour (5:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13080},{"data": [[14,2212]], "label": "2212 people finished between 3:48 and  3:58<br>6.89 miles per hour (8:42 pace) <br>11.09 km per hour (5:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13680},{"data": [[15,2396]], "label": "2396 people finished between 3:58 and  4:08<br>6.6 miles per hour (9:05 pace) <br>10.63 km per hour (5:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14280},{"data": [[16,2503]], "label": "2503 people finished between 4:08 and  4:18<br>6.33 miles per hour (9:28 pace) <br>10.2 km per hour (5:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14880},{"data": [[17,2702]], "label": "2702 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[18,2697]], "label": "2697 people finished between 4:29 and  4:39<br>5.84 miles per hour (10:16 pace) <br>9.4 km per hour (6:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16140},{"data": [[19,2733]], "label": "2733 people finished between 4:39 and  4:49<br>5.63 miles per hour (10:39 pace) <br>9.07 km per hour (6:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16740},{"data": [[20,2644]], "label": "2644 people finished between 4:49 and  4:59<br>5.44 miles per hour (11:02 pace) <br>8.75 km per hour (6:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17340},{"data": [[21,2338]], "label": "2338 people finished between 4:59 and  5:09<br>5.25 miles per hour (11:25 pace) <br>8.46 km per hour (7:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17940},{"data": [[22,1819]], "label": "1819 people finished between 5:09 and  5:19<br>5.08 miles per hour (11:48 pace) <br>8.19 km per hour (7:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18540},{"data": [[23,1615]], "label": "1615 people finished between 5:19 and  5:29<br>4.92 miles per hour (12:10 pace) <br>7.93 km per hour (7:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19140},{"data": [[24,1264]], "label": "1264 people finished between 5:29 and  5:39<br>4.77 miles per hour (12:34 pace) <br>7.69 km per hour (7:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19740},{"data": [[25,1052]], "label": "1052 people finished between 5:39 and  5:49<br>4.63 miles per hour (12:56 pace) <br>7.46 km per hour (8:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20340},{"data": [[26,854]], "label": "854 people finished between 5:49 and  5:59<br>4.5 miles per hour (13:19 pace) <br>7.25 km per hour (8:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20940},{"data": [[27,590]], "label": "590 people finished between 5:59 and  6:09<br>4.38 miles per hour (13:42 pace) <br>7.05 km per hour (8:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21540},{"data": [[28,442]], "label": "442 people finished between 6:09 and  6:19<br>4.26 miles per hour (14:05 pace) <br>6.86 km per hour (8:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22140},{"data": [[29,354]], "label": "354 people finished between 6:19 and  6:29<br>4.14 miles per hour (14:28 pace) <br>6.67 km per hour (8:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22740},{"data": [[30,303]], "label": "303 people finished between 6:29 and  6:39<br>4.04 miles per hour (14:51 pace) <br>6.5 km per hour (9:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23340},{"data": [[31,222]], "label": "222 people finished between 6:39 and  6:49<br>3.94 miles per hour (15:14 pace) <br>6.34 km per hour (9:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23940},{"data": [[32,211]], "label": "211 people finished between 6:49 and  6:59<br>3.84 miles per hour (15:37 pace) <br>6.18 km per hour (9:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24540},{"data": [[33,110]], "label": "110 people finished between 6:59 and  7:09<br>3.75 miles per hour (16:00 pace) <br>6.04 km per hour (9:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25140},{"data": [[34,108]], "label": "108 people finished between 7:09 and  7:19<br>3.66 miles per hour (16:23 pace) <br>5.9 km per hour (10:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25740},{"data": [[35,79]], "label": "79 people finished between 7:20 and  7:30<br>3.57 miles per hour (16:48 pace) <br>5.75 km per hour (10:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26400},{"data": [[36,39]], "label": "39 people finished between 7:30 and  7:40<br>3.49 miles per hour (17:11 pace) <br>5.62 km per hour (10:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27000},{"data": [[37,49]], "label": "49 people finished between 7:40 and  7:50<br>3.41 miles per hour (17:34 pace) <br>5.5 km per hour (10:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27600},{"data": [[38,34]], "label": "34 people finished between 7:50 and  8:00<br>3.34 miles per hour (17:56 pace) <br>5.38 km per hour (11:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28200},{"data": [[39,24]], "label": "24 people finished between 8:00 and  8:10<br>3.27 miles per hour (18:19 pace) <br>5.27 km per hour (11:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28800},{"data": [[40,17]], "label": "17 people finished between 8:11 and  8:21<br>3.2 miles per hour (18:45 pace) <br>5.15 km per hour (11:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29460},{"data": [[41,10]], "label": "10 people finished between 8:23 and  8:33<br>3.12 miles per hour (19:12 pace) <br>5.03 km per hour (11:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30180},{"data": [[42,7]], "label": "7 people finished between 8:34 and  8:44<br>3.06 miles per hour (19:37 pace) <br>4.92 km per hour (12:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30840},{"data": [[43,4]], "label": "4 people finished between 8:44 and  8:54<br>3 miles per hour (20:00 pace) <br>4.83 km per hour (12:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31440},{"data": [[44,1]], "label": "1 person finished between 9:22 and  9:32<br>2.8 miles per hour (21:28 pace) <br>4.5 km per hour (13:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33720}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,"4:00"],[21,""],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"5:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,""],[44,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
