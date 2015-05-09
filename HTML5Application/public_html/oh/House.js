var House = (function(){
    var house = {
        house: null,
        bgHill: null,
        houseView: null,        
        crashRocket: null,
        hobo: null,
        timmy: null,
        priest: null,
        diamondHill: null,
        subtractedDiamond: null,
        subtractedDiamondCont:null,
        currentCharacter: "hoboCat",
        mouseHobo: null,
        mouseTimmy: null,
        mousePriest :null,
        mouseChar: {},
        mouseRocket: null,
        mouseCatz: null,
        catz: null,       
        cricketsSound: null,
        wick: null,
        oh: null,
        look: null,
        diamonds: null,
        diCont : null,
        lookingAtStarsButton: null,
        wickLight: null,
        wickClickBox: null,
        hoboCatHouse: null,
        rehab: null,
        orphanage: null,     
        university: null,
        diamondHouseCont: null,
        diamondHouseArray: [],
        characterSpeach: null,
        catzSpeach: null,
        hoboCatSound1: null,
        hoboCatSound2: null,
        catzSound1: null,
        catzSound2: null,                                      
        rsText : null,
        osText : null,
        usText : null,
        addOnTextOrphanage1 : null,
        addOnRehabText1 : null,
        addOnTextUniversity1: null,
        displayedScore : null,
        deltaOrph : 0,
        deltaRehab : 0,
        deltaUniversity : 0,
        bust : 0,  
        wickExclamation : null,
        characterExclamation : null,
        choiceIDs : [],
        choices : [],
        choice1 : null,
        choice2 : null,
        choice3 : null
    };
    
    var        
        deltaUniversity = 0,
        deltaOrph = 0,
        deltaRehab = 0,   
        startGameStats,                
        priestDialogNumber = 0,
        timmyDialogNumber = 0,
        hoboDialogNumber = "goodEvening",
        
        characterDialogNumber = {},
        gameStats,
        characterActive = {},        
        wickActive = false,
        hoboActive = true,
        timmyActive = false,
        priestActive = false,
        catzActive = false,
        hoboDialogID = 0,
        timmyDialogID = 0,
        priestDialogID = 0,
        characterdialogID =  [],
        currentCharacter = "hoboCat";
        
    house.init = function(){                
        house.houseView = new createjs.Container();
        characterActive = {"hoboCat":hoboActive, "timmy":timmyActive, "priest":priestActive, "catz":catzActive};        
        characterDialogNumber = {"hoboCat":hoboDialogNumber, "timmy":timmyDialogNumber, "priest":priestDialogNumber};
        characterdialogID = {"hoboCat": hoboDialogID, "timmy" : timmyDialogID, "priest" : priestDialogID};
    };
    
	function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name,"",-1);
	}
	
    house.gotoHouseView = function(aGameStats, diamondCounterText){        
        gameStats = aGameStats; 		
		var hs = readCookie(hsCookieName);
		var hsc = $('.score');		
		if(!hsc.html() && hs)
			hsc.html(hs);					
		
		if(!hs || hs < gameStats.score){
			hsc.html(gameStats.score);
			createCookie(hsCookieName, gameStats.score);
		}				
				
		$('.odometer').html(0);
        startGameStats = $.extend( true, {}, gameStats );
        house.hobo.alpha = 0;
        house.timmy.alpha = 0;
        house.priest.alpha = 0;
        house.displayedScore = gameStats.score;
        house.cricketsSound = createjs.Sound.play("crickets",{loop:-1});        
        house.cricketsSound.volume=0.1;                    
		var hobDiaNo = house.progressionCheck("hoboCat", gameStats);                           
            if(hobDiaNo !== -1) {
                currentCharacter = "hoboCat";
                house.hobo.alpha = 1;
                characterDialogNumber.hoboCat = hobDiaNo;           
                hoboActive = true;
                house.characterExclamation.alpha=0.5;            
                characterdialogID["hoboCat"] = 0;
            } 
            //If no hobo dialog, check for timmy dialog
            else {  
                var timmyDiaNo = house.progressionCheck("timmy", gameStats);
                if(timmyDiaNo !== -1) {
                    currentCharacter = "timmy";
                    house.timmy.alpha = 1;
                    characterDialogNumber.timmy = timmyDiaNo;
                    timmyActive = true;                
                    characterdialogID["timmy"] = 0;
                    house.characterExclamation.alpha=0.5;
                }
                //If no timmy dialog, cehck for priest dialog
                else {
                    var priestDiaNo = house.progressionCheck("priest", gameStats);
                    if(priestDiaNo !== -1) {
                        currentCharacter = "priest";
                        house.priest.alpha = 1;
                        characterDialogNumber.priest= priestDiaNo;
                        priestActive = true;
                        characterdialogID["priest"] = 0;
                        house.characterExclamation.alpha=0.5;
                    }

                    else {
                        house.hobo.alpha = 1;
                        currentCharacter = "hoboCat";
                        $("#mahCanvas").addClass("match-cursor");
                    }
                }
            }                        			
    };
    
    house.progressionCheck = function(cat, gameStats) {
        var catProgression = gameProgressionJSON[cat];
        for(var i=0, max1 = catProgression.length;i<max1;i++){                        
        conditionLoop:
            if(!catProgression[i].HasHappend || catProgression[i].ShouldReoccur && 
                catProgression[i].Chance>Math.random()){                                                
                for(var j=0, max2=catProgression[i].Conditions.length; j<max2; j++)       {
                    var condition = catProgression[i].Conditions[j];
                    if(condition.ConditionType === "Score"){                                        
                        if(condition.OperatorType === "LargerThan" && gameStats.score<=condition.Score)                                                    
							break conditionLoop;                                                    
                        else if(condition.OperatorType === "LessThan" && gameStats.score>=condition.Score)                                                    
							break conditionLoop;                                                    
                    }
                    else if(condition.ConditionType === "buildingState"){                     
                        if(condition.state === "builtOnRound" &&
						((gameStats[condition.building][condition.state] + condition.on)>=gameStats.currentRound))                            
						   break conditionLoop;                                                  
                        else if(gameStats[condition.building][condition.state] !== condition.on)                        
                            break conditionLoop;                        
                    }
                    
                    else if (condition.ConditionType === "state" && gameStats[condition.state] !== condition.on)                    
						break conditionLoop;
                                            
                    //If all conditions have been passed                    
                    if(j===catProgression[i].Conditions.length-1){       
                        currentCharacter = cat;
                        characterActive[currentCharacter] = true;
                        wickActive = false;                        
                        catProgression[i].HasHappend = "yes";
                        return catProgression[i].ConversationNumber;
                    }
                }
            }
        }
        return -1;
    };
    

    
    house.characterDialog = function(){             
        var dialog = dialogJSON[currentCharacter][characterDialogNumber[currentCharacter]];           
        if(dialog.dialog[characterdialogID[currentCharacter]]){
            if(dialog.dialog[characterdialogID[currentCharacter]].Triggers){                
                for(var i=0, max1=dialog.dialog[characterdialogID[currentCharacter]].Triggers.length; i<max1; i++){                    
                    var value = dialog.dialog[characterdialogID[currentCharacter]].Triggers[i].Value;
                    var stat = dialog.dialog[characterdialogID[currentCharacter]].Triggers[i].Stat;
                    
                    if(stat === "score")                    
                        gameStats.score += value;
                    else if (stat=== "kills")                    
                        gameStats.kills += value;                    
                    
                    else if (stat === "built"){
                        if(!gameStats.hasBeenFirst.houseWithSlots && (value === "rehab" || value === "orphanage")) {
                            setTimeout(function() { 
                                paused = true; 
                                setTimeout(function() { 
                                    paused = false; 
                                }, 1000);
                            }, 1000);
                            gameStats.hasBeenFirst.houseWithSlots = true;
                        }                        
                        gameStats[value].built = true;
                        gameStats[value].builtOnRound = gameStats.currentRound; 
                        if(value==="hoboCatHouse")                        
                            house.BuildingAnimation(house.hoboCatHouse);                        
                        else                        
                            house.BuildingAnimation(house.diamondHouseArray[value]);                        
                    }
                    
                    else if (stat === "addOn"){
                        var building = dialog.dialog[characterdialogID[currentCharacter]].Triggers[i].Building;
                        house.diamondHouseArray[building].gotoAndPlay(value);
                        gameStats[building][value]= true;                        
                        house.UpdateAddOnStat();
                    }
                    else                    
                        gameStats[dialog.dialog[characterdialogID[currentCharacter]].Triggers[i].Stat]= value;                                                                    
                }
            }
            
            if (dialog.dialog[characterdialogID[currentCharacter]].Who === "Catz") {
                house.catzSpeach.text = dialog.dialog[characterdialogID[currentCharacter]].What;            
                house.catzSpeach.alpha = 1;
                house.catzSound1.play();
            }
            else if (dialog.dialog[characterdialogID[currentCharacter]].Who === "Hobo-Cat") {
                house.characterSpeach.text = dialog.dialog[characterdialogID[currentCharacter]].What;
                house.characterSpeach.alpha = 1;
                house.hoboCatSound1.play();  
            }                             
            
            else if (dialog.dialog[characterdialogID[currentCharacter]].Who === "Timmy") {
                house.characterSpeach.text = dialog.dialog[characterdialogID[currentCharacter]].What;
                house.characterSpeach.alpha = 1;
                //Should be timmy sound
                house.hoboCatSound1.play();  
            }     
            
            else if (dialog.dialog[characterdialogID[currentCharacter]].Who === "Priest") {
                house.characterSpeach.text = dialog.dialog[characterdialogID[currentCharacter]].What;
                house.characterSpeach.alpha = 1;
                //Should be priest sound
                house.hoboCatSound1.play();  
            }
            
            if(dialog.dialog[characterdialogID[currentCharacter]].Choice) {                                                
                function addClickHandler(i){
                    house.choices[i].addEventListener("click",
                        function(){                             
                            characterdialogID[currentCharacter] = house.choiceIDs[i];                                                                                                
                            house.choice1.alpha = 0;
                            house.choice2.alpha = 0;
                            house.choice3.alpha = 0;
                            house.choices[0].removeAllEventListeners();
                            house.choices[1].removeAllEventListeners();
                            house.characterDialog();
                    }); 
                    house.choices[i].addEventListener("mouseover", function(){house.choices[i].alpha=1});
                    house.choices[i].addEventListener("mouseout", function(){house.choices[i].alpha=0.7});
                }
                for (var i=0, max1 = dialog.dialog[characterdialogID[currentCharacter]].Choices.length;i<max1;i++){                                                   
                    house.choices[i].text=dialog.dialog[characterdialogID[currentCharacter]].Choices[i].text;
                    house.choices[i].alpha = 0.7;
                    house.choiceIDs[i] = dialog.dialog[characterdialogID[currentCharacter]].Choices[i].ChoiceID;      
                    addClickHandler(i);                                           
                }                                                                     
            }
            else{                     
                if(!dialog.dialog[characterdialogID[currentCharacter]].End)
                    characterdialogID[currentCharacter] = dialog.dialog[characterdialogID[currentCharacter]].NextID;                                
                else
                {
                    //END DIALOG                    
                    setTimeout(function(){$("#mahCanvas").addClass("match-cursor");}, 500);                    
                    //house.wickExclamation.alpha=1; Replaced by match-cursor
                    characterActive[currentCharacter] = false;
                    house.characterExclamation.alpha = 0;                    
                    wickActive = true;
                                        
                    if(!createjs.Tween.hasActiveTweens(house.wickExclamation)){
                        createjs.Tween.removeAllTweens(house.wickExclamation);
                        createjs.Tween.get(house.wickExclamation).wait(4000).to({alpha:1},4000);
                    }
                    createjs.Tween.removeAllTweens(house.wick);
                    createjs.Tween.get(house.wick).to({x:-210},1200)
                            .call(house.activateWick);
                    //To shift to idle speach. Should be implemented smarter.
                    characterdialogID[currentCharacter]+=100;                
                }                
            }
        }        
        else{
            house.characterSpeach.text = dialog.idle.what;
            house.characterSpeach.alpha = 1;            
        }        
    };
    
    
    house.buildAnimationFinished = function(){
        createjs.Tween.removeAllTweens(house.houseView);
        house.houseView.x=0;
        house.houseView.y=0;
    };
    
    house.lightFuse = function(){        
        if(wickActive){
            createjs.Sound.play("wickSound");
            house.mouseRocket.alpha = 0;
            house.wickLight.alpha = 0;
            house.wick.gotoAndPlay("cycle");
            house.wickClickBox.removeAllEventListeners();   
            house.house.removeAllEventListeners();       
            house.wick.addEventListener("animationend",function(){$("#mahCanvas").removeClass("match-cursor");});
            house.wick.addEventListener("animationend",GameLogic.gotoGameView);
            house.catzSpeach.text ="";
            house.characterSpeach.text ="";            
        }
    };

    house.highlightCatz = function(){
        if(!createjs.Tween.hasActiveTweens(house.catz)){
            house.mouseCatz.alpha=1;   
            house.catz.x=360;
            house.catz.y=270; 
            house.catz.rotation = 0;                
			console.log(123);}
    }


    house.downlightCatz = function(){
        house.mouseCatz.alpha=0;
    }
    
    
    house.highlightCharacter = function(){                       
        $("#mahCanvas").addClass("talk-cursor");
        house.mouseChar[currentCharacter].alpha = 1;
        if(characterActive[currentCharacter] && currentCharacter!="catz")
        {
            house.characterExclamation.alpha = 1;
        }
    };
    
    house.downlightCharacter = function(){
        $("#mahCanvas").removeClass("talk-cursor");
        house.mouseChar[currentCharacter].alpha = 0;
        
        if(characterActive[currentCharacter])        
            house.characterExclamation.alpha=0.5;        
        else        
			house.characterExclamation.alpha=0;        
    };
    
    house.highlightRocket = function(){
        if(wickActive){
            house.mouseRocket.alpha = 1;
            house.wickLight.alpha = 0.7;
        }
    };
    
    house.downlightRocket = function(){
        house.mouseRocket.alpha = 0;
        house.wickLight.alpha = 0;
    };
    
    house.update = function(){               
        if(house.characterSpeach.alpha > 0){
            if(house.characterSpeach.alpha > 0.5)
                house.characterSpeach.alpha -= 0.005;            
            else            
                house.characterSpeach.alpha -= 0.03;            
        }
        
        if(house.catzSpeach.alpha > 0){
            if(house.catzSpeach.alpha >0.5)
                house.catzSpeach.alpha -= 0.005;            
            else 
                house.catzSpeach.alpha -= 0.03;                        
        }   
        if(characterActive[currentCharacter])
        {
            house.characterExclamation.alpha=0;  
        }
    };
    
    house.addCharacterEvents = function(diamondCounterText){        
        house.characterExclamation.alpha=0.5;
        house.hobo.addEventListener("click",(function(){house.characterDialog(diamondCounterText);}));
        house.hobo.addEventListener("mouseover", house.highlightCharacter);
        house.hobo.addEventListener("mouseout", house.downlightCharacter);
        
        house.timmy.addEventListener("click",(function(){house.characterDialog(diamondCounterText);}));
        house.timmy.addEventListener("mouseover", house.highlightCharacter);
        house.timmy.addEventListener("mouseout", house.downlightCharacter);
        
        house.priest.addEventListener("click",(function(){house.characterDialog(diamondCounterText);}));
        house.priest.addEventListener("mouseover", house.highlightCharacter);
        house.priest.addEventListener("mouseout", house.downlightCharacter);

        house.catz.addEventListener("click", house.meow);
        house.catz.addEventListener("mouseover", house.highlightCatz);
        house.catz.addEventListener("mouseout", house.downlightCatz);
    };        

    house.meow = function(){
        createjs.Sound.play("catzScream2");
        console.log("meow");
    }
    
    house.gotoHouseViewFirstTime = function(gameStats, stage, gameView,diamondCounterText, diamondShardCounter, muteButton, gameListener){        
        house.characterExclamation.alpha=0;        
        house.gotoHouseView(gameStats, diamondCounterText);
        $("#mahCanvas").removeClass("match-cursor");
        house.wick.x=-120;
        house.wickClickBox.removeAllEventListeners();
        house.house.removeAllEventListeners();
        house.wick.gotoAndPlay("still");
        stage.removeAllEventListeners();
        if(wickActive)        
            house.activateWick(gotoGameView);        
        house.hobo.x=-300;
        house.hobo.y=270;
        stage.removeChild(gameView,diamondCounterText, diamondShardCounter,muteButton);
        stage.addChild(house.houseView);
        stage.update();
        createjs.Ticker.setFPS(20);
        createjs.Ticker.off("tick", gameListener);        		
    };
    
    house.gotoHouseViewWithRocket = function(gameStats, diamondCounterText){                
        house.gotoHouseView(gameStats, diamondCounterText);
        if(CatzRocket.state===CatzRocket.catzStateEnum.OutOfFuelUpsideDown){
            house.crashRocket.x=315;
            house.crashRocket.y = -90;
        }
        else{
			house.crashRocket.x=315-400*Math.cos(CatzRocket.catzRocketContainer.rotation*6.28/360);
			house.crashRocket.y =310-400*Math.sin(CatzRocket.catzRocketContainer.rotation*6.28/360);
        }
		
        house.crashRocket.alpha=1;
        house.crashRocket.rotation=CatzRocket.catzRocketContainer.rotation;        
		
		createjs.Tween.get(house.crashRocket)
                .to({x:315, y:310},200)
                .wait(1500)
                .to({x:315, y:310, rotation:-30},800, createjs.Ease.quadIn); 
		
        house.catz.x = 360;
        house.catz.y = 370;
		
        createjs.Tween.get(house.catz)
                .wait(800)
                .to({x:390, y:350, rotation:10},250)
                .to({x:330, y:330, rotation:-10},250)
                .to({x:390, y:310, rotation:10},250)
                .to({x:330, y:290, rotation:-10},250)
                .to({x:360, y:270, rotation:0},250);
    };    
    
    house.gotoHouseViewWithoutRocket = function(gameStats, diamondCounterText){
        house.gotoHouseView(gameStats, diamondCounterText);
        house.catz.x=300-400*Math.cos(CatzRocket.catzRocketContainer.rotation*6.28/360);
        house.catz.y =370-400*Math.sin(CatzRocket.catzRocketContainer.rotation*6.28/360);
        house.catz.gotoAndPlay("flying");
        house.catz.rotation=CatzRocket.catzRocketContainer.rotation+90;
        createjs.Tween.get(house.catz)
                .to({x:300, y:370},200)
                .call(house.catz.gotoAndPlay,["cycle"])
                .wait(800)
                .to({x:390, y:350, rotation:10},250)
                .to({x:330, y:330, rotation:-10},250)
                .to({x:390, y:310, rotation:10},250)
                .to({x:330, y:290, rotation:-10},250)
                .to({x:360, y:270, rotation:0},250);
        house.crashRocket.alpha=1;
        house.crashRocket.x=315;
        house.crashRocket.y=910;
        house.crashRocket.rotation=-90;
        createjs.Tween.get(house.crashRocket)
                .wait(1200)
                .to({x:315, y:310},500)
                .to({x:315, y:310, rotation:-30},800, createjs.Ease.quadIn);
    };           
    
    house.activateWick = function(){   
        house.wickClickBox.addEventListener("click",(function(){ house.lightFuse();}));
        house.wickClickBox.addEventListener("mouseover", house.highlightRocket);
        house.wickClickBox.addEventListener("mouseout", house.downlightRocket);
        house.house.addEventListener("click",(function(){house.lightFuse();}));
        house.house.addEventListener("mouseover", house.highlightRocket);
        house.house.addEventListener("mouseout", house.downlightRocket);                                
    };               
    
    house.BuildingAnimation = function(houseGraphic){
        houseGraphic.alpha=1;
        var oldx = houseGraphic.x;
        var oldy = houseGraphic.y;        
        createjs.Tween.get(houseGraphic)
                .to({x:oldx-20,y:oldy+50})
                .to({x:oldx,y:oldy},2000)
                .call(house.buildAnimationFinished);
        createjs.Tween.get(house.houseView, {loop:true})
            .to({x:-5, y:5},50)
            .to({x:5, y:-5},50);
    };                             
    	
    return house;
}());