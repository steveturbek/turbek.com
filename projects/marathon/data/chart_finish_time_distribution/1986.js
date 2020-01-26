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
	
	var chart_data = {"seriesData":[{"data": [[1,39]], "label": "39 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[2,64]], "label": "64 people finished between 2:21 and  2:31<br>11.14 miles per hour (5:23 pace) <br>17.94 km per hour (3:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8460},{"data": [[3,135]], "label": "135 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[4,271]], "label": "271 people finished between 2:41 and  2:51<br>9.76 miles per hour (6:09 pace) <br>15.71 km per hour (3:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9660},{"data": [[5,559]], "label": "559 people finished between 2:51 and  3:01<br>9.19 miles per hour (6:31 pace) <br>14.79 km per hour (4:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10260},{"data": [[6,800]], "label": "800 people finished between 3:01 and  3:11<br>8.68 miles per hour (6:54 pace) <br>13.98 km per hour (4:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10860},{"data": [[7,1103]], "label": "1103 people finished between 3:11 and  3:21<br>8.22 miles per hour (7:17 pace) <br>13.24 km per hour (4:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11460},{"data": [[8,1467]], "label": "1467 people finished between 3:21 and  3:31<br>7.82 miles per hour (7:40 pace) <br>12.59 km per hour (4:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12060},{"data": [[9,1624]], "label": "1624 people finished between 3:31 and  3:41<br>7.44 miles per hour (8:03 pace) <br>11.99 km per hour (5:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12660},{"data": [[10,1980]], "label": "1980 people finished between 3:41 and  3:51<br>7.11 miles per hour (8:26 pace) <br>11.45 km per hour (5:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13260},{"data": [[11,2085]], "label": "2085 people finished between 3:51 and  4:01<br>6.8 miles per hour (8:49 pace) <br>10.95 km per hour (5:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13860},{"data": [[12,1609]], "label": "1609 people finished between 4:01 and  4:11<br>6.52 miles per hour (9:12 pace) <br>10.5 km per hour (5:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14460},{"data": [[13,1524]], "label": "1524 people finished between 4:11 and  4:21<br>6.26 miles per hour (9:35 pace) <br>10.08 km per hour (5:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15060},{"data": [[14,1436]], "label": "1436 people finished between 4:21 and  4:31<br>6.02 miles per hour (9:58 pace) <br>9.69 km per hour (6:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15660},{"data": [[15,1216]], "label": "1216 people finished between 4:31 and  4:41<br>5.8 miles per hour (10:20 pace) <br>9.33 km per hour (6:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16260},{"data": [[16,1002]], "label": "1002 people finished between 4:41 and  4:51<br>5.59 miles per hour (10:43 pace) <br>9 km per hour (6:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16860},{"data": [[17,755]], "label": "755 people finished between 4:51 and  5:01<br>5.4 miles per hour (11:06 pace) <br>8.69 km per hour (6:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17460},{"data": [[18,488]], "label": "488 people finished between 5:01 and  5:11<br>5.22 miles per hour (11:30 pace) <br>8.4 km per hour (7:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18060},{"data": [[19,413]], "label": "413 people finished between 5:11 and  5:21<br>5.05 miles per hour (11:52 pace) <br>8.13 km per hour (7:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18660},{"data": [[20,296]], "label": "296 people finished between 5:21 and  5:31<br>4.89 miles per hour (12:15 pace) <br>7.88 km per hour (7:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19260},{"data": [[21,225]], "label": "225 people finished between 5:31 and  5:41<br>4.75 miles per hour (12:38 pace) <br>7.64 km per hour (7:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19860},{"data": [[22,194]], "label": "194 people finished between 5:41 and  5:51<br>4.61 miles per hour (13:01 pace) <br>7.42 km per hour (8:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20460},{"data": [[23,150]], "label": "150 people finished between 5:51 and  6:01<br>4.48 miles per hour (13:24 pace) <br>7.21 km per hour (8:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21060},{"data": [[24,77]], "label": "77 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[25,52]], "label": "52 people finished between 6:12 and  6:22<br>4.22 miles per hour (14:12 pace) <br>6.8 km per hour (8:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22320},{"data": [[26,51]], "label": "51 people finished between 6:23 and  6:33<br>4.1 miles per hour (14:37 pace) <br>6.6 km per hour (9:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22980},{"data": [[27,22]], "label": "22 people finished between 6:33 and  6:43<br>4 miles per hour (15:00 pace) <br>6.44 km per hour (9:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23580},{"data": [[28,26]], "label": "26 people finished between 6:45 and  6:55<br>3.88 miles per hour (15:28 pace) <br>6.25 km per hour (9:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24300},{"data": [[29,15]], "label": "15 people finished between 6:58 and  7:08<br>3.76 miles per hour (15:58 pace) <br>6.05 km per hour (9:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25080},{"data": [[30,10]], "label": "10 people finished between 7:21 and  7:31<br>3.56 miles per hour (16:50 pace) <br>5.74 km per hour (10:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26460},{"data": [[31,3]], "label": "3 people finished between 7:31 and  7:41<br>3.48 miles per hour (17:13 pace) <br>5.61 km per hour (10:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27060},{"data": [[32,1]], "label": "1 person finished between 7:43 and  7:53<br>3.39 miles per hour (17:40 pace) <br>5.46 km per hour (10:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27780},{"data": [[33,3]], "label": "3 people finished between 7:54 and  8:04<br>3.31 miles per hour (18:06 pace) <br>5.34 km per hour (11:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28440},{"data": [[34,2]], "label": "2 people finished between 8:19 and  8:29<br>3.15 miles per hour (19:03 pace) <br>5.07 km per hour (11:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29940},{"data": [[35,1]], "label": "1 person finished between 8:55 and  9:05<br>2.94 miles per hour (20:25 pace) <br>4.73 km per hour (12:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32100},{"data": [[36,1]], "label": "1 person finished between 9:08 and  9:18<br>2.87 miles per hour (20:55 pace) <br>4.62 km per hour (13:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32880},{"data": [[37,1]], "label": "1 person finished between 9:38 and  9:48<br>2.72 miles per hour (22:04 pace) <br>4.38 km per hour (13:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34680}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,""],[22,"5:00"],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,"7:00"],[34,""],[35,"8:00"],[36,""],[37,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
