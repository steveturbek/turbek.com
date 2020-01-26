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
	
	var chart_data = {"seriesData":[{"data": [[1,15]], "label": "15 people finished between 2:08 and  2:18<br>12.27 miles per hour (4:53 pace) <br>19.76 km per hour (3:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7680},{"data": [[2,35]], "label": "35 people finished between 2:22 and  2:32<br>11.06 miles per hour (5:25 pace) <br>17.81 km per hour (3:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8520},{"data": [[3,69]], "label": "69 people finished between 2:32 and  2:42<br>10.33 miles per hour (5:48 pace) <br>16.64 km per hour (3:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9120},{"data": [[4,215]], "label": "215 people finished between 2:42 and  2:52<br>9.7 miles per hour (6:11 pace) <br>15.61 km per hour (3:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9720},{"data": [[5,569]], "label": "569 people finished between 2:52 and  3:02<br>9.13 miles per hour (6:34 pace) <br>14.71 km per hour (4:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10320},{"data": [[6,790]], "label": "790 people finished between 3:02 and  3:12<br>8.63 miles per hour (6:57 pace) <br>13.9 km per hour (4:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10920},{"data": [[7,1377]], "label": "1377 people finished between 3:12 and  3:22<br>8.18 miles per hour (7:19 pace) <br>13.18 km per hour (4:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11520},{"data": [[8,2356]], "label": "2356 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[9,2882]], "label": "2882 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[10,3687]], "label": "3687 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[11,4859]], "label": "4859 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[12,3976]], "label": "3976 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[13,4214]], "label": "4214 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[14,4124]], "label": "4124 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[15,3604]], "label": "3604 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[16,3458]], "label": "3458 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[17,2853]], "label": "2853 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[18,2107]], "label": "2107 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[19,1781]], "label": "1781 people finished between 5:12 and  5:22<br>5.03 miles per hour (11:55 pace) <br>8.11 km per hour (7:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18720},{"data": [[20,1488]], "label": "1488 people finished between 5:22 and  5:32<br>4.88 miles per hour (12:18 pace) <br>7.86 km per hour (7:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19320},{"data": [[21,1161]], "label": "1161 people finished between 5:32 and  5:42<br>4.73 miles per hour (12:40 pace) <br>7.62 km per hour (7:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19920},{"data": [[22,1031]], "label": "1031 people finished between 5:42 and  5:52<br>4.59 miles per hour (13:03 pace) <br>7.4 km per hour (8:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20520},{"data": [[23,764]], "label": "764 people finished between 5:52 and  6:02<br>4.46 miles per hour (13:26 pace) <br>7.19 km per hour (8:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21120},{"data": [[24,599]], "label": "599 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[25,438]], "label": "438 people finished between 6:12 and  6:22<br>4.22 miles per hour (14:12 pace) <br>6.8 km per hour (8:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22320},{"data": [[26,371]], "label": "371 people finished between 6:22 and  6:32<br>4.11 miles per hour (14:35 pace) <br>6.62 km per hour (9:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22920},{"data": [[27,287]], "label": "287 people finished between 6:32 and  6:42<br>4.01 miles per hour (14:58 pace) <br>6.45 km per hour (9:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23520},{"data": [[28,224]], "label": "224 people finished between 6:42 and  6:52<br>3.91 miles per hour (15:20 pace) <br>6.29 km per hour (9:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24120},{"data": [[29,177]], "label": "177 people finished between 6:52 and  7:02<br>3.81 miles per hour (15:44 pace) <br>6.14 km per hour (9:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24720},{"data": [[30,122]], "label": "122 people finished between 7:02 and  7:12<br>3.72 miles per hour (16:07 pace) <br>5.99 km per hour (10:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25320},{"data": [[31,89]], "label": "89 people finished between 7:12 and  7:22<br>3.64 miles per hour (16:30 pace) <br>5.86 km per hour (10:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25920},{"data": [[32,74]], "label": "74 people finished between 7:23 and  7:33<br>3.55 miles per hour (16:55 pace) <br>5.71 km per hour (10:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26580},{"data": [[33,44]], "label": "44 people finished between 7:34 and  7:44<br>3.46 miles per hour (17:20 pace) <br>5.57 km per hour (10:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27240},{"data": [[34,50]], "label": "50 people finished between 7:44 and  7:54<br>3.39 miles per hour (17:43 pace) <br>5.45 km per hour (11:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27840},{"data": [[35,42]], "label": "42 people finished between 7:54 and  8:04<br>3.31 miles per hour (18:06 pace) <br>5.34 km per hour (11:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28440},{"data": [[36,18]], "label": "18 people finished between 8:05 and  8:15<br>3.24 miles per hour (18:31 pace) <br>5.22 km per hour (11:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29100},{"data": [[37,16]], "label": "16 people finished between 8:16 and  8:26<br>3.17 miles per hour (18:56 pace) <br>5.1 km per hour (11:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29760},{"data": [[38,12]], "label": "12 people finished between 8:26 and  8:36<br>3.1 miles per hour (19:19 pace) <br>5 km per hour (12:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30360},{"data": [[39,2]], "label": "2 people finished between 8:38 and  8:48<br>3.03 miles per hour (19:47 pace) <br>4.88 km per hour (12:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31080},{"data": [[40,1]], "label": "1 person finished between 9:02 and  9:12<br>2.9 miles per hour (20:41 pace) <br>4.67 km per hour (12:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32520},{"data": [[41,1]], "label": "1 person finished between 9:22 and  9:32<br>2.8 miles per hour (21:28 pace) <br>4.5 km per hour (13:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33720}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"9:00"],[41,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
