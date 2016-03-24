/**
 * Created by gaoxiaoxu on 16/1/16.
 */

d3.select('#slider3').call(d3.slider()
    .axis(true)
    .min(1995)
    .max(2014)
    .step(1)
    .on("slide", function(evt, value) {
        a = value;
        change7(value)
    }));


function change7(value){

        number = value-1995;
        var result = [];
        var data = mapinbound.data;
        var outbound = mapbound.data;
        for (i=0;i<data.length;i++){

            for (g=0;g<outbound.length;g++){
                if (outbound[g].country==data[i].country){
                    outbound_value = parseInt(outbound[g].value[number])*1000
                }
            }

            value = parseInt(data[i].value[number])*1000;
            popultation = parseInt(data[i].population[number])*1000;
            update = data[i].update[number];
            if (update==1){
                updated="Increase"
            }
            else if(update==0){
                updated="Same"
            }
            else if(update==-1){
                updated="Decrease"
            }
            name1 = data[i].name;
            if (value==0){
                value=null;
                name1=[]
            }
            result.push({"value":value,"country":data[i].country,"name":name1,"Tendency":updated,"Outbound Tourism":outbound_value,"Population":popultation})
        }
        var visualization = d3plus.viz()
            .container("#v7_map_inbound")
            .data(result)
            .coords("../data/countries.json")
            .title("Choropleth Map of Inbound Tourism")
            .type("geo_map")
            .id("country")
            .text("name")
            .color({
                "heatmap": [ "yellow" , "red" ],
                "value": "value"
            })
            .tooltip(["Tendency","Outbound Tourism","Population"])
            .draw()


}

var visualization = d3plus.viz()
    .container("#v7_map_inbound")        // container DIV to hold the visualization
    .data([])        // data to use with the visualization
    .coords("../data/countries.json") // pass topojson coordinates
    .type("geo_map")          // visualization type
    .id("country")            // key for which our data is unique on
    .text("name")             // key to use for display text
    .title("Choropleth Map of Inbound Tourism")
    .color({
        "heatmap": [ "yellow" , "red" ],
        "value": "value"
    })          // key for coloring countries
    //.tooltip("country")         // keys to place in tooltip
    .draw()                   // finally, draw the visualization!


var visualization = d3plus.viz()
    .container("#v8_map_outbound")        // container DIV to hold the visualization
    .data([])        // data to use with the visualization
    .coords("../data/countries.json") // pass topojson coordinates
    .type("geo_map")          // visualization type
    .id("country")            // key for which our data is unique on
    .title("Choropleth Map of Outbound Tourism")
    .text("name")             // key to use for display text
    .color({
        "heatmap": [ "yellow" , "red" ],
        "value": "value"
    })          // key for coloring countries
    .tooltip("country")         // keys to place in tooltip
    .draw()                   // finally, draw the visualization!

d3.select('#slider4').call(d3.slider()
    .axis(true)
    .min(1995)
    .max(2014)
    .step(1)
    .on("slide", function(evt, value) {
        change8(value)
    }));

function change8(value){

        number = value-1995;
        var result = [];
        var data = mapbound.data;
        var inbound = mapinbound.data;

        for (i=0;i<data.length;i++){

            for (g=0;g<inbound.length;g++){
                if (inbound[g].country==data[i].country){
                    inbound_value = parseInt(inbound[g].value[number])*1000
                }
            }


            value = parseInt(data[i].value[number])*1000;
            population = parseInt(data[i].population[number])*1000;
            update = data[i].update[number];
            if (update==1){
                updated="Increase"
            }
            else if(update==0){
                updated="Same"
            }
            else if(update==-1){
                updated="Decrease"
            }
            name1 = data[i].name;
            if (value==0){
                value=null;
                name1=[]
            }
            result.push({"value":value,"Population":population,"country":data[i].country,"name":name1,"Tendency":updated,"Inbound Tourism":inbound_value})
        }
        var visualization = d3plus.viz()
            .container("#v8_map_outbound")
            .data(result)
            .coords("../data/countries.json")
            .type("geo_map")
            .id("country")
            .title("Choropleth Map of Outbound Tourism")
            .text("name")
            .color({
                "heatmap": [ "pink" , "purple" ],
                "value": "value"
            })
            .tooltip(["Tendency","Inbound Tourism","Population"])
            .draw()

    }

