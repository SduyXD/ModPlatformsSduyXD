var ModPlatformsSduyXD = {};
(function () {
	/* Compatibility check */
	var compatibilityCheck = function(data){
		for (var i = 0; i < ModSupport.availableMods.length; i++) {
			var mod = ModSupport.availableMods[i];
			if(mod.url == "https://github.com/Turntablelover/Game-Dev-Tycoon-Mod" && mod.active){
				var div = $("body");
				div.append('<div id="ErrorContainer" class="windowBorder smallWindow" style="overflow:auto;display:none;"> <div id="cheatmodtop" class="windowTitle smallerWindowTitle">Compatibility Problem</div>');
				div = $("#ErrorContainer");
				div.append('<div id="error" style="margin-left:50px;width: 400px;" >ModPlatformsSduyXD is <span style="color:red;">NOT</span> compatible with VENOMOUS mod.</br></br> To continue using ModPlatformsSduyXD Please disable VENOMOUS mod in the mods menu and restart your Game Dev Tycoon</div>');
				div.append('<div id="mainmenubutton" class="selectorButton whiteButton" onclick="UI.toggleMainMenu()" style="display:inline-block;position: relative;margin-left:50px;width: 350px;" >Main Menu</div>');
				div.gdDialog({popout: !0,close: 0});
			}
		}
	};

	ExpPack.initCompatibilityChecks = function(){
		if(GDT.compatibilityCheckActive == 'undefined' || GDT.compatibilityCheckActive == null){
			GDT.on(GDT.eventKeys.saves.loading, compatibilityCheck);
			GDT.on(GDT.eventKeys.saves.saving, compatibilityCheck);
			GDT.compatibilityCheckActive = true;
		}
	};
	/*  */

	/* Platforms */

	/* Grapple */

    ModPlatformsSduyXD.addPlatformiPhone5s = function () {
		var icon = './mods/ModPlatformsSduyXD/source/img/iPhone5s.png';
		GDT.addPlatform(
			{
				id: 'iPhone5s',
				name: 'iPhone5s',
				company: 'Grapple',
				startAmount: 0.1234,
				unitsSold: 0.123456,
				marketKeyPoints: [{date: "1/1/1",amount: 0.215}, {date: "1/1/2",amount: 0.478}, {date: "1/1/3",amount: 0.738}],
				licencePrize: 20000,
		        published : '1/1/1',
	            platformRetireDate : '100/10/2',
				developmentCosts: 25000,
				genreWeightings: [1, 0.8, 0.9, 1, 1, 0.7],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 9,
				iconUri: icon,
				events: [
					{
						id: '12111996-0000-0000-0100-DZJENGISKHAN',
					    published : '1/1/1',
					    getNotification: function (company) {
 						    return new Notification({
								header: "Industry News".localize(),
								text: "Today, Grapple a new hardware manufacturer has announced a brand new phone called iPhone5s. The iPhone5s comes with a new advanced operating system called Grap OS. Even though the new platform is a bit expensive, you get value for your money. Grapple said that the iPhone5s will become available {0}".localize().format(General.getETADescription('1/1/1', '1000/7/4')),
								image: icon
							});
						}
					}
				]
			});
	};

	ModPlatformsSduyXD.addPlatformiPhone4s = function () {
    	var icon = './mods/ModPlatformsSduyXD/source/img/iPhone4s.png';
		GDT.addPlatform(
			{
				id: 'iPhone4s',
				name: 'iPhone4s',
				company: 'Grapple',
				startAmount: 0.1234,
				unitsSold: 0.123456,
				marketKeyPoints: [{date: "1/1/1",amount: 0.215}, {date: "1/1/2",amount: 0.478}, {date: "1/1/3",amount: 0.738}],
				licencePrize: 20000,
		        published : '1/1/1',
	            platformRetireDate : '100/10/2',
				developmentCosts: 13000,
				genreWeightings: [1, 0.8, 0.9, 1, 1, 0.7],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 9,
				iconUri: icon,
				events: [
					{
						id: '12111996-0000-0000-0100-DZJENGISKHAN',
					    published : '1/1/1',
					    getNotification: function (company) {
 						    return new Notification({
								header: "Industry News".localize(),
								text: "Today, Grapple a new hardware manufacturer has announced a brand new phone called iPhone4s. The iPhone4s comes with a new advanced operating system called IOS. Even though the new platform is a bit expensive, you get value for your money. Grapple said that the iPhone4s will become available {0}".localize().format(General.getETADescription('1/1/1', '1000/7/4')),
								image: icon
							});
						}
					}
				]
			});
	};
	/*  */
})();
