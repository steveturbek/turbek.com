$(document).ready(function() {

	$("#chart_country_split_over_time_USA_v_all #placeholder").bind("plothover", function (event, pos, item) {
	$("#x").text(pos.x.toFixed(2));
	$("#y").text(pos.y.toFixed(2));
	if (item) {
	$("#charttooltip").remove();
	var x = item.datapoint[0];//.toFixed(2),
	y = item.datapoint[1];//.toFixed(2);
	
	var d = new Date(x).getFullYear();
	
	
	showChartTooltip(item.pageX, item.pageY, item.series.label + " had "+ y + " runners in " + d );

	} else {
	$("#charttooltip").remove();
	}
	});
	
	var chart_data = {"seriesData":[{"data":[[28771200000,53], [60307200000,157], [91929600000,92], [123465600000,104], [155001600000,257], [186537600000,337], [218160000000,1522], [249696000000,3556], [281232000000,8237], [312768000000,9535], [344390400000,11519], [375926400000,10703], [407462400000,10487], [438998400000,10621], [470620800000,9943], [502156800000,11670], [533692800000,13834], [565228800000,13734], [596851200000,13762], [628387200000,14778], [659923200000,13221], [691459200000,15744], [723081600000,14811], [754617600000,15536], [786153600000,15638], [817689600000,15519], [849312000000,16511], [880848000000,16957], [912384000000,17601], [943920000000,15465], [975542400000,13512], [1007078400000,13418], [1038614400000,18666], [1070150400000,21280], [1101772800000,19542], [1133308800000,18573], [1164844800000,18855], [1196380800000,18944], [1228003200000,17571], [1259539200000,22228], [1291075200000,20886], [1322611200000,22693], [1385769600000,29355]],"label":"United States"}, {"data":[[218160000000,2], [249696000000,13], [281232000000,92], [312768000000,138], [344390400000,12], [375926400000,1609], [407462400000,2344], [438998400000,3554], [470620800000,3909], [502156800000,3657], [533692800000,5272], [565228800000,6873], [596851200000,7805], [628387200000,8838], [659923200000,10491], [691459200000,9961], [723081600000,12990], [754617600000,10690], [786153600000,14012], [817689600000,11199], [849312000000,11674], [880848000000,13366], [912384000000,13827], [943920000000,16266], [975542400000,15749], [1007078400000,10100], [1038614400000,13047], [1070150400000,13285], [1101772800000,16873], [1133308800000,18398], [1164844800000,19109], [1196380800000,19786], [1228003200000,20637], [1259539200000,21430], [1291075200000,23962], [1322611200000,24153], [1385769600000,22648]],"label":"Outside the United States"}], "topLabel":"Runners from United States and all other countries", "yAxis":"Runners", "xAxis":"Year"};

	$("#chart_country_split_over_time_USA_v_all #top-label").html(chart_data.topLabel);
  
  	$("#chart_country_split_over_time_USA_v_all #x-axis-label").html(chart_data.xAxis);
	
	$("#chart_country_split_over_time_USA_v_all #y-axis-label").html(chart_data.yAxis);
	$("#chart_country_split_over_time_USA_v_all #y-axis-label").flipv_up();



	chart_style_options.xaxis.ticks = chart_data.xAxisTicksLabels;
	chart_style_options.series.lines.fill=false;
	chart_style_options.series.lines.lineWidth=2;
	chart_style_options.legend.show=true;	
	chart_style_options.yaxis.min= null; // min. value to show, null means set automatically
	chart_style_options.legend.container = $("#chart_country_split_over_time_USA_v_all #legend-container");
	chart_style_options.xaxis.mode= "time";
	
	$.plot($("#chart_country_split_over_time_USA_v_all #placeholder"), chart_data.seriesData, chart_style_options);  
});
