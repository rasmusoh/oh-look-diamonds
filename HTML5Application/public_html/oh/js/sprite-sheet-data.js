SpriteSheetData = (function()
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
                            [0, 0, 256, 256, 0, 128,128],
                            [256, 0, 256, 256, 0, 128,128],
                            [512, 0, 256, 256, 0, 128,128],
                            [768, 0, 256, 256, 0, 128,128],
                            [1024, 0, 256, 256, 0, 128,128],
                            [1280, 0, 256, 256, 0, 128,128],
                            [1536, 0, 256, 256, 0, 128,128],
                            [0, 256, 256, 256, 0, 128,128],
                            [256, 256, 256, 256, 0, 128,128],
                            [512, 256, 256, 256, 0, 128,128],
                            [768, 256, 256, 256, 0, 128,128],
                            [1024, 256, 256, 256, 0, 128,128],
                            [1280, 256, 256, 256, 0, 128,128],
                            [1536, 256, 256, 256, 0, 128,128],
                            [0, 512, 256, 256, 0, 128,128],
                            [256, 512, 256, 256, 0, 128,128],
                            [512, 512, 256, 256, 0, 128,128],
                            [768, 512, 256, 256, 0, 128,128],
                            [1024, 512, 256, 256, 0, 128,128],
                            [1280, 512, 256, 256, 0, 128,128],
                            [1536, 512, 256, 256, 0, 128,128],
                            [0, 768, 256, 256, 0, 128,128],
                            [256, 768, 256, 256, 0, 128,128],
                            [512, 768, 256, 256, 0, 128,128],
                            [768, 768, 256, 256, 0, 128,128],
                            [1024, 768, 256, 256, 0, 128,128],
                            [1280, 768, 256, 256, 0, 128,128],
                            [1536, 768, 256, 256, 0, 128,128],
                            [0, 1024, 256, 256, 0, 128,128],
                            [256, 1024, 256, 256, 0, 128,128],
                            [512, 1024, 256, 256, 0, 128,128],
                            [768, 1024, 256, 256, 0, 128,128],
                            [1024, 1024, 256, 256, 0, 128,128],
                            [1280, 1024, 256, 256, 0, 128,128],
                            [1536, 1024, 256, 256, 0, 128,128],
                            [0, 1280, 256, 256, 0, 128,128],
                            [256, 1280, 256, 256, 0, 128,128],
                            [512, 1280, 256, 256, 0, 128,128],
                            [768, 1280, 256, 256, 0, 128,128],
                            [1024, 1280, 256, 256, 0, 128,128],
                            [1280, 1280, 256, 256, 0, 128,128],
                            [1536, 1280, 256, 256, 0, 128,128],
                            [0, 1536, 256, 256, 0, 128,128],
                            [256, 1536, 256, 256, 0, 128,128],
                            [512, 1536, 256, 256, 0, 128,128],
                            [768, 1536, 256, 256, 0, 128,128],
                            [1024, 1536, 256, 256, 0, 128,128],
                            [1280, 1536, 256, 256, 0, 128,128],
                            [1536, 1536, 256, 256, 0, 128,128],
                            [0, 1792, 256, 256, 0, 128,128]
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
            
            ssd.match = {
                "framerate":8,
                "images":[queue.getResult("match")],
                "frames":[
                    [0, 0, 64, 64, 0, -17, -7],
                    [64, 0, 64, 64, 0, -17, -7],
                    [128, 0, 64, 64, 0, -17, -7],
                    [192, 0, 64, 64, 0, -17, -7]
                ],
                "animations":{
                    "cycle":[0,3]
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
                    [768, 0, 128, 128, 0, 0, 0],
                    [896, 0, 128, 128, 0, 0, 0],
                    [1024, 0, 128, 128, 0, 0, 0],
                    [1152, 0, 128, 128, 0, 0, 0]
                ],
                "animations":{
                    "rocketUniversity": {"speed": 1, "frames": [9]},
                    "youthCenter": {"speed": 1, "frames": [2]},
                    "hoboHouse": {"speed": 1, "frames": [0]},
                    "monastery": {"speed": 1, "frames": [7]},
                    "phychiatricWing": {"speed": 1, "frames": [6]},
                    "catnip treatment facility": {"speed": 1, "frames": [4]},
                    "university": {"speed": 1, "frames": [8]},
                    "orphanage": {"speed": 1, "frames": [1]},
                    "hospital": {"speed": 1, "frames": [5]},
                    "summerCamp": {"speed": 1, "frames": [3]}
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
            ssd.supportingCharacter = {
            "framerate":24,
            "images":[queue.getResult("supportingCharacter")],
            "frames":[
                [0, 0, 128, 256, 0, 0, 0],
                [128, 0, 128, 256, 0, 0, 0],
                [256, 0, 128, 256, 0, 0, 0],
                [384, 0, 128, 256, 0, 0, 0],
                [512, 0, 128, 256, 0, 0, 0],
                [640, 0, 128, 256, 0, 0, 0],
                [768, 0, 128, 256, 0, 0, 0],
                [896, 0, 128, 256, 0, 0, 0],
                [1024, 0, 128, 256, 0, 0, 0],
                [1152, 0, 128, 256, 0, 0, 0],
                [1280, 0, 128, 256, 0, 0, 0],
                [1408, 0, 128, 256, 0, 0, 0],
                [1536, 0, 128, 256, 0, 0, 0],
                [1664, 0, 128, 256, 0, 0, 0],
                [1792, 0, 128, 256, 0, 0, 0],
                [0, 256, 128, 256, 0, 0, 0],
                [128, 256, 128, 256, 0, 0, 0],
                [256, 256, 128, 256, 0, 0, 0],
                [384, 256, 128, 256, 0, 0, 0],
                [512, 256, 128, 256, 0, 0, 0],
                [640, 256, 128, 256, 0, 0, 0],
                [768, 256, 128, 256, 0, 0, 0],
                [896, 256, 128, 256, 0, 0, 0],
                [1024, 256, 128, 256, 0, 0, 0],
                [1152, 256, 128, 256, 0, 0, 0],
                [1280, 256, 128, 256, 0, 0, 0],
                [1408, 256, 128, 256, 0, 0, 0],
                [1536, 256, 128, 256, 0, 0, 0],
                [1664, 256, 128, 256, 0, 0, 0],
                [1792, 256, 128, 256, 0, 0, 0],
                [0, 512, 128, 256, 0, 0, 0],
                [128, 512, 128, 256, 0, 0, 0],
                [256, 512, 128, 256, 0, 0, 0],
                [384, 512, 128, 256, 0, 0, 0],
                [512, 512, 128, 256, 0, 0, 0],
                [640, 512, 128, 256, 0, 0, 0],
                [768, 512, 128, 256, 0, 0, 0],
                [896, 512, 128, 256, 0, 0, 0],
                [1024, 512, 128, 256, 0, 0, 0],
                [1152, 512, 128, 256, 0, 0, 0],
                [1280, 512, 128, 256, 0, 0, 0],
                [1408, 512, 128, 256, 0, 0, 0],
                [1536, 512, 128, 256, 0, 0, 0],
                [1664, 512, 128, 256, 0, 0, 0],
                [1792, 512, 128, 256, 0, 0, 0]
            ],
            "animations":{
                "cat party": {
                    "frames": [14,15,16,17,
                        18,19,20,21,22,23,24,25,26,27,28,29],
                    "speed": 1
                },
                "timmy": {
                    "frames": [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                    "speed": 1
                },
                "priest": {
                    "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    "speed": 1
                }
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
            
            ssd.onlookers ={
                "framerate":5,
                "images":[queue.getResult("onlookers")],
                "frames":[
                    [0, 0, 256, 128, 0, 0, -1],
                    [256, 0, 256, 128, 0, 0, -1],
                    [512, 0, 256, 128, 0, 0, -1],
                    [768, 0, 256, 128, 0, 0, -1],
                    [1024, 0, 256, 128, 0, 0, -1],
                    [1280, 0, 256, 128, 0, 0, -1],
                    [1536, 0, 256, 128, 0, 0, -1],
                    [0, 128, 256, 128, 0, 0, -1],
                    [256, 128, 256, 128, 0, 0, -1],
                    [512, 128, 256, 128, 0, 0, -1],
                    [768, 128, 256, 128, 0, 0, -1],
                    [1024, 128, 256, 128, 0, 0, -1]
                ],
                "animations":{
                    "angry mob": {"speed": 1, "frames": [3, 4, 5]},
                    "orphans": {"speed": 1, "frames": [9, 10, 11]},
                    "loving mob": {"speed": 1, "frames": [6, 7, 8]},
                    "cat party": {"speed": 1, "frames": [0, 1, 2]}
                }
            };

            ssd.diamond = {
                "framerate":24,
                "images":[queue.getResult("diamond")],
                "frames":[
                    [0, 0, 128, 128, 0, 64,64],
                    [128, 0, 128, 128, 0, 64,64],
                    [256, 0, 128, 128, 0, 64,64],
                    [384, 0, 128, 128, 0, 64,64],
                    [512, 0, 128, 128, 0, 64,64],
                    [640, 0, 128, 128, 0, 64,64],
                    [768, 0, 128, 128, 0, 64,64],
                    [896, 0, 128, 128, 0, 64,64],
                    [1024, 0, 128, 128, 0, 64,64],
                    [1152, 0, 128, 128, 0, 64,64],
                    [1280, 0, 128, 128, 0, 64,64],
                    [1408, 0, 128, 128, 0, 64,64],
                    [1536, 0, 128, 128, 0, 64,64],
                    [1664, 0, 128, 128, 0, 64,64],
                    [1792, 0, 128, 128, 0, 64,64],
                    [0, 128, 128, 128, 0, 64,64],
                    [128, 128, 128, 128, 0, 64,64],
                    [256, 128, 128, 128, 0, 64,64],
                    [384, 128, 128, 128, 0, 64,64],
                    [512, 128, 128, 128, 0, 64,64],
                    [640, 128, 128, 128, 0, 64,64],
                    [768, 128, 128, 128, 0, 64,64],
                    [896, 128, 128, 128, 0, 64,64],
                    [1024, 128, 128, 128, 0, 64,64],
                    [1152, 128, 128, 128, 0, 64,64]
                ],
                "animations":{"cycle": [0,24]}
            };            
            
            ssd.greatDiamond = {
                "framerate":24,
                "images":[queue.getResult("greatDiamond")],
                "frames":[
                    [0, 0, 128, 128, 0, 75,64],
                    [128, 0, 128, 128, 0, 75,64],
                    [256, 0, 128, 128, 0, 75,64],
                    [384, 0, 128, 128, 0, 75,64],
                    [512, 0, 128, 128, 0, 75,64],
                    [640, 0, 128, 128, 0, 75,64],
                    [768, 0, 128, 128, 0, 75,64],
                    [896, 0, 128, 128, 0, 75,64],
                    [1024, 0, 128, 128, 0, 75,64],
                    [1152, 0, 128, 128, 0, 75,64],
                    [1280, 0, 128, 128, 0, 75,64],
                    [1408, 0, 128, 128, 0, 75,64],
                    [1536, 0, 128, 128, 0, 75,64],
                    [1664, 0, 128, 128, 0, 75,64],
                    [1792, 0, 128, 128, 0, 75,64],
                    [0, 128, 128, 128, 0, 75,64],
                    [128, 128, 128, 128, 0, 75,64],
                    [256, 128, 128, 128, 0, 75,64],
                    [384, 128, 128, 128, 0, 75,64],
                    [512, 128, 128, 128, 0, 75,64],
                    [640, 128, 128, 128, 0, 75,64],
                    [768, 128, 128, 128, 0, 75,64],
                    [896, 128, 128, 128, 0, 75,64],
                    [1024, 128, 128, 128, 0, 75,64],
                    [1152, 128, 128, 128, 0, 75,64]
                ],
                "animations":{"greatCycle": [0,24]}
            };
            
            ssd.hudGlass = {
                "framerate":24,
                "images":[queue.getResult("hudGlass")],
                "frames":[[0, 0, 128, 128, 0, -196, -14],
                        [128, 0, 128, 128, 0, -196, -14],
                        [256, 0, 128, 64, 0, -196, -14]],
                "animations":{
                    "still":[0],
                    "frenzy":[0,1], 
                    "outOfFuel":{
                        frames:[2],
                        speed: 0.3,
                        next:  "still"
                    }
                }
            };
            
            ssd.rocket = {
                "framerate":24,
                "images":[queue.getResult("rocketCatz")],
                "frames":[
                            [0, 0, 256, 128, 0, 0,-68],
                            [256, 0, 256, 128, 0, 0,-68],
                            [512, 0, 256, 128, 0, 0,-68],
                            [768, 0, 256, 128, 0, 0,-68],
                            [1024, 0, 256, 128, 0, 0,-68],
                            [1280, 0, 256, 128, 0, 0,-68],
                            [1536, 0, 256, 128, 0, 0,-68],
                            [0, 128, 256, 128, 0, 0,-68],
                            [256, 128, 256, 128, 0, 0,-68],
                            [512, 128, 256, 128, 0, 0,-68],
                            [768, 128, 256, 128, 0, 0,-68],
                            [1024, 128, 256, 128, 0, 0,-68],
                            [1280, 128, 256, 128, 0, 0,-68],
                            [1536, 128, 256, 128, 0, 0,-68],
                            [0, 256, 256, 128, 0, 0,-68],
                            [256, 256, 256, 128, 0, 0,-68],
                            [512, 256, 256, 128, 0, 0,-68],
                            [768, 256, 256, 128, 0, 0,-68],
                            [1024, 256, 256, 128, 0, 0,-68],
                            [1280, 256, 256, 128, 0, 0,-68],
                            [1536, 256, 256, 128, 0, 0,-68],
                            [0, 384, 256, 128, 0, -75,-68],
                            [256, 384, 256, 128, 0, -75,-68],
                            [512, 384, 256, 128, 0, -75,-68],
                            [768, 384, 256, 128, 0, -75,-68],
                            [1024, 384, 256, 128, 0, -75,-68],
                            [1280, 384, 256, 128, 0, -75,-68],
                            [1536, 384, 256, 128, 0, -75,-68],
                            [0, 512, 256, 128, 0, -75,-68],
                            [256, 512, 256, 128, 0, 0,-68],
                            [512, 512, 256, 128, 0, 0,-68],
                            [768, 512, 256, 128, 0, 0,-68],
                            [1024, 512, 256, 128, 0, 0,-68]
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
                        [1152, 128, 128, 128, 0, 64, 64],
                        [1280, 128, 128, 128, 0, 64, 64],
                        [1408, 128, 128, 128, 0, 64, 64],
                        [1536, 128, 128, 128, 0, 64, 64],
                        [1664, 128, 128, 128, 0, 64, 64],
                        [1792, 128, 128, 128, 0, 64, 64],
                        [0, 256, 128, 128, 0, 64, 64],
                        [128, 256, 128, 128, 0, 64, 64],
                        [256, 256, 128, 128, 0, 64, 64],
                        [384, 256, 128, 128, 0, 64, 64],
                        [512, 256, 128, 128, 0, 64, 64],
                        [640, 256, 128, 128, 0, 64, 64]
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
                    [0, 0, 256, 256, 0, -83, -164],
                    [256, 0, 256, 256, 0, -83, -164],
                    [512, 0, 256, 256, 0, -83, -164],
                    [768, 0, 256, 256, 0, -83, -164],
                    [1024, 0, 256, 256, 0, -83, -164],
                    [1280, 0, 256, 256, 0, -83, -164],
                    [1536, 0, 256, 256, 0, -83, -164],
                    [0, 256, 256, 256, 0, -83, -164],
                    [256, 256, 256, 256, 0, -83, -164],
                    [512, 256, 256, 256, 0, -83, -164],
                    [768, 256, 256, 256, 0, -83, -164],
                    [1024, 256, 256, 256, 0, -83, -164],
                    [1280, 256, 256, 256, 0, -83, -164],
                    [1536, 256, 256, 256, 0, -83, -164],
                    [0, 512, 256, 256, 0, -83, -164],
                    [256, 512, 256, 256, 0, -83, -164],
                    [512, 512, 256, 256, 0, -83, -164],
                    [768, 512, 256, 256, 0, -83, -164],
                    [1024, 512, 256, 256, 0, -83, -164],
                    [1280, 512, 256, 256, 0, -83, -164]
                ],
                "animations":{
                    "right": {
                        "frames": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                        "speed": 1
                    },
                    "jump": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "speed": 1},
                    }
            };
            ssd.leaves = {
                "framerate":24,
                "images":[queue.getResult("leaves")],
                "frames":[
                    [0, 0, 256, 128, 0, 0,0],
                    [256, 0, 256, 128, 0, 0,0],
                    [512, 0, 256, 128, 0, 0,0],
                    [768, 0, 256, 128, 0, 0,0],
                    [1024, 0, 256, 128, 0, 0,0],
                    [1280, 0, 256, 128, 0, 0,0],
                    [1536, 0, 256, 128, 0, 0,0],
                    [0, 128, 256, 128, 0, 0,0],
                    [256, 128, 256, 128, 0, 0,0],
                    [512, 128, 256, 128, 0, 0,0],
                    [768, 128, 256, 128, 0, 0,0],
                    [1024, 128, 256, 128, 0, 0,0],
                    [1280, 128, 256, 128, 0, 0,0],
                    [1536, 128, 256, 128, 0, 0,0],
                    [0, 256, 256, 128, 0, 0,0],
                    [256, 256, 256, 128, 0, 0,0],
                    [512, 256, 256, 128, 0, 0,0],
                    [768, 256, 256, 128, 0, 0,0],
                    [1024, 256, 256, 128, 0, 0,0],
                    [1280, 256, 256, 128, 0, 0,0],
                    [1536, 256, 256, 128, 0, 0,0],
                    [0, 384, 256, 128, 0, 0,0],
                    [256, 384, 256, 128, 0, 0,0],
                    [512, 384, 256, 128, 0, 0,0],
                    [768, 384, 256, 128, 0, 0,0],
                    [1024, 384, 256, 128, 0, 0,0],
                    [1280, 384, 256, 128, 0, 0,0],
                    [1536, 384, 256, 128, 0, 0,0]
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
                "images":[queue.getResult("windSwirls")],
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

