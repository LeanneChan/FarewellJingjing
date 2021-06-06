/* ================================
Week 6 Assignment: Slide Model
================================ */

$('#cardMap').click(function(e) {

	map.removeLayer(image)
	
	bounds = [[0,0], [2000,1200]]
	image = L.imageOverlay('js/images/jj_card.png', bounds).addTo(map);

	map.fitBounds(bounds);
});


$('#ewasteButton').click(function(e) {
	// clear the current map
	// map.remove()
	// add a new image to map 

	// map = L.map('map', {
 //    crs: L.CRS.Simple,
 //    minZoom: -2
 //    });
 	map.removeLayer(image)
	bounds = [[0,0], [1254, 904]]
	image = L.imageOverlay('js/images/hidden_meanings.png', bounds).addTo(map);

	map.fitBounds(bounds);
});




