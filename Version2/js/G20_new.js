/**
 * Created by gaoxiaoxu on 1/21/16.
 */


///G20-in-people
var width = 500;
var height = 500;

var start = d3.select("#G20-in-people").select("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
var start2 = d3.select("#G20-out-people").select("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
var start3 = d3.select("#G20-in-money").select("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
var start4 = d3.select("#G20-out-money").select("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

function changeyear () {
    var number = d3.event.target.value;
    var all_data = G20in.data;
    year = 1995 - number;
    select_data = []
    for (i = 0; i < all_data.length; i++) {
        if (parseInt(all_data[i].TF[1995 - year]) != 0) {
            select_data.push({"country": all_data[i].country, "value": parseInt(all_data[i].TF[1995 - year])})
        }
    }
    var data_in = select_data;
    var country = select_data.map(function (d) {
        return d.country
    })
    var width = 500;
    var height = 300;
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(country)
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
    var y = d3.scale.linear()
        .range([height, 0])
        .domain([0, d3.max(select_data, function (d) {
            return d.value
        })])
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
    start.selectAll("rect").remove()
    var svg = start.append("a")
        .selectAll(".bar")
        .data(data_in)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.country)
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.value)
        })
        .attr("height", function (d) {
            return height - y(d.value)
        })
        .on("mouseover", mouseover1)
        .on("mouseleave", mouseleave1)
    start.selectAll(".axis").remove()
    start.append("a")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
.selectAll("text")
        .attr("y", 10)
        .attr("x", 30)
        .attr("dy", ".35em")
        .attr("transform", "rotate(45)");
    function mouseover1(data) {
        temp = data.country;
        console.log(temp)
        d3.selectAll("#G20-out-people .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-in-money .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-out-money .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
    }
    function mouseleave1(data) {
        d3.selectAll("#G20-out-people .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-in-money .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-out-money .bar")
            .style("fill", "steelblue")
    }
    var all_data_2 = G20out.data;
    var select_data2 = []
    for (j = 0; j < all_data_2.length; j++) {
        if (parseInt(all_data_2[j].DT[1995 - year]) != 0) {
            select_data2.push({"country": all_data_2[j].country, "value": parseInt(all_data_2[j].DT[1995 - year])})
        }
    }
    var data2 = select_data2;
    var data_G20_out_people = select_data2;
    var country2 = select_data2.map(function (d) {
        return d.country
    })
    var width2 = 500;
    var height2 = 300;
    var x2 = d3.scale.ordinal()
        .rangeRoundBands([0, width2], .1)
        .domain(country2)
    var xAxis2 = d3.svg.axis()
        .scale(x2)
        .orient("bottom")
    var y2 = d3.scale.linear()
        .range([height2, 0])
        .domain([0, d3.max(select_data2, function (d) {
            return d.value
        })])
    var yAxis2 = d3.svg.axis()
        .scale(y2)
        .orient("right")
    start2.selectAll("rect").remove()
    var svg2 = start2.append("a")
        .selectAll(".bar")
        .data(data2)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x2(d.country)
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y2(d.value)
        })
        .attr("height", function (d) {
            return height - y2(d.value)
        })
        .on("mouseover", mouseover2)
        .on("mouseleave", mouseleave2)
    start2.selectAll(".axis").remove()
    start2.append("a")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
    .selectAll("text")
        .attr("y", 10)
        .attr("x", 30)
        .attr("dy", ".35em")
        .attr("transform", "rotate(45)");
    function mouseover2(data) {
        temp = data.country;
        console.log(temp)
        d3.selectAll("#G20-in-people .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-in-money .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-out-money .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
    }
    function mouseleave2(data) {
        d3.selectAll("#G20-in-people .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-in-money .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-out-money .bar")
            .style("fill", "steelblue")
    }

    var all_data_3 = G20_inex.data;
    var select_data3 = []
    for (z = 0; z < all_data_3.length; z++) {
        if (parseInt(all_data_3[z].inexpense[1995 - year]) != 0) {
            select_data3.push({
                "country": all_data_3[z].country,
                "value": parseInt(all_data_3[z].inexpense[1995 - year])
            })
        }
    }
    var data3 = select_data3;
    var data_G20_in_money = select_data3;
    var country3 = select_data3.map(function (d) {
        return d.country
    })
    var width3 = 500;
    var height3 = 300;
    var x3 = d3.scale.ordinal()
        .rangeRoundBands([0, width3], .1)
        .domain(country3)
    var xAxis3 = d3.svg.axis()
        .scale(x3)
        .orient("bottom")
    var y3 = d3.scale.linear()
        .range([height3, 0])
        .domain([0, d3.max(select_data3, function (d) {
            return d.value
        })])
    var yAxis3 = d3.svg.axis()
        .scale(y3)
        .orient("left")
    start3.selectAll("rect").remove()
    var svg3 = start3.append("a")
        .selectAll(".bar")
        .data(data3)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x3(d.country)
        })
        .attr("width", x3.rangeBand())
        .attr("y", function (d) {
            return y3(d.value)
        })
        .attr("height", function (d) {
            return height3 - y3(d.value)
        })
        .on("mouseover", mouseover3)
        .on("mouseleave", mouseleave3)
    start3.selectAll(".axis").remove()
    start3.append("a")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    function mouseover3(data) {
        temp = data.country;
        console.log(temp)
        d3.selectAll("#G20-in-people .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-out-people .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-out-money .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
    }
    function mouseleave3(data) {
        d3.selectAll("#G20-in-people .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-out-people .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-out-money .bar")
            .style("fill", "steelblue")
    }

    var all_data_4 = G20_outex.data;
    var select_data4 = []
    for (m = 0; m < all_data_4.length; m++) {
        if (parseInt(all_data_4[m].outexpense[1995 - year]) != 0) {
            select_data4.push({
                "country": all_data_4[m].country,
                "value": parseInt(all_data_4[m].outexpense[1995 - year])
            })
        }
    }
    var data4 = select_data4;
    var country4 = select_data4.map(function (d) {
        return d.country
    })
    var width4 = 500;
    var height4 = 300;
    var x4 = d3.scale.ordinal()
        .rangeRoundBands([0, width4], .1)
        .domain(country4)
    var xAxis4 = d3.svg.axis()
        .scale(x4)
        .orient("bottom")
    var y4 = d3.scale.linear()
        .range([height4, 0])
        .domain([0, d3.max(select_data4, function (d) {
            return d.value
        })])
    var yAxis4 = d3.svg.axis()
        .scale(y4)
        .orient("left")
    start4.selectAll("rect").remove()
    var svg4 = start4.append("a")
        .selectAll(".bar")
        .data(data4)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x4(d.country)
        })
        .attr("width", x4.rangeBand())
        .attr("y", function (d) {
            return y4(d.value)
        })
        .attr("height", function (d) {
            return height4 - y4(d.value)
        })
        .on("mouseover", mouseover4)
        .on("mouseleave", mouseleave4)
    start4.selectAll(".axis").remove()
    start4.append("a")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    function mouseover4(data) {
        temp = data.country;
        console.log(temp)
        d3.selectAll("#G20-in-people .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-in-money .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
        d3.selectAll("#G20-out-people .bar")
            .style("fill", function (d) {
                if (d.country == temp) {
                    return "red"
                }
            })
    }
    function mouseleave4(data) {
        d3.selectAll("#G20-in-people .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-in-money .bar")
            .style("fill", "steelblue")
        d3.selectAll("#G20-out-people .bar")
            .style("fill", "steelblue")
    }
}

d3.select("#G20_select").on("change",changeyear);