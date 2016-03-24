/**
 * Created by gaoxiaoxu on 16/1/15.
 */

zingchart.THEME = "classic";

function change3(){
    var index = document.getElementById("v3_select3")
    var number = index.options[index.selectedIndex].value;
    var data = outboundDT_PPP.data;
    value_DT = [];
    for (i=0;i<data[number-1].DT.length;i++){
        a = parseInt(data[number-1].DT[i])*1000
        if(a==0){
            a=null;
        }
        value_DT.push(a);
    }
    value_PPP=[]
    for (j=0;j<data[number-1].PPP.length;j++){
        b = parseInt(data[number-1].PPP[j])
        if(b==0){
            b=null;
        }
        value_PPP.push(b)
    }


    var country_name = data[number-1].country;
    var markers = Array("square","star3","pie","circle","star5");
    var item = markers[Math.floor(Math.random()*markers.length)];

    var v3 = {
        "background-color":"white",
        "type":"mixed",
        "plotarea": {
            "margin": "15% 25% 10% 7%"
        },
        "title":{
            "text":"Relationship between Outbound Tourism and PPP",
            "color": "#333",
            "background-color": "white",
            "text-align": "center",
            "font-size":"20px"
        },
        scaleX:{
            itemsOverlap:true,
            maxItems:8,
            values:"1995:2014:1",
            "label":{
                "text":"Year"
            }
        },
        scaleY2:{
            lineColor:"#F06555",
            "line-width": "5px",
            "label":{
                "text":"GNI per capita - US$",
                "font-size":17
            },
            format:"$%v",
            "short":true,
            "short-unit":"k"
        },
        scaleY:{
            lineColor:"#56ABDF",
            "line-width": "5px",
            "label":{
                "text":"Number of outbound tourism",
                "font-size":15
            },
            "short":true,
            "short-unit":"M"
        },

        series:[
            {
                type:"bar",
                values:value_DT,
                backgroundColor:"#56ABDF",
                scales:"scale-x,scale-y",
                tooltip:{
                    text:"Outbound Tourism: %node-value in %k",
                    "short":true,
                    "short-unit":"M"
                },
                barWidth:"70%"
            },
            {
                type:"line",
                scales:"scale-x,scale-y-2",
                values:value_PPP,
                lineColor:"#F06555",
                marker:{
                    type:"pie",
                    shadow:"True",
                    backgroundColor:"red",
                    borderWidth:0

                },
                tooltip:{
                    text:"PPP: $%node-value in %k",
                    "short":true,
                    "short-unit":"k"
                }
            }
        ]

    };

    zingchart.render({
        id:"v3_ppp",
        data:v3,
        height:600,
        width:1400
    });


}


var v3 = {
    "background-color":"white",
    "type":"mixed",
    "plotarea": {
        "margin": "10% 25% 10% 7%"
    },
    "title":{
        "text":"Relationship between Outbound Tourism and PPP",
        "color": "#333",
        "background-color": "white",
        "text-align": "center",
        "font-size":"20px"
    },
    scaleX:{
        itemsOverlap:true,
        maxItems:8,
        values:"1995:2014:1"
    },
    scaleY2:{
        lineColor:"#999",
        "short":true,
        "short-unit":"k",
        "label":{
            "text":"GNI per capita - US$",
            "font-size":17
        }
    },
    scaleY:{
        lineColor:"#999",
        "short":true,
        "short-unit":"k",
        "label":{
            "text":"Number of outbound tourism",
            "font-size":15
        }
    },
    series:[
        {
            type:"line",
            text:"Custom %",
            values:[null],
            backgroundColor:"#65A1DF",
            scales:"scale-x,scale-y",
            barWidth:"50%",
            tooltip:{
                text:"$%node-value",
                thousandsSeparator:","
            },
            dataDraggingMinValue:10,
            legendMarker:{
                shadow:false,
                borderWidth:0
            }
        },
        {
            type:"line",
            scales:"scale-x,scale-y-2",
            values:[null]
        }
    ]

};

zingchart.render({
    id:"v3_ppp",
    data:v3,
    height:600,
    width:1400
});/**
 * Created by gaoxiaoxu on 1/24/16.
 */
