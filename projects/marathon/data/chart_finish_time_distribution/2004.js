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
	
	var chart_data = {"seriesData":[{"data": [[1,8]], "label": "8 people finished between 1:33 and  1:43<br>16.89 miles per hour (3:32 pace) <br>27.2 km per hour (2:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 5580},{"data": [[2,13]], "label": "13 people finished between 1:45 and  1:55<br>14.96 miles per hour (4:00 pace) <br>24.09 km per hour (2:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6300},{"data": [[3,10]], "label": "10 people finished between 1:56 and  2:06<br>13.54 miles per hour (4:25 pace) <br>21.81 km per hour (2:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 6960},{"data": [[4,20]], "label": "20 people finished between 2:06 and  2:16<br>12.47 miles per hour (4:48 pace) <br>20.08 km per hour (2:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7560},{"data": [[5,25]], "label": "25 people finished between 2:17 and  2:27<br>11.47 miles per hour (5:13 pace) <br>18.46 km per hour (3:15 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8220},{"data": [[6,53]], "label": "53 people finished between 2:27 and  2:37<br>10.69 miles per hour (5:36 pace) <br>17.21 km per hour (3:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8820},{"data": [[7,87]], "label": "87 people finished between 2:37 and  2:47<br>10.01 miles per hour (6:00 pace) <br>16.11 km per hour (3:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9420},{"data": [[8,220]], "label": "220 people finished between 2:47 and  2:57<br>9.41 miles per hour (6:22 pace) <br>15.15 km per hour (3:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10020},{"data": [[9,372]], "label": "372 people finished between 2:57 and  3:07<br>8.88 miles per hour (6:45 pace) <br>14.29 km per hour (4:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10620},{"data": [[10,575]], "label": "575 people finished between 3:07 and  3:17<br>8.4 miles per hour (7:08 pace) <br>13.53 km per hour (4:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11220},{"data": [[11,886]], "label": "886 people finished between 3:17 and  3:27<br>7.97 miles per hour (7:31 pace) <br>12.84 km per hour (4:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11820},{"data": [[12,1239]], "label": "1239 people finished between 3:27 and  3:37<br>7.59 miles per hour (7:54 pace) <br>12.22 km per hour (4:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12420},{"data": [[13,1579]], "label": "1579 people finished between 3:37 and  3:47<br>7.24 miles per hour (8:17 pace) <br>11.66 km per hour (5:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13020},{"data": [[14,2080]], "label": "2080 people finished between 3:47 and  3:57<br>6.92 miles per hour (8:40 pace) <br>11.14 km per hour (5:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13620},{"data": [[15,2426]], "label": "2426 people finished between 3:57 and  4:07<br>6.63 miles per hour (9:03 pace) <br>10.67 km per hour (5:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14220},{"data": [[16,2606]], "label": "2606 people finished between 4:07 and  4:17<br>6.36 miles per hour (9:25 pace) <br>10.24 km per hour (5:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14820},{"data": [[17,2669]], "label": "2669 people finished between 4:17 and  4:27<br>6.11 miles per hour (9:49 pace) <br>9.84 km per hour (6:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15420},{"data": [[18,2730]], "label": "2730 people finished between 4:27 and  4:37<br>5.88 miles per hour (10:11 pace) <br>9.47 km per hour (6:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16020},{"data": [[19,2737]], "label": "2737 people finished between 4:37 and  4:47<br>5.67 miles per hour (10:34 pace) <br>9.13 km per hour (6:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16620},{"data": [[20,2773]], "label": "2773 people finished between 4:47 and  4:57<br>5.47 miles per hour (10:57 pace) <br>8.81 km per hour (6:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17220},{"data": [[21,2496]], "label": "2496 people finished between 4:57 and  5:07<br>5.29 miles per hour (11:20 pace) <br>8.52 km per hour (7:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17820},{"data": [[22,2137]], "label": "2137 people finished between 5:07 and  5:17<br>5.12 miles per hour (11:43 pace) <br>8.24 km per hour (7:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18420},{"data": [[23,1713]], "label": "1713 people finished between 5:17 and  5:27<br>4.96 miles per hour (12:06 pace) <br>7.98 km per hour (7:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19020},{"data": [[24,1481]], "label": "1481 people finished between 5:27 and  5:37<br>4.8 miles per hour (12:29 pace) <br>7.74 km per hour (7:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19620},{"data": [[25,1223]], "label": "1223 people finished between 5:37 and  5:47<br>4.66 miles per hour (12:52 pace) <br>7.51 km per hour (7:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20220},{"data": [[26,963]], "label": "963 people finished between 5:47 and  5:57<br>4.53 miles per hour (13:15 pace) <br>7.29 km per hour (8:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20820},{"data": [[27,775]], "label": "775 people finished between 5:57 and  6:07<br>4.4 miles per hour (13:38 pace) <br>7.09 km per hour (8:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21420},{"data": [[28,622]], "label": "622 people finished between 6:07 and  6:17<br>4.28 miles per hour (14:01 pace) <br>6.89 km per hour (8:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22020},{"data": [[29,478]], "label": "478 people finished between 6:17 and  6:27<br>4.17 miles per hour (14:24 pace) <br>6.71 km per hour (8:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22620},{"data": [[30,367]], "label": "367 people finished between 6:27 and  6:37<br>4.06 miles per hour (14:46 pace) <br>6.54 km per hour (9:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23220},{"data": [[31,274]], "label": "274 people finished between 6:37 and  6:47<br>3.96 miles per hour (15:09 pace) <br>6.37 km per hour (9:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23820},{"data": [[32,203]], "label": "203 people finished between 6:47 and  6:57<br>3.86 miles per hour (15:33 pace) <br>6.22 km per hour (9:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24420},{"data": [[33,175]], "label": "175 people finished between 6:57 and  7:07<br>3.77 miles per hour (15:55 pace) <br>6.07 km per hour (9:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25020},{"data": [[34,128]], "label": "128 people finished between 7:08 and  7:18<br>3.67 miles per hour (16:21 pace) <br>5.91 km per hour (10:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25680},{"data": [[35,108]], "label": "108 people finished between 7:18 and  7:28<br>3.59 miles per hour (16:43 pace) <br>5.78 km per hour (10:23 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26280},{"data": [[36,70]], "label": "70 people finished between 7:28 and  7:38<br>3.51 miles per hour (17:06 pace) <br>5.65 km per hour (10:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26880},{"data": [[37,64]], "label": "64 people finished between 7:38 and  7:48<br>3.43 miles per hour (17:29 pace) <br>5.52 km per hour (10:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27480},{"data": [[38,75]], "label": "75 people finished between 7:48 and  7:58<br>3.36 miles per hour (17:52 pace) <br>5.41 km per hour (11:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28080},{"data": [[39,42]], "label": "42 people finished between 7:59 and  8:09<br>3.28 miles per hour (18:18 pace) <br>5.28 km per hour (11:21 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28740},{"data": [[40,24]], "label": "24 people finished between 8:09 and  8:19<br>3.21 miles per hour (18:40 pace) <br>5.17 km per hour (11:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29340},{"data": [[41,22]], "label": "22 people finished between 8:19 and  8:29<br>3.15 miles per hour (19:03 pace) <br>5.07 km per hour (11:50 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29940},{"data": [[42,4]], "label": "4 people finished between 8:29 and  8:39<br>3.09 miles per hour (19:26 pace) <br>4.97 km per hour (12:04 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30540},{"data": [[43,2]], "label": "2 people finished between 9:34 and  9:44<br>2.74 miles per hour (21:55 pace) <br>4.41 km per hour (13:36 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34440},{"data": [[44,2]], "label": "2 people finished between 9:52 and  10:02<br>2.65 miles per hour (22:36 pace) <br>4.27 km per hour (14:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 35520}], "xAxisTicksLabels":[[1,"1:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"2:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"3:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"4:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""],[43,"9:00"],[44,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
