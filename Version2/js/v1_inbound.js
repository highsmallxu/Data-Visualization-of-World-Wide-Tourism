/**
 * Created by gaoxiaoxu on 16/1/15.
 */
zingchart.THEME = "classic";
var start = {
        "background-color":"white",
        "type":"mixed",
        "plotarea":{
            "margin": "15% 25% 10% 7%"
        },
        "scaleX":{
            "values":"1995:2014:1",
            "max-items":20
        },
        "scaleY":{
            "line-color":"#333"
        },
        "series":[
            {
                "text":""
            },
            {
                "text":""
            }
        ],
        "legend":{
            "border-width": "0",
            "shadow": false,
            "marker": {
                "cursor": "hand",
                "border-width": "0",
                "type":"square",
            },
            "background-color": "white",
            "item": {
                "cursor": "hand"
            },
            "toggle-action": "remove"
        },
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

}
zingchart.render({
    id:"v1_inbound",
    data: start,
    height:600,
    width:1200
})

function change_year(){
    var index = document.getElementById("v1_select1")
    var number = index.options[index.selectedIndex].value;
    var TF_data = inboundTF.data;
    var Ex_data = inexpense.data;
    val_TF=[]
    for (i=0;i<TF_data[number-1].TF.length;i++){
        a = parseInt(TF_data[number-1].TF[i])
        if (a==0){
            a=0;
        }
        val_TF.push(a)
    }
    val_Ex=[]
    for (j=0;j<Ex_data[number-1].inexpense.length;j++){
        b = parseInt(Ex_data[number-1].inexpense[j])
        if (b==0){
            b=0;
        }
        val_Ex.push(b)
    }
    item=[]
    for (m=1995;m<2015;m++){
        if (val_Ex[m-1995]!=0 & val_TF[m-1995]!=0) {
            item.push([m, val_TF[m - 1995], val_Ex[m - 1995]])
        }
    }
    bubble_value = item;

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
    line_value = val;
    var markers = Array("square","star3","pie","circle","star5");
    var item = markers[Math.floor(Math.random()*markers.length)];
    var country_name = data[number-1].country;
    var colors = Array("#ff9966","#3399ff"," #ff66b3","#269900","#00cc00")
    var color = colors[Math.floor(Math.random()*colors.length)];
    zingchart.exec("v1_inbound", "addplot", {
        "plotindex":0,
        "data":{
            "type":"bubble",
            "values":bubble_value,
            "text":country_name,
            "min-size":3,
            "max-size":20,
            "marker": {
                "background-color": color,
                "alpha":0.3,
            }
        }
    })
    zingchart.exec("v1_inbound","addplot",{
        "plotindex":1,
        "data":{
            "type": "line",
            "values":line_value,
            "text":country_name,
            "line-color":color,
            "marker":{
                "background-color":color,
                "border-color":"none"
            }
        }
    })
}



var start2 = {
    "background-color":"white",
    "type":"mixed",
    "plotarea":{
        "margin": "15% 25% 10% 7%"
    },
    "scaleX":{
        "values":"1995:2014:1",
        "max-items":20
    },
    "scaleY":{
        "line-color":"#333"
    },
    "series":[
        {
            "text":""
        },
        {
            "text":""
        }
    ],
    "legend":{
        "border-width": "0",
        "shadow": false,
        "marker": {
            "cursor": "hand",
            "border-width": "0",
            "type":"square",
        },
        "background-color": "white",
        "item": {
            "cursor": "hand"
        },
        "toggle-action": "remove"
    },
    "title": {
        "text": "Outbound Tourism",
        "color": "#333",
        "background-color": "white",
        "width": "60%",
        "text-align": "left"
    },
    "subtitle": {
        "text": "Departures - thousands",
        "text-align": "left",
        "width": "60%"
    }

}
zingchart.render({
    id:"v2_outbound",
    data: start2,
    height:600,
    width:1200
})

function change_country(){
    var index2 = document.getElementById("v2_select2")
    var number2 = index2.options[index2.selectedIndex].value;
    var DT_data = outboundDT.data;
    var outmoney_data = out_expense.data;
    val_DT=[]
    for (o=0;o<DT_data[number2-1].value.length;o++){
        c = parseInt(DT_data[number2-1].value[o])
        if (c==0){
            c=0;
        }
        val_DT.push(c)
    }
    val_outmoney=[]
    for (p=0;p<outmoney_data[number2-1].outexpense.length;p++){
        d = parseInt(outmoney_data[number2-1].outexpense[p])
        if (d==0){
            d=0;
        }
        val_outmoney.push(d)
    }
    item2=[]
    for (q=1995;q<2015;q++){
        if (outmoney_data[q-1995]!=0 & val_DT[q-1995]!=0) {
            item2.push([q, val_DT[q - 1995], val_outmoney[q - 1995]])
        }
    }
    bubble_value2 = item2;

    line_value2 = val_DT;

    var markers2 = Array("square","star3","pie","circle","star5");
    var items = markers2[Math.floor(Math.random()*markers2.length)];
    var country_name2 = DT_data[number2-1].name;
    var colors2 = Array(" #ff9966"," #3399ff"," #ff66b3","#269900","#ffbf00")
    var color2 = colors2[Math.floor(Math.random()*colors2.length)];
    zingchart.exec("v2_outbound", "addplot", {
        "plotindex":0,
        "data":{
            "type":"bubble",
            "values":bubble_value2,
            "text":country_name2,
            "min-size":3,
            "max-size":20,
            "marker": {
                "background-color": color2,
                "alpha":0.3,
            }
        }
    })
    zingchart.exec("v2_outbound","addplot",{
        "plotindex":1,
        "data":{
            "type": "line",
            "values":line_value2,
            "text":country_name2,
            "line-color":color2,
            "marker":{
                "background-color":color2,
                "border-color":"none"
            }
        }
    })
}