$(document).ready(function() {

	$("#chart_gender_split_over_time #placeholder").bind("plothover", function (event, pos, item) {
	$("#x").text(pos.x.toFixed(2));
	$("#y").text(pos.y.toFixed(2));
	if (item) {
	$("#charttooltip").remove();
	var x = item.datapoint[0];//.toFixed(2),
	y = item.datapoint[1];//.toFixed(2);
	
	var d = new Date(x).getFullYear();
	
	
	showChartTooltip(item.pageX, item.pageY,  y + " " + item.series.label + " ran in " + d );


	} else {
	$("#charttooltip").remove();
	}
	});
	
	var chart_data = {"seriesData":[{"data":[[28771200000,55], [60307200000,153], [91929600000,90], [123465600000,101], [155001600000,251], [186537600000,303], [218160000000,1486], [249696000000,3522], [281232000000,7818], [312768000000,9273], [344390400000,10890], [375926400000,11465], [407462400000,11700], [438998400000,12341], [470620800000,12198], [502156800000,13417], [533692800000,16396], [565228800000,17556], [596851200000,18434], [628387200000,19967], [659923200000,19280], [691459200000,20596], [723081600000,22446], [754617600000,20801], [786153600000,22783], [817689600000,20331], [849312000000,20815], [880848000000,22083], [912384000000,22663], [943920000000,22721], [975542400000,21126], [1007078400000,16883], [1038614400000,21705], [1070150400000,23119], [1101772800000,24696], [1133308800000,24917], [1164844800000,25686], [1196380800000,26174], [1228003200000,25321], [1259539200000,28485], [1291075200000,28754], [1322611200000,29762], [1385769600000,32502]],"label":"men"}, {"data":[[60307200000,4], [91929600000,2], [123465600000,5], [155001600000,9], [186537600000,36], [218160000000,63], [249696000000,179], [281232000000,770], [312768000000,1203], [344390400000,1622], [375926400000,1758], [407462400000,1899], [438998400000,2205], [470620800000,2395], [502156800000,2481], [533692800000,3339], [565228800000,3689], [596851200000,3976], [628387200000,4690], [659923200000,4502], [691459200000,5204], [723081600000,5451], [754617600000,5814], [786153600000,6980], [817689600000,6478], [849312000000,7435], [880848000000,8418], [912384000000,8961], [943920000000,9184], [975542400000,8348], [1007078400000,6869], [1038614400000,10228], [1070150400000,11737], [1101772800000,12017], [1133308800000,12094], [1164844800000,12352], [1196380800000,12556], [1228003200000,12910], [1259539200000,15174], [1291075200000,16094], [1322611200000,17084], [1385769600000,19501]],"label":"women"}], "topLabel":"Number of runners of each gender", "yAxis":"Runners", "xAxis":"Year"};

	$("#chart_gender_split_over_time #top-label").html(chart_data.topLabel);
  
  	$("#chart_gender_split_over_time #x-axis-label").html(chart_data.xAxis);
	
	$("#chart_gender_split_over_time #y-axis-label").html(chart_data.yAxis);
	$("#chart_gender_split_over_time #y-axis-label").flipv_up();



	chart_style_options.xaxis.ticks = chart_data.xAxisTicksLabels;
	chart_style_options.colors =  ["#70B0FF", "#EB53F7"]; 
	chart_style_options.series.lines.fill=false;
	chart_style_options.series.lines.lineWidth=2;
	chart_style_options.legend.show=true;	
	chart_style_options.yaxis.min= null; // min. value to show, null means set automatically
	chart_style_options.legend.container = $("#chart_gender_split_over_time #legend-container");
	chart_style_options.xaxis.mode= "time";
	
	$.plot($("#chart_gender_split_over_time #placeholder"), chart_data.seriesData, chart_style_options);  
});
