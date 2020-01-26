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
	
	var chart_data = {"seriesData":[{"data": [[1,13]], "label": "13 people finished between 2:03 and  2:13<br>12.77 miles per hour (4:42 pace) <br>20.57 km per hour (2:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7380},{"data": [[2,22]], "label": "22 people finished between 2:13 and  2:23<br>11.81 miles per hour (5:04 pace) <br>19.02 km per hour (3:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7980},{"data": [[3,40]], "label": "40 people finished between 2:23 and  2:33<br>10.99 miles per hour (5:27 pace) <br>17.69 km per hour (3:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8580},{"data": [[4,120]], "label": "120 people finished between 2:33 and  2:43<br>10.27 miles per hour (5:50 pace) <br>16.53 km per hour (3:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9180},{"data": [[5,239]], "label": "239 people finished between 2:43 and  2:53<br>9.64 miles per hour (6:13 pace) <br>15.52 km per hour (3:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9780},{"data": [[6,477]], "label": "477 people finished between 2:54 and  3:04<br>9.03 miles per hour (6:39 pace) <br>14.54 km per hour (4:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10440},{"data": [[7,673]], "label": "673 people finished between 3:04 and  3:14<br>8.54 miles per hour (7:01 pace) <br>13.75 km per hour (4:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11040},{"data": [[8,1005]], "label": "1005 people finished between 3:14 and  3:24<br>8.1 miles per hour (7:24 pace) <br>13.04 km per hour (4:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11640},{"data": [[9,1462]], "label": "1462 people finished between 3:24 and  3:34<br>7.7 miles per hour (7:47 pace) <br>12.4 km per hour (4:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12240},{"data": [[10,1812]], "label": "1812 people finished between 3:34 and  3:44<br>7.34 miles per hour (8:10 pace) <br>11.82 km per hour (5:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12840},{"data": [[11,2303]], "label": "2303 people finished between 3:44 and  3:54<br>7.01 miles per hour (8:33 pace) <br>11.29 km per hour (5:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13440},{"data": [[12,2665]], "label": "2665 people finished between 3:54 and  4:04<br>6.71 miles per hour (8:56 pace) <br>10.81 km per hour (5:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14040},{"data": [[13,2407]], "label": "2407 people finished between 4:04 and  4:14<br>6.44 miles per hour (9:19 pace) <br>10.37 km per hour (5:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14640},{"data": [[14,2332]], "label": "2332 people finished between 4:14 and  4:24<br>6.18 miles per hour (9:41 pace) <br>9.96 km per hour (6:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15240},{"data": [[15,2276]], "label": "2276 people finished between 4:24 and  4:34<br>5.95 miles per hour (10:04 pace) <br>9.58 km per hour (6:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15840},{"data": [[16,2110]], "label": "2110 people finished between 4:34 and  4:44<br>5.73 miles per hour (10:28 pace) <br>9.23 km per hour (6:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16440},{"data": [[17,1901]], "label": "1901 people finished between 4:44 and  4:54<br>5.53 miles per hour (10:50 pace) <br>8.91 km per hour (6:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17040},{"data": [[18,1522]], "label": "1522 people finished between 4:54 and  5:04<br>5.34 miles per hour (11:13 pace) <br>8.6 km per hour (6:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17640},{"data": [[19,1037]], "label": "1037 people finished between 5:04 and  5:14<br>5.17 miles per hour (11:36 pace) <br>8.32 km per hour (7:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18240},{"data": [[20,798]], "label": "798 people finished between 5:14 and  5:24<br>5 miles per hour (11:59 pace) <br>8.06 km per hour (7:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18840},{"data": [[21,665]], "label": "665 people finished between 5:24 and  5:34<br>4.85 miles per hour (12:22 pace) <br>7.81 km per hour (7:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19440},{"data": [[22,547]], "label": "547 people finished between 5:34 and  5:44<br>4.7 miles per hour (12:45 pace) <br>7.57 km per hour (7:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20040},{"data": [[23,459]], "label": "459 people finished between 5:44 and  5:54<br>4.57 miles per hour (13:08 pace) <br>7.35 km per hour (8:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20640},{"data": [[24,282]], "label": "282 people finished between 5:54 and  6:04<br>4.44 miles per hour (13:31 pace) <br>7.15 km per hour (8:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21240},{"data": [[25,204]], "label": "204 people finished between 6:04 and  6:14<br>4.32 miles per hour (13:54 pace) <br>6.95 km per hour (8:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21840},{"data": [[26,156]], "label": "156 people finished between 6:14 and  6:24<br>4.2 miles per hour (14:16 pace) <br>6.76 km per hour (8:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22440},{"data": [[27,124]], "label": "124 people finished between 6:24 and  6:34<br>4.09 miles per hour (14:40 pace) <br>6.59 km per hour (9:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23040},{"data": [[28,140]], "label": "140 people finished between 6:34 and  6:44<br>3.99 miles per hour (15:03 pace) <br>6.42 km per hour (9:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23640},{"data": [[29,93]], "label": "93 people finished between 6:44 and  6:54<br>3.89 miles per hour (15:25 pace) <br>6.26 km per hour (9:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24240},{"data": [[30,62]], "label": "62 people finished between 6:54 and  7:04<br>3.79 miles per hour (15:48 pace) <br>6.11 km per hour (9:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24840},{"data": [[31,74]], "label": "74 people finished between 7:05 and  7:15<br>3.7 miles per hour (16:13 pace) <br>5.95 km per hour (10:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25500},{"data": [[32,48]], "label": "48 people finished between 7:15 and  7:25<br>3.61 miles per hour (16:36 pace) <br>5.82 km per hour (10:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26100},{"data": [[33,43]], "label": "43 people finished between 7:25 and  7:35<br>3.53 miles per hour (17:00 pace) <br>5.68 km per hour (10:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26700},{"data": [[34,35]], "label": "35 people finished between 7:35 and  7:45<br>3.45 miles per hour (17:22 pace) <br>5.56 km per hour (10:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27300},{"data": [[35,25]], "label": "25 people finished between 7:47 and  7:57<br>3.36 miles per hour (17:50 pace) <br>5.42 km per hour (11:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28020},{"data": [[36,11]], "label": "11 people finished between 7:58 and  8:08<br>3.29 miles per hour (18:15 pace) <br>5.29 km per hour (11:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28680},{"data": [[37,5]], "label": "5 people finished between 8:08 and  8:18<br>3.22 miles per hour (18:38 pace) <br>5.18 km per hour (11:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29280},{"data": [[38,11]], "label": "11 people finished between 8:20 and  8:30<br>3.14 miles per hour (19:06 pace) <br>5.06 km per hour (11:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30000},{"data": [[39,10]], "label": "10 people finished between 8:31 and  8:41<br>3.07 miles per hour (19:31 pace) <br>4.95 km per hour (12:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30660},{"data": [[40,8]], "label": "8 people finished between 8:42 and  8:52<br>3.01 miles per hour (19:56 pace) <br>4.85 km per hour (12:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31320},{"data": [[41,2]], "label": "2 people finished between 8:57 and  9:07<br>2.93 miles per hour (20:30 pace) <br>4.71 km per hour (12:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32220},{"data": [[42,3]], "label": "3 people finished between 9:08 and  9:18<br>2.87 miles per hour (20:55 pace) <br>4.62 km per hour (13:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32880},{"data": [[43,2]], "label": "2 people finished between 9:30 and  9:40<br>2.76 miles per hour (21:46 pace) <br>4.44 km per hour (13:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34200},{"data": [[44,2]], "label": "2 people finished between 9:44 and  9:54<br>2.69 miles per hour (22:18 pace) <br>4.33 km per hour (13:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35040},{"data": [[45,4]], "label": "4 people finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,""],[44,"9:00"],[45,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
