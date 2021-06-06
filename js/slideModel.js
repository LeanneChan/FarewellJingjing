/* ================================
Week 6 Assignment: Slide Model
================================ */

$('#cardMap').click(function(e) {
	map.removeLayer(image2)
	// bounds = [[0,0], [2000,1200]]
	// L.imageOverlay('js/images/jj_card.png', bounds).addTo(map);
	// map.fitBounds(bounds);
	// map.setZoom(-1); 
	// myMarkers=makeMarkers(messages);
	plotMarkers(myMarkers)
});


$('#ewasteButton').click(function(e) {

 	
 	removeMarkers(myMarkers);
 	image2.addTo(map)
 	// map.removeLayer(image);
	// bounds = [[0,0], [1254, 904]]

	//map.fitBounds(bounds);
	//map.setZoom(3)
});




