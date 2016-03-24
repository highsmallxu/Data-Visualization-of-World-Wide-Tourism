/**
 * Created by gaoxiaoxu on 16/1/15.
 */
zingchart.THEME = "classic";

function change_year() {
    var index = document.getElementById("G20_select")
    var number = index.options[index.selectedIndex].value;
    var index2 = document.getElementById("order_select")
    var order = index.options[index2.selectedIndex].value;
    var TF = G20in.data;
    var DT = G20out.data;
    var Ex_in = G20_inex.data;


    //if (order==0) {
    TF_value = []
    country_value = []
    for (i = 0; i < TF.length; i++) {
        if (TF[i].TF[number] != 0) {

            TF_value.push(parseInt(TF[i].TF[number]))
            country_value.push(TF[i].country)
        }
    }


    DT_value = []
    country2_value = []
    for (j = 0; j < DT.length; j++) {
        if (DT[j].DT[number] != 0) {
            DT_value.push(parseInt(DT[j].DT[number]))
            country2_value.push(DT[j].country)
        }
    }

    temp_DT = DT_value

    Ex_in_value = []
    country3_value = []
    for (z = 0; z < Ex_in.length; z++){
        if (Ex_in[z].inexpense[number] != 0){
            Ex_in_value.push(parseInt(Ex_in[z].inexpense[number]))
            country3_value.push(Ex_in[z].country)
        }
    }



    //G20_in//Alphabetical Order
    var G20_in = {
        "type": "bar3d",
        "background-color": "white",
        "3d-aspect": {
            "true3d": 0
        },
        "legend": {
            "border-color": "#CCCCCC",
            "background-color": "#FFFFFF",
            "margin-top": 38,
            "x": "88%",
            "shadow": false,
            "alpha": 1
        },
        "plot": {
            "aspect": "cylinder",
            "hover-marker": {
                "background-color": "#888888",
                "size": 3
            },
            "marker": {
                "background-color": "#cccccc",
                "size": 3
            },
            //"preview": true,
            "tooltip-text": "%v"
        },
        "scale-y": {
            "multiplier": true
            //"font-size": 16,
            //"line-color": "#cccccc",
            //"bold": true,
            //"format": "%v",
            //"line-width": 2,
            //"font-family": "Helvetica",
            //"color": "#333333",
            ////"tick": {
            ////    "line-gap-size": 0,
            ////    "line-color": "#cccccc",
            ////    "line-width": 1,
            ////    "size": 10
            ////},
            //"item": {
            //    "font-size": 11,
            //    "font-family": "Helvetica",
            //    "color": "#333333"
            //},
            //"label": {
            //    "text": "Revenue (in millions)",
            //    "color": "#333333"
            //}
        },
        "scale-x": {
            "tick": {
                "line-gap-size": 0,
                "line-color": "#cccccc",
                "line-width": 1,
                "size": 10
            },
            "font-size": 16,
            "line-color": "#cccccc",
            "bold": true,
            "item": {
                "font-size": 11,
                "font-family": "Helvetica",
                "color": "#333333",
                "angle":-90
            },
            "guide": {
                "line-width": 0
            },
            "label": {
                "text": "Years",
                "color": "#333333"
            },
            "line-width": 2,
            "font-family": "Helvetica",
            "color": "#333333",
            "values": country_value
            //"values": [
            //    2012,
            //    2013,
            //    2014,
            //    2015
            //]
        },
        "plotarea": {
            "margin-top": 40,
            "margin-left": 40,
            //"margin-right": 30
        },
        "title": {
            "background-color": "white",
            "font-size": 18,
            "bold": true,
            "text": "Inbound Tourism - thousands",
            "font-family": "Helvetica",
            "color": "#333333"
        },
        "series": [
            {
                "values": TF_value,
                "background-color-2": "#F0F1F2",
                "background-color": "#699EBF",
                "tooltip": {
                    "text": "$%vM",
                    "font-size": 12,
                    "font-color": "#FFFFFF",
                    "background-color": "#699EBF",
                    "bold": true,
                    "font-family": "Helvetica",
                    "padding": 5
                }
            }
        ]

    }

    //G20_out//Alphabetical Order
    var G20_out = {
        "type": "bar3d",
        "background-color": "white",
        "3d-aspect": {
            "true3d": 0
        },
        "legend": {
            "border-color": "#CCCCCC",
            "background-color": "#FFFFFF",
            "margin-top": 38,
            "x": "88%",
            "shadow": false,
            "alpha": 1
        },
        "plot": {
            "aspect": "cylinder",
            "hover-marker": {
                "background-color": "#888888",
                "size": 3
            },
            "marker": {
                "background-color": "#cccccc",
                "size": 3
            },
            //"preview": true,
            "tooltip-text": "%v"
        },
        "scale-y": {
            "multiplier": true
            //"font-size": 16,
            //"line-color": "#cccccc",
            //"bold": true,
            //"format": "%v",
            //"line-width": 2,
            //"font-family": "Helvetica",
            //"color": "#333333",
            ////"tick": {
            ////    "line-gap-size": 0,
            ////    "line-color": "#cccccc",
            ////    "line-width": 1,
            ////    "size": 10
            ////},
            //"item": {
            //    "font-size": 11,
            //    "font-family": "Helvetica",
            //    "color": "#333333"
            //},
            //"label": {
            //    "text": "Revenue (in millions)",
            //    "color": "#333333"
            //}
        },
        "scale-x": {
            "tick": {
                "line-gap-size": 0,
                "line-color": "#cccccc",
                "line-width": 1,
                "size": 10
            },
            "font-size": 16,
            "line-color": "#cccccc",
            "bold": true,
            "item": {
                "font-size": 11,
                "font-family": "Helvetica",
                "color": "#333333",
                "angle":-90
            },
            "guide": {
                "line-width": 0
            },
            "label": {
                "text": "Years",
                "color": "#333333"
            },
            "line-width": 2,
            "font-family": "Helvetica",
            "color": "#333333",
            "values": country2_value
            //"values": [
            //    2012,
            //    2013,
            //    2014,
            //    2015
            //]
        },
        "plotarea": {
            "margin-top": 40,
            "margin-left": 70,
            "margin-right": 30
        },
        "title": {
            "background-color": "white",
            "font-size": 18,
            "bold": true,
            "text": "Outbound Tourism - thousands ",
            "font-family": "Helvetica",
            "color": "#333333"
        },
        "series": [
            {
                "values": DT_value,
                "background-color-2": "#F0F1F2",
                "background-color": "#699EBF",
                "tooltip": {
                    "text": "$%vM",
                    "font-size": 12,
                    "font-color": "#FFFFFF",
                    "background-color": "#699EBF",
                    "bold": true,
                    "font-family": "Helvetica",
                    "padding": 5
                }
            }
        ]

    }

    //G20_in_expense//Alphabetical Order
    var G20_inexpense = {
        "type": "bar3d",
        "background-color": "white",
        "3d-aspect": {
            "true3d": 0
        },
        "legend": {
            "border-color": "#CCCCCC",
            "background-color": "#FFFFFF",
            "margin-top": 38,
            "x": "88%",
            "shadow": false,
            "alpha": 1
        },
        "plot": {
            "aspect": "cylinder",
            "hover-marker": {
                "background-color": "#888888",
                "size": 3
            },
            "marker": {
                "background-color": "#cccccc",
                "size": 3
            },
            //"preview": true,
            "tooltip-text": "%v"
        },
        "scale-y": {
            "multiplier": true
            //"font-size": 16,
            //"line-color": "#cccccc",
            //"bold": true,
            //"format": "%v",
            //"line-width": 2,
            //"font-family": "Helvetica",
            //"color": "#333333",
            ////"tick": {
            ////    "line-gap-size": 0,
            ////    "line-color": "#cccccc",
            ////    "line-width": 1,
            ////    "size": 10
            ////},
            //"item": {
            //    "font-size": 11,
            //    "font-family": "Helvetica",
            //    "color": "#333333"
            //},
            //"label": {
            //    "text": "Revenue (in millions)",
            //    "color": "#333333"
            //}
        },
        "scale-x": {
            "tick": {
                "line-gap-size": 0,
                "line-color": "#cccccc",
                "line-width": 1,
                "size": 10
            },
            "font-size": 3,
            "line-color": "#cccccc",
            "bold": true,
            "item": {
                "font-size": 10,
                "font-family": "Helvetica",
                "color": "#333333",
                "angle":-90
            },
            "guide": {
                "line-width": 0
            },
            "label": {
                "text": "Years",
                "color": "#333333"
            },
            "line-width": 2,
            "font-family": "Helvetica",
            "color": "#333333",
            "values": country3_value
        },
        "plotarea": {
            "margin-top": 40,
            "margin-left": 40,
            //"margin-right": 30
        },
        "title": {
            "background-color": "white",
            "font-size": 18,
            "bold": true,
            "text": "Inbound Tourism - thousands",
            "font-family": "Helvetica",
            "color": "#333333"
        },
        "series": [
            {
                "values": Ex_in_value,
                "background-color-2": "#F0F1F2",
                "background-color": "#699EBF",
                "tooltip": {
                    "text": "$%vM",
                    "font-size": 12,
                    "font-color": "#FFFFFF",
                    "background-color": "#699EBF",
                    "bold": true,
                    "font-family": "Helvetica",
                    "padding": 5
                }
            }
        ]

    }
    $("#in_inbound").zingchart({data: G20_in});

    $("#out_outbound").zingchart({data: G20_out});

    $("#in_expense").zingchart({data: G20_inexpense});

    $("#in_inbound").nodeHover(
        function(){
            var idx = this.event.nodeindex;
            var in_country = country_value[idx];
            console.log(in_country)
            for (m = 0; m < country2_value.length; m++){
                if (country2_value[m]==in_country){
                    idx=m;
                }
            }
                if (idx == 0) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==0", "background-color": "red"}]}
                    })
                }
                else if (idx == 1) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==1", "background-color": "red"}]}
                    })
                }
                else if (idx == 2) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==2", "background-color": "red"}]}
                    })
                }
                else if (idx == 3) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==3", "background-color": "red"}]}
                    })
                }
                else if (idx == 4) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==4", "background-color": "red"}]}
                    })
                }
                else if (idx == 5) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==5", "background-color": "red"}]}
                    })
                }
                else if (idx == 6) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==6", "background-color": "red"}]}
                    })
                }
                else if (idx == 7) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==7", "background-color": "red"}]}
                    })
                }
                else if (idx == 8) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==8", "background-color": "red"}]}
                    })
                }
                else if (idx == 9) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==9", "background-color": "red"}]}
                    })
                }
                else if (idx == 10) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==10", "background-color": "red"}]}
                    })
                }
                else if (idx == 11) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==11", "background-color": "red"}]}
                    })
                }
                else if (idx == 12) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==12", "background-color": "red"}]}
                    })
                }
                else if (idx == 13) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==13", "background-color": "red"}]}
                    })
                }
                else if (idx == 14) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==14", "background-color": "red"}]}
                    })
                }
                else if (idx == 15) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==15", "background-color": "red"}]}
                    })
                }
                else if (idx == 16) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==16", "background-color": "red"}]}
                    })
                }
                else if (idx == 17) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==17", "background-color": "red"}]}
                    })
                }
                else if (idx == 18) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==18", "background-color": "red"}]}
                    })
                }
                else if (idx == 19) {
                    $("#out_outbound").setSeriesData({
                        "plotindex": 0,
                        "data": {"values": temp_DT, "rules": [{"rule": "%i==19", "background-color": "red"}]}
                    })
                }
        },
        function(){
            //$("#out_outbound").
            var idx = this.event.nodeindex;
            $("#out_outbound").eq(idx).addClass("hover");
        }
    );


}




