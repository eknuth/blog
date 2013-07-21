var images;


// var layer = mapbox.layer().id('eknuth.map-00suez4o');
var layer = mapbox.layer().id('eknuth.map-0na67qto');
var map = mapbox.map('map', layer, null, []);
// var layer = mapbox.layer().id('eknuth.map-56tlzhxg');
// var layer = new MM.TemplatedLayer('http://b.tile.stamen.com/watercolor/{Z}/{X}/{Y}.png')
map.addLayer(layer);
map.centerzoom({lat: 45.5, lon: -122.6 },8);

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
				map.ease.location({ lat: $slide.data('lat'), lon: $slide.data('lng') }).zoom($slide.data('zoom')).optimal();
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