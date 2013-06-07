var images;

var jsonFlickrFeed = function (results) {
	images = $.map(results.items, function (image) {
		return { 
			thumb: image.media.m,
			title: image.title,
			link: image.link,
			date: image.date_taken
		};
	});

	$(document).ready(function () {
		$('.thumbnail').each(function (i, thumbnail) {
			var $this = $(this);
			$this.find('h3').text(images[i].title);
			$this.find('img').attr('src', images[i].thumb);
			$this.find('a').attr('href', images[i].link);
			$this.find('time').text(new Date(images[i].date).toString('MM/d/yyyy'));
		});
	})
};