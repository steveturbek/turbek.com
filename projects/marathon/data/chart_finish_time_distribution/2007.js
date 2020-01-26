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
	
	var chart_data = {"seriesData":[{"data": [[1,12]], "label": "12 people finished between 1:33 and  1:43<br>16.89 miles per hour (3:32 pace) <br>27.2 km per hour (2:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5580},{"data": [[2,7]], "label": "7 people finished between 1:44 and  1:54<br>15.1 miles per hour (3:58 pace) <br>24.32 km per hour (2:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6240},{"data": [[3,9]], "label": "9 people finished between 1:54 and  2:04<br>13.78 miles per hour (4:20 pace) <br>22.19 km per hour (2:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6840},{"data": [[4,11]], "label": "11 people finished between 2:04 and  2:14<br>12.67 miles per hour (4:44 pace) <br>20.4 km per hour (2:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7440},{"data": [[5,15]], "label": "15 people finished between 2:15 and  2:25<br>11.64 miles per hour (5:09 pace) <br>18.74 km per hour (3:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8100},{"data": [[6,39]], "label": "39 people finished between 2:25 and  2:35<br>10.83 miles per hour (5:32 pace) <br>17.45 km per hour (3:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8700},{"data": [[7,159]], "label": "159 people finished between 2:36 and  2:46<br>10.07 miles per hour (5:57 pace) <br>16.22 km per hour (3:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9360},{"data": [[8,338]], "label": "338 people finished between 2:46 and  2:56<br>9.46 miles per hour (6:20 pace) <br>15.24 km per hour (3:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9960},{"data": [[9,615]], "label": "615 people finished between 2:56 and  3:06<br>8.93 miles per hour (6:43 pace) <br>14.37 km per hour (4:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10560},{"data": [[10,910]], "label": "910 people finished between 3:06 and  3:16<br>8.45 miles per hour (7:05 pace) <br>13.6 km per hour (4:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11160},{"data": [[11,1314]], "label": "1314 people finished between 3:16 and  3:26<br>8.01 miles per hour (7:29 pace) <br>12.91 km per hour (4:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11760},{"data": [[12,1830]], "label": "1830 people finished between 3:26 and  3:36<br>7.63 miles per hour (7:52 pace) <br>12.28 km per hour (4:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12360},{"data": [[13,2307]], "label": "2307 people finished between 3:36 and  3:46<br>7.27 miles per hour (8:15 pace) <br>11.71 km per hour (5:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12960},{"data": [[14,2954]], "label": "2954 people finished between 3:46 and  3:56<br>6.95 miles per hour (8:37 pace) <br>11.19 km per hour (5:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13560},{"data": [[15,3251]], "label": "3251 people finished between 3:56 and  4:06<br>6.66 miles per hour (9:00 pace) <br>10.72 km per hour (5:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14160},{"data": [[16,3164]], "label": "3164 people finished between 4:06 and  4:16<br>6.39 miles per hour (9:24 pace) <br>10.28 km per hour (5:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14760},{"data": [[17,3241]], "label": "3241 people finished between 4:16 and  4:26<br>6.14 miles per hour (9:46 pace) <br>9.88 km per hour (6:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15360},{"data": [[18,3091]], "label": "3091 people finished between 4:26 and  4:36<br>5.91 miles per hour (10:09 pace) <br>9.51 km per hour (6:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15960},{"data": [[19,2870]], "label": "2870 people finished between 4:36 and  4:46<br>5.69 miles per hour (10:32 pace) <br>9.17 km per hour (6:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16560},{"data": [[20,2698]], "label": "2698 people finished between 4:46 and  4:56<br>5.49 miles per hour (10:55 pace) <br>8.84 km per hour (6:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17160},{"data": [[21,2086]], "label": "2086 people finished between 4:56 and  5:06<br>5.31 miles per hour (11:18 pace) <br>8.55 km per hour (7:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17760},{"data": [[22,1631]], "label": "1631 people finished between 5:06 and  5:16<br>5.13 miles per hour (11:41 pace) <br>8.27 km per hour (7:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18360},{"data": [[23,1312]], "label": "1312 people finished between 5:16 and  5:26<br>4.97 miles per hour (12:04 pace) <br>8.01 km per hour (7:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18960},{"data": [[24,1040]], "label": "1040 people finished between 5:26 and  5:36<br>4.82 miles per hour (12:26 pace) <br>7.76 km per hour (7:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19560},{"data": [[25,848]], "label": "848 people finished between 5:36 and  5:46<br>4.68 miles per hour (12:49 pace) <br>7.53 km per hour (7:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20160},{"data": [[26,648]], "label": "648 people finished between 5:46 and  5:56<br>4.54 miles per hour (13:13 pace) <br>7.31 km per hour (8:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20760},{"data": [[27,502]], "label": "502 people finished between 5:56 and  6:06<br>4.41 miles per hour (13:35 pace) <br>7.11 km per hour (8:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21360},{"data": [[28,361]], "label": "361 people finished between 6:06 and  6:16<br>4.29 miles per hour (13:58 pace) <br>6.91 km per hour (8:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21960},{"data": [[29,307]], "label": "307 people finished between 6:16 and  6:26<br>4.18 miles per hour (14:21 pace) <br>6.73 km per hour (8:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22560},{"data": [[30,243]], "label": "243 people finished between 6:26 and  6:36<br>4.07 miles per hour (14:44 pace) <br>6.55 km per hour (9:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23160},{"data": [[31,183]], "label": "183 people finished between 6:36 and  6:46<br>3.97 miles per hour (15:07 pace) <br>6.39 km per hour (9:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23760},{"data": [[32,139]], "label": "139 people finished between 6:46 and  6:56<br>3.87 miles per hour (15:30 pace) <br>6.23 km per hour (9:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24360},{"data": [[33,111]], "label": "111 people finished between 6:56 and  7:06<br>3.78 miles per hour (15:53 pace) <br>6.08 km per hour (9:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24960},{"data": [[34,84]], "label": "84 people finished between 7:07 and  7:17<br>3.68 miles per hour (16:18 pace) <br>5.92 km per hour (10:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25620},{"data": [[35,79]], "label": "79 people finished between 7:17 and  7:27<br>3.59 miles per hour (16:41 pace) <br>5.79 km per hour (10:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26220},{"data": [[36,50]], "label": "50 people finished between 7:27 and  7:37<br>3.51 miles per hour (17:04 pace) <br>5.66 km per hour (10:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26820},{"data": [[37,39]], "label": "39 people finished between 7:38 and  7:48<br>3.43 miles per hour (17:29 pace) <br>5.52 km per hour (10:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27480},{"data": [[38,29]], "label": "29 people finished between 7:48 and  7:58<br>3.36 miles per hour (17:52 pace) <br>5.41 km per hour (11:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28080},{"data": [[39,17]], "label": "17 people finished between 7:58 and  8:08<br>3.29 miles per hour (18:15 pace) <br>5.29 km per hour (11:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28680},{"data": [[40,10]], "label": "10 people finished between 8:09 and  8:19<br>3.21 miles per hour (18:40 pace) <br>5.17 km per hour (11:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29340},{"data": [[41,2]], "label": "2 people finished between 8:23 and  8:33<br>3.12 miles per hour (19:12 pace) <br>5.03 km per hour (11:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30180},{"data": [[42,2]], "label": "2 people finished between 8:47 and  8:57<br>2.98 miles per hour (20:07 pace) <br>4.8 km per hour (12:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31620}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"4:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
