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
	
	var chart_data = {"seriesData":[{"data": [[1,22]], "label": "22 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[2,54]], "label": "54 people finished between 2:21 and  2:31<br>11.14 miles per hour (5:23 pace) <br>17.94 km per hour (3:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8460},{"data": [[3,91]], "label": "91 people finished between 2:32 and  2:42<br>10.33 miles per hour (5:48 pace) <br>16.64 km per hour (3:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9120},{"data": [[4,247]], "label": "247 people finished between 2:42 and  2:52<br>9.7 miles per hour (6:11 pace) <br>15.61 km per hour (3:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9720},{"data": [[5,470]], "label": "470 people finished between 2:52 and  3:02<br>9.13 miles per hour (6:34 pace) <br>14.71 km per hour (4:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10320},{"data": [[6,721]], "label": "721 people finished between 3:02 and  3:12<br>8.63 miles per hour (6:57 pace) <br>13.9 km per hour (4:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10920},{"data": [[7,1035]], "label": "1035 people finished between 3:12 and  3:22<br>8.18 miles per hour (7:19 pace) <br>13.18 km per hour (4:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11520},{"data": [[8,1556]], "label": "1556 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[9,1869]], "label": "1869 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[10,2385]], "label": "2385 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[11,2693]], "label": "2693 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[12,2413]], "label": "2413 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[13,2486]], "label": "2486 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[14,2518]], "label": "2518 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[15,2146]], "label": "2146 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[16,2005]], "label": "2005 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[17,1643]], "label": "1643 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[18,1164]], "label": "1164 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[19,952]], "label": "952 people finished between 5:12 and  5:22<br>5.03 miles per hour (11:55 pace) <br>8.11 km per hour (7:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18720},{"data": [[20,766]], "label": "766 people finished between 5:22 and  5:32<br>4.88 miles per hour (12:18 pace) <br>7.86 km per hour (7:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19320},{"data": [[21,602]], "label": "602 people finished between 5:32 and  5:42<br>4.73 miles per hour (12:40 pace) <br>7.62 km per hour (7:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19920},{"data": [[22,420]], "label": "420 people finished between 5:42 and  5:52<br>4.59 miles per hour (13:03 pace) <br>7.4 km per hour (8:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20520},{"data": [[23,322]], "label": "322 people finished between 5:52 and  6:02<br>4.46 miles per hour (13:26 pace) <br>7.19 km per hour (8:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21120},{"data": [[24,239]], "label": "239 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[25,221]], "label": "221 people finished between 6:12 and  6:22<br>4.22 miles per hour (14:12 pace) <br>6.8 km per hour (8:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22320},{"data": [[26,138]], "label": "138 people finished between 6:23 and  6:33<br>4.1 miles per hour (14:37 pace) <br>6.6 km per hour (9:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22980},{"data": [[27,112]], "label": "112 people finished between 6:33 and  6:43<br>4 miles per hour (15:00 pace) <br>6.44 km per hour (9:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23580},{"data": [[28,95]], "label": "95 people finished between 6:43 and  6:53<br>3.9 miles per hour (15:23 pace) <br>6.28 km per hour (9:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24180},{"data": [[29,80]], "label": "80 people finished between 6:53 and  7:03<br>3.8 miles per hour (15:46 pace) <br>6.12 km per hour (9:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24780},{"data": [[30,58]], "label": "58 people finished between 7:03 and  7:13<br>3.71 miles per hour (16:09 pace) <br>5.98 km per hour (10:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25380},{"data": [[31,39]], "label": "39 people finished between 7:13 and  7:23<br>3.63 miles per hour (16:32 pace) <br>5.84 km per hour (10:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25980},{"data": [[32,25]], "label": "25 people finished between 7:26 and  7:36<br>3.52 miles per hour (17:02 pace) <br>5.67 km per hour (10:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26760},{"data": [[33,21]], "label": "21 people finished between 7:36 and  7:46<br>3.44 miles per hour (17:25 pace) <br>5.55 km per hour (10:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27360},{"data": [[34,19]], "label": "19 people finished between 7:46 and  7:56<br>3.37 miles per hour (17:48 pace) <br>5.43 km per hour (11:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27960},{"data": [[35,24]], "label": "24 people finished between 7:57 and  8:07<br>3.29 miles per hour (18:13 pace) <br>5.3 km per hour (11:18 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28620},{"data": [[36,13]], "label": "13 people finished between 8:08 and  8:18<br>3.22 miles per hour (18:38 pace) <br>5.18 km per hour (11:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29280},{"data": [[37,15]], "label": "15 people finished between 8:18 and  8:28<br>3.15 miles per hour (19:01 pace) <br>5.08 km per hour (11:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29880},{"data": [[38,7]], "label": "7 people finished between 8:33 and  8:43<br>3.06 miles per hour (19:35 pace) <br>4.93 km per hour (12:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30780},{"data": [[39,4]], "label": "4 people finished between 8:47 and  8:57<br>2.98 miles per hour (20:07 pace) <br>4.8 km per hour (12:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31620},{"data": [[40,2]], "label": "2 people finished between 8:58 and  9:08<br>2.92 miles per hour (20:33 pace) <br>4.7 km per hour (12:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32280},{"data": [[41,4]], "label": "4 people finished between 9:10 and  9:20<br>2.86 miles per hour (21:00 pace) <br>4.6 km per hour (13:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33000},{"data": [[42,2]], "label": "2 people finished between 9:52 and  10:02<br>2.65 miles per hour (22:36 pace) <br>4.27 km per hour (14:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35520}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,"7:00"],[34,""],[35,""],[36,""],[37,""],[38,""],[39,"8:00"],[40,""],[41,""],[42,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
