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
	
	var chart_data = {"seriesData":[{"data": [[1,2]], "label": "2 people finished between 1:26 and  1:36<br>18.27 miles per hour (3:16 pace) <br>29.41 km per hour (2:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5160},{"data": [[2,5]], "label": "5 people finished between 1:38 and  1:48<br>16.03 miles per hour (3:44 pace) <br>25.81 km per hour (2:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5880},{"data": [[3,6]], "label": "6 people finished between 1:51 and  2:01<br>14.15 miles per hour (4:14 pace) <br>22.79 km per hour (2:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6660},{"data": [[4,15]], "label": "15 people finished between 2:02 and  2:12<br>12.88 miles per hour (4:39 pace) <br>20.73 km per hour (2:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7320},{"data": [[5,16]], "label": "16 people finished between 2:12 and  2:22<br>11.9 miles per hour (5:02 pace) <br>19.16 km per hour (3:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7920},{"data": [[6,43]], "label": "43 people finished between 2:23 and  2:33<br>10.99 miles per hour (5:27 pace) <br>17.69 km per hour (3:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8580},{"data": [[7,80]], "label": "80 people finished between 2:33 and  2:43<br>10.27 miles per hour (5:50 pace) <br>16.53 km per hour (3:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9180},{"data": [[8,170]], "label": "170 people finished between 2:43 and  2:53<br>9.64 miles per hour (6:13 pace) <br>15.52 km per hour (3:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9780},{"data": [[9,380]], "label": "380 people finished between 2:53 and  3:03<br>9.08 miles per hour (6:36 pace) <br>14.62 km per hour (4:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10380},{"data": [[10,582]], "label": "582 people finished between 3:03 and  3:13<br>8.58 miles per hour (6:59 pace) <br>13.82 km per hour (4:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10980},{"data": [[11,885]], "label": "885 people finished between 3:13 and  3:23<br>8.14 miles per hour (7:22 pace) <br>13.11 km per hour (4:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11580},{"data": [[12,1320]], "label": "1320 people finished between 3:23 and  3:33<br>7.74 miles per hour (7:45 pace) <br>12.46 km per hour (4:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12180},{"data": [[13,1700]], "label": "1700 people finished between 3:33 and  3:43<br>7.38 miles per hour (8:08 pace) <br>11.88 km per hour (5:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12780},{"data": [[14,2177]], "label": "2177 people finished between 3:43 and  3:53<br>7.04 miles per hour (8:31 pace) <br>11.34 km per hour (5:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13380},{"data": [[15,2593]], "label": "2593 people finished between 3:53 and  4:03<br>6.74 miles per hour (8:54 pace) <br>10.86 km per hour (5:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13980},{"data": [[16,2464]], "label": "2464 people finished between 4:03 and  4:13<br>6.46 miles per hour (9:16 pace) <br>10.41 km per hour (5:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14580},{"data": [[17,2658]], "label": "2658 people finished between 4:13 and  4:23<br>6.21 miles per hour (9:39 pace) <br>10 km per hour (6:00 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15180},{"data": [[18,2654]], "label": "2654 people finished between 4:23 and  4:33<br>5.97 miles per hour (10:03 pace) <br>9.62 km per hour (6:14 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15780},{"data": [[19,2506]], "label": "2506 people finished between 4:33 and  4:43<br>5.75 miles per hour (10:25 pace) <br>9.27 km per hour (6:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16380},{"data": [[20,2351]], "label": "2351 people finished between 4:43 and  4:53<br>5.55 miles per hour (10:48 pace) <br>8.94 km per hour (6:42 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16980},{"data": [[21,1998]], "label": "1998 people finished between 4:53 and  5:03<br>5.36 miles per hour (11:11 pace) <br>8.63 km per hour (6:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17580},{"data": [[22,1434]], "label": "1434 people finished between 5:03 and  5:13<br>5.18 miles per hour (11:34 pace) <br>8.35 km per hour (7:11 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18180},{"data": [[23,1136]], "label": "1136 people finished between 5:13 and  5:23<br>5.02 miles per hour (11:57 pace) <br>8.08 km per hour (7:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18780},{"data": [[24,1000]], "label": "1000 people finished between 5:23 and  5:33<br>4.86 miles per hour (12:20 pace) <br>7.83 km per hour (7:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19380},{"data": [[25,756]], "label": "756 people finished between 5:33 and  5:43<br>4.72 miles per hour (12:43 pace) <br>7.6 km per hour (7:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19980},{"data": [[26,687]], "label": "687 people finished between 5:44 and  5:54<br>4.57 miles per hour (13:08 pace) <br>7.35 km per hour (8:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20640},{"data": [[27,506]], "label": "506 people finished between 5:54 and  6:04<br>4.44 miles per hour (13:31 pace) <br>7.15 km per hour (8:24 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21240},{"data": [[28,324]], "label": "324 people finished between 6:04 and  6:14<br>4.32 miles per hour (13:54 pace) <br>6.95 km per hour (8:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21840},{"data": [[29,267]], "label": "267 people finished between 6:14 and  6:24<br>4.2 miles per hour (14:16 pace) <br>6.76 km per hour (8:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22440},{"data": [[30,230]], "label": "230 people finished between 6:24 and  6:34<br>4.09 miles per hour (14:40 pace) <br>6.59 km per hour (9:06 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23040},{"data": [[31,189]], "label": "189 people finished between 6:34 and  6:44<br>3.99 miles per hour (15:03 pace) <br>6.42 km per hour (9:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23640},{"data": [[32,210]], "label": "210 people finished between 6:44 and  6:54<br>3.89 miles per hour (15:25 pace) <br>6.26 km per hour (9:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24240},{"data": [[33,120]], "label": "120 people finished between 6:54 and  7:04<br>3.79 miles per hour (15:48 pace) <br>6.11 km per hour (9:49 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24840},{"data": [[34,96]], "label": "96 people finished between 7:04 and  7:14<br>3.7 miles per hour (16:11 pace) <br>5.97 km per hour (10:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25440},{"data": [[35,53]], "label": "53 people finished between 7:14 and  7:24<br>3.62 miles per hour (16:34 pace) <br>5.83 km per hour (10:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26040},{"data": [[36,53]], "label": "53 people finished between 7:25 and  7:35<br>3.53 miles per hour (17:00 pace) <br>5.68 km per hour (10:33 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26700},{"data": [[37,42]], "label": "42 people finished between 7:35 and  7:45<br>3.45 miles per hour (17:22 pace) <br>5.56 km per hour (10:47 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27300},{"data": [[38,28]], "label": "28 people finished between 7:46 and  7:56<br>3.37 miles per hour (17:48 pace) <br>5.43 km per hour (11:03 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27960},{"data": [[39,25]], "label": "25 people finished between 7:56 and  8:06<br>3.3 miles per hour (18:10 pace) <br>5.31 km per hour (11:17 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28560},{"data": [[40,13]], "label": "13 people finished between 8:06 and  8:16<br>3.23 miles per hour (18:33 pace) <br>5.2 km per hour (11:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29160},{"data": [[41,11]], "label": "11 people finished between 8:18 and  8:28<br>3.15 miles per hour (19:01 pace) <br>5.08 km per hour (11:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29880},{"data": [[42,8]], "label": "8 people finished between 8:32 and  8:42<br>3.07 miles per hour (19:33 pace) <br>4.94 km per hour (12:08 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30720},{"data": [[43,4]], "label": "4 people finished between 8:45 and  8:55<br>2.99 miles per hour (20:03 pace) <br>4.82 km per hour (12:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31500},{"data": [[44,5]], "label": "5 people finished between 8:55 and  9:05<br>2.94 miles per hour (20:25 pace) <br>4.73 km per hour (12:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32100},{"data": [[45,1]], "label": "1 person finished between 9:15 and  9:25<br>2.83 miles per hour (21:11 pace) <br>4.56 km per hour (13:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 33300},{"data": [[46,1]], "label": "1 person finished between 9:31 and  9:41<br>2.75 miles per hour (21:48 pace) <br>4.43 km per hour (13:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34260}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"4:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,"5:00"],[28,""],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,""],[44,""],[45,"9:00"],[46,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
