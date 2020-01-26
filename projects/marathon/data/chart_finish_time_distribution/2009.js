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
	
	var chart_data = {"seriesData":[{"data": [[1,10]], "label": "10 people finished between 1:35 and  1:45<br>16.54 miles per hour (3:37 pace) <br>26.63 km per hour (2:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5700},{"data": [[2,9]], "label": "9 people finished between 1:50 and  2:00<br>14.28 miles per hour (4:12 pace) <br>23 km per hour (2:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6600},{"data": [[3,13]], "label": "13 people finished between 2:04 and  2:14<br>12.67 miles per hour (4:44 pace) <br>20.4 km per hour (2:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7440},{"data": [[4,24]], "label": "24 people finished between 2:15 and  2:25<br>11.64 miles per hour (5:09 pace) <br>18.74 km per hour (3:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8100},{"data": [[5,68]], "label": "68 people finished between 2:25 and  2:35<br>10.83 miles per hour (5:32 pace) <br>17.45 km per hour (3:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8700},{"data": [[6,136]], "label": "136 people finished between 2:35 and  2:45<br>10.13 miles per hour (5:55 pace) <br>16.32 km per hour (3:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9300},{"data": [[7,408]], "label": "408 people finished between 2:45 and  2:55<br>9.52 miles per hour (6:17 pace) <br>15.33 km per hour (3:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9900},{"data": [[8,782]], "label": "782 people finished between 2:55 and  3:05<br>8.98 miles per hour (6:40 pace) <br>14.45 km per hour (4:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10500},{"data": [[9,1068]], "label": "1068 people finished between 3:05 and  3:15<br>8.49 miles per hour (7:04 pace) <br>13.67 km per hour (4:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11100},{"data": [[10,1685]], "label": "1685 people finished between 3:15 and  3:25<br>8.06 miles per hour (7:27 pace) <br>12.97 km per hour (4:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11700},{"data": [[11,2420]], "label": "2420 people finished between 3:25 and  3:35<br>7.66 miles per hour (7:49 pace) <br>12.34 km per hour (4:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12300},{"data": [[12,2848]], "label": "2848 people finished between 3:35 and  3:45<br>7.31 miles per hour (8:12 pace) <br>11.77 km per hour (5:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12900},{"data": [[13,3659]], "label": "3659 people finished between 3:45 and  3:55<br>6.98 miles per hour (8:35 pace) <br>11.24 km per hour (5:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13500},{"data": [[14,3946]], "label": "3946 people finished between 3:55 and  4:05<br>6.68 miles per hour (8:58 pace) <br>10.76 km per hour (5:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14100},{"data": [[15,3500]], "label": "3500 people finished between 4:05 and  4:15<br>6.41 miles per hour (9:21 pace) <br>10.32 km per hour (5:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14700},{"data": [[16,3670]], "label": "3670 people finished between 4:15 and  4:25<br>6.16 miles per hour (9:44 pace) <br>9.92 km per hour (6:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15300},{"data": [[17,3423]], "label": "3423 people finished between 4:25 and  4:35<br>5.93 miles per hour (10:07 pace) <br>9.55 km per hour (6:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15900},{"data": [[18,3052]], "label": "3052 people finished between 4:35 and  4:45<br>5.71 miles per hour (10:30 pace) <br>9.2 km per hour (6:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16500},{"data": [[19,2787]], "label": "2787 people finished between 4:45 and  4:55<br>5.51 miles per hour (10:53 pace) <br>8.88 km per hour (6:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17100},{"data": [[20,2174]], "label": "2174 people finished between 4:55 and  5:05<br>5.33 miles per hour (11:16 pace) <br>8.57 km per hour (7:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17700},{"data": [[21,1578]], "label": "1578 people finished between 5:05 and  5:15<br>5.15 miles per hour (11:39 pace) <br>8.29 km per hour (7:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18300},{"data": [[22,1223]], "label": "1223 people finished between 5:15 and  5:25<br>4.99 miles per hour (12:01 pace) <br>8.03 km per hour (7:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18900},{"data": [[23,1068]], "label": "1068 people finished between 5:25 and  5:35<br>4.83 miles per hour (12:24 pace) <br>7.78 km per hour (7:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19500},{"data": [[24,838]], "label": "838 people finished between 5:35 and  5:45<br>4.69 miles per hour (12:48 pace) <br>7.55 km per hour (7:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20100},{"data": [[25,683]], "label": "683 people finished between 5:45 and  5:55<br>4.55 miles per hour (13:10 pace) <br>7.33 km per hour (8:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20700},{"data": [[26,534]], "label": "534 people finished between 5:55 and  6:05<br>4.43 miles per hour (13:33 pace) <br>7.13 km per hour (8:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21300},{"data": [[27,394]], "label": "394 people finished between 6:05 and  6:15<br>4.3 miles per hour (13:56 pace) <br>6.93 km per hour (8:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21900},{"data": [[28,343]], "label": "343 people finished between 6:15 and  6:25<br>4.19 miles per hour (14:19 pace) <br>6.75 km per hour (8:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22500},{"data": [[29,265]], "label": "265 people finished between 6:25 and  6:35<br>4.08 miles per hour (14:42 pace) <br>6.57 km per hour (9:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23100},{"data": [[30,246]], "label": "246 people finished between 6:35 and  6:45<br>3.98 miles per hour (15:05 pace) <br>6.4 km per hour (9:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23700},{"data": [[31,193]], "label": "193 people finished between 6:45 and  6:55<br>3.88 miles per hour (15:28 pace) <br>6.25 km per hour (9:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24300},{"data": [[32,143]], "label": "143 people finished between 6:56 and  7:06<br>3.78 miles per hour (15:53 pace) <br>6.08 km per hour (9:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24960},{"data": [[33,109]], "label": "109 people finished between 7:06 and  7:16<br>3.69 miles per hour (16:16 pace) <br>5.94 km per hour (10:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25560},{"data": [[34,63]], "label": "63 people finished between 7:16 and  7:26<br>3.6 miles per hour (16:38 pace) <br>5.8 km per hour (10:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26160},{"data": [[35,48]], "label": "48 people finished between 7:26 and  7:36<br>3.52 miles per hour (17:02 pace) <br>5.67 km per hour (10:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26760},{"data": [[36,20]], "label": "20 people finished between 7:37 and  7:47<br>3.44 miles per hour (17:27 pace) <br>5.54 km per hour (10:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27420},{"data": [[37,23]], "label": "23 people finished between 7:47 and  7:57<br>3.36 miles per hour (17:50 pace) <br>5.42 km per hour (11:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28020},{"data": [[38,6]], "label": "6 people finished between 7:58 and  8:08<br>3.29 miles per hour (18:15 pace) <br>5.29 km per hour (11:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28680},{"data": [[39,12]], "label": "12 people finished between 8:08 and  8:18<br>3.22 miles per hour (18:38 pace) <br>5.18 km per hour (11:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29280},{"data": [[40,1]], "label": "1 person finished between 8:33 and  8:43<br>3.06 miles per hour (19:35 pace) <br>4.93 km per hour (12:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30780},{"data": [[41,1]], "label": "1 person finished between 8:59 and  9:09<br>2.91 miles per hour (20:35 pace) <br>4.69 km per hour (12:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32340}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
