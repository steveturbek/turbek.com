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
	
	var chart_data = {"seriesData":[{"data": [[1,32]], "label": "32 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[2,67]], "label": "67 people finished between 2:21 and  2:31<br>11.14 miles per hour (5:23 pace) <br>17.94 km per hour (3:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8460},{"data": [[3,143]], "label": "143 people finished between 2:31 and  2:41<br>10.4 miles per hour (5:46 pace) <br>16.75 km per hour (3:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9060},{"data": [[4,249]], "label": "249 people finished between 2:42 and  2:52<br>9.7 miles per hour (6:11 pace) <br>15.61 km per hour (3:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9720},{"data": [[5,468]], "label": "468 people finished between 2:52 and  3:02<br>9.13 miles per hour (6:34 pace) <br>14.71 km per hour (4:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10320},{"data": [[6,579]], "label": "579 people finished between 3:02 and  3:12<br>8.63 miles per hour (6:57 pace) <br>13.9 km per hour (4:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10920},{"data": [[7,718]], "label": "718 people finished between 3:12 and  3:22<br>8.18 miles per hour (7:19 pace) <br>13.18 km per hour (4:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11520},{"data": [[8,913]], "label": "913 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[9,939]], "label": "939 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[10,948]], "label": "948 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[11,1055]], "label": "1055 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[12,816]], "label": "816 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[13,773]], "label": "773 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[14,648]], "label": "648 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[15,555]], "label": "555 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[16,450]], "label": "450 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[17,328]], "label": "328 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[18,232]], "label": "232 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[19,184]], "label": "184 people finished between 5:12 and  5:22<br>5.03 miles per hour (11:55 pace) <br>8.11 km per hour (7:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18720},{"data": [[20,142]], "label": "142 people finished between 5:22 and  5:32<br>4.88 miles per hour (12:18 pace) <br>7.86 km per hour (7:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19320},{"data": [[21,83]], "label": "83 people finished between 5:32 and  5:42<br>4.73 miles per hour (12:40 pace) <br>7.62 km per hour (7:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19920},{"data": [[22,51]], "label": "51 people finished between 5:42 and  5:52<br>4.59 miles per hour (13:03 pace) <br>7.4 km per hour (8:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20520},{"data": [[23,39]], "label": "39 people finished between 5:53 and  6:03<br>4.45 miles per hour (13:28 pace) <br>7.17 km per hour (8:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21180},{"data": [[24,12]], "label": "12 people finished between 6:03 and  6:13<br>4.33 miles per hour (13:51 pace) <br>6.97 km per hour (8:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21780},{"data": [[25,25]], "label": "25 people finished between 6:14 and  6:24<br>4.2 miles per hour (14:16 pace) <br>6.76 km per hour (8:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22440},{"data": [[26,10]], "label": "10 people finished between 6:27 and  6:37<br>4.06 miles per hour (14:46 pace) <br>6.54 km per hour (9:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23220},{"data": [[27,4]], "label": "4 people finished between 6:39 and  6:49<br>3.94 miles per hour (15:14 pace) <br>6.34 km per hour (9:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23940},{"data": [[28,7]], "label": "7 people finished between 6:51 and  7:01<br>3.82 miles per hour (15:41 pace) <br>6.15 km per hour (9:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24660},{"data": [[29,2]], "label": "2 people finished between 7:05 and  7:15<br>3.7 miles per hour (16:13 pace) <br>5.95 km per hour (10:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25500},{"data": [[30,3]], "label": "3 people finished between 7:21 and  7:31<br>3.56 miles per hour (16:50 pace) <br>5.74 km per hour (10:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26460}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
