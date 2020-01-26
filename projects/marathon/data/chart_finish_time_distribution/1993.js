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
	
	var chart_data = {"seriesData":[{"data": [[1,21]], "label": "21 people finished between 2:10 and  2:20<br>12.08 miles per hour (4:58 pace) <br>19.46 km per hour (3:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7800},{"data": [[2,36]], "label": "36 people finished between 2:20 and  2:30<br>11.22 miles per hour (5:20 pace) <br>18.07 km per hour (3:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8400},{"data": [[3,84]], "label": "84 people finished between 2:30 and  2:40<br>10.47 miles per hour (5:43 pace) <br>16.86 km per hour (3:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9000},{"data": [[4,157]], "label": "157 people finished between 2:40 and  2:50<br>9.82 miles per hour (6:06 pace) <br>15.81 km per hour (3:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9600},{"data": [[5,353]], "label": "353 people finished between 2:50 and  3:00<br>9.24 miles per hour (6:29 pace) <br>14.88 km per hour (4:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10200},{"data": [[6,549]], "label": "549 people finished between 3:00 and  3:10<br>8.73 miles per hour (6:52 pace) <br>14.05 km per hour (4:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10800},{"data": [[7,863]], "label": "863 people finished between 3:10 and  3:20<br>8.27 miles per hour (7:15 pace) <br>13.31 km per hour (4:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11400},{"data": [[8,1232]], "label": "1232 people finished between 3:20 and  3:30<br>7.85 miles per hour (7:38 pace) <br>12.65 km per hour (4:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12000},{"data": [[9,1511]], "label": "1511 people finished between 3:30 and  3:40<br>7.48 miles per hour (8:01 pace) <br>12.05 km per hour (4:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12600},{"data": [[10,1888]], "label": "1888 people finished between 3:40 and  3:50<br>7.14 miles per hour (8:24 pace) <br>11.5 km per hour (5:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13200},{"data": [[11,2376]], "label": "2376 people finished between 3:50 and  4:00<br>6.83 miles per hour (8:46 pace) <br>11 km per hour (5:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13800},{"data": [[12,2009]], "label": "2009 people finished between 4:00 and  4:10<br>6.55 miles per hour (9:10 pace) <br>10.54 km per hour (5:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14400},{"data": [[13,2293]], "label": "2293 people finished between 4:10 and  4:20<br>6.28 miles per hour (9:33 pace) <br>10.12 km per hour (5:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15000},{"data": [[14,2308]], "label": "2308 people finished between 4:20 and  4:30<br>6.04 miles per hour (9:55 pace) <br>9.73 km per hour (6:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15600},{"data": [[15,1972]], "label": "1972 people finished between 4:30 and  4:40<br>5.82 miles per hour (10:18 pace) <br>9.37 km per hour (6:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16200},{"data": [[16,1889]], "label": "1889 people finished between 4:40 and  4:50<br>5.61 miles per hour (10:41 pace) <br>9.03 km per hour (6:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16800},{"data": [[17,1610]], "label": "1610 people finished between 4:50 and  5:00<br>5.42 miles per hour (11:04 pace) <br>8.72 km per hour (6:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17400},{"data": [[18,1145]], "label": "1145 people finished between 5:00 and  5:10<br>5.24 miles per hour (11:27 pace) <br>8.43 km per hour (7:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18000},{"data": [[19,1012]], "label": "1012 people finished between 5:10 and  5:20<br>5.07 miles per hour (11:50 pace) <br>8.16 km per hour (7:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18600},{"data": [[20,778]], "label": "778 people finished between 5:20 and  5:30<br>4.91 miles per hour (12:13 pace) <br>7.91 km per hour (7:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19200},{"data": [[21,584]], "label": "584 people finished between 5:30 and  5:40<br>4.76 miles per hour (12:35 pace) <br>7.67 km per hour (7:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19800},{"data": [[22,488]], "label": "488 people finished between 5:40 and  5:50<br>4.62 miles per hour (12:59 pace) <br>7.44 km per hour (8:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20400},{"data": [[23,359]], "label": "359 people finished between 5:50 and  6:00<br>4.49 miles per hour (13:22 pace) <br>7.23 km per hour (8:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21000},{"data": [[24,227]], "label": "227 people finished between 6:00 and  6:10<br>4.36 miles per hour (13:45 pace) <br>7.03 km per hour (8:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21600},{"data": [[25,171]], "label": "171 people finished between 6:10 and  6:20<br>4.25 miles per hour (14:07 pace) <br>6.84 km per hour (8:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22200},{"data": [[26,120]], "label": "120 people finished between 6:20 and  6:30<br>4.13 miles per hour (14:30 pace) <br>6.66 km per hour (9:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22800},{"data": [[27,124]], "label": "124 people finished between 6:30 and  6:40<br>4.03 miles per hour (14:54 pace) <br>6.49 km per hour (9:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23400},{"data": [[28,71]], "label": "71 people finished between 6:40 and  6:50<br>3.93 miles per hour (15:16 pace) <br>6.32 km per hour (9:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24000},{"data": [[29,55]], "label": "55 people finished between 6:51 and  7:01<br>3.82 miles per hour (15:41 pace) <br>6.15 km per hour (9:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24660},{"data": [[30,49]], "label": "49 people finished between 7:01 and  7:11<br>3.73 miles per hour (16:04 pace) <br>6.01 km per hour (9:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25260},{"data": [[31,37]], "label": "37 people finished between 7:12 and  7:22<br>3.64 miles per hour (16:30 pace) <br>5.86 km per hour (10:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25920},{"data": [[32,31]], "label": "31 people finished between 7:22 and  7:32<br>3.55 miles per hour (16:52 pace) <br>5.72 km per hour (10:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26520},{"data": [[33,19]], "label": "19 people finished between 7:33 and  7:43<br>3.47 miles per hour (17:18 pace) <br>5.58 km per hour (10:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27180},{"data": [[34,15]], "label": "15 people finished between 7:43 and  7:53<br>3.39 miles per hour (17:40 pace) <br>5.46 km per hour (10:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27780},{"data": [[35,11]], "label": "11 people finished between 7:53 and  8:03<br>3.32 miles per hour (18:04 pace) <br>5.35 km per hour (11:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28380},{"data": [[36,8]], "label": "8 people finished between 8:04 and  8:14<br>3.25 miles per hour (18:29 pace) <br>5.23 km per hour (11:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29040},{"data": [[37,10]], "label": "10 people finished between 8:14 and  8:24<br>3.18 miles per hour (18:52 pace) <br>5.12 km per hour (11:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29640},{"data": [[38,9]], "label": "9 people finished between 8:25 and  8:35<br>3.11 miles per hour (19:17 pace) <br>5.01 km per hour (11:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30300},{"data": [[39,2]], "label": "2 people finished between 8:43 and  8:53<br>3 miles per hour (19:58 pace) <br>4.84 km per hour (12:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31380},{"data": [[40,5]], "label": "5 people finished between 9:13 and  9:23<br>2.84 miles per hour (21:07 pace) <br>4.57 km per hour (13:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33180},{"data": [[41,2]], "label": "2 people finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,""],[22,"5:00"],[23,""],[24,""],[25,""],[26,""],[27,""],[28,""],[29,"6:00"],[30,""],[31,""],[32,""],[33,""],[34,""],[35,"7:00"],[36,""],[37,""],[38,""],[39,""],[40,"9:00"],[41,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
