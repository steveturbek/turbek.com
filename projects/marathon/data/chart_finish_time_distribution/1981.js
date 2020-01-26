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
	
	var chart_data = {"seriesData":[{"data": [[1,36]], "label": "36 people finished between 2:08 and  2:18<br>12.27 miles per hour (4:53 pace) <br>19.76 km per hour (3:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7680},{"data": [[2,127]], "label": "127 people finished between 2:18 and  2:28<br>11.38 miles per hour (5:16 pace) <br>18.33 km per hour (3:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8280},{"data": [[3,219]], "label": "219 people finished between 2:28 and  2:38<br>10.61 miles per hour (5:39 pace) <br>17.09 km per hour (3:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8880},{"data": [[4,365]], "label": "365 people finished between 2:38 and  2:48<br>9.94 miles per hour (6:01 pace) <br>16.01 km per hour (3:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9480},{"data": [[5,672]], "label": "672 people finished between 2:48 and  2:58<br>9.35 miles per hour (6:25 pace) <br>15.06 km per hour (3:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10080},{"data": [[6,879]], "label": "879 people finished between 2:58 and  3:08<br>8.83 miles per hour (6:47 pace) <br>14.21 km per hour (4:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10680},{"data": [[7,1097]], "label": "1097 people finished between 3:08 and  3:18<br>8.36 miles per hour (7:10 pace) <br>13.46 km per hour (4:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11280},{"data": [[8,1340]], "label": "1340 people finished between 3:18 and  3:28<br>7.93 miles per hour (7:33 pace) <br>12.78 km per hour (4:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11880},{"data": [[9,1406]], "label": "1406 people finished between 3:28 and  3:38<br>7.55 miles per hour (7:56 pace) <br>12.16 km per hour (4:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12480},{"data": [[10,1385]], "label": "1385 people finished between 3:38 and  3:48<br>7.21 miles per hour (8:19 pace) <br>11.6 km per hour (5:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13080},{"data": [[11,1415]], "label": "1415 people finished between 3:48 and  3:58<br>6.89 miles per hour (8:42 pace) <br>11.09 km per hour (5:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13680},{"data": [[12,984]], "label": "984 people finished between 3:58 and  4:08<br>6.6 miles per hour (9:05 pace) <br>10.63 km per hour (5:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14280},{"data": [[13,789]], "label": "789 people finished between 4:08 and  4:18<br>6.33 miles per hour (9:28 pace) <br>10.2 km per hour (5:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14880},{"data": [[14,619]], "label": "619 people finished between 4:18 and  4:28<br>6.09 miles per hour (9:50 pace) <br>9.8 km per hour (6:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15480},{"data": [[15,558]], "label": "558 people finished between 4:28 and  4:38<br>5.86 miles per hour (10:14 pace) <br>9.44 km per hour (6:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16080},{"data": [[16,397]], "label": "397 people finished between 4:38 and  4:48<br>5.65 miles per hour (10:37 pace) <br>9.1 km per hour (6:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16680},{"data": [[17,331]], "label": "331 people finished between 4:48 and  4:58<br>5.45 miles per hour (11:00 pace) <br>8.78 km per hour (6:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17280},{"data": [[18,179]], "label": "179 people finished between 4:58 and  5:08<br>5.27 miles per hour (11:22 pace) <br>8.49 km per hour (7:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17880},{"data": [[19,134]], "label": "134 people finished between 5:08 and  5:18<br>5.1 miles per hour (11:45 pace) <br>8.21 km per hour (7:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18480},{"data": [[20,113]], "label": "113 people finished between 5:18 and  5:28<br>4.94 miles per hour (12:09 pace) <br>7.95 km per hour (7:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19080},{"data": [[21,69]], "label": "69 people finished between 5:29 and  5:39<br>4.77 miles per hour (12:34 pace) <br>7.69 km per hour (7:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19740},{"data": [[22,42]], "label": "42 people finished between 5:39 and  5:49<br>4.63 miles per hour (12:56 pace) <br>7.46 km per hour (8:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20340},{"data": [[23,20]], "label": "20 people finished between 5:49 and  5:59<br>4.5 miles per hour (13:19 pace) <br>7.25 km per hour (8:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20940},{"data": [[24,14]], "label": "14 people finished between 5:59 and  6:09<br>4.38 miles per hour (13:42 pace) <br>7.05 km per hour (8:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21540},{"data": [[25,11]], "label": "11 people finished between 6:10 and  6:20<br>4.25 miles per hour (14:07 pace) <br>6.84 km per hour (8:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22200},{"data": [[26,5]], "label": "5 people finished between 6:21 and  6:31<br>4.12 miles per hour (14:33 pace) <br>6.64 km per hour (9:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22860},{"data": [[27,1]], "label": "1 person finished between 6:38 and  6:48<br>3.95 miles per hour (15:11 pace) <br>6.36 km per hour (9:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23880},{"data": [[28,8]], "label": "8 people finished between 6:49 and  6:59<br>3.84 miles per hour (15:37 pace) <br>6.18 km per hour (9:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24540},{"data": [[29,3]], "label": "3 people finished between 7:09 and  7:19<br>3.66 miles per hour (16:23 pace) <br>5.9 km per hour (10:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25740},{"data": [[30,3]], "label": "3 people finished between 7:32 and  7:42<br>3.48 miles per hour (17:15 pace) <br>5.6 km per hour (10:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27120}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
