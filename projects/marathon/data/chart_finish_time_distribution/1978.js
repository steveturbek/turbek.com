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
	
	var chart_data = {"seriesData":[{"data": [[1,28]], "label": "28 people finished between 2:12 and  2:22<br>11.9 miles per hour (5:02 pace) <br>19.16 km per hour (3:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7920},{"data": [[2,73]], "label": "73 people finished between 2:22 and  2:32<br>11.06 miles per hour (5:25 pace) <br>17.81 km per hour (3:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8520},{"data": [[3,123]], "label": "123 people finished between 2:32 and  2:42<br>10.33 miles per hour (5:48 pace) <br>16.64 km per hour (3:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9120},{"data": [[4,277]], "label": "277 people finished between 2:42 and  2:52<br>9.7 miles per hour (6:11 pace) <br>15.61 km per hour (3:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9720},{"data": [[5,403]], "label": "403 people finished between 2:52 and  3:02<br>9.13 miles per hour (6:34 pace) <br>14.71 km per hour (4:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10320},{"data": [[6,475]], "label": "475 people finished between 3:02 and  3:12<br>8.63 miles per hour (6:57 pace) <br>13.9 km per hour (4:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10920},{"data": [[7,640]], "label": "640 people finished between 3:12 and  3:22<br>8.18 miles per hour (7:19 pace) <br>13.18 km per hour (4:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11520},{"data": [[8,799]], "label": "799 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[9,834]], "label": "834 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[10,815]], "label": "815 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[11,825]], "label": "825 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[12,634]], "label": "634 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[13,595]], "label": "595 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[14,545]], "label": "545 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[15,446]], "label": "446 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[16,270]], "label": "270 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[17,274]], "label": "274 people finished between 4:53 and  5:03<br>5.36 miles per hour (11:11 pace) <br>8.63 km per hour (6:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17580},{"data": [[18,192]], "label": "192 people finished between 5:03 and  5:13<br>5.18 miles per hour (11:34 pace) <br>8.35 km per hour (7:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18180},{"data": [[19,116]], "label": "116 people finished between 5:13 and  5:23<br>5.02 miles per hour (11:57 pace) <br>8.08 km per hour (7:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18780},{"data": [[20,74]], "label": "74 people finished between 5:23 and  5:33<br>4.86 miles per hour (12:20 pace) <br>7.83 km per hour (7:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19380},{"data": [[21,70]], "label": "70 people finished between 5:33 and  5:43<br>4.72 miles per hour (12:43 pace) <br>7.6 km per hour (7:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19980},{"data": [[22,24]], "label": "24 people finished between 5:43 and  5:53<br>4.58 miles per hour (13:05 pace) <br>7.37 km per hour (8:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20580},{"data": [[23,23]], "label": "23 people finished between 5:54 and  6:04<br>4.44 miles per hour (13:31 pace) <br>7.15 km per hour (8:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21240},{"data": [[24,12]], "label": "12 people finished between 6:04 and  6:14<br>4.32 miles per hour (13:54 pace) <br>6.95 km per hour (8:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21840},{"data": [[25,8]], "label": "8 people finished between 6:16 and  6:26<br>4.18 miles per hour (14:21 pace) <br>6.73 km per hour (8:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22560},{"data": [[26,6]], "label": "6 people finished between 6:27 and  6:37<br>4.06 miles per hour (14:46 pace) <br>6.54 km per hour (9:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23220},{"data": [[27,2]], "label": "2 people finished between 6:49 and  6:59<br>3.84 miles per hour (15:37 pace) <br>6.18 km per hour (9:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24540},{"data": [[28,4]], "label": "4 people finished between 7:06 and  7:16<br>3.69 miles per hour (16:16 pace) <br>5.94 km per hour (10:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25560}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,"3:00"],[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,"4:00"],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
