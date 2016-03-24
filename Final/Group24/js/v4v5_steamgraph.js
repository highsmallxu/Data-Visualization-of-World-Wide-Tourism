/**
 * Created by gaoxiaoxu on 1/24/16.
 */
/**
 * Created by FF on 16/1/15.
 */
zingchart.THEME = "classic";

var myConfig = {
    "type": "area",
    "stacked": true,
    "background-color": "none",
    "title": {
        "text": "Inbound tourism per country 1995-2013",
        "font-size": "20px",
        "font-weight": "normal",
        "background-color": "none",
        "color": "black",
        "text-align": "center"

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
        "tooltip-text": "%t: %vK",
        "active-area": true,
        "shadow": false,
        "preview":true
    },
    "tooltip":{
        //"short":true,
        //"short-unit":"k"
    },
    "preview":{
        "visible":true,
        "height":80,
        "margin-bottom":0,
        "position":"0 800",
        "margin-top":10,
    },
    "plotarea": {
        "margin": "10% 8% 30% 12%"
    },
    "series": [
        {
            "text": "Argentina",
            "values": [2289,2614,2764,3012,2898,2909,2620,2820,2995,3457,3823,4173,4562,4700,4308,5325,5705,5587,5571,0],
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
            "values": [3726, 4165, 4318, 4167, 4459, 4931, 4856, 4841, 4746, 5215, 5499, 5532, 5644, 5586, 5490, 5790, 5771, 6032, 6382, 6868],
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
            "values": [1991, 2666, 2850, 4818, 5107, 5313, 4773, 3785, 4133, 4794, 5358, 5017, 5026, 5050, 4802, 5161, 5433, 5677, 5813, 6430
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
                16932, 17286, 17669, 18870, 19411, 19627, 19679, 20057, 17534, 19145, 18771, 18265, 17935, 17142, 15737, 16219, 16014, 16344, 16059, 16528
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
                20034, 22765, 23770, 25073, 27047, 31229, 33167, 36803, 32970, 41761, 46809, 49913, 54720, 53049, 50875, 55664, 57581, 57725, 55686, 55622
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
                60033, 62406, 66591, 70109, 73147, 77190, 75202, 77012, 75048, 74433, 74988, 77916, 80853, 79218, 76764, 77648, 81550, 83051, 84726, 0
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
                14847, 15205, 15837, 16511, 17116, 18983, 17861, 17969, 18399, 20137, 21500, 23569, 24421, 24884, 24220, 26875, 28374, 30411, 31545, 32999
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
                2124, 2288, 2374, 2359, 2482, 2649, 2537, 2384, 2726, 3457, 3919, 4447, 5082, 5283, 5168, 5776, 6309, 6578, 6968, 0
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
                4324, 5034, 5185, 4606, 4728, 5064, 5153, 5033, 4467, 5321, 5002, 4871, 5506, 6234, 6324, 7003, 7650, 8044, 8802, 9435
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
                31052, 32943, 34692, 34933, 36516, 41181, 39563, 39799, 39604, 37071, 36513, 41058, 43654, 42734, 43239, 43626, 46119, 46360, 47704, 48576
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
                3345, 3837, 4218, 4106, 4438, 4757, 4772, 5239, 5212, 6138, 6728, 7334, 8347, 8351, 6790, 8611, 6219, 8358, 10364, 13413
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
                20241, 21395, 19351, 19392, 19043, 20641, 19810, 19667, 18665, 20618, 21915, 21353, 21606, 22931, 22346, 23290, 23403, 23403, 24151, 29346
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
                10290, 16208, 17463, 16188, 18820, 21169, 21595, 23309, 22521, 22064, 22201, 22486, 22909, 23676, 21339, 22281, 24932, 28177, 30792, 32421
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
                3325, 0, 0, 0, 0, 6585, 6727, 7511, 7332, 8599, 8037, 8620, 11531, 14757, 10897, 10850, 14179, 16332, 15772, 18259
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
                4488, 4915, 4976, 5732, 5890, 5872, 5787, 6430, 6505, 6678, 7369, 8396, 9091, 9592, 7012, 8074, 8339, 9188, 9537, 9549
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
                3753, 3684, 3908, 4250, 4660, 5322, 5147, 5347, 4753, 5818, 6023, 6155, 6448, 6891, 7818, 8798, 9795, 11140, 12176, 14202
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
                7083, 7966, 9040, 8960, 6893, 9586, 10783, 12790, 13341, 16826, 20273, 18916, 26122, 29792, 30187, 31364, 34654, 35698, 37795, 0
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
                21719, 22936, 23215, 23710, 23341, 23212, 20982, 22307, 22787, 25678, 28039, 30654, 30870, 30142, 28199, 28295, 29306, 29282, 31063, 32613
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
                43318, 46489, 47767, 46377, 48701, 51238, 46927, 43581, 41218, 46086, 49206, 50977, 56135, 58007, 55103, 60010, 62821, 66657, 69973, 74757
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
        "zooming":true,
        "values": "1995:2013:1",
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
        "label":{
            "text":"Year",
            "font-size":"15px"
        }

    },
    "scale-y": {
        "zooming":true,
        "values": "0:525000:25000",
        //"short":true,
        //"short-unit":"k",
        "format":"%vk",
        "line-width": "1px",
        "line-color": "#808080",
        "label":{
            "text":"Number of Inbound Tourism of G20 countries",
            "font-size":"15px"
        }
    }
};

zingchart.render({
    id: 'v4_steamgraph_inbound',
    data: myConfig,
    height: 850,
    width: 1200
});


/**
 * Created by FF on 16/1/15.
 */
zingchart.THEME = "classic";

var myVis5 = {
    "type": "area",
    "stacked": true,
    "background-color": "none",
    "title": {
        "text": "Outbound tourism per country 1995-2013",
        "font-size": "20px",
        "font-weight": "normal",
        "background-color": "none",
        "color": "black",
        "text-align": "center"

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
        "tooltip-text": "%t: %vK",
        "active-area": true,
        "shadow": false,
        "preview":true
    },
    "plotarea": {
        "margin": "10% 8% 30% 12%"
    },
    "series": [
        {
            "text": "Argentina",
            "values": [
                3815,4296,4517,4592,4786,4953,4762,3008,3088,3904,3894,3892,4167,4614,4981,5307,6686,7266,7544,0
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
            "values": [
                2519,2732,2933,3161,3210,3498,3443,3461,3388,4369,4756,4941,5462,5808,6276,7103,7788,8212,8768,9114
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
            "values": [
                2600,3797,4014,4171,2863,3228,2674,2338,3229,2968,3365,3880,4651,5244,4950,6498,7805,8466,8666,0
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
                18206,18973,19111,17648,18368,19182,18359,17705,17739,19595,21099,22731,25163,27034,26204,28680,30450,32276,32977,0
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
                4520,5061,5324,8426,9232,10473,12133,16602,20222,28853,31026,34524,40954,45844,47656,57386,70250,83183,98185,0
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
                18686,18151,17115,18077,16709,19886,19265,18315,18576,21131,22480,22240,28103,25506,25140,25041,26155,25450,26243,0
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
        },
        // germany data are not reliable for outbound
        // {
        //   "text": "Germany",
        //   "values": [
        //     0,0,55800,69200,73400,74400,76400,76400,73300,74600,72300,77400,71200,70400,73000,72300,0,0,82729,87459,83008
        //   ],
        //   "line-width": "2px",
        //   "line-color": "#7B4C80",
        //   "background-color": "#7B4C80",
        //   "marker": {
        //     "type": "circle",
        //     "size": "4px",
        //     "border-width": "0px",
        //     "background-color": "#7B4C80",
        //     "border-color": "#7B4C80",
        //     "shadow": false
        //   }
        // },
        {
            "text": "India",
            "values": [
                3056,3464,3726,3811,4115,4416,4564,4940,5351,6213,7185,8340,9783,10868,11067,12988,13994,14920,16626,0
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
                0,0,0,0,0,2205,2505,3231,3478,3941,4106,4967,5158,5486,5053,6235,6750,7454,7973,8770
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
                0,18173,19078,19352,18962,21993,22421,25126,26817,23349,24796,25697,27734,28284,29060,29823,29295,28810,27798,28460
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
                15298,16695,16803,15806,16358,17819,16216,16523,13296,16831,17404,17535,17295,15987,15446,16637,16994,18491,17473,16903
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
                8450,9001,8910,9637,10352,11079,12075,11948,11044,12494,13305,14002,15257,14527,14104,14334,14799,15581,15911,18261
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
                21329,12260,11182,10635,12631,18371,18030,20428,20572,24507,28416,29107,34285,36538,34276,39323,43726,47813,54069,45889
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
                0,0,0,0,0,0,0,7896,4104,3811,4403,2000,4126,4087,6032,17827,15281,18614,19154,19824
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
                2520,2882,2926,3363,3875,3834,3733,3794,0,0,0,4339,4433,4429,4424,5165,5455,5031,5168,0
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
                3819,4649,4542,3067,4342,5508,6084,7123,7086,8826,10080,11610,13325,11996,9494,12488,12694,13737,14846,16081
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
                3981,4261,4633,4601,4758,5284,4856,5131,5928,7299,8246,8275,4956,4893,5561,6557,6282,5803,7526,0
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
                41345,42050,45957,50872,53881,56837,58281,59377,61424,64194,66494,69536,69450,69011,58614,55562,56836,56538,57792,60082
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
                51285,52999,53229,55696,57222,61327,59442,58066,56250,61809,63503,63663,64049,63653,62051,61061,59209,60697,61900,68303
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
        "zooming":true,
        "values":"1995:2013:1",
        "line-color": "#808080",
        "line-width": "1px",
        "line-style": "solid",
        "label":{
            "text":"Year",
            "font-size":"15px"
        }

    },
    "preview":{
        "visible":true,
        "height":80,
        //"position":"0 370",
        //"margin-top":10,
        "margin-bottom":50
    },
    "scale-y": {
        "zooming":true,
        "values": "0:500000:25000",
        "format": "%vK",
        "line-width": "1px",
        "label":{
            "text":"Number of Outbound Tourism of G20 Countries",
            "font-size":"15px"
        }
    },
    "tooltip": {
        "visible": true,
        //"short":true
    }
};

zingchart.render({
    id: 'v5_steamgraph_outbound',
    data: myVis5,
    height: 800,
    width: 1200
});