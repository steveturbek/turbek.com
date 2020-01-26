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
	
	var chart_data = {"seriesData":[{"data": [[1,22]], "label": "22 people finished between 2:08 and  2:18<br>12.27 miles per hour (4:53 pace) <br>19.76 km per hour (3:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7680},{"data": [[2,45]], "label": "45 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[3,97]], "label": "97 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[4,192]], "label": "192 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[5,438]], "label": "438 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[6,616]], "label": "616 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[7,949]], "label": "949 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[8,1381]], "label": "1381 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[9,1761]], "label": "1761 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[10,2163]], "label": "2163 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[11,2909]], "label": "2909 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[12,2473]], "label": "2473 people finished between 3:59 and  4:09<br>6.57 miles per hour (9:07 pace) <br>10.58 km per hour (5:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14340},{"data": [[13,2617]], "label": "2617 people finished between 4:09 and  4:19<br>6.31 miles per hour (9:30 pace) <br>10.16 km per hour (5:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14940},{"data": [[14,2632]], "label": "2632 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[15,2349]], "label": "2349 people finished between 4:29 and  4:39<br>5.84 miles per hour (10:16 pace) <br>9.4 km per hour (6:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16140},{"data": [[16,2152]], "label": "2152 people finished between 4:39 and  4:49<br>5.63 miles per hour (10:39 pace) <br>9.07 km per hour (6:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16740},{"data": [[17,2009]], "label": "2009 people finished between 4:49 and  4:59<br>5.44 miles per hour (11:02 pace) <br>8.75 km per hour (6:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17340},{"data": [[18,1458]], "label": "1458 people finished between 4:59 and  5:09<br>5.25 miles per hour (11:25 pace) <br>8.46 km per hour (7:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17940},{"data": [[19,1125]], "label": "1125 people finished between 5:09 and  5:19<br>5.08 miles per hour (11:48 pace) <br>8.19 km per hour (7:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18540},{"data": [[20,887]], "label": "887 people finished between 5:19 and  5:29<br>4.92 miles per hour (12:10 pace) <br>7.93 km per hour (7:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19140},{"data": [[21,660]], "label": "660 people finished between 5:29 and  5:39<br>4.77 miles per hour (12:34 pace) <br>7.69 km per hour (7:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19740},{"data": [[22,580]], "label": "580 people finished between 5:39 and  5:49<br>4.63 miles per hour (12:56 pace) <br>7.46 km per hour (8:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20340},{"data": [[23,483]], "label": "483 people finished between 5:49 and  5:59<br>4.5 miles per hour (13:19 pace) <br>7.25 km per hour (8:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20940},{"data": [[24,271]], "label": "271 people finished between 5:59 and  6:09<br>4.38 miles per hour (13:42 pace) <br>7.05 km per hour (8:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21540},{"data": [[25,229]], "label": "229 people finished between 6:09 and  6:19<br>4.26 miles per hour (14:05 pace) <br>6.86 km per hour (8:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22140},{"data": [[26,189]], "label": "189 people finished between 6:20 and  6:30<br>4.13 miles per hour (14:30 pace) <br>6.66 km per hour (9:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22800},{"data": [[27,110]], "label": "110 people finished between 6:30 and  6:40<br>4.03 miles per hour (14:54 pace) <br>6.49 km per hour (9:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23400},{"data": [[28,148]], "label": "148 people finished between 6:40 and  6:50<br>3.93 miles per hour (15:16 pace) <br>6.32 km per hour (9:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24000},{"data": [[29,101]], "label": "101 people finished between 6:50 and  7:00<br>3.83 miles per hour (15:39 pace) <br>6.17 km per hour (9:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24600},{"data": [[30,72]], "label": "72 people finished between 7:00 and  7:10<br>3.74 miles per hour (16:02 pace) <br>6.02 km per hour (9:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25200},{"data": [[31,53]], "label": "53 people finished between 7:10 and  7:20<br>3.65 miles per hour (16:25 pace) <br>5.88 km per hour (10:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25800},{"data": [[32,30]], "label": "30 people finished between 7:20 and  7:30<br>3.57 miles per hour (16:48 pace) <br>5.75 km per hour (10:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26400},{"data": [[33,49]], "label": "49 people finished between 7:31 and  7:41<br>3.48 miles per hour (17:13 pace) <br>5.61 km per hour (10:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27060},{"data": [[34,37]], "label": "37 people finished between 7:41 and  7:51<br>3.41 miles per hour (17:36 pace) <br>5.49 km per hour (10:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27660},{"data": [[35,25]], "label": "25 people finished between 7:52 and  8:02<br>3.33 miles per hour (18:01 pace) <br>5.36 km per hour (11:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28320},{"data": [[36,22]], "label": "22 people finished between 8:04 and  8:14<br>3.25 miles per hour (18:29 pace) <br>5.23 km per hour (11:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29040},{"data": [[37,3]], "label": "3 people finished between 8:14 and  8:24<br>3.18 miles per hour (18:52 pace) <br>5.12 km per hour (11:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29640},{"data": [[38,6]], "label": "6 people finished between 8:25 and  8:35<br>3.11 miles per hour (19:17 pace) <br>5.01 km per hour (11:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30300},{"data": [[39,10]], "label": "10 people finished between 8:41 and  8:51<br>3.02 miles per hour (19:53 pace) <br>4.86 km per hour (12:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31260},{"data": [[40,5]], "label": "5 people finished between 8:55 and  9:05<br>2.94 miles per hour (20:25 pace) <br>4.73 km per hour (12:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32100},{"data": [[41,5]], "label": "5 people finished between 9:07 and  9:17<br>2.87 miles per hour (20:53 pace) <br>4.62 km per hour (12:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32820},{"data": [[42,2]], "label": "2 people finished between 9:47 and  9:57<br>2.68 miles per hour (22:25 pace) <br>4.31 km per hour (13:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35220},{"data": [[43,1]], "label": "1 person finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,"7:00"],[34,""],[35,""],[36,""],[37,""],[38,""],[39,"8:00"],[40,""],[41,""],[42,"9:00"],[43,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
