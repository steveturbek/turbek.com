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
	
	var chart_data = {"seriesData":[{"data": [[1,10]], "label": "10 people finished between 2:01 and  2:11<br>12.98 miles per hour (4:37 pace) <br>20.91 km per hour (2:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7260},{"data": [[2,16]], "label": "16 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[3,36]], "label": "36 people finished between 2:21 and  2:31<br>11.14 miles per hour (5:23 pace) <br>17.94 km per hour (3:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8460},{"data": [[4,81]], "label": "81 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[5,208]], "label": "208 people finished between 2:41 and  2:51<br>9.76 miles per hour (6:09 pace) <br>15.71 km per hour (3:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9660},{"data": [[6,436]], "label": "436 people finished between 2:51 and  3:01<br>9.19 miles per hour (6:31 pace) <br>14.79 km per hour (4:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10260},{"data": [[7,592]], "label": "592 people finished between 3:01 and  3:11<br>8.68 miles per hour (6:54 pace) <br>13.98 km per hour (4:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10860},{"data": [[8,920]], "label": "920 people finished between 3:11 and  3:21<br>8.22 miles per hour (7:17 pace) <br>13.24 km per hour (4:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11460},{"data": [[9,1439]], "label": "1439 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[10,1862]], "label": "1862 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[11,2202]], "label": "2202 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[12,2779]], "label": "2779 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[13,2594]], "label": "2594 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[14,2615]], "label": "2615 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[15,2647]], "label": "2647 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[16,2368]], "label": "2368 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[17,2232]], "label": "2232 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[18,2000]], "label": "2000 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[19,1548]], "label": "1548 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[20,1161]], "label": "1161 people finished between 5:12 and  5:22<br>5.03 miles per hour (11:55 pace) <br>8.11 km per hour (7:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18720},{"data": [[21,898]], "label": "898 people finished between 5:22 and  5:32<br>4.88 miles per hour (12:18 pace) <br>7.86 km per hour (7:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19320},{"data": [[22,614]], "label": "614 people finished between 5:32 and  5:42<br>4.73 miles per hour (12:40 pace) <br>7.62 km per hour (7:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19920},{"data": [[23,578]], "label": "578 people finished between 5:42 and  5:52<br>4.59 miles per hour (13:03 pace) <br>7.4 km per hour (8:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20520},{"data": [[24,449]], "label": "449 people finished between 5:52 and  6:02<br>4.46 miles per hour (13:26 pace) <br>7.19 km per hour (8:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21120},{"data": [[25,291]], "label": "291 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[26,207]], "label": "207 people finished between 6:12 and  6:22<br>4.22 miles per hour (14:12 pace) <br>6.8 km per hour (8:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22320},{"data": [[27,172]], "label": "172 people finished between 6:22 and  6:32<br>4.11 miles per hour (14:35 pace) <br>6.62 km per hour (9:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22920},{"data": [[28,168]], "label": "168 people finished between 6:32 and  6:42<br>4.01 miles per hour (14:58 pace) <br>6.45 km per hour (9:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23520},{"data": [[29,127]], "label": "127 people finished between 6:42 and  6:52<br>3.91 miles per hour (15:20 pace) <br>6.29 km per hour (9:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24120},{"data": [[30,117]], "label": "117 people finished between 6:52 and  7:02<br>3.81 miles per hour (15:44 pace) <br>6.14 km per hour (9:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24720},{"data": [[31,115]], "label": "115 people finished between 7:02 and  7:12<br>3.72 miles per hour (16:07 pace) <br>5.99 km per hour (10:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25320},{"data": [[32,84]], "label": "84 people finished between 7:12 and  7:22<br>3.64 miles per hour (16:30 pace) <br>5.86 km per hour (10:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25920},{"data": [[33,62]], "label": "62 people finished between 7:22 and  7:32<br>3.55 miles per hour (16:52 pace) <br>5.72 km per hour (10:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26520},{"data": [[34,46]], "label": "46 people finished between 7:33 and  7:43<br>3.47 miles per hour (17:18 pace) <br>5.58 km per hour (10:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27180},{"data": [[35,36]], "label": "36 people finished between 7:44 and  7:54<br>3.39 miles per hour (17:43 pace) <br>5.45 km per hour (11:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27840},{"data": [[36,29]], "label": "29 people finished between 7:54 and  8:04<br>3.31 miles per hour (18:06 pace) <br>5.34 km per hour (11:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28440},{"data": [[37,18]], "label": "18 people finished between 8:06 and  8:16<br>3.23 miles per hour (18:33 pace) <br>5.2 km per hour (11:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29160},{"data": [[38,10]], "label": "10 people finished between 8:16 and  8:26<br>3.17 miles per hour (18:56 pace) <br>5.1 km per hour (11:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29760},{"data": [[39,15]], "label": "15 people finished between 8:27 and  8:37<br>3.1 miles per hour (19:21 pace) <br>4.99 km per hour (12:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30420},{"data": [[40,5]], "label": "5 people finished between 8:38 and  8:48<br>3.03 miles per hour (19:47 pace) <br>4.88 km per hour (12:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31080},{"data": [[41,11]], "label": "11 people finished between 8:50 and  9:00<br>2.96 miles per hour (20:14 pace) <br>4.77 km per hour (12:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31800},{"data": [[42,10]], "label": "10 people finished between 9:01 and  9:11<br>2.9 miles per hour (20:39 pace) <br>4.68 km per hour (12:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32460},{"data": [[43,1]], "label": "1 person finished between 9:13 and  9:23<br>2.84 miles per hour (21:07 pace) <br>4.57 km per hour (13:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33180},{"data": [[44,7]], "label": "7 people finished between 9:23 and  9:33<br>2.79 miles per hour (21:30 pace) <br>4.49 km per hour (13:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33780},{"data": [[45,5]], "label": "5 people finished between 9:36 and  9:46<br>2.73 miles per hour (22:00 pace) <br>4.39 km per hour (13:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34560},{"data": [[46,2]], "label": "2 people finished between 9:48 and  9:58<br>2.67 miles per hour (22:27 pace) <br>4.3 km per hour (13:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35280},{"data": [[47,9]], "label": "9 people finished between 9:59 and  10:09<br>2.62 miles per hour (22:52 pace) <br>4.22 km per hour (14:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35940}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,""],[44,""],[45,""],[46,"9:00"],[47,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
