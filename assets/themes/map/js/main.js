---
---
var images;


// var layer = mapbox.layer().id('eknuth.map-00suez4o');

var layer, retina = window.devicePixelRatio >= 2;
if (retina) {
    // Retina tiles are sized 1/2 of normal tiles for twice the pixel
    // density
    map.tileSize = { x: 128, y: 128 };
    // use a retina tileset
    layer = mapbox.layer().id('eknuth.map-bm4l8vlb');
} else {
    // use a standard tileset
    // layer = mapbox.layer().id('eknuth.map-00suez4o');
    layer = mapbox.layer().id('eknuth.map-0na67qto');
}
var map = mapbox.map('map', layer, null, []);
// var layer = mapbox.layer().id('eknuth.map-56tlzhxg');
// var layer = new MM.TemplatedLayer('http://b.tile.stamen.com/watercolor/{Z}/{X}/{Y}.png')
map.addLayer(layer);
// map.centerzoom({lat: 45.5, lon: -122.6 },3);
map.centerzoom({lat: 0, lon: 0 },3);
 map.ui.zoomer.add();
var markers = mapbox.markers.layer().url( app.basePath + '/assets/data/places.geojson');
map.addLayer(markers);
var jsonFlickrFeed = function(results) {
	images = $.map(results.items, function(image) {
		return {
			thumb: image.media.m,
			title: image.title,
			link: image.link,
			date: image.published
		};
	});

	$(document).ready(function() {
		$('.flexslider').flexslider({
			slideshowSpeed: 10000,
			start: function(slider) {
				var $slide = $(slider.slides[slider.animatingTo]);
				map.ease.location({ lat: $slide.data('lat'), lon: $slide.data('lng') }).zoom($slide.data('zoom')).optimal();
				$slide.find('.hidden').removeClass('hidden');
			},
			before: function(slider) {
				var $slide = $(slider.slides[slider.animatingTo]);
				map.ease.location({ lat: $slide.data('lat'), lon: $slide.data('lng') }).zoom($slide.data('zoom')).optimal();
				$slide.find('.hidden').removeClass('hidden');
			}
		});
		$('.portfolio').find('.box').each(function(i, thumbnail) {
			var $this = $(this);
			$this.find('h3').text(images[i].title);
			$this.find('img').attr('src', images[i].thumb);
			$this.find('a').attr('href', images[i].thumb.replace('_m.jpg', '_b.jpg'));
			$this.find('time').text(new Date(images[i].date).toString('MM/d/yyyy'));
		});
	});
};