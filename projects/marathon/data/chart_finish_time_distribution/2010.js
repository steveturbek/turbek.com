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
	
	var chart_data = {"seriesData":[{"data": [[1,14]], "label": "14 people finished between 2:08 and  2:18<br>12.27 miles per hour (4:53 pace) <br>19.76 km per hour (3:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7680},{"data": [[2,27]], "label": "27 people finished between 2:19 and  2:29<br>11.3 miles per hour (5:18 pace) <br>18.2 km per hour (3:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8340},{"data": [[3,87]], "label": "87 people finished between 2:29 and  2:39<br>10.54 miles per hour (5:41 pace) <br>16.98 km per hour (3:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8940},{"data": [[4,195]], "label": "195 people finished between 2:39 and  2:49<br>9.88 miles per hour (6:04 pace) <br>15.91 km per hour (3:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9540},{"data": [[5,553]], "label": "553 people finished between 2:49 and  2:59<br>9.3 miles per hour (6:27 pace) <br>14.97 km per hour (4:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10140},{"data": [[6,751]], "label": "751 people finished between 2:59 and  3:09<br>8.78 miles per hour (6:50 pace) <br>14.13 km per hour (4:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10740},{"data": [[7,1246]], "label": "1246 people finished between 3:09 and  3:19<br>8.31 miles per hour (7:13 pace) <br>13.38 km per hour (4:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11340},{"data": [[8,1935]], "label": "1935 people finished between 3:19 and  3:29<br>7.89 miles per hour (7:35 pace) <br>12.71 km per hour (4:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11940},{"data": [[9,2478]], "label": "2478 people finished between 3:29 and  3:39<br>7.52 miles per hour (7:58 pace) <br>12.1 km per hour (4:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12540},{"data": [[10,3158]], "label": "3158 people finished between 3:39 and  3:49<br>7.17 miles per hour (8:21 pace) <br>11.55 km per hour (5:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13140},{"data": [[11,4026]], "label": "4026 people finished between 3:49 and  3:59<br>6.86 miles per hour (8:45 pace) <br>11.05 km per hour (5:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13740},{"data": [[12,3633]], "label": "3633 people finished between 3:59 and  4:09<br>6.57 miles per hour (9:07 pace) <br>10.58 km per hour (5:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14340},{"data": [[13,3695]], "label": "3695 people finished between 4:09 and  4:19<br>6.31 miles per hour (9:30 pace) <br>10.16 km per hour (5:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14940},{"data": [[14,3769]], "label": "3769 people finished between 4:19 and  4:29<br>6.07 miles per hour (9:53 pace) <br>9.77 km per hour (6:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15540},{"data": [[15,3312]], "label": "3312 people finished between 4:29 and  4:39<br>5.84 miles per hour (10:16 pace) <br>9.4 km per hour (6:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16140},{"data": [[16,2877]], "label": "2877 people finished between 4:39 and  4:49<br>5.63 miles per hour (10:39 pace) <br>9.07 km per hour (6:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16740},{"data": [[17,2705]], "label": "2705 people finished between 4:49 and  4:59<br>5.44 miles per hour (11:02 pace) <br>8.75 km per hour (6:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17340},{"data": [[18,1936]], "label": "1936 people finished between 4:59 and  5:09<br>5.25 miles per hour (11:25 pace) <br>8.46 km per hour (7:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17940},{"data": [[19,1726]], "label": "1726 people finished between 5:09 and  5:19<br>5.08 miles per hour (11:48 pace) <br>8.19 km per hour (7:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18540},{"data": [[20,1429]], "label": "1429 people finished between 5:19 and  5:29<br>4.92 miles per hour (12:10 pace) <br>7.93 km per hour (7:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19140},{"data": [[21,1104]], "label": "1104 people finished between 5:29 and  5:39<br>4.77 miles per hour (12:34 pace) <br>7.69 km per hour (7:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19740},{"data": [[22,936]], "label": "936 people finished between 5:39 and  5:49<br>4.63 miles per hour (12:56 pace) <br>7.46 km per hour (8:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20340},{"data": [[23,721]], "label": "721 people finished between 5:49 and  5:59<br>4.5 miles per hour (13:19 pace) <br>7.25 km per hour (8:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20940},{"data": [[24,512]], "label": "512 people finished between 5:59 and  6:09<br>4.38 miles per hour (13:42 pace) <br>7.05 km per hour (8:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21540},{"data": [[25,468]], "label": "468 people finished between 6:09 and  6:19<br>4.26 miles per hour (14:05 pace) <br>6.86 km per hour (8:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22140},{"data": [[26,337]], "label": "337 people finished between 6:19 and  6:29<br>4.14 miles per hour (14:28 pace) <br>6.67 km per hour (8:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22740},{"data": [[27,287]], "label": "287 people finished between 6:29 and  6:39<br>4.04 miles per hour (14:51 pace) <br>6.5 km per hour (9:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23340},{"data": [[28,225]], "label": "225 people finished between 6:39 and  6:49<br>3.94 miles per hour (15:14 pace) <br>6.34 km per hour (9:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23940},{"data": [[29,183]], "label": "183 people finished between 6:49 and  6:59<br>3.84 miles per hour (15:37 pace) <br>6.18 km per hour (9:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24540},{"data": [[30,136]], "label": "136 people finished between 6:59 and  7:09<br>3.75 miles per hour (16:00 pace) <br>6.04 km per hour (9:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25140},{"data": [[31,105]], "label": "105 people finished between 7:10 and  7:20<br>3.65 miles per hour (16:25 pace) <br>5.88 km per hour (10:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25800},{"data": [[32,62]], "label": "62 people finished between 7:20 and  7:30<br>3.57 miles per hour (16:48 pace) <br>5.75 km per hour (10:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26400},{"data": [[33,70]], "label": "70 people finished between 7:31 and  7:41<br>3.48 miles per hour (17:13 pace) <br>5.61 km per hour (10:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27060},{"data": [[34,42]], "label": "42 people finished between 7:41 and  7:51<br>3.41 miles per hour (17:36 pace) <br>5.49 km per hour (10:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27660},{"data": [[35,21]], "label": "21 people finished between 7:51 and  8:01<br>3.34 miles per hour (17:59 pace) <br>5.37 km per hour (11:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28260},{"data": [[36,34]], "label": "34 people finished between 8:01 and  8:11<br>3.27 miles per hour (18:22 pace) <br>5.26 km per hour (11:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28860},{"data": [[37,17]], "label": "17 people finished between 8:11 and  8:21<br>3.2 miles per hour (18:45 pace) <br>5.15 km per hour (11:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29460},{"data": [[38,12]], "label": "12 people finished between 8:22 and  8:32<br>3.13 miles per hour (19:10 pace) <br>5.04 km per hour (11:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30120},{"data": [[39,3]], "label": "3 people finished between 8:36 and  8:46<br>3.04 miles per hour (19:42 pace) <br>4.9 km per hour (12:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30960},{"data": [[40,2]], "label": "2 people finished between 8:51 and  9:01<br>2.96 miles per hour (20:16 pace) <br>4.76 km per hour (12:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31860},{"data": [[41,1]], "label": "1 person finished between 9:07 and  9:17<br>2.87 miles per hour (20:53 pace) <br>4.62 km per hour (12:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32820}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
