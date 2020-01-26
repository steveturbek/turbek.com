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
	
	var chart_data = {"seriesData":[{"data": [[1,37]], "label": "37 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[2,73]], "label": "73 people finished between 2:21 and  2:31<br>11.14 miles per hour (5:23 pace) <br>17.94 km per hour (3:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8460},{"data": [[3,146]], "label": "146 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[4,320]], "label": "320 people finished between 2:41 and  2:51<br>9.76 miles per hour (6:09 pace) <br>15.71 km per hour (3:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9660},{"data": [[5,571]], "label": "571 people finished between 2:51 and  3:01<br>9.19 miles per hour (6:31 pace) <br>14.79 km per hour (4:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10260},{"data": [[6,724]], "label": "724 people finished between 3:01 and  3:11<br>8.68 miles per hour (6:54 pace) <br>13.98 km per hour (4:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10860},{"data": [[7,1091]], "label": "1091 people finished between 3:11 and  3:21<br>8.22 miles per hour (7:17 pace) <br>13.24 km per hour (4:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11460},{"data": [[8,1392]], "label": "1392 people finished between 3:21 and  3:31<br>7.82 miles per hour (7:40 pace) <br>12.59 km per hour (4:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12060},{"data": [[9,1715]], "label": "1715 people finished between 3:31 and  3:41<br>7.44 miles per hour (8:03 pace) <br>11.99 km per hour (5:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12660},{"data": [[10,1875]], "label": "1875 people finished between 3:41 and  3:51<br>7.11 miles per hour (8:26 pace) <br>11.45 km per hour (5:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13260},{"data": [[11,2169]], "label": "2169 people finished between 3:51 and  4:01<br>6.8 miles per hour (8:49 pace) <br>10.95 km per hour (5:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13860},{"data": [[12,1718]], "label": "1718 people finished between 4:01 and  4:11<br>6.52 miles per hour (9:12 pace) <br>10.5 km per hour (5:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14460},{"data": [[13,1715]], "label": "1715 people finished between 4:11 and  4:21<br>6.26 miles per hour (9:35 pace) <br>10.08 km per hour (5:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15060},{"data": [[14,1594]], "label": "1594 people finished between 4:21 and  4:31<br>6.02 miles per hour (9:58 pace) <br>9.69 km per hour (6:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15660},{"data": [[15,1317]], "label": "1317 people finished between 4:31 and  4:41<br>5.8 miles per hour (10:20 pace) <br>9.33 km per hour (6:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16260},{"data": [[16,1111]], "label": "1111 people finished between 4:41 and  4:51<br>5.59 miles per hour (10:43 pace) <br>9 km per hour (6:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16860},{"data": [[17,989]], "label": "989 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[18,631]], "label": "631 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[19,486]], "label": "486 people finished between 5:12 and  5:22<br>5.03 miles per hour (11:55 pace) <br>8.11 km per hour (7:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18720},{"data": [[20,460]], "label": "460 people finished between 5:22 and  5:32<br>4.88 miles per hour (12:18 pace) <br>7.86 km per hour (7:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19320},{"data": [[21,306]], "label": "306 people finished between 5:32 and  5:42<br>4.73 miles per hour (12:40 pace) <br>7.62 km per hour (7:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19920},{"data": [[22,189]], "label": "189 people finished between 5:42 and  5:52<br>4.59 miles per hour (13:03 pace) <br>7.4 km per hour (8:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20520},{"data": [[23,158]], "label": "158 people finished between 5:52 and  6:02<br>4.46 miles per hour (13:26 pace) <br>7.19 km per hour (8:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21120},{"data": [[24,94]], "label": "94 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[25,72]], "label": "72 people finished between 6:12 and  6:22<br>4.22 miles per hour (14:12 pace) <br>6.8 km per hour (8:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22320},{"data": [[26,51]], "label": "51 people finished between 6:22 and  6:32<br>4.11 miles per hour (14:35 pace) <br>6.62 km per hour (9:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22920},{"data": [[27,40]], "label": "40 people finished between 6:32 and  6:42<br>4.01 miles per hour (14:58 pace) <br>6.45 km per hour (9:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23520},{"data": [[28,24]], "label": "24 people finished between 6:43 and  6:53<br>3.9 miles per hour (15:23 pace) <br>6.28 km per hour (9:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24180},{"data": [[29,35]], "label": "35 people finished between 6:55 and  7:05<br>3.79 miles per hour (15:50 pace) <br>6.1 km per hour (9:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24900},{"data": [[30,12]], "label": "12 people finished between 7:07 and  7:17<br>3.68 miles per hour (16:18 pace) <br>5.92 km per hour (10:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25620},{"data": [[31,9]], "label": "9 people finished between 7:18 and  7:28<br>3.59 miles per hour (16:43 pace) <br>5.78 km per hour (10:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26280},{"data": [[32,16]], "label": "16 people finished between 7:28 and  7:38<br>3.51 miles per hour (17:06 pace) <br>5.65 km per hour (10:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26880},{"data": [[33,9]], "label": "9 people finished between 7:40 and  7:50<br>3.41 miles per hour (17:34 pace) <br>5.5 km per hour (10:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27600},{"data": [[34,5]], "label": "5 people finished between 7:54 and  8:04<br>3.31 miles per hour (18:06 pace) <br>5.34 km per hour (11:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28440},{"data": [[35,4]], "label": "4 people finished between 8:05 and  8:15<br>3.24 miles per hour (18:31 pace) <br>5.22 km per hour (11:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29100},{"data": [[36,8]], "label": "8 people finished between 8:15 and  8:25<br>3.17 miles per hour (18:54 pace) <br>5.11 km per hour (11:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29700},{"data": [[37,5]], "label": "5 people finished between 8:29 and  8:39<br>3.09 miles per hour (19:26 pace) <br>4.97 km per hour (12:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30540},{"data": [[38,2]], "label": "2 people finished between 8:40 and  8:50<br>3.02 miles per hour (19:51 pace) <br>4.86 km per hour (12:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31200},{"data": [[39,2]], "label": "2 people finished between 8:54 and  9:04<br>2.94 miles per hour (20:23 pace) <br>4.74 km per hour (12:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32040},{"data": [[40,1]], "label": "1 person finished between 9:45 and  9:55<br>2.69 miles per hour (22:20 pace) <br>4.32 km per hour (13:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35100}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
