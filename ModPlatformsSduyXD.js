(function () {
	var ready = function () {
	    ModPlatformsSduyXD.initCompatibilityChecks();

	/* Adds platforms to the game 	s	*/
		ModPlatformsSduyXD.addPlatformiPhone5s();
		ModPlatformsSduyXD.addPlatformiPhone4s();
	/*									*/
	};

	var error = function () {
	};

	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/ModPlatformsSduyXD/source/source.js',
	'mods/UltimateLib/UltimateLib.js'
	], ready, error);
})();