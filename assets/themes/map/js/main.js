var images;


var map = L.mapbox.map('map', 'eknuth.map-00suez4o')
	.setView([45.5, -122.6], 8);



var jsonFlickrFeed = function(results) {
	images = $.map(results.items, function(image) {
		console.log(image);
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

			},
			before: function(slider) {
				var $slide = $(slider.slides[slider.animatingTo]);
			}
		});
		$('.images').find('.thumbnail').each(function(i, thumbnail) {
			var $this = $(this);
			$this.find('h3').text(images[i].title);
			$this.find('img').attr('src', images[i].thumb);
			$this.find('a').attr('href', images[i].link);
			$this.find('time').text(new Date(images[i].date).toString('MM/d/yyyy'));
		});
	});
};