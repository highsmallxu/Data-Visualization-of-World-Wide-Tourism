/**
 * Created by FF on 16/1/15.
 */
zingchart.THEME = "classic";
    
var myConfig = {
      "type": "area",
      "stacked": true,
      "background-color": "none",
      "title": {
        "text": "Inbound tourism per country 1994-2013 in thousands",
        "font-family": "arial",
        "font-size": "20px",
        "font-weight": "normal",
        "background-color": "none",
        "color": "black",
        "text-align": "left"

      },
      "legend": {
        "margin": "5% auto auto auto",
        "layout": "float",
        "font-family": "arial",
        "font-size": "10px",
        "background-color": "#1D2629",
        "border-color": "#808080",
        "toggle-action": "remove",
        "align": "center",
        "item": {
          "marker-style": "match",
          "font-color": "#ffffff"
        }
      },
      "plot": {
        "tooltip-text": "%t: %v",
        "active-area": true,
        "shadow": false
      },
      "plotarea": {
        "margin": "10% 8% 14% 12%"
      },
      "series": [
      {
        "text": "Argentina",
        "values": [
          2289,
          2614,
          2764,
          3012,
          2898,
          2909,
          2620,
          2620,
          2820,
          2995,
          3457,
          3823,
          4173,
          4562,
          4700,
          4308,5325,5705,5587,5571,
          0
        ],
        "line-width": "2px",
        "line-color": "#8DD62E",
        "background-color": "#8DD62E",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#8DD62E",
          "border-color": "#8DD62E",
          "shadow": false
        }
      }, {
        "text": "Australia",
        "values": ["3726","4165","4318","4167","4459","4931","4856","4841","4746","5215","5499","5532","5644","5586","5490","5790","5771","6032","6382","6868" 
        ],
        "line-width": "2px",
        "line-color": "#FF006F",
        "background-color": "#FF006F",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#FF006F",
          "border-color": "#FF006F",
          "shadow": false
        }
      }, {
        "text": "Brazil",
        "values": [1991,2666,2850,4818,5107,5313,4773,4773,3785,4133,4794,5358,5017,5026,5050,4802,5161,5433,5677,5813,6430
        ],
        "line-width": "2px",
        "line-color": "#00D3E6",
        "background-color": "#00D3E6",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#00D3E6",
          "border-color": "#00D3E6",
          "shadow": false
        }
      }, {
        "text": "Canada",
        "values": [
          16932,17286,17669,18870,19411,19627,19679,19679,20057,17534,19145,18771,18265,17935,17142,15737,16219,16014,16344,16059,16528
        ],
        "line-width": "2px",
        "line-color": "#FFD540",
        "background-color": "#FFD540",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#FFD540",
          "border-color": "#FFD540",
          "shadow": false
        }
      }, {
        "text": "China",
        "values": [
          20034,22765,23770,25073,27047,31229,33167,36803,32970,41761,46809,49913,54720,53049,50875,55664,57581,57725,55686,55622
        ],
        "line-width": "2px",
        "line-color": "#0077E7",
        "background-color": "#0077E7",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#0077E7",
          "border-color": "#0077E7",
          "shadow": false
        }
      }, {
        "text": "France",
        "values": [
          60033,62406,66591,70109,73147,77190,75202,77012,75048,74433,74988,77916,80853,79218,76764,77648,81550,83051,84726,0
        ],
        "line-width": "2px",
        "line-color": "#1C8C21",
        "background-color": "#1C8C21",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#1C8C21",
          "border-color": "#1C8C21",
          "shadow": false
        }
      }, {
        "text": "Germany",
        "values": [
          14847,15205,15837,16511,17116,18983,17861,17969,18399,20137,21500,23569,24421,24884,24220,26875,28374,30411,31545,32999
        ],
        "line-width": "2px",
        "line-color": "#7B4C80",
        "background-color": "#7B4C80",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#7B4C80",
          "border-color": "#7B4C80",
          "shadow": false
        }
      }, {
        "text": "India",
        "values": [
          2124,2288,2374,2359,2482,2649,2537,2384,2726,3457,3919,4447,5082,5283,5168,5776,6309,6578,6968,0
        ],
        "line-width": "2px",
        "line-color": "#856A1F",
        "background-color": "#856A1F",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#856A1F",
          "border-color": "#856A1F",
          "shadow": false
        }
      }, {
        "text": "Indonesia",
        "values": [
          4324,5034,5185,4606,4728,5064,5153,5033,4467,5321,5002,4871,5506,6234,6324,7003,7650,8044,8802,9435
        ],
        "line-width": "2px",
        "line-color": "#B53118",
        "background-color": "#B53118",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#B53118",
          "border-color": "#B53118",
          "shadow": false
        }
      }, {
        "text": "Italy",
        "values": [
          31052,32943,34692,34933,36516,41181,39563,39799,39604,37071,36513,41058,43654,42734,43239,43626,46119,46360,47704,48576
        ],
        "line-width": "2px",
        "line-color": "#65768C",
        "background-color": "#65768C",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#65768C",
          "border-color": "#65768C",
          "shadow": false
        }
      }, {
        "text": "Japan",
        "values": [
          3345,3837,4218,4106,4438,4757,4772,5239,5212,6138,6728,7334,8347,8351,6790,8611,6219,8358,10364,13413
        ],
        "line-width": "2px",
        "line-color": "#FFFF00",
        "background-color": "#FFFF00",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#FFFF00",
          "border-color": "#FFFF00",
          "shadow": false
        }
      }, {
        "text": "Mexico",
        "values": [
          20241,21395,19351,19392,19043,20641,19810,19667,18665,20618,21915,21353,21606,22931,22346,23290,23403,23403,24151,29346
        ],
        "line-width": "2px",
        "line-color": "#BF6517",
        "background-color": "#BF6517",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#BF6517",
          "border-color": "#BF6517",
          "shadow": false
        }
      }, {
        "text": "Russian Federation",
        "values": [
          10290,16208,17463,16188,18820,21169,21595,23309,22521,22064,22201,22486,22909,23676,21339,22281,24932,28177,30792,32421
        ],
        "line-width": "2px",
        "line-color": "#0087FB",
        "background-color": "#0087FB",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#0087FB",
          "border-color": "#0087FB",
          "shadow": false
        }
      }, {
        "text": "Saudi Arabia",
        "values": [
          3325,0,0,0,0,6585,6727,7511,7332,8599,8037,8620,11531,14757,10897,10850,14179,16332,15772,18259
        ],
        "line-width": "2px",
        "line-color": "#DF2304",
        "background-color": "#DF2304",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#DF2304",
          "border-color": "#DF2304",
          "shadow": false
        }
      }, {
        "text": "South Africa",
        "values": [
          4488,4915,4976,5732,5890,5872,5787,6430,6505,6678,7369,8396,9091,9592,7012,8074,8339,9188,9537,9549
        ],
        "line-width": "2px",
        "line-color": "#68E62C",
        "background-color": "#68E62C",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#68E62C",
          "border-color": "#68E62C",
          "shadow": false
        }
      }, {
        "text": "South Korea",
        "values": [
          3753,3684,3908,4250,4660,5322,5147,5347,4753,5818,6023,6155,6448,6891,7818,8798,9795,11140,12176,14202
        ],
        "line-width": "2px",
        "line-color": "#2759A0",
        "background-color": "#2759A0",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#2759A0",
          "border-color": "#2759A0",
          "shadow": false
        }
      }, {
        "text": "Turkey",
        "values": [
          7083,7966,9040,8960,6893,9586,10783,12790,13341,16826,20273,18916,26122,29792,30187,31364,34654,35698,37795,0
        ],
        "line-width": "2px",
        "line-color": "#A310B3",
        "background-color": "#A310B3",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#A310B3",
          "border-color": "#A310B3",
          "shadow": false
        }
      }, {
        "text": "United Kingdom",
        "values": [
          21719,22936,23215,23710,23341,23212,20982,22307,22787,25678,28039,30654,30870,30142,28199,28295,29306,29282,31063,32613
        ],
        "line-width": "2px",
        "line-color": "#E9D567",
        "background-color": "#E9D567",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#E9D567",
          "border-color": "#E9D567",
          "shadow": false
        }
      }, {
        "text": "United States of America",
        "values": [
          43318,46489,47767,46377,48701,51238,46927,43581,41218,46086,49206,50977,56135,58007,55103,60010,62821,66657,69973,74757
        ],
        "line-width": "2px",
        "line-color": "#7B4C80",
        "background-color": "#7B4C80",
        "marker": {
          "type": "circle",
          "size": "4px",
          "border-width": "0px",
          "background-color": "#7B4C80",
          "border-color": "#7B4C80",
          "shadow": false
        }
      }],
      "scale-x": {
        "values": [
          "1995",
          "1996",
          "1997",
          "1998",
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013"
        ],
        "line-color": "#808080",
        "line-width": "1px",
        "line-style": "solid",
        "guide": {
          "line-color": "#808080",
          "line-style": "solid"
        },
        "tick": {
          "line-width": "1px",
          "line-color": "#808080"
        },
        "item": {
          "font-size": "12px",
          "font-color": "#808080",
          "font-weight": "normal",
          "font-family": "arial",
          "offset-y": "5%"
        }
      },
      "scale-y": {
        "values": "0:525000:25000",
        "format": "%v",
        "line-width": "1px",
        "line-color": "#808080",
        "guide": {
          "line-color": "#808080",
          "alpha": 0.1,
          "line-style": "solid"
        },
        "tick": {
          "line-width": "1px",
          "line-color": "#808080"
        },
        "item": {
          "font-size": "12px",
          "font-color": "#808080",
          "font-weight": "normal",
          "font-family": "arial",
          "offset-x": "-5%"
        }
      },
      "crosshair-x": {
        "line-width": "2px",
        "line-color": "#FFFFFF",
        "offset-y": "10%",
        "marker": {
          "visible": false
        },
        "label": {
          "text": "<strong>%t</strong>: %v",
          "font-color": "#000000",
          "font-family": "arial"
        },
        "scale-label": {
          "background-transparent": true,
          "offset-y": "5%"
        }
      },
      "tooltip": {
        "visible": false
      }
    };

    zingchart.render({
      id: 'v4_steamgraph_inbound',
      data: myConfig,
      height: 900,
      width: 1200
    });