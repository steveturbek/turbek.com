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
	
	var chart_data = {"seriesData":[{"data": [[1,34]], "label": "34 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[2,41]], "label": "41 people finished between 2:22 and  2:32<br>11.06 miles per hour (5:25 pace) <br>17.81 km per hour (3:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8520},{"data": [[3,80]], "label": "80 people finished between 2:32 and  2:42<br>10.33 miles per hour (5:48 pace) <br>16.64 km per hour (3:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9120},{"data": [[4,202]], "label": "202 people finished between 2:42 and  2:52<br>9.7 miles per hour (6:11 pace) <br>15.61 km per hour (3:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9720},{"data": [[5,411]], "label": "411 people finished between 2:52 and  3:02<br>9.13 miles per hour (6:34 pace) <br>14.71 km per hour (4:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10320},{"data": [[6,629]], "label": "629 people finished between 3:02 and  3:12<br>8.63 miles per hour (6:57 pace) <br>13.9 km per hour (4:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10920},{"data": [[7,912]], "label": "912 people finished between 3:12 and  3:22<br>8.18 miles per hour (7:19 pace) <br>13.18 km per hour (4:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11520},{"data": [[8,1345]], "label": "1345 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[9,1691]], "label": "1691 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[10,2132]], "label": "2132 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[11,2597]], "label": "2597 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[12,2302]], "label": "2302 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[13,2270]], "label": "2270 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[14,2191]], "label": "2191 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[15,1923]], "label": "1923 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[16,1672]], "label": "1672 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[17,1414]], "label": "1414 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[18,1028]], "label": "1028 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[19,778]], "label": "778 people finished between 5:13 and  5:23<br>5.02 miles per hour (11:57 pace) <br>8.08 km per hour (7:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18780},{"data": [[20,689]], "label": "689 people finished between 5:23 and  5:33<br>4.86 miles per hour (12:20 pace) <br>7.83 km per hour (7:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19380},{"data": [[21,483]], "label": "483 people finished between 5:33 and  5:43<br>4.72 miles per hour (12:43 pace) <br>7.6 km per hour (7:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19980},{"data": [[22,422]], "label": "422 people finished between 5:43 and  5:53<br>4.58 miles per hour (13:05 pace) <br>7.37 km per hour (8:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20580},{"data": [[23,364]], "label": "364 people finished between 5:53 and  6:03<br>4.45 miles per hour (13:28 pace) <br>7.17 km per hour (8:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21180},{"data": [[24,209]], "label": "209 people finished between 6:03 and  6:13<br>4.33 miles per hour (13:51 pace) <br>6.97 km per hour (8:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21780},{"data": [[25,168]], "label": "168 people finished between 6:13 and  6:23<br>4.21 miles per hour (14:15 pace) <br>6.78 km per hour (8:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22380},{"data": [[26,157]], "label": "157 people finished between 6:23 and  6:33<br>4.1 miles per hour (14:37 pace) <br>6.6 km per hour (9:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22980},{"data": [[27,115]], "label": "115 people finished between 6:33 and  6:43<br>4 miles per hour (15:00 pace) <br>6.44 km per hour (9:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23580},{"data": [[28,72]], "label": "72 people finished between 6:43 and  6:53<br>3.9 miles per hour (15:23 pace) <br>6.28 km per hour (9:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24180},{"data": [[29,77]], "label": "77 people finished between 6:53 and  7:03<br>3.8 miles per hour (15:46 pace) <br>6.12 km per hour (9:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24780},{"data": [[30,60]], "label": "60 people finished between 7:04 and  7:14<br>3.7 miles per hour (16:11 pace) <br>5.97 km per hour (10:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25440},{"data": [[31,41]], "label": "41 people finished between 7:14 and  7:24<br>3.62 miles per hour (16:34 pace) <br>5.83 km per hour (10:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26040},{"data": [[32,29]], "label": "29 people finished between 7:24 and  7:34<br>3.54 miles per hour (16:57 pace) <br>5.7 km per hour (10:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26640},{"data": [[33,32]], "label": "32 people finished between 7:36 and  7:46<br>3.44 miles per hour (17:25 pace) <br>5.55 km per hour (10:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27360},{"data": [[34,20]], "label": "20 people finished between 7:46 and  7:56<br>3.37 miles per hour (17:48 pace) <br>5.43 km per hour (11:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27960},{"data": [[35,16]], "label": "16 people finished between 7:56 and  8:06<br>3.3 miles per hour (18:10 pace) <br>5.31 km per hour (11:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28560},{"data": [[36,9]], "label": "9 people finished between 8:06 and  8:16<br>3.23 miles per hour (18:33 pace) <br>5.2 km per hour (11:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29160},{"data": [[37,7]], "label": "7 people finished between 8:16 and  8:26<br>3.17 miles per hour (18:56 pace) <br>5.1 km per hour (11:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29760},{"data": [[38,9]], "label": "9 people finished between 8:28 and  8:38<br>3.09 miles per hour (19:23 pace) <br>4.98 km per hour (12:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30480},{"data": [[39,2]], "label": "2 people finished between 8:40 and  8:50<br>3.02 miles per hour (19:51 pace) <br>4.86 km per hour (12:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31200},{"data": [[40,2]], "label": "2 people finished between 9:17 and  9:27<br>2.82 miles per hour (21:16 pace) <br>4.54 km per hour (13:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33420},{"data": [[41,4]], "label": "4 people finished between 9:28 and  9:38<br>2.77 miles per hour (21:41 pace) <br>4.45 km per hour (13:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34080},{"data": [[42,4]], "label": "4 people finished between 9:53 and  10:03<br>2.65 miles per hour (22:38 pace) <br>4.27 km per hour (14:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35580}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,"5:00"],[21,""],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"6:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,"7:00"],[34,""],[35,""],[36,""],[37,""],[38,""],[39,"8:00"],[40,""],[41,""],[42,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
