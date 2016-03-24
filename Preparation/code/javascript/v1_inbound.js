/**
 * Created by gaoxiaoxu on 16/1/15.
 */
zingchart.THEME = "classic";


function change1 () {
    var index = document.getElementById("v1_select1")
    var number = index.options[index.selectedIndex].value;
    var data = inboundTF.data;
    val = [];
    for (i=0;i<data[number-1].TF.length;i++){
        a = parseInt(data[number-1].TF[i])
        if(a==0){
            a=null;
        }
        val.push(a);
    }
    var country_name = data[number-1].country;
    var markers = Array("square","star3","pie","circle","star5");
    var item = markers[Math.floor(Math.random()*markers.length)];
    zingchart.exec("v1_inbound", "addplot", {
        "data":{
            "values":val,
            "text": country_name,
            "marker": {
                "type":item,
                "shadow":"true",
                "size":"4px"
            },
        }
    });
    //zingchart.exec("v1_inbound","modifyplot",{
    //    data : {
    //        "legend":{
    //            "marker":{
    //                "type":"pie"
    //            }
    //        }
    //    }
    //});
}


//countries = []
//for (j=0;j<data.length;j++){
//    countries.push(data[j].country)
//}
//final = countries
var v1 = {
    "background-color": "white",
    "type": "line",
    "title": {
        "text": "Inbound Tourism",
        "color": "#333",
        "background-color": "white",
        "width": "60%",
        "text-align": "left"
    },
    "subtitle": {
        "text": "Arrivals of non-resident tourists at national borders - thousands",
        "text-align": "left",
        "width": "60%"
    },
    "legend": {
        "layout": "x1",
        //"position":"100% 5%",
        "margin-top": "5%",
        "margin-right": "100%",
        "border-width": "0",
        "shadow": false,
        "marker": {
            "cursor": "hand",
            "border-width": "0",
            "type":"square"
        },
        "background-color": "white",
        "item": {
            "cursor": "hand"
        },
        "toggle-action": "remove"
    },
    "scaleX": {
        "values": "1995:2014:1",
        "max-items": 20
    },
    "scaleY": {
        "line-color": "#333"
    },
    "tooltip": {
        "text": "%t: %v outbreaks in %k"
    },
    "plot": {
        "line-width": 10,
        "marker": {
            "size": 2
        },
        // // "selection-mode": "multiple",
        // "background-mode": "graph",
        // "selected-state": {
        //     "line-width": 4
        // },
        // "background-state": {
        //     // "line-color": "#eee",
        //     "marker": {
        //         "background-color": "blue"
        //     }
        // }
    },
    "plotarea": {
        "margin": "15% 25% 10% 7%"
    }
};
zingchart.render({
    id: 'v1_inbound',
    data: v1,
    height: 600,
    width: 1200
});