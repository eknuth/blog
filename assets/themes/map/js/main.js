var images;


var map = L.mapbox.map('map', 'eknuth.map-00suez4o', { 
	zoomControl: false, 
	animate: true,
	keyboard: false
}).setView([45.5, -122.6], 8);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

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
			start: function(slider) {
				var $slide = $(slider.slides[slider.animatingTo]);
			},
			before: function(slider) {
				var $slide = $(slider.slides[slider.animatingTo]);
				console.log([$slide.data('lat'), $slide.data('lng')], $slide.data('zoom'));
				map.setView([$slide.data('lat'), $slide.data('lng')], $slide.data('zoom'));
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