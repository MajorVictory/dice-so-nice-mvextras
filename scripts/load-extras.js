

// instructions on adding mroe can be foudn here:
// https://gitlab.com/riccisi/foundryvtt-dice-so-nice/-/tree/master#customization-api

Hooks.on('diceSoNiceReady', (dice3d) => {
	/**
	 * Add a texture to the list of textures and preload it
	 * @param {String} textureID 
	 * @param {Object} textureData 
	 * @returns {Promise}
	 */
	dice3d.addTexture("dragon", {
	    name: "Dragon Scales",
	    composite: "multiply",
	    source: "modules/dice-so-nice-extras/images/dragon.png"
	});

	dice3d.addTexture("lizard", {
	    name: "Lizard Skin",
	    composite: "multiply",
	    source: "modules/dice-so-nice-extras/images/lizard.png"
	});

	dice3d.addTexture("bird", {
	    name: "Bird Feathers",
	    composite: "multiply",
	    source: "modules/dice-so-nice-extras/images/feather.png"
	});

	dice3d.addTexture("bronze", {
	    name: "Bronze",
	    composite: "difference",
	    source: "modules/dice-so-nice-extras/images/bronze.png"
	});
});