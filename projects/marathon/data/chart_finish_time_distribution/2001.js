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
	
	var chart_data = {"seriesData":[{"data": [[1,3]], "label": "3 people finished between 1:27 and  1:37<br>18.06 miles per hour (3:19 pace) <br>29.08 km per hour (2:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5220},{"data": [[2,5]], "label": "5 people finished between 1:39 and  1:49<br>15.87 miles per hour (3:46 pace) <br>25.55 km per hour (2:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5940},{"data": [[3,3]], "label": "3 people finished between 1:51 and  2:01<br>14.15 miles per hour (4:14 pace) <br>22.79 km per hour (2:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6660},{"data": [[4,11]], "label": "11 people finished between 2:01 and  2:11<br>12.98 miles per hour (4:37 pace) <br>20.91 km per hour (2:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7260},{"data": [[5,28]], "label": "28 people finished between 2:11 and  2:21<br>11.99 miles per hour (5:00 pace) <br>19.31 km per hour (3:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7860},{"data": [[6,53]], "label": "53 people finished between 2:22 and  2:32<br>11.06 miles per hour (5:25 pace) <br>17.81 km per hour (3:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8520},{"data": [[7,81]], "label": "81 people finished between 2:32 and  2:42<br>10.33 miles per hour (5:48 pace) <br>16.64 km per hour (3:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9120},{"data": [[8,183]], "label": "183 people finished between 2:42 and  2:52<br>9.7 miles per hour (6:11 pace) <br>15.61 km per hour (3:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9720},{"data": [[9,310]], "label": "310 people finished between 2:52 and  3:02<br>9.13 miles per hour (6:34 pace) <br>14.71 km per hour (4:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10320},{"data": [[10,467]], "label": "467 people finished between 3:02 and  3:12<br>8.63 miles per hour (6:57 pace) <br>13.9 km per hour (4:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10920},{"data": [[11,656]], "label": "656 people finished between 3:12 and  3:22<br>8.18 miles per hour (7:19 pace) <br>13.18 km per hour (4:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11520},{"data": [[12,1027]], "label": "1027 people finished between 3:22 and  3:32<br>7.78 miles per hour (7:43 pace) <br>12.52 km per hour (4:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12120},{"data": [[13,1217]], "label": "1217 people finished between 3:32 and  3:42<br>7.41 miles per hour (8:05 pace) <br>11.93 km per hour (5:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12720},{"data": [[14,1584]], "label": "1584 people finished between 3:42 and  3:52<br>7.08 miles per hour (8:28 pace) <br>11.39 km per hour (5:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13320},{"data": [[15,2010]], "label": "2010 people finished between 3:52 and  4:02<br>6.77 miles per hour (8:51 pace) <br>10.9 km per hour (5:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13920},{"data": [[16,1740]], "label": "1740 people finished between 4:02 and  4:12<br>6.49 miles per hour (9:14 pace) <br>10.45 km per hour (5:44 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14520},{"data": [[17,1992]], "label": "1992 people finished between 4:12 and  4:22<br>6.23 miles per hour (9:37 pace) <br>10.04 km per hour (5:58 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15120},{"data": [[18,1999]], "label": "1999 people finished between 4:22 and  4:32<br>6 miles per hour (10:00 pace) <br>9.65 km per hour (6:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15720},{"data": [[19,1887]], "label": "1887 people finished between 4:32 and  4:42<br>5.78 miles per hour (10:23 pace) <br>9.3 km per hour (6:27 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16320},{"data": [[20,1747]], "label": "1747 people finished between 4:42 and  4:52<br>5.57 miles per hour (10:46 pace) <br>8.97 km per hour (6:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16920},{"data": [[21,1538]], "label": "1538 people finished between 4:52 and  5:02<br>5.38 miles per hour (11:09 pace) <br>8.66 km per hour (6:55 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17520},{"data": [[22,1090]], "label": "1090 people finished between 5:02 and  5:12<br>5.2 miles per hour (11:31 pace) <br>8.38 km per hour (7:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18120},{"data": [[23,881]], "label": "881 people finished between 5:12 and  5:22<br>5.03 miles per hour (11:55 pace) <br>8.11 km per hour (7:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18720},{"data": [[24,691]], "label": "691 people finished between 5:22 and  5:32<br>4.88 miles per hour (12:18 pace) <br>7.86 km per hour (7:38 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19320},{"data": [[25,554]], "label": "554 people finished between 5:32 and  5:42<br>4.73 miles per hour (12:40 pace) <br>7.62 km per hour (7:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19920},{"data": [[26,402]], "label": "402 people finished between 5:42 and  5:52<br>4.59 miles per hour (13:03 pace) <br>7.4 km per hour (8:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20520},{"data": [[27,383]], "label": "383 people finished between 5:52 and  6:02<br>4.46 miles per hour (13:26 pace) <br>7.19 km per hour (8:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21120},{"data": [[28,225]], "label": "225 people finished between 6:02 and  6:12<br>4.34 miles per hour (13:49 pace) <br>6.99 km per hour (8:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21720},{"data": [[29,200]], "label": "200 people finished between 6:12 and  6:22<br>4.22 miles per hour (14:12 pace) <br>6.8 km per hour (8:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22320},{"data": [[30,138]], "label": "138 people finished between 6:23 and  6:33<br>4.1 miles per hour (14:37 pace) <br>6.6 km per hour (9:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22980},{"data": [[31,135]], "label": "135 people finished between 6:33 and  6:43<br>4 miles per hour (15:00 pace) <br>6.44 km per hour (9:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23580},{"data": [[32,104]], "label": "104 people finished between 6:43 and  6:53<br>3.9 miles per hour (15:23 pace) <br>6.28 km per hour (9:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24180},{"data": [[33,73]], "label": "73 people finished between 6:53 and  7:03<br>3.8 miles per hour (15:46 pace) <br>6.12 km per hour (9:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24780},{"data": [[34,46]], "label": "46 people finished between 7:03 and  7:13<br>3.71 miles per hour (16:09 pace) <br>5.98 km per hour (10:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25380},{"data": [[35,46]], "label": "46 people finished between 7:13 and  7:23<br>3.63 miles per hour (16:32 pace) <br>5.84 km per hour (10:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25980},{"data": [[36,31]], "label": "31 people finished between 7:23 and  7:33<br>3.55 miles per hour (16:55 pace) <br>5.71 km per hour (10:30 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26580},{"data": [[37,31]], "label": "31 people finished between 7:34 and  7:44<br>3.46 miles per hour (17:20 pace) <br>5.57 km per hour (10:46 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27240},{"data": [[38,12]], "label": "12 people finished between 7:45 and  7:55<br>3.38 miles per hour (17:45 pace) <br>5.44 km per hour (11:01 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27900},{"data": [[39,9]], "label": "9 people finished between 7:56 and  8:06<br>3.3 miles per hour (18:10 pace) <br>5.31 km per hour (11:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28560},{"data": [[40,14]], "label": "14 people finished between 8:06 and  8:16<br>3.23 miles per hour (18:33 pace) <br>5.2 km per hour (11:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29160},{"data": [[41,4]], "label": "4 people finished between 8:17 and  8:27<br>3.16 miles per hour (18:58 pace) <br>5.09 km per hour (11:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29820},{"data": [[42,8]], "label": "8 people finished between 8:29 and  8:39<br>3.09 miles per hour (19:26 pace) <br>4.97 km per hour (12:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30540},{"data": [[43,1]], "label": "1 person finished between 8:44 and  8:54<br>3 miles per hour (20:00 pace) <br>4.83 km per hour (12:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31440},{"data": [[44,1]], "label": "1 person finished between 9:32 and  9:42<br>2.75 miles per hour (21:51 pace) <br>4.42 km per hour (13:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34320}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"4:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,""],[44,"9:00"]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
