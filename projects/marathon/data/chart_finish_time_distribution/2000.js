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
	
	var chart_data = {"seriesData":[{"data": [[1,2]], "label": "2 people finished between 1:53 and  2:03<br>13.9 miles per hour (4:19 pace) <br>22.39 km per hour (2:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6780},{"data": [[2,11]], "label": "11 people finished between 2:06 and  2:16<br>12.47 miles per hour (4:48 pace) <br>20.08 km per hour (2:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7560},{"data": [[3,29]], "label": "29 people finished between 2:17 and  2:27<br>11.47 miles per hour (5:13 pace) <br>18.46 km per hour (3:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8220},{"data": [[4,70]], "label": "70 people finished between 2:27 and  2:37<br>10.69 miles per hour (5:36 pace) <br>17.21 km per hour (3:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8820},{"data": [[5,111]], "label": "111 people finished between 2:37 and  2:47<br>10.01 miles per hour (6:00 pace) <br>16.11 km per hour (3:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9420},{"data": [[6,295]], "label": "295 people finished between 2:47 and  2:57<br>9.41 miles per hour (6:22 pace) <br>15.15 km per hour (3:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10020},{"data": [[7,508]], "label": "508 people finished between 2:57 and  3:07<br>8.88 miles per hour (6:45 pace) <br>14.29 km per hour (4:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10620},{"data": [[8,765]], "label": "765 people finished between 3:07 and  3:17<br>8.4 miles per hour (7:08 pace) <br>13.53 km per hour (4:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11220},{"data": [[9,1121]], "label": "1121 people finished between 3:17 and  3:27<br>7.97 miles per hour (7:31 pace) <br>12.84 km per hour (4:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11820},{"data": [[10,1562]], "label": "1562 people finished between 3:27 and  3:37<br>7.59 miles per hour (7:54 pace) <br>12.22 km per hour (4:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12420},{"data": [[11,1938]], "label": "1938 people finished between 3:37 and  3:47<br>7.24 miles per hour (8:17 pace) <br>11.66 km per hour (5:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13020},{"data": [[12,2463]], "label": "2463 people finished between 3:47 and  3:57<br>6.92 miles per hour (8:40 pace) <br>11.14 km per hour (5:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13620},{"data": [[13,2649]], "label": "2649 people finished between 3:57 and  4:07<br>6.63 miles per hour (9:03 pace) <br>10.67 km per hour (5:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14220},{"data": [[14,2307]], "label": "2307 people finished between 4:07 and  4:17<br>6.36 miles per hour (9:25 pace) <br>10.24 km per hour (5:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14820},{"data": [[15,2412]], "label": "2412 people finished between 4:17 and  4:27<br>6.11 miles per hour (9:49 pace) <br>9.84 km per hour (6:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15420},{"data": [[16,2204]], "label": "2204 people finished between 4:27 and  4:37<br>5.88 miles per hour (10:11 pace) <br>9.47 km per hour (6:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16020},{"data": [[17,2183]], "label": "2183 people finished between 4:37 and  4:47<br>5.67 miles per hour (10:34 pace) <br>9.13 km per hour (6:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16620},{"data": [[18,1840]], "label": "1840 people finished between 4:47 and  4:57<br>5.47 miles per hour (10:57 pace) <br>8.81 km per hour (6:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17220},{"data": [[19,1524]], "label": "1524 people finished between 4:57 and  5:07<br>5.29 miles per hour (11:20 pace) <br>8.52 km per hour (7:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17820},{"data": [[20,1088]], "label": "1088 people finished between 5:08 and  5:18<br>5.1 miles per hour (11:45 pace) <br>8.21 km per hour (7:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18480},{"data": [[21,844]], "label": "844 people finished between 5:18 and  5:28<br>4.94 miles per hour (12:09 pace) <br>7.95 km per hour (7:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19080},{"data": [[22,682]], "label": "682 people finished between 5:28 and  5:38<br>4.79 miles per hour (12:31 pace) <br>7.71 km per hour (7:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19680},{"data": [[23,535]], "label": "535 people finished between 5:38 and  5:48<br>4.65 miles per hour (12:54 pace) <br>7.48 km per hour (8:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20280},{"data": [[24,489]], "label": "489 people finished between 5:48 and  5:58<br>4.51 miles per hour (13:17 pace) <br>7.27 km per hour (8:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20880},{"data": [[25,356]], "label": "356 people finished between 5:58 and  6:08<br>4.39 miles per hour (13:40 pace) <br>7.07 km per hour (8:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21480},{"data": [[26,253]], "label": "253 people finished between 6:08 and  6:18<br>4.27 miles per hour (14:03 pace) <br>6.87 km per hour (8:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22080},{"data": [[27,179]], "label": "179 people finished between 6:18 and  6:28<br>4.16 miles per hour (14:26 pace) <br>6.69 km per hour (8:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22680},{"data": [[28,175]], "label": "175 people finished between 6:28 and  6:38<br>4.05 miles per hour (14:49 pace) <br>6.52 km per hour (9:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23280},{"data": [[29,130]], "label": "130 people finished between 6:38 and  6:48<br>3.95 miles per hour (15:11 pace) <br>6.36 km per hour (9:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23880},{"data": [[30,117]], "label": "117 people finished between 6:48 and  6:58<br>3.85 miles per hour (15:34 pace) <br>6.2 km per hour (9:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24480},{"data": [[31,91]], "label": "91 people finished between 6:58 and  7:08<br>3.76 miles per hour (15:58 pace) <br>6.05 km per hour (9:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25080},{"data": [[32,87]], "label": "87 people finished between 7:08 and  7:18<br>3.67 miles per hour (16:21 pace) <br>5.91 km per hour (10:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25680},{"data": [[33,67]], "label": "67 people finished between 7:19 and  7:29<br>3.58 miles per hour (16:46 pace) <br>5.76 km per hour (10:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26340},{"data": [[34,34]], "label": "34 people finished between 7:29 and  7:39<br>3.5 miles per hour (17:08 pace) <br>5.63 km per hour (10:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26940},{"data": [[35,33]], "label": "33 people finished between 7:39 and  7:49<br>3.42 miles per hour (17:31 pace) <br>5.51 km per hour (10:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27540},{"data": [[36,17]], "label": "17 people finished between 7:49 and  7:59<br>3.35 miles per hour (17:54 pace) <br>5.39 km per hour (11:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28140},{"data": [[37,22]], "label": "22 people finished between 7:59 and  8:09<br>3.28 miles per hour (18:18 pace) <br>5.28 km per hour (11:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28740},{"data": [[38,10]], "label": "10 people finished between 8:12 and  8:22<br>3.19 miles per hour (18:47 pace) <br>5.14 km per hour (11:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29520},{"data": [[39,12]], "label": "12 people finished between 8:22 and  8:32<br>3.13 miles per hour (19:10 pace) <br>5.04 km per hour (11:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30120},{"data": [[40,12]], "label": "12 people finished between 8:33 and  8:43<br>3.06 miles per hour (19:35 pace) <br>4.93 km per hour (12:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30780},{"data": [[41,5]], "label": "5 people finished between 8:43 and  8:53<br>3 miles per hour (19:58 pace) <br>4.84 km per hour (12:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31380},{"data": [[42,6]], "label": "6 people finished between 8:54 and  9:04<br>2.94 miles per hour (20:23 pace) <br>4.74 km per hour (12:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32040},{"data": [[43,9]], "label": "9 people finished between 9:08 and  9:18<br>2.87 miles per hour (20:55 pace) <br>4.62 km per hour (13:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32880},{"data": [[44,1]], "label": "1 person finished between 9:28 and  9:38<br>2.77 miles per hour (21:41 pace) <br>4.45 km per hour (13:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34080},{"data": [[45,3]], "label": "3 people finished between 9:40 and  9:50<br>2.71 miles per hour (22:08 pace) <br>4.36 km per hour (13:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34800},{"data": [[46,1]], "label": "1 person finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,"5:00"],[21,""],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,"7:00"],[34,""],[35,""],[36,""],[37,""],[38,""],[39,"8:00"],[40,""],[41,""],[42,""],[43,""],[44,"9:00"],[45,""],[46,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
