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
	
	var chart_data = {"seriesData":[{"data": [[1,23]], "label": "23 people finished between 2:12 and  2:22<br>11.9 miles per hour (5:02 pace) <br>19.16 km per hour (3:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7920},{"data": [[2,40]], "label": "40 people finished between 2:23 and  2:33<br>10.99 miles per hour (5:27 pace) <br>17.69 km per hour (3:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8580},{"data": [[3,129]], "label": "129 people finished between 2:33 and  2:43<br>10.27 miles per hour (5:50 pace) <br>16.53 km per hour (3:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9180},{"data": [[4,312]], "label": "312 people finished between 2:43 and  2:53<br>9.64 miles per hour (6:13 pace) <br>15.52 km per hour (3:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9780},{"data": [[5,521]], "label": "521 people finished between 2:53 and  3:03<br>9.08 miles per hour (6:36 pace) <br>14.62 km per hour (4:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10380},{"data": [[6,702]], "label": "702 people finished between 3:03 and  3:13<br>8.58 miles per hour (6:59 pace) <br>13.82 km per hour (4:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10980},{"data": [[7,1083]], "label": "1083 people finished between 3:13 and  3:23<br>8.14 miles per hour (7:22 pace) <br>13.11 km per hour (4:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11580},{"data": [[8,1488]], "label": "1488 people finished between 3:23 and  3:33<br>7.74 miles per hour (7:45 pace) <br>12.46 km per hour (4:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12180},{"data": [[9,1694]], "label": "1694 people finished between 3:33 and  3:43<br>7.38 miles per hour (8:08 pace) <br>11.88 km per hour (5:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12780},{"data": [[10,1999]], "label": "1999 people finished between 3:43 and  3:53<br>7.04 miles per hour (8:31 pace) <br>11.34 km per hour (5:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13380},{"data": [[11,2252]], "label": "2252 people finished between 3:53 and  4:03<br>6.74 miles per hour (8:54 pace) <br>10.86 km per hour (5:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13980},{"data": [[12,1884]], "label": "1884 people finished between 4:03 and  4:13<br>6.46 miles per hour (9:16 pace) <br>10.41 km per hour (5:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14580},{"data": [[13,2028]], "label": "2028 people finished between 4:13 and  4:23<br>6.21 miles per hour (9:39 pace) <br>10 km per hour (6:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15180},{"data": [[14,1876]], "label": "1876 people finished between 4:23 and  4:33<br>5.97 miles per hour (10:03 pace) <br>9.62 km per hour (6:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15780},{"data": [[15,1583]], "label": "1583 people finished between 4:33 and  4:43<br>5.75 miles per hour (10:25 pace) <br>9.27 km per hour (6:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16380},{"data": [[16,1332]], "label": "1332 people finished between 4:43 and  4:53<br>5.55 miles per hour (10:48 pace) <br>8.94 km per hour (6:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16980},{"data": [[17,1147]], "label": "1147 people finished between 4:53 and  5:03<br>5.36 miles per hour (11:11 pace) <br>8.63 km per hour (6:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17580},{"data": [[18,800]], "label": "800 people finished between 5:03 and  5:13<br>5.18 miles per hour (11:34 pace) <br>8.35 km per hour (7:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18180},{"data": [[19,651]], "label": "651 people finished between 5:13 and  5:23<br>5.02 miles per hour (11:57 pace) <br>8.08 km per hour (7:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18780},{"data": [[20,547]], "label": "547 people finished between 5:23 and  5:33<br>4.86 miles per hour (12:20 pace) <br>7.83 km per hour (7:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19380},{"data": [[21,365]], "label": "365 people finished between 5:33 and  5:43<br>4.72 miles per hour (12:43 pace) <br>7.6 km per hour (7:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19980},{"data": [[22,308]], "label": "308 people finished between 5:43 and  5:53<br>4.58 miles per hour (13:05 pace) <br>7.37 km per hour (8:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20580},{"data": [[23,245]], "label": "245 people finished between 5:53 and  6:03<br>4.45 miles per hour (13:28 pace) <br>7.17 km per hour (8:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21180},{"data": [[24,170]], "label": "170 people finished between 6:03 and  6:13<br>4.33 miles per hour (13:51 pace) <br>6.97 km per hour (8:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21780},{"data": [[25,122]], "label": "122 people finished between 6:13 and  6:23<br>4.21 miles per hour (14:15 pace) <br>6.78 km per hour (8:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22380},{"data": [[26,104]], "label": "104 people finished between 6:24 and  6:34<br>4.09 miles per hour (14:40 pace) <br>6.59 km per hour (9:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23040},{"data": [[27,66]], "label": "66 people finished between 6:34 and  6:44<br>3.99 miles per hour (15:03 pace) <br>6.42 km per hour (9:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23640},{"data": [[28,54]], "label": "54 people finished between 6:44 and  6:54<br>3.89 miles per hour (15:25 pace) <br>6.26 km per hour (9:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24240},{"data": [[29,39]], "label": "39 people finished between 6:54 and  7:04<br>3.79 miles per hour (15:48 pace) <br>6.11 km per hour (9:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24840},{"data": [[30,50]], "label": "50 people finished between 7:06 and  7:16<br>3.69 miles per hour (16:16 pace) <br>5.94 km per hour (10:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25560},{"data": [[31,13]], "label": "13 people finished between 7:16 and  7:26<br>3.6 miles per hour (16:38 pace) <br>5.8 km per hour (10:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26160},{"data": [[32,22]], "label": "22 people finished between 7:27 and  7:37<br>3.51 miles per hour (17:04 pace) <br>5.66 km per hour (10:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26820},{"data": [[33,19]], "label": "19 people finished between 7:37 and  7:47<br>3.44 miles per hour (17:27 pace) <br>5.54 km per hour (10:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27420},{"data": [[34,17]], "label": "17 people finished between 7:47 and  7:57<br>3.36 miles per hour (17:50 pace) <br>5.42 km per hour (11:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28020},{"data": [[35,5]], "label": "5 people finished between 8:10 and  8:20<br>3.21 miles per hour (18:43 pace) <br>5.16 km per hour (11:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29400},{"data": [[36,3]], "label": "3 people finished between 8:29 and  8:39<br>3.09 miles per hour (19:26 pace) <br>4.97 km per hour (12:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30540},{"data": [[37,2]], "label": "2 people finished between 9:07 and  9:17<br>2.87 miles per hour (20:53 pace) <br>4.62 km per hour (12:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32820},{"data": [[38,2]], "label": "2 people finished between 9:21 and  9:31<br>2.8 miles per hour (21:25 pace) <br>4.51 km per hour (13:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33660}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,"7:00"],[34,""],[35,""],[36,""],[37,"9:00"],[38,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
