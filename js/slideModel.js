/* ================================
Slide Model --> cannot remove original image with markers
================================ */

$('#cardMap').click(function(e) {
	map.removeLayer(image2);
	map.removeLayer(image3);
	map.removeLayer(cover);

	map.setView([1000,600], -1.75, { animation: true });        

	
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




