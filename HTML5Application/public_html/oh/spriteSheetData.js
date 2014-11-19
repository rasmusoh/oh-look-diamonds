spriteSheetData = (function()
{
    var ssd = {
        hobo: null,
        dHouse : null,
        cat : null,
        wick : null,
        diamond : null,
        mediumDiamond : null,
        greatDiamond : null,
        rocket : null,
        flame : null,
        smoke : null,
        wind : null
    };
    
    ssd.setValues = function(queue)
    {
            ssd.hobo = {
                "framerate":24,
                "images":[queue.getResult("hobo")],
                "frames":[
                    [0, 0, 256, 256, 0, -139, -81],
                    [256, 0, 256, 256, 0, -139, -81],
                    [512, 0, 256, 256, 0, -139, -81],
                    [768, 0, 256, 256, 0, -139, -81],
                    [1024, 0, 256, 256, 0, -139, -81],
                    [1280, 0, 256, 256, 0, -139, -81],
                    [1536, 0, 256, 256, 0, -139, -81],
                    [0, 256, 256, 256, 0, -139, -81],
                    [256, 256, 256, 256, 0, -139, -81],
                    [512, 256, 256, 256, 0, -139, -81],
                    [768, 256, 256, 256, 0, -139, -81],
                    [1024, 256, 256, 256, 0, -139, -81],
                    [1280, 256, 256, 256, 0, -139, -81],
                    [1536, 256, 256, 256, 0, -139, -81],
                    [0, 512, 256, 256, 0, -139, -81],
                    [256, 512, 256, 256, 0, -139, -81],
                    [512, 512, 256, 256, 0, -139, -81],
                    [768, 512, 256, 256, 0, -139, -81],
                    [1024, 512, 256, 256, 0, -139, -81],
                    [1280, 512, 256, 256, 0, -139, -81],
                    [1536, 512, 256, 256, 0, -139, -81],
                    [0, 768, 256, 256, 0, -139, -81],
                    [256, 768, 256, 256, 0, -139, -81],
                    [512, 768, 256, 256, 0, -139, -81],
                    [768, 768, 256, 256, 0, -139, -81],
                    [1024, 768, 256, 256, 0, -139, -81],
                    [1280, 768, 256, 256, 0, -139, -81],
                    [1536, 768, 256, 256, 0, -139, -81],
                    [0, 1024, 256, 256, 0, -139, -81],
                    [256, 1024, 256, 256, 0, -139, -81],
                    [512, 1024, 256, 256, 0, -139, -81],
                    [768, 1024, 256, 256, 0, -139, -81],
                    [1024, 1024, 256, 256, 0, -139, -81],
                    [1280, 1024, 256, 256, 0, -139, -81],
                    [1536, 1024, 256, 256, 0, -139, -81],
                    [0, 1280, 256, 256, 0, -139, -81],
                    [256, 1280, 256, 256, 0, -139, -81],
                    [512, 1280, 256, 256, 0, -139, -81],
                    [768, 1280, 256, 256, 0, -139, -81],
                    [1024, 1280, 256, 256, 0, -139, -81],
                    [1280, 1280, 256, 256, 0, -139, -81],
                    [1536, 1280, 256, 256, 0, -139, -81],
                    [0, 1536, 256, 256, 0, -139, -81],
                    [256, 1536, 256, 256, 0, -139, -81],
                    [512, 1536, 256, 256, 0, -139, -81],
                    [768, 1536, 256, 256, 0, -139, -81],
                    [1024, 1536, 256, 256, 0, -139, -81],
                    [1280, 1536, 256, 256, 0, -139, -81],
                    [1536, 1536, 256, 256, 0, -139, -81],
                    [0, 1792, 256, 256, 0, -139, -81]
                ],
                "animations":{"cycle": [0,49],"still":[0]}
            },
            ssd.muteButton = {
                "framerate":24,
                "images":[queue.getResult("mute")],
                "frames":[
                    [0, 0, 64, 64, 0, 0,0],
                    [64, 0, 64, 64, 0, 0, 0]
                ],
                "animations":{
                    "mute":[0],
                    "unmute":[1]
                }
            },
            ssd.dHouse= {
                "framerate":24,
                "images":[queue.getResult("diamondhouse")],
                "frames":[
                    [0, 0, 128, 128, 0, 0, 0],
                    [128, 0, 128, 128, 0, 0, 0],
                    [256, 0, 128, 128, 0, 0, 0],
                    [384, 0, 128, 128, 0, 0, 0],
                    [512, 0, 128, 128, 0, 0, 0],
                    [640, 0, 128, 128, 0, 0, 0],
                    [768, 0, 128, 128, 0, 0, 0]
                ],
                "animations":{
                    "first": [0],
                    "second": [1],
                    "third": [2],
                    "fourth": [3],
                    "fifth": [4],
                    "sixth": [5],
                    "seventh": [6]
                    }
            };
            ssd.cat = {
                "framerate":24,
                "images":[queue.getResult("cat")],
                "frames":[
                    [0, 0, 256, 256, 0, 128, 128],
                    [256, 0, 256, 256, 0, 128, 128],
                    [512, 0, 256, 256, 0, 128, 128],
                    [768, 0, 256, 256, 0, 128, 128],
                    [1024, 0, 256, 256, 0, 128, 128],
                    [1280, 0, 256, 256, 0, 128, 128],
                    [1536, 0, 256, 256, 0, 128, 128],
                    [0, 256, 256, 256, 0, 128, 128],
                    [256, 256, 256, 256, 0, 128, 128],
                    [512, 256, 256, 256, 0, 128, 128],
                    [768, 256, 256, 256, 0, 128, 128],
                    [1024, 256, 256, 256, 0, 128, 128],
                    [1280, 256, 256, 256, 0, 128, 128],
                    [1536, 256, 256, 256, 0, 128, 128],
                    [0, 512, 256, 256, 0, 128, 128],
                    [256, 512, 256, 256, 0, 128, 128],
                    [512, 512, 256, 256, 0, 128, 128],
                    [768, 512, 256, 256, 0, 128, 128],
                    [1024, 512, 256, 256, 0, 128, 128],
                    [1280, 512, 256, 256, 0, 128, 128],
                    [1536, 512, 256, 256, 0, 128, 128]
                ],
                "animations":{
                    "flying": {"speed": 1, "frames": [19, 20]},
                        "cycle": [0,17],"still":[0]
                }
            };
            ssd.wick = {
                "framerate":24,
                "images":[queue.getResult("wick")],
                "frames":[
                    [0, 0, 128, 64, 0, -237, -166],
                    [128, 0, 128, 64, 0, -237, -166],
                    [256, 0, 128, 64, 0, -237, -166],
                    [384, 0, 128, 64, 0, -237, -166],
                    [512, 0, 128, 64, 0, -237, -166],
                    [640, 0, 128, 64, 0, -237, -166],
                    [768, 0, 128, 64, 0, -237, -166],
                    [896, 0, 128, 64, 0, -237, -166],
                    [1024, 0, 128, 64, 0, -237, -166],
                    [1152, 0, 128, 64, 0, -237, -166],
                    [1280, 0, 128, 64, 0, -237, -166],
                    [1408, 0, 128, 64, 0, -237, -166],
                    [1536, 0, 128, 64, 0, -237, -166],
                    [1664, 0, 128, 64, 0, -237, -166],
                    [1792, 0, 128, 64, 0, -237, -166],
                    [0, 64, 128, 64, 0, -237, -166],
                    [128, 64, 128, 64, 0, -237, -166],
                    [256, 64, 128, 64, 0, -237, -166],
                    [384, 64, 128, 64, 0, -237, -166],
                    [512, 64, 128, 64, 0, -237, -166],
                    [640, 64, 128, 64, 0, -237, -166],
                    [768, 64, 128, 64, 0, -237, -166],
                    [896, 64, 128, 64, 0, -237, -166],
                    [1024, 64, 128, 64, 0, -237, -166],
                    [1152, 64, 128, 64, 0, -237, -166],
                    [1280, 64, 128, 64, 0, -237, -166],
                    [1408, 64, 128, 64, 0, -237, -166],
                    [1536, 64, 128, 64, 0, -237, -166],
                    [1664, 64, 128, 64, 0, -237, -166],
                    [1792, 64, 128, 64, 0, -237, -166],
                    [0, 128, 128, 64, 0, -237, -166],
                    [128, 128, 128, 64, 0, -237, -166],
                    [256, 128, 128, 64, 0, -237, -166],
                    [384, 128, 128, 64, 0, -237, -166],
                    [512, 128, 128, 64, 0, -237, -166],
                    [640, 128, 128, 64, 0, -237, -166]
                ],
                "animations":{"cycle": [0,35],"still": [0]}
            };
            ssd.diamond = {
                "framerate":24,
                "images":[queue.getResult("diamond")],
                "frames":[
                    [0, 0, 128, 128, 0, 64, 64],
                    [128, 0, 128, 128, 0, 64, 64],
                    [256, 0, 128, 128, 0, 64, 64],
                    [384, 0, 128, 128, 0, 64, 64],
                    [512, 0, 128, 128, 0, 64, 64],
                    [640, 0, 128, 128, 0, 64, 64],
                    [768, 0, 128, 128, 0, 64, 64],
                    [896, 0, 128, 128, 0, 64, 64],
                    [1024, 0, 128, 128, 0, 64, 64],
                    [1152, 0, 128, 128, 0, 64, 64],
                    [1280, 0, 128, 128, 0, 64, 64],
                    [1408, 0, 128, 128, 0, 64, 64],
                    [1536, 0, 128, 128, 0, 64, 64],
                    [1664, 0, 128, 128, 0, 64, 64],
                    [1792, 0, 128, 128, 0, 64, 64],
                    [0, 128, 128, 128, 0, 64, 64],
                    [128, 128, 128, 128, 0, 64, 64],
                    [256, 128, 128, 128, 0, 64, 64],
                    [384, 128, 128, 128, 0, 64, 64],
                    [512, 128, 128, 128, 0, 64, 64],
                    [640, 128, 128, 128, 0, 64, 64],
                    [768, 128, 128, 128, 0, 64, 64],
                    [896, 128, 128, 128, 0, 64, 64],
                    [1024, 128, 128, 128, 0, 64, 64],
                    [1152, 128, 128, 128, 0, 64, 64]
                ],
                "animations":{"cycle": [0,24]}
            };
            
            ssd.mediumDiamond = {
                "framerate":24,
                "images":[queue.getResult("mediumDiamond")],
                "frames":[
                    [0, 0, 128, 128, 0, 64, 64],
                    [128, 0, 128, 128, 0, 64, 64],
                    [256, 0, 128, 128, 0, 64, 64],
                    [384, 0, 128, 128, 0, 64, 64],
                    [512, 0, 128, 128, 0, 64, 64],
                    [640, 0, 128, 128, 0, 64, 64],
                    [768, 0, 128, 128, 0, 64, 64],
                    [896, 0, 128, 128, 0, 64, 64],
                    [1024, 0, 128, 128, 0, 64, 64],
                    [1152, 0, 128, 128, 0, 64, 64],
                    [1280, 0, 128, 128, 0, 64, 64],
                    [1408, 0, 128, 128, 0, 64, 64],
                    [1536, 0, 128, 128, 0, 64, 64],
                    [1664, 0, 128, 128, 0, 64, 64],
                    [1792, 0, 128, 128, 0, 64, 64],
                    [0, 128, 128, 128, 0, 64, 64],
                    [128, 128, 128, 128, 0, 64, 64],
                    [256, 128, 128, 128, 0, 64, 64],
                    [384, 128, 128, 128, 0, 64, 64],
                    [512, 128, 128, 128, 0, 64, 64],
                    [640, 128, 128, 128, 0, 64, 64],
                    [768, 128, 128, 128, 0, 64, 64],
                    [896, 128, 128, 128, 0, 64, 64],
                    [1024, 128, 128, 128, 0, 64, 64],
                    [1152, 128, 128, 128, 0, 64, 64]
                ],
                "animations":{"mediumCycle": [0,24]}
            }
            
            ssd.greatDiamond = {
                "framerate":24,
                "images":[queue.getResult("greatDiamond")],
                "frames":[
                    [0, 0, 256, 256, 0, 128, 128],
                    [256, 0, 256, 256, 0, 128, 128],
                    [512, 0, 256, 256, 0, 128, 128],
                    [768, 0, 256, 256, 0, 128, 128],
                    [1024, 0, 256, 256, 0, 128, 128],
                    [1280, 0, 256, 256, 0, 128, 128],
                    [1536, 0, 256, 256, 0, 128, 128],
                    [0, 256, 256, 256, 0, 128, 128],
                    [256, 256, 256, 256, 0, 128, 128],
                    [512, 256, 256, 256, 0, 128, 128],
                    [768, 256, 256, 256, 0, 128, 128],
                    [1024, 256, 256, 256, 0, 128, 128],
                    [1280, 256, 256, 256, 0, 128, 128],
                    [1536, 256, 256, 256, 0, 128, 128],
                    [0, 512, 256, 256, 0, 128, 128],
                    [256, 512, 256, 256, 0, 128, 128],
                    [512, 512, 256, 256, 0, 128, 128],
                    [768, 512, 256, 256, 0, 128, 128],
                    [1024, 512, 256, 256, 0, 128, 128],
                    [1280, 512, 256, 256, 0, 128, 128],
                    [1536, 512, 256, 256, 0, 128, 128],
                    [0, 768, 256, 256, 0, 128, 128],
                    [256, 768, 256, 256, 0, 128, 128],
                    [512, 768, 256, 256, 0, 128, 128],
                    [768, 768, 256, 256, 0, 128, 128]
                ],
                "animations":{"greatCycle": [0,24]}
            };
            
            ssd.hudGlass = {
                "framerate":24,
                "images":[queue.getResult("hudGlass")],
                "frames": [
                    [0, 0, 128, 128, 0, -196, -14],
                    [128, 0, 128, 128, 0, -196, -14]],
                "animations":{"still":[0],"frenzy":[0,1]}
            };
            
            ssd.rocket = {
                "framerate":24,
                "images":[queue.getResult("rocketCatz")],
                "frames":[
                    [1871, 320, 176, 103, 0, -282, -200],
                    [897, 454, 178, 103, 0, -280, -200],
                    [718, 454, 179, 103, 0, -279, -200],
                    [181, 557, 181, 103, 0, -277, -200],
                    [0, 557, 181, 103, 0, -277, -200],
                    [1792, 454, 179, 103, 0, -279, -200],
                    [1611, 454, 181, 103, 0, -277, -200],
                    [1431, 454, 180, 103, 0, -278, -200],
                    [1252, 454, 179, 103, 0, -279, -200],
                    [1075, 454, 177, 103, 0, -281, -200],
                    [1156, 320, 176, 104, 0, -283, -199],
                    [362, 557, 178, 103, 0, -281, -203],
                    [1511, 320, 179, 104, 0, -280, -199],
                    [537, 454, 181, 103, 0, -278, -203],
                    [1690, 320, 181, 104, 0, -278, -199],
                    [178, 454, 178, 103, 0, -281, -203],
                    [975, 320, 181, 104, 0, -278, -199],
                    [356, 454, 181, 103, 0, -278, -203],
                    [1332, 320, 179, 104, 0, -280, -199],
                    [0, 454, 178, 103, 0, -281, -203],
                    [1016, 0, 516, 159, 0, -11, -188],
                    [505, 0, 511, 160, 0, -17, -196],
                    [988, 164, 506, 151, 0, -18, -186],
                    [1494, 164, 496, 145, 0, -32, -199],
                    [1532, 0, 469, 157, 0, -55, -194],
                    [503, 164, 485, 154, 0, -35, -203],
                    [0, 164, 503, 156, 0, -20, -198],
                    [0, 320, 485, 134, 0, -45, -203],
                    [0, 0, 505, 164, 0, -16, -195],
                    [485, 320, 245, 118, 0, -276, -199],
                    [730, 320, 245, 116, 0, -275, -203],
                    [540, 557, 169, 101, 0, -278, -175],
                    [709, 557, 175, 79, 0, -272, -206]
                ],
                "animations":{
                    "frenzy": {"speed": 1, "frames": [20, 21, 22, 23, 24, 25, 26, 27, 28]},
                    "shake": {
                        "speed": 1,
                        "frames": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
                    },
                    "no shake": {"speed": 1, "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
                    "frenzy ready": {"speed": 1, "frames": [29, 30]},
                    "flying": {"speed": 0.5, "frames": [31, 32]},
                    "slipping": {"speed": 1, "frames": [32]}
                }
            };
            ssd.flame = {
                "framerate":24,
                "images":[queue.getResult("flame")],
                "frames":[
                    [0, 0, 256, 256, 0, -142, -196],
                    [256, 0, 256, 256, 0, -142, -196],
                    [512, 0, 256, 256, 0, -142, -196],
                    [768, 0, 256, 256, 0, -142, -196],
                    [1024, 0, 256, 256, 0, -142, -196],
                    [1280, 0, 256, 256, 0, -142, -196],
                    [1536, 0, 256, 256, 0, -142, -196],
                    [0, 256, 256, 256, 0, -142, -196],
                    [256, 256, 256, 256, 0, -142, -196],
                    [512, 256, 256, 256, 0, -142, -196],
                    [768, 256, 256, 256, 0, -142, -196],
                    [1024, 256, 256, 256, 0, -142, -196],
                    [1280, 256, 256, 256, 0, -142, -196],
                    [1536, 256, 256, 256, 0, -142, -196],
                    [0, 512, 256, 256, 0, -142, -196],
                    [256, 512, 256, 256, 0, -142, -196],
                    [512, 512, 256, 256, 0, -142, -196],
                    [768, 512, 256, 256, 0, -142, -196],
                    [1024, 512, 256, 256, 0, -142, -196],
                    [1280, 512, 256, 256, 0, -142, -196],
                    [1536, 512, 256, 256, 0, -142, -196],
                    [0, 768, 256, 256, 0, -142, -196],
                    [256, 768, 256, 256, 0, -142, -196],
                    [512, 768, 256, 256, 0, -142, -196],
                    [768, 768, 256, 256, 0, -142, -196],
                    [1024, 768, 256, 256, 0, -142, -196],
                    [1280, 768, 256, 256, 0, -142, -196],
                    [1536, 768, 256, 256, 0, -142, -196],
                    [0, 1024, 256, 256, 0, -142, -196],
                    [256, 1024, 256, 256, 0, -142, -196],
                    [512, 1024, 256, 256, 0, -142, -196],
                    [768, 1024, 256, 256, 0, -142, -196],
                    [1024, 1024, 256, 256, 0, -142, -196],
                    [1280, 1024, 256, 256, 0, -142, -196],
                    [1536, 1024, 256, 256, 0, -142, -196]
                ],
                "animations": {             
                    "ignite":{frames:[0,1,2,3,4,5],next:"cycle",speed:1.5}, 
                    "cycle": {frames:[6,7,8,9,10,11,12,13,14,15,16,17,18],next:"cycle"}
                }
            };
            ssd.smoke = {
                "framerate":24,
                "images":[queue.getResult("smokepuffs")],
                "frames":[
                    [0, 0, 512, 512, 0, -2, -84],
                    [512, 0, 512, 512, 0, -2, -84],
                    [1024, 0, 512, 512, 0, -2, -84],
                    [1536, 0, 512, 512, 0, -2, -84],
                    [2048, 0, 512, 512, 0, -2, -84],
                    [2560, 0, 512, 512, 0, -2, -84],
                    [3072, 0, 512, 512, 0, -2, -84],
                    [0, 512, 512, 512, 0, -2, -84],
                    [512, 512, 512, 512, 0, -2, -84],
                    [1024, 512, 512, 512, 0, -2, -84],
                    [1536, 512, 512, 512, 0, -2, -84],
                    [2048, 512, 512, 512, 0, -2, -84],
                    [2560, 512, 512, 512, 0, -2, -84],
                    [3072, 512, 512, 512, 0, -2, -84],
                    [0, 1024, 512, 512, 0, -2, -84],
                    [512, 1024, 512, 512, 0, -2, -84],
                    [1024, 1024, 512, 512, 0, -2, -84],
                    [1536, 1024, 512, 512, 0, -2, -84],
                    [2048, 1024, 512, 512, 0, -2, -84],
                    [2560, 1024, 512, 512, 0, -2, -84],
                    [3072, 1024, 512, 512, 0, -2, -84],
                    [0, 1536, 512, 512, 0, -2, -84],
                    [512, 1536, 512, 512, 0, -2, -84],
                    [1024, 1536, 512, 512, 0, -2, -84],
                    [1536, 1536, 512, 512, 0, -2, -84],
                    [2048, 1536, 512, 512, 0, -2, -84],
                    [2560, 1536, 512, 512, 0, -2, -84],
                    [3072, 1536, 512, 512, 0, -2, -84],
                    [0, 2048, 512, 512, 0, -2, -84],
                    [512, 2048, 512, 512, 0, -2, -84]
                ],
                "animations":{
                    "right": {
                        "frames": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                        "speed": 1
                    },
                    "jump": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "speed": 1},
                    "puff": {
                        "frames": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                        "speed":1
                    }
                }
            };
            ssd.leaves = {
                "framerate":24,
                "images":[queue.getResult("leaves")],
                "frames":[
                    [0, 0, 512, 256, 0, -171, -78],
                    [512, 0, 512, 256, 0, -171, -78],
                    [1024, 0, 512, 256, 0, -171, -78],
                    [1536, 0, 512, 256, 0, -171, -78],
                    [2048, 0, 512, 256, 0, -171, -78],
                    [2560, 0, 512, 256, 0, -171, -78],
                    [3072, 0, 512, 256, 0, -171, -78],
                    [0, 256, 512, 256, 0, -171, -78],
                    [512, 256, 512, 256, 0, -171, -78],
                    [1024, 256, 512, 256, 0, -171, -78],
                    [1536, 256, 512, 256, 0, -171, -78],
                    [2048, 256, 512, 256, 0, -171, -78],
                    [2560, 256, 512, 256, 0, -171, -78],
                    [3072, 256, 512, 256, 0, -171, -78],
                    [0, 512, 512, 256, 0, -171, -78],
                    [512, 512, 512, 256, 0, -171, -78],
                    [1024, 512, 512, 256, 0, -171, -78],
                    [1536, 512, 512, 256, 0, -171, -78],
                    [2048, 512, 512, 256, 0, -171, -78],
                    [2560, 512, 512, 256, 0, -171, -78],
                    [3072, 512, 512, 256, 0, -171, -78],
                    [0, 768, 512, 256, 0, -171, -78],
                    [512, 768, 512, 256, 0, -171, -78],
                    [1024, 768, 512, 256, 0, -171, -78],
                    [1536, 768, 512, 256, 0, -171, -78],
                    [2048, 768, 512, 256, 0, -171, -78],
                    [2560, 768, 512, 256, 0, -171, -78],
                    [3072, 768, 512, 256, 0, -171, -78]
                ],
                "animations":{"cycle":[0,27]}
            };
            ssd.enemybirds = {
                 images: [queue.getResult("enemybirds")],
                "framerate":10,
                "frames":[
                    [0, 0, 512, 512, 0, 155,170],
                    [512, 0, 512, 512, 0, 155,170],
                    [1024, 0, 512, 512, 0, 155,170],
                    [1536, 0, 512, 512, 0, 155,170],
                    [2048, 0, 512, 512, 0, 155,170],
                    [2560, 0, 512, 512, 0, 155,170],
                    [3072, 0, 512, 512, 0, 155,170],
                    [0, 512, 512, 512, 0, 155,170],
                    [512, 512, 512, 512, 0, 155,170],
                    [1024, 512, 512, 512, 0, 155,170],
                    [1536, 512, 512, 512, 0, 155,170],
                    [2048, 512, 512, 512, 0, 155,170],
                    [2560, 512, 512, 512, 0, 155,170],
                    [3072, 512, 512, 512, 0, 155,170],
                    [0, 1024, 512, 512, 0, 155,170],
                    [512, 1024, 512, 512, 0, 155,170],
                    [1024, 1024, 512, 512, 0, 155,170],
                    [1536, 1024, 512, 512, 0, 155,170],
                    [2048, 1024, 512, 512, 0, 155,170],
                    [2560, 1024, 512, 512, 0, 155,170],
                    [3072, 1024, 512, 512, 0, 155,170]
                ],
                "animations":{
                    "chicken": {"speed": 1, "frames": [20]},
                    "falcon": {"speed": 1, "frames": [12, 13, 14, 15]},
                    "crow": {"speed": 1, "frames": [0, 1, 2, 3]},
                    "bat": {"speed": 1, "frames": [4, 5, 6, 7]},
                    "duck": {"speed": 1, "frames": [8, 9, 10, 11]},
                    "seagull": {"speed": 1, "frames": [18, 19]},
                    "glasses": {"speed": 1, "frames": [16, 17]}
                }
            };
            ssd.wind = {
                "framerate":24,
                "images":[queue.getResult("wind")],
                "frames":[
                    [0, 0, 64, 64, 0, 32, 32],
                    [64, 0, 64, 64, 0, 32, 32],
                    [128, 0, 64, 64, 0, 32, 32],
                    [192, 0, 64, 64, 0, 32, 32],
                    [256, 0, 64, 64, 0, 32, 32],
                    [320, 0, 64, 64, 0, 32, 32],
                    [384, 0, 64, 64, 0, 32, 32],
                    [448, 0, 64, 64, 0, 32, 32],
                    [512, 0, 64, 64, 0, 32, 32],
                    [576, 0, 64, 64, 0, 32, 32],
                    [640, 0, 64, 64, 0, 32, 32],
                    [704, 0, 64, 64, 0, 32, 32],
                    [768, 0, 64, 64, 0, 32, 32],
                    [832, 0, 64, 64, 0, 32, 32],
                    [896, 0, 64, 64, 0, 32, 32]
                ],
                "animations":{
                    "cycle": [0,14]
                }
            };
        };
        return ssd;
    })();

