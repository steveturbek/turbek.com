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
	
	var chart_data = {"seriesData":[{"data": [[1,32]], "label": "32 people finished between 2:14 and  2:24<br>11.72 miles per hour (5:07 pace) <br>18.88 km per hour (3:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8040},{"data": [[2,55]], "label": "55 people finished between 2:25 and  2:35<br>10.83 miles per hour (5:32 pace) <br>17.45 km per hour (3:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8700},{"data": [[3,111]], "label": "111 people finished between 2:35 and  2:45<br>10.13 miles per hour (5:55 pace) <br>16.32 km per hour (3:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9300},{"data": [[4,194]], "label": "194 people finished between 2:45 and  2:55<br>9.52 miles per hour (6:17 pace) <br>15.33 km per hour (3:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9900},{"data": [[5,337]], "label": "337 people finished between 2:55 and  3:05<br>8.98 miles per hour (6:40 pace) <br>14.45 km per hour (4:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10500},{"data": [[6,469]], "label": "469 people finished between 3:05 and  3:15<br>8.49 miles per hour (7:04 pace) <br>13.67 km per hour (4:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11100},{"data": [[7,578]], "label": "578 people finished between 3:15 and  3:25<br>8.06 miles per hour (7:27 pace) <br>12.97 km per hour (4:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11700},{"data": [[8,801]], "label": "801 people finished between 3:25 and  3:35<br>7.66 miles per hour (7:49 pace) <br>12.34 km per hour (4:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12300},{"data": [[9,925]], "label": "925 people finished between 3:35 and  3:45<br>7.31 miles per hour (8:12 pace) <br>11.77 km per hour (5:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12900},{"data": [[10,1144]], "label": "1144 people finished between 3:45 and  3:55<br>6.98 miles per hour (8:35 pace) <br>11.24 km per hour (5:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13500},{"data": [[11,1188]], "label": "1188 people finished between 3:55 and  4:05<br>6.68 miles per hour (8:58 pace) <br>10.76 km per hour (5:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14100},{"data": [[12,1085]], "label": "1085 people finished between 4:05 and  4:15<br>6.41 miles per hour (9:21 pace) <br>10.32 km per hour (5:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14700},{"data": [[13,1151]], "label": "1151 people finished between 4:15 and  4:25<br>6.16 miles per hour (9:44 pace) <br>9.92 km per hour (6:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15300},{"data": [[14,1219]], "label": "1219 people finished between 4:25 and  4:35<br>5.93 miles per hour (10:07 pace) <br>9.55 km per hour (6:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15900},{"data": [[15,1155]], "label": "1155 people finished between 4:35 and  4:45<br>5.71 miles per hour (10:30 pace) <br>9.2 km per hour (6:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16500},{"data": [[16,957]], "label": "957 people finished between 4:45 and  4:55<br>5.51 miles per hour (10:53 pace) <br>8.88 km per hour (6:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17100},{"data": [[17,811]], "label": "811 people finished between 4:55 and  5:05<br>5.33 miles per hour (11:16 pace) <br>8.57 km per hour (7:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17700},{"data": [[18,612]], "label": "612 people finished between 5:05 and  5:15<br>5.15 miles per hour (11:39 pace) <br>8.29 km per hour (7:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18300},{"data": [[19,475]], "label": "475 people finished between 5:15 and  5:25<br>4.99 miles per hour (12:01 pace) <br>8.03 km per hour (7:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18900},{"data": [[20,393]], "label": "393 people finished between 5:25 and  5:35<br>4.83 miles per hour (12:24 pace) <br>7.78 km per hour (7:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19500},{"data": [[21,275]], "label": "275 people finished between 5:35 and  5:45<br>4.69 miles per hour (12:48 pace) <br>7.55 km per hour (7:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20100},{"data": [[22,241]], "label": "241 people finished between 5:45 and  5:55<br>4.55 miles per hour (13:10 pace) <br>7.33 km per hour (8:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20700},{"data": [[23,133]], "label": "133 people finished between 5:55 and  6:05<br>4.43 miles per hour (13:33 pace) <br>7.13 km per hour (8:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21300},{"data": [[24,73]], "label": "73 people finished between 6:05 and  6:15<br>4.3 miles per hour (13:56 pace) <br>6.93 km per hour (8:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21900},{"data": [[25,47]], "label": "47 people finished between 6:16 and  6:26<br>4.18 miles per hour (14:21 pace) <br>6.73 km per hour (8:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22560},{"data": [[26,30]], "label": "30 people finished between 6:26 and  6:36<br>4.07 miles per hour (14:44 pace) <br>6.55 km per hour (9:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23160},{"data": [[27,38]], "label": "38 people finished between 6:36 and  6:46<br>3.97 miles per hour (15:07 pace) <br>6.39 km per hour (9:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23760},{"data": [[28,9]], "label": "9 people finished between 6:47 and  6:57<br>3.86 miles per hour (15:33 pace) <br>6.22 km per hour (9:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24420},{"data": [[29,12]], "label": "12 people finished between 6:57 and  7:07<br>3.77 miles per hour (15:55 pace) <br>6.07 km per hour (9:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25020},{"data": [[30,8]], "label": "8 people finished between 7:11 and  7:21<br>3.64 miles per hour (16:27 pace) <br>5.87 km per hour (10:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25860},{"data": [[31,8]], "label": "8 people finished between 7:25 and  7:35<br>3.53 miles per hour (17:00 pace) <br>5.68 km per hour (10:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26700},{"data": [[32,6]], "label": "6 people finished between 7:37 and  7:47<br>3.44 miles per hour (17:27 pace) <br>5.54 km per hour (10:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27420},{"data": [[33,3]], "label": "3 people finished between 7:47 and  7:57<br>3.36 miles per hour (17:50 pace) <br>5.42 km per hour (11:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28020},{"data": [[34,1]], "label": "1 person finished between 8:15 and  8:25<br>3.17 miles per hour (18:54 pace) <br>5.11 km per hour (11:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29700},{"data": [[35,1]], "label": "1 person finished between 8:30 and  8:40<br>3.08 miles per hour (19:28 pace) <br>4.96 km per hour (12:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30600},{"data": [[36,2]], "label": "2 people finished between 8:54 and  9:04<br>2.94 miles per hour (20:23 pace) <br>4.74 km per hour (12:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32040},{"data": [[37,1]], "label": "1 person finished between 9:54 and  10:04<br>2.64 miles per hour (22:41 pace) <br>4.26 km per hour (14:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35640}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,"7:00"],[33,""],[34,""],[35,""],[36,"8:00"],[37,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
