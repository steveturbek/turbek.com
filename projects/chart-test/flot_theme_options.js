var flot_theme_options = 
{
				colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],                // the color theme used for graphs
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85 // set to 0 to avoid background
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    
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
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: null,
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled 
                        lineWidth: 3, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // or "center" 
                        horizontal: false
                    },
                    shadowSize: 0
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: "#ccc", // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 1, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                hooks: {}
};


//chart type variations  (will be merged with the above)
//var chart_type_array = ['line','pie','column','donut','bar','tilted_pie'];	//'stacked_bar','stacked_column',   //not working  //
var hacked_stroke_color_for_IE_donut_chart_hole="#fff";


var chart_type_flot_variations = 
{
	"line":
	{
		xaxis: 
		{ 
			tickLength:0
		}
	}, "column" : 
	{
		series:{
			bars:{
				show:true, fill: 1, align:"right",barWidth: .75 
				}
		},xaxis: 
		{ 
			tickLength:0
		}
	}, "bar" : 
	{
		series:{
			bars:{
				horizontal: true, show:true, fill: 1, align:"right",barWidth: .75 
				}
		},	
		lines:{
			show:false
		},
		points:{
			show:false
		},
		yaxis:{
			tickLength:0
		}
	}, "pie" : {
		series: { pie:{show: true, stroke:{width:0}}}
	}, "tilted_pie" : {
		series: { pie: { show: true, stroke:{width:0} ,tilt: 0.5  }}
	}, "donut" : {
		series: { pie: { show: true, innerRadius: 0.5, stroke:{width:0, color:hacked_stroke_color_for_IE_donut_chart_hole} }}
	}, "points" : {
		series: {  points: { show: true}}
	}
	
};



// Style variatons

var greys = 
{
	colors: ["#111", "#333", "#666", "#777", "#999", "#aaa", "#ccc", "#eee"]
};
var neon = 
{
	colors: ["#C2FF0A","#FF0A47","#FF0AC2","#FFAC00","#47FF0A","#0AC2FF","#FF5B00"]
};
var blues = 
{
	colors: ["#ADD5F7","#7FB2F0","#4E7AC7","#35478C","#16193B","#07294A","#000000"]
};

var Excel2000 = 
{
	colors: ["#9999FF","#993366","#FFFFCC","#CCFFFF","#660066","#FF8080","#FF8080","#0066CC","#CCCCFF"],
	grid: {
                    show: true,
                    color: "#000", // primary color used for outline and labels
                    backgroundColor: "#C0C0C0", // null for transparent, else color
					borderColor: "#000", // set if different from the grid color
			}
};





var flot_theme_options_style_modifications_index =0;
var chart_style_modification_objects_array=[{},greys,neon,blues,Excel2000];



