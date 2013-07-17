---
layout: post
title: "Google FastButtons Implemented as a knockout.js Custom Binding"
description: "knockout.js ustom binding for mobile click events to eliminate webkits 300ms delay with Google's FastButton"
category: 
tags: ['javascript', 'knockout.js']
toc-img: mobile.png
---
{% include JB/setup %}
##Preventing the 300ms Delay in Mobile Javascript Apps
One of the complaints with developing mobile apps in html and javascript is that they are not as responsive as native apps.  Some of that is related to the way webkit handles click events on touch devices.  The browser delays for 300ms to be sure you aren't double tapping.

There are several options for removing the delay, including Max Ogden's [masseuse.js](https://github.com/maxogden/masseuse.js), which aims to be a more complete add in for handing mobile events.

Another popular option is to implement [Google's Fast Button](https://developers.google.com/mobile/articles/fast_buttons) code.  In order to use Fast Buttons with knockout.js, we can easily encapsulate the behavior in a custom binding for use in all mobile apps that use the [powerful MVVM framework](http://knockoutjs.com).

If you click the buttons on a mobile device you will see that there is a noticeable delay with the first button and an instant result with the fast click version.  Every third of second counts when making a responsive app.

<div class="row-fluid">
	<div class="span6">
		<h3>Regular Click</h3>
		<dl>
			<dt>button</dt>
			<dd>
				<button class="btn" data-bind="click: handleClick">click</button>
			</dd>
			<dt>result</dt>
			<dd><span data-bind="text: clickResult">Waiting for click...</span></dd>
		</dl>
	</div>
	<div class="span6">
		<h3>Google FastButton Click</h3>
		<dl>
			<dt>button</dt>
			<dd>
				<button class="btn" data-bind="fastClick: handleFastClick">fastClick</button>
			</dd>
			<dt>result</dt>
			<dd><span data-bind="text: fastClickResult">Waiting for click...</span></dd>
		</dl>
	</div>
</div>

The [fastButtons implementation](https://github.com/alexblack/google-fastbutton) is by Alex Black and here is the html and knockout custom binding.


<script src="https://gist.github.com/3202211.js?file=markup.html"> </script>

<script src="https://gist.github.com/3202211.js?file=ko.fastclick.js"> </script>

And here is the view model initializaiton.
<script src="https://gist.github.com/3202211.js?file=app.js"> </script>

<script src="https://raw.github.com/alexblack/google-fastbutton/master/google.fastbutton.js"> </script>

<script src="https://raw.github.com/SteveSanderson/knockout/master/build/output/knockout-latest.js"> </script>
<script src="https://gist.github.com/raw/3202211/03c301ad89987463efd954be885beff081a903e6/ko.fastclick.js"> </script>
<script src="https://gist.github.com/raw/3202211/6c7b196a327932637b34af2aeced950c5a90a9c1/app.js"> </script>