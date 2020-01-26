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
	
	var chart_data = {"seriesData":[{"data": [[1,20]], "label": "20 people finished between 2:08 and  2:18<br>12.27 miles per hour (4:53 pace) <br>19.76 km per hour (3:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7680},{"data": [[2,47]], "label": "47 people finished between 2:18 and  2:28<br>11.38 miles per hour (5:16 pace) <br>18.33 km per hour (3:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8280},{"data": [[3,157]], "label": "157 people finished between 2:28 and  2:38<br>10.61 miles per hour (5:39 pace) <br>17.09 km per hour (3:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8880},{"data": [[4,312]], "label": "312 people finished between 2:38 and  2:48<br>9.94 miles per hour (6:01 pace) <br>16.01 km per hour (3:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9480},{"data": [[5,620]], "label": "620 people finished between 2:48 and  2:58<br>9.35 miles per hour (6:25 pace) <br>15.06 km per hour (3:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10080},{"data": [[6,883]], "label": "883 people finished between 2:58 and  3:08<br>8.83 miles per hour (6:47 pace) <br>14.21 km per hour (4:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10680},{"data": [[7,1318]], "label": "1318 people finished between 3:08 and  3:18<br>8.36 miles per hour (7:10 pace) <br>13.46 km per hour (4:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11280},{"data": [[8,1766]], "label": "1766 people finished between 3:18 and  3:28<br>7.93 miles per hour (7:33 pace) <br>12.78 km per hour (4:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11880},{"data": [[9,2063]], "label": "2063 people finished between 3:28 and  3:38<br>7.55 miles per hour (7:56 pace) <br>12.16 km per hour (4:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12480},{"data": [[10,2406]], "label": "2406 people finished between 3:38 and  3:48<br>7.21 miles per hour (8:19 pace) <br>11.6 km per hour (5:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13080},{"data": [[11,2539]], "label": "2539 people finished between 3:48 and  3:58<br>6.89 miles per hour (8:42 pace) <br>11.09 km per hour (5:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13680},{"data": [[12,2126]], "label": "2126 people finished between 3:58 and  4:08<br>6.6 miles per hour (9:05 pace) <br>10.63 km per hour (5:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14280},{"data": [[13,2142]], "label": "2142 people finished between 4:08 and  4:18<br>6.33 miles per hour (9:28 pace) <br>10.2 km per hour (5:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14880},{"data": [[14,1791]], "label": "1791 people finished between 4:18 and  4:28<br>6.09 miles per hour (9:50 pace) <br>9.8 km per hour (6:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15480},{"data": [[15,1414]], "label": "1414 people finished between 4:28 and  4:38<br>5.86 miles per hour (10:14 pace) <br>9.44 km per hour (6:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16080},{"data": [[16,1164]], "label": "1164 people finished between 4:38 and  4:48<br>5.65 miles per hour (10:37 pace) <br>9.1 km per hour (6:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16680},{"data": [[17,967]], "label": "967 people finished between 4:48 and  4:58<br>5.45 miles per hour (11:00 pace) <br>8.78 km per hour (6:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17280},{"data": [[18,627]], "label": "627 people finished between 4:58 and  5:08<br>5.27 miles per hour (11:22 pace) <br>8.49 km per hour (7:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17880},{"data": [[19,512]], "label": "512 people finished between 5:08 and  5:18<br>5.1 miles per hour (11:45 pace) <br>8.21 km per hour (7:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18480},{"data": [[20,443]], "label": "443 people finished between 5:19 and  5:29<br>4.92 miles per hour (12:10 pace) <br>7.93 km per hour (7:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19140},{"data": [[21,332]], "label": "332 people finished between 5:29 and  5:39<br>4.77 miles per hour (12:34 pace) <br>7.69 km per hour (7:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19740},{"data": [[22,238]], "label": "238 people finished between 5:39 and  5:49<br>4.63 miles per hour (12:56 pace) <br>7.46 km per hour (8:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20340},{"data": [[23,167]], "label": "167 people finished between 5:49 and  5:59<br>4.5 miles per hour (13:19 pace) <br>7.25 km per hour (8:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20940},{"data": [[24,126]], "label": "126 people finished between 5:59 and  6:09<br>4.38 miles per hour (13:42 pace) <br>7.05 km per hour (8:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21540},{"data": [[25,106]], "label": "106 people finished between 6:09 and  6:19<br>4.26 miles per hour (14:05 pace) <br>6.86 km per hour (8:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22140},{"data": [[26,74]], "label": "74 people finished between 6:19 and  6:29<br>4.14 miles per hour (14:28 pace) <br>6.67 km per hour (8:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22740},{"data": [[27,43]], "label": "43 people finished between 6:29 and  6:39<br>4.04 miles per hour (14:51 pace) <br>6.5 km per hour (9:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23340},{"data": [[28,39]], "label": "39 people finished between 6:39 and  6:49<br>3.94 miles per hour (15:14 pace) <br>6.34 km per hour (9:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23940},{"data": [[29,40]], "label": "40 people finished between 6:50 and  7:00<br>3.83 miles per hour (15:39 pace) <br>6.17 km per hour (9:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24600},{"data": [[30,38]], "label": "38 people finished between 7:00 and  7:10<br>3.74 miles per hour (16:02 pace) <br>6.02 km per hour (9:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25200},{"data": [[31,25]], "label": "25 people finished between 7:11 and  7:21<br>3.64 miles per hour (16:27 pace) <br>5.87 km per hour (10:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25860},{"data": [[32,11]], "label": "11 people finished between 7:21 and  7:31<br>3.56 miles per hour (16:50 pace) <br>5.74 km per hour (10:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26460},{"data": [[33,18]], "label": "18 people finished between 7:32 and  7:42<br>3.48 miles per hour (17:15 pace) <br>5.6 km per hour (10:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27120},{"data": [[34,3]], "label": "3 people finished between 7:45 and  7:55<br>3.38 miles per hour (17:45 pace) <br>5.44 km per hour (11:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27900},{"data": [[35,6]], "label": "6 people finished between 7:58 and  8:08<br>3.29 miles per hour (18:15 pace) <br>5.29 km per hour (11:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28680},{"data": [[36,2]], "label": "2 people finished between 8:21 and  8:31<br>3.14 miles per hour (19:08 pace) <br>5.05 km per hour (11:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30060},{"data": [[37,2]], "label": "2 people finished between 8:47 and  8:57<br>2.98 miles per hour (20:07 pace) <br>4.8 km per hour (12:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31620},{"data": [[38,1]], "label": "1 person finished between 9:51 and  10:01<br>2.66 miles per hour (22:34 pace) <br>4.28 km per hour (14:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35460}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,"8:00"],[38,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
