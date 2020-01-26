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
	
	var chart_data = {"seriesData":[{"data": [[1,44]], "label": "44 people finished between 2:09 and  2:19<br>12.18 miles per hour (4:55 pace) <br>19.61 km per hour (3:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7740},{"data": [[2,115]], "label": "115 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[3,210]], "label": "210 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[4,433]], "label": "433 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[5,756]], "label": "756 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[6,885]], "label": "885 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[7,1203]], "label": "1203 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[8,1503]], "label": "1503 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[9,1457]], "label": "1457 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[10,1472]], "label": "1472 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[11,1460]], "label": "1460 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[12,982]], "label": "982 people finished between 3:59 and  4:09<br>6.57 miles per hour (9:07 pace) <br>10.58 km per hour (5:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14340},{"data": [[13,793]], "label": "793 people finished between 4:09 and  4:19<br>6.31 miles per hour (9:30 pace) <br>10.16 km per hour (5:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14940},{"data": [[14,628]], "label": "628 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[15,453]], "label": "453 people finished between 4:29 and  4:39<br>5.84 miles per hour (10:16 pace) <br>9.4 km per hour (6:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16140},{"data": [[16,361]], "label": "361 people finished between 4:39 and  4:49<br>5.63 miles per hour (10:39 pace) <br>9.07 km per hour (6:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16740},{"data": [[17,296]], "label": "296 people finished between 4:49 and  4:59<br>5.44 miles per hour (11:02 pace) <br>8.75 km per hour (6:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17340},{"data": [[18,153]], "label": "153 people finished between 5:00 and  5:10<br>5.24 miles per hour (11:27 pace) <br>8.43 km per hour (7:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18000},{"data": [[19,139]], "label": "139 people finished between 5:10 and  5:20<br>5.07 miles per hour (11:50 pace) <br>8.16 km per hour (7:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18600},{"data": [[20,88]], "label": "88 people finished between 5:20 and  5:30<br>4.91 miles per hour (12:13 pace) <br>7.91 km per hour (7:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19200},{"data": [[21,58]], "label": "58 people finished between 5:30 and  5:40<br>4.76 miles per hour (12:35 pace) <br>7.67 km per hour (7:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19800},{"data": [[22,25]], "label": "25 people finished between 5:40 and  5:50<br>4.62 miles per hour (12:59 pace) <br>7.44 km per hour (8:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20400},{"data": [[23,25]], "label": "25 people finished between 5:52 and  6:02<br>4.46 miles per hour (13:26 pace) <br>7.19 km per hour (8:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21120},{"data": [[24,12]], "label": "12 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[25,20]], "label": "20 people finished between 6:12 and  6:22<br>4.22 miles per hour (14:12 pace) <br>6.8 km per hour (8:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22320},{"data": [[26,10]], "label": "10 people finished between 6:24 and  6:34<br>4.09 miles per hour (14:40 pace) <br>6.59 km per hour (9:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23040},{"data": [[27,5]], "label": "5 people finished between 6:36 and  6:46<br>3.97 miles per hour (15:07 pace) <br>6.39 km per hour (9:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23760},{"data": [[28,6]], "label": "6 people finished between 6:52 and  7:02<br>3.81 miles per hour (15:44 pace) <br>6.14 km per hour (9:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24720},{"data": [[29,1]], "label": "1 person finished between 7:02 and  7:12<br>3.72 miles per hour (16:07 pace) <br>5.99 km per hour (10:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25320},{"data": [[30,2]], "label": "2 people finished between 7:16 and  7:26<br>3.6 miles per hour (16:38 pace) <br>5.8 km per hour (10:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26160},{"data": [[31,2]], "label": "2 people finished between 7:27 and  7:37<br>3.51 miles per hour (17:04 pace) <br>5.66 km per hour (10:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26820},{"data": [[32,1]], "label": "1 person finished between 9:35 and  9:45<br>2.73 miles per hour (21:57 pace) <br>4.4 km per hour (13:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34500},{"data": [[33,1]], "label": "1 person finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,"9:00"],[33,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
