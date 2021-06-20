/* ================================
Slide Model --> cannot remove original image with markers
================================ */

$('#cardMap').click(function(e) {
	map.removeLayer(image2);
	map.removeLayer(image3);
	map.removeLayer(cover);
	myMarkers.forEach(function(marker){marker.setRadius(0.1);});
	map.setView([1000,600], -1.75, { animation: true });        

	
});

$('#showMarkers').click(function(e) {
	myMarkers.forEach(function(marker){marker.setRadius(15);});
});

$('#hiddenMeanings').click(function(e) {
 	map.removeLayer(image3);
 	cover.addTo(map);

 	image2.addTo(map);
	
	map.setView([440, 300], 0.2, { animation: true }); 
});

$('#bookclub').click(function(e) {
 	map.removeLayer(image2);
 	cover.addTo(map);
 	image3.addTo(map);
	
	map.setView([1000,600], -1.5, { animation: true }); 
});




