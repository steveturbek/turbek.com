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
	
	var chart_data = {"seriesData":[{"data": [[1,11]], "label": "11 people finished between 1:44 and  1:54<br>15.1 miles per hour (3:58 pace) <br>24.32 km per hour (2:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6240},{"data": [[2,7]], "label": "7 people finished between 1:57 and  2:07<br>13.43 miles per hour (4:28 pace) <br>21.62 km per hour (2:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7020},{"data": [[3,17]], "label": "17 people finished between 2:08 and  2:18<br>12.27 miles per hour (4:53 pace) <br>19.76 km per hour (3:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7680},{"data": [[4,36]], "label": "36 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[5,78]], "label": "78 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[6,248]], "label": "248 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[7,576]], "label": "576 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[8,768]], "label": "768 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[9,1103]], "label": "1103 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[10,1745]], "label": "1745 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[11,2271]], "label": "2271 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[12,2690]], "label": "2690 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[13,3568]], "label": "3568 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[14,3041]], "label": "3041 people finished between 3:59 and  4:09<br>6.57 miles per hour (9:07 pace) <br>10.58 km per hour (5:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14340},{"data": [[15,3015]], "label": "3015 people finished between 4:09 and  4:19<br>6.31 miles per hour (9:30 pace) <br>10.16 km per hour (5:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14940},{"data": [[16,3117]], "label": "3117 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[17,2777]], "label": "2777 people finished between 4:29 and  4:39<br>5.84 miles per hour (10:16 pace) <br>9.4 km per hour (6:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16140},{"data": [[18,2584]], "label": "2584 people finished between 4:39 and  4:49<br>5.63 miles per hour (10:39 pace) <br>9.07 km per hour (6:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16740},{"data": [[19,2371]], "label": "2371 people finished between 4:49 and  4:59<br>5.44 miles per hour (11:02 pace) <br>8.75 km per hour (6:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17340},{"data": [[20,1533]], "label": "1533 people finished between 4:59 and  5:09<br>5.25 miles per hour (11:25 pace) <br>8.46 km per hour (7:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17940},{"data": [[21,1254]], "label": "1254 people finished between 5:09 and  5:19<br>5.08 miles per hour (11:48 pace) <br>8.19 km per hour (7:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18540},{"data": [[22,1113]], "label": "1113 people finished between 5:19 and  5:29<br>4.92 miles per hour (12:10 pace) <br>7.93 km per hour (7:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19140},{"data": [[23,874]], "label": "874 people finished between 5:29 and  5:39<br>4.77 miles per hour (12:34 pace) <br>7.69 km per hour (7:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19740},{"data": [[24,688]], "label": "688 people finished between 5:39 and  5:49<br>4.63 miles per hour (12:56 pace) <br>7.46 km per hour (8:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20340},{"data": [[25,553]], "label": "553 people finished between 5:49 and  5:59<br>4.5 miles per hour (13:19 pace) <br>7.25 km per hour (8:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20940},{"data": [[26,384]], "label": "384 people finished between 5:59 and  6:09<br>4.38 miles per hour (13:42 pace) <br>7.05 km per hour (8:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21540},{"data": [[27,382]], "label": "382 people finished between 6:09 and  6:19<br>4.26 miles per hour (14:05 pace) <br>6.86 km per hour (8:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22140},{"data": [[28,275]], "label": "275 people finished between 6:19 and  6:29<br>4.14 miles per hour (14:28 pace) <br>6.67 km per hour (8:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22740},{"data": [[29,228]], "label": "228 people finished between 6:29 and  6:39<br>4.04 miles per hour (14:51 pace) <br>6.5 km per hour (9:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23340},{"data": [[30,189]], "label": "189 people finished between 6:39 and  6:49<br>3.94 miles per hour (15:14 pace) <br>6.34 km per hour (9:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23940},{"data": [[31,164]], "label": "164 people finished between 6:49 and  6:59<br>3.84 miles per hour (15:37 pace) <br>6.18 km per hour (9:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24540},{"data": [[32,98]], "label": "98 people finished between 7:00 and  7:10<br>3.74 miles per hour (16:02 pace) <br>6.02 km per hour (9:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25200},{"data": [[33,70]], "label": "70 people finished between 7:10 and  7:20<br>3.65 miles per hour (16:25 pace) <br>5.88 km per hour (10:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25800},{"data": [[34,71]], "label": "71 people finished between 7:20 and  7:30<br>3.57 miles per hour (16:48 pace) <br>5.75 km per hour (10:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26400},{"data": [[35,42]], "label": "42 people finished between 7:30 and  7:40<br>3.49 miles per hour (17:11 pace) <br>5.62 km per hour (10:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27000},{"data": [[36,29]], "label": "29 people finished between 7:40 and  7:50<br>3.41 miles per hour (17:34 pace) <br>5.5 km per hour (10:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27600},{"data": [[37,22]], "label": "22 people finished between 7:51 and  8:01<br>3.34 miles per hour (17:59 pace) <br>5.37 km per hour (11:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28260},{"data": [[38,24]], "label": "24 people finished between 8:02 and  8:12<br>3.26 miles per hour (18:24 pace) <br>5.25 km per hour (11:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28920},{"data": [[39,10]], "label": "10 people finished between 8:12 and  8:22<br>3.19 miles per hour (18:47 pace) <br>5.14 km per hour (11:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29520},{"data": [[40,2]], "label": "2 people finished between 8:25 and  8:35<br>3.11 miles per hour (19:17 pace) <br>5.01 km per hour (11:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30300},{"data": [[41,1]], "label": "1 person finished between 8:35 and  8:45<br>3.05 miles per hour (19:40 pace) <br>4.91 km per hour (12:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30900}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
