//make color list


function returnSymmetricalColorArray(numberOfItems){
	var colors_ref =["#ADD5F7","#7FB2F0","#4E7AC7","#35478C","#16193B","#000000"];
	var colorListArray=[];
	
	colorListArray.push (colors_ref[Math.floor(numberOfItems/2)]); //add the central color

	var numberOfColorSteps = Math.floor(numberOfItems/2) -2;
	if (numberOfItems%2 ==1) colorListArray.push (colors_ref[Math.floor(numberOfItems/2)]); //add another central color

	
	for (a=numberOfColorSteps; a>=0; a--){
		colorListArray.splice(0,0,colors_ref[a]); //add it to the first step
		colorListArray.push (colors_ref[a]); //add it to the last step
	}
	
	colorListArray.push ('#ffffff');  	//last color must be white to make it look nice
		
	//console.log (colorListArray);
	return colorListArray;	

}

///////////////////////////////////////////////////

function showChartTooltip(x, y, contents) {
$('<div id="charttooltip">' + contents + '</div>;').css( {
position: 'absolute',
display: 'none',
top: y + 5,
left: x + 5,
border: '1px solid #bfbfbf',
padding: '2px',
'background-color': '#ffffff',
opacity: 1
}).appendTo("body").fadeIn(200);
}

///////////////////////////////////////////////////






///////////////////////////////////////////////////

var chart_style_options = {
// the color theme used for graphs
colors: ["#ADD5F7","#7FB2F0","#4E7AC7","#35478C","#16193B","#000000"],
series: {
	points: {
		show: false,
		radius: 3,
		lineWidth: 2, // in pixels
		fill: true,
		fillColor: null	// null for transparent, else color  or gradient like { colors: ["#67AADA", "#fff"] }//Flot only does vertical gradients
	},
	lines: {
		show:true, //whether to show the line (not the stroke of the line)
		lineWidth: 0, // in pixels ,set to 0 to hide stroke

		fill: 1,
		fillColor: null,	// null for transparent, else color  or gradient like { colors: ["#67AADA", "#fff"] }//Flot only does vertical gradients
		steps: false  //makes line chart into step chart
	},
	bars: {
		show: false,
		lineWidth: 2, // in pixels
		barWidth: .75, // in units of the x axis
		fill: 1,
		fillColor: false,  //false uses the default color palatte
		align: "left", // or "center" 
		horizontal: false // when horizontal, left is now top
	},
	shadowSize: 0  //set to 0 to hide
},  
legend: {
	show: false,
	noColumns: 1, // number of colums in legend table
	labelFormatter: null, // fn: string -> string
	labelBoxBorderColor: "#fff", // border color for the little label boxes
	container: "#legend-container", // container (as jQuery object) to put legend in, null means default on top of graph
	position: "ne", // position of default legend container within plot
	margin: 10, // distance from grid edge to default legend container within plot
	backgroundColor: null, // null means auto-detect
	backgroundOpacity: 0.85 // set to 0 to avoid background
},
xaxis: {
	mode: null, // null or "time"
	transform: null, // null or f: number -> number to transform axis
	inverseTransform: null, // if transform is set, this should be the inverse function
	min: null, // min. value to show, null means set automatically
	max: null, // max. value to show, null means set automatically
	autoscaleMargin: null, // margin in % to add if auto-setting min/max
	ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
	tickFormatter: null, // fn: number -> string
	labelWidth: null, // size of tick labels in pixels
	labelHeight: null,
	tickLength: 0,
	// mode specific options
	tickDecimals: null, // no. of decimals, null means auto
	tickSize: null, // number or [number, "unit"]
	minTickSize: null, // number or [number, "unit"]
	monthNames: null, // list of names of months
	timeformat: null, // format string to use
	twelveHourClock: false // 12 or 24 time in time mode
},
yaxis: {
	autoscaleMargin: 0.02,
	min: 0, // min. value to show, null means set automatically

},
x2axis: {
	autoscaleMargin: null
},
y2axis: {
	autoscaleMargin: 0.02
},
grid: {
	show: true,
	aboveData: false,
	color: "#545454", // primary color used for outline and labels
	backgroundColor: null, // null for transparent, else color  or gradient like { colors: ["#67AADA", "#fff"] }//Flot only does vertical gradients
	tickColor: "#dddddd", // color used for the ticks
	labelMargin: 5, // in pixels

	borderWidth: 1, // in pixels
	borderColor: '#dddddd', // set if different from the grid color

	
//	markings: [ { xaxis: { from: 0, to: 2 }, yaxis: { from: 0, to: 1 }, color: "#fff" }],   //THIS ARE BOXES YOU CAN DRAW ON THE CHART TO HIGHLIGHT AREAS
	markings: null, // array of ranges or fn: axes -> array of ranges
	markingsColor: "#f4f4f4",
	markingsLineWidth: 2,

	// interactive stuff
	clickable: true,
	hoverable: true,
	autoHighlight: true, // highlight in case mouse is near
	mouseActiveRadius: 10 // how far the mouse can be away to activate an item
	}
};