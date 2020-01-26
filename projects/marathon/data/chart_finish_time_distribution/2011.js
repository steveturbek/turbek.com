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
	
	var chart_data = {"seriesData":[{"data": [[1,13]], "label": "13 people finished between 2:05 and  2:15<br>12.57 miles per hour (4:46 pace) <br>20.24 km per hour (2:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 7500},{"data": [[2,17]], "label": "17 people finished between 2:16 and  2:26<br>11.55 miles per hour (5:11 pace) <br>18.6 km per hour (3:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8160},{"data": [[3,83]], "label": "83 people finished between 2:27 and  2:37<br>10.69 miles per hour (5:36 pace) <br>17.21 km per hour (3:29 pace)", "color": "#4E7AC7", "start_time_in_seconds": 8820},{"data": [[4,199]], "label": "199 people finished between 2:37 and  2:47<br>10.01 miles per hour (6:00 pace) <br>16.11 km per hour (3:43 pace)", "color": "#4E7AC7", "start_time_in_seconds": 9420},{"data": [[5,518]], "label": "518 people finished between 2:47 and  2:57<br>9.41 miles per hour (6:22 pace) <br>15.15 km per hour (3:57 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10020},{"data": [[6,933]], "label": "933 people finished between 2:57 and  3:07<br>8.88 miles per hour (6:45 pace) <br>14.29 km per hour (4:12 pace)", "color": "#4E7AC7", "start_time_in_seconds": 10620},{"data": [[7,1231]], "label": "1231 people finished between 3:07 and  3:17<br>8.4 miles per hour (7:08 pace) <br>13.53 km per hour (4:26 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11220},{"data": [[8,1747]], "label": "1747 people finished between 3:17 and  3:27<br>7.97 miles per hour (7:31 pace) <br>12.84 km per hour (4:40 pace)", "color": "#4E7AC7", "start_time_in_seconds": 11820},{"data": [[9,2493]], "label": "2493 people finished between 3:27 and  3:37<br>7.59 miles per hour (7:54 pace) <br>12.22 km per hour (4:54 pace)", "color": "#4E7AC7", "start_time_in_seconds": 12420},{"data": [[10,2957]], "label": "2957 people finished between 3:37 and  3:47<br>7.24 miles per hour (8:17 pace) <br>11.66 km per hour (5:09 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13020},{"data": [[11,3734]], "label": "3734 people finished between 3:47 and  3:57<br>6.92 miles per hour (8:40 pace) <br>11.14 km per hour (5:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 13620},{"data": [[12,3854]], "label": "3854 people finished between 3:57 and  4:07<br>6.63 miles per hour (9:03 pace) <br>10.67 km per hour (5:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14220},{"data": [[13,3565]], "label": "3565 people finished between 4:07 and  4:17<br>6.36 miles per hour (9:25 pace) <br>10.24 km per hour (5:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 14820},{"data": [[14,3965]], "label": "3965 people finished between 4:17 and  4:27<br>6.11 miles per hour (9:49 pace) <br>9.84 km per hour (6:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 15420},{"data": [[15,3426]], "label": "3426 people finished between 4:27 and  4:37<br>5.88 miles per hour (10:11 pace) <br>9.47 km per hour (6:19 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16020},{"data": [[16,3092]], "label": "3092 people finished between 4:37 and  4:47<br>5.67 miles per hour (10:34 pace) <br>9.13 km per hour (6:34 pace)", "color": "#4E7AC7", "start_time_in_seconds": 16620},{"data": [[17,3002]], "label": "3002 people finished between 4:47 and  4:57<br>5.47 miles per hour (10:57 pace) <br>8.81 km per hour (6:48 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17220},{"data": [[18,2485]], "label": "2485 people finished between 4:57 and  5:07<br>5.29 miles per hour (11:20 pace) <br>8.52 km per hour (7:02 pace)", "color": "#4E7AC7", "start_time_in_seconds": 17820},{"data": [[19,2022]], "label": "2022 people finished between 5:07 and  5:17<br>5.12 miles per hour (11:43 pace) <br>8.24 km per hour (7:16 pace)", "color": "#4E7AC7", "start_time_in_seconds": 18420},{"data": [[20,1590]], "label": "1590 people finished between 5:17 and  5:27<br>4.96 miles per hour (12:06 pace) <br>7.98 km per hour (7:31 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19020},{"data": [[21,1349]], "label": "1349 people finished between 5:27 and  5:37<br>4.8 miles per hour (12:29 pace) <br>7.74 km per hour (7:45 pace)", "color": "#4E7AC7", "start_time_in_seconds": 19620},{"data": [[22,1025]], "label": "1025 people finished between 5:37 and  5:47<br>4.66 miles per hour (12:52 pace) <br>7.51 km per hour (7:59 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20220},{"data": [[23,820]], "label": "820 people finished between 5:47 and  5:57<br>4.53 miles per hour (13:15 pace) <br>7.29 km per hour (8:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 20820},{"data": [[24,618]], "label": "618 people finished between 5:57 and  6:07<br>4.4 miles per hour (13:38 pace) <br>7.09 km per hour (8:28 pace)", "color": "#4E7AC7", "start_time_in_seconds": 21420},{"data": [[25,466]], "label": "466 people finished between 6:07 and  6:17<br>4.28 miles per hour (14:01 pace) <br>6.89 km per hour (8:41 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22020},{"data": [[26,380]], "label": "380 people finished between 6:17 and  6:27<br>4.17 miles per hour (14:24 pace) <br>6.71 km per hour (8:56 pace)", "color": "#4E7AC7", "start_time_in_seconds": 22620},{"data": [[27,318]], "label": "318 people finished between 6:27 and  6:37<br>4.06 miles per hour (14:46 pace) <br>6.54 km per hour (9:10 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23220},{"data": [[28,255]], "label": "255 people finished between 6:37 and  6:47<br>3.96 miles per hour (15:09 pace) <br>6.37 km per hour (9:25 pace)", "color": "#4E7AC7", "start_time_in_seconds": 23820},{"data": [[29,188]], "label": "188 people finished between 6:47 and  6:57<br>3.86 miles per hour (15:33 pace) <br>6.22 km per hour (9:39 pace)", "color": "#4E7AC7", "start_time_in_seconds": 24420},{"data": [[30,129]], "label": "129 people finished between 6:57 and  7:07<br>3.77 miles per hour (15:55 pace) <br>6.07 km per hour (9:53 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25020},{"data": [[31,104]], "label": "104 people finished between 7:07 and  7:17<br>3.68 miles per hour (16:18 pace) <br>5.92 km per hour (10:07 pace)", "color": "#4E7AC7", "start_time_in_seconds": 25620},{"data": [[32,66]], "label": "66 people finished between 7:17 and  7:27<br>3.59 miles per hour (16:41 pace) <br>5.79 km per hour (10:22 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26220},{"data": [[33,55]], "label": "55 people finished between 7:28 and  7:38<br>3.51 miles per hour (17:06 pace) <br>5.65 km per hour (10:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 26880},{"data": [[34,51]], "label": "51 people finished between 7:38 and  7:48<br>3.43 miles per hour (17:29 pace) <br>5.52 km per hour (10:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 27480},{"data": [[35,26]], "label": "26 people finished between 7:48 and  7:58<br>3.36 miles per hour (17:52 pace) <br>5.41 km per hour (11:05 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28080},{"data": [[36,16]], "label": "16 people finished between 7:58 and  8:08<br>3.29 miles per hour (18:15 pace) <br>5.29 km per hour (11:20 pace)", "color": "#4E7AC7", "start_time_in_seconds": 28680},{"data": [[37,12]], "label": "12 people finished between 8:09 and  8:19<br>3.21 miles per hour (18:40 pace) <br>5.17 km per hour (11:35 pace)", "color": "#4E7AC7", "start_time_in_seconds": 29340},{"data": [[38,18]], "label": "18 people finished between 8:21 and  8:31<br>3.14 miles per hour (19:08 pace) <br>5.05 km per hour (11:52 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30060},{"data": [[39,8]], "label": "8 people finished between 8:35 and  8:45<br>3.05 miles per hour (19:40 pace) <br>4.91 km per hour (12:13 pace)", "color": "#4E7AC7", "start_time_in_seconds": 30900},{"data": [[40,2]], "label": "2 people finished between 8:52 and  9:02<br>2.95 miles per hour (20:19 pace) <br>4.75 km per hour (12:37 pace)", "color": "#4E7AC7", "start_time_in_seconds": 31920},{"data": [[41,3]], "label": "3 people finished between 9:02 and  9:12<br>2.9 miles per hour (20:41 pace) <br>4.67 km per hour (12:51 pace)", "color": "#4E7AC7", "start_time_in_seconds": 32520},{"data": [[42,1]], "label": "1 person finished between 9:31 and  9:41<br>2.75 miles per hour (21:48 pace) <br>4.43 km per hour (13:32 pace)", "color": "#4E7AC7", "start_time_in_seconds": 34260}], "xAxisTicksLabels":[[1,"2:00"],[2,""],[3,""],[4,""],[5,""],[6,""],[7,"3:00"],[8,""],[9,""],[10,""],[11,""],[12,""],[13,""],[14,"4:00"],[15,""],[16,""],[17,""],[18,""],[19,""],[20,""],[21,"5:00"],[22,""],[23,""],[24,""],[25,""],[26,""],[27,""],[28,"6:00"],[29,""],[30,""],[31,""],[32,""],[33,""],[34,"7:00"],[35,""],[36,""],[37,""],[38,""],[39,""],[40,"8:00"],[41,""],[42,""]], "topLabel":"The number of people who finished each 10 minutes", "yAxis":"Number of runners", "xAxis":"Time to finish (H:MM)"};

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
