---
layout: post
title: "Tweaks for Making Mobile Web Apps Behave More Like Native Apps"
description: ""
category: 
tags: ["mobile", "javascript"]
---
{% include JB/setup %}
##Transitioning a Web App to a Mobile Device
Assuming you've built and deployed your phonegap or trigger.io wrapped web app to a mobile device, you might be in for a rude surprise.

Most likely the app will look competely out of whack.  The page will zoom oddly, events won't fire correctly and you'll get weird haloes and zooming when you tap the page.  Don't despair, these quirks can all be ironed out.

##Responsive Markup for Height and Orientation
Even if you are are using a responsive layout like twitter bootstrap or zurb foundation, the layout will need some tweaking.  Those design frameworks also tend to handle the width of a device, but leave the height up to the content.  For a mobile app you'll need to add media queries and set the height of our containers.  There are also media queries for orientation, so you can size things differently for portrait versus landscape.

You should be able to handle all of that at the css level with a single html document. If you are creating different markup for landscape and portrait, you might need to rethink your approach.

If this is too much for you, please hire a skilled technical designer like [Nathan Cooper](https://plus.google.com/106338328001052020479/about).

##Click Events are too Slow
The next thing you might notice is that click events take too long to register.  Some people give up at this point and say that javascript on mobile devices is just too slow.  A little research will turn up the fact that webkit on mobile devices delays a click event for 300ms to be sure the user isn't trying to double tap.

In a [previous post](http://www.iknuth.com/2012/07/google-fastbuttons-implemented-as-a-knockoutjs-custom-binding/), I wrote about a knockout.js specific fix.  Since then I've come across more general purpose click handler for mobile apps that is incredibly easy.  Definitely use [fastclick](https://github.com/ftlabs/fastclick) to speed up your click events.

##Orange Halos on Button Clicks
Some mobile browsers, including the HTC version of webkit that was on my phone indicate a click event by wrapping the button in a clunky green or orange border.  It also takes the entire 300ms to display, which can slow down the perceived responsiveness of the app.  You can remove this with the following css rule for all elements.

{% highlight css %}
* {
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
}
{% endhighlight %}
##Click Events are Too Fast
Now that you've removed the stock click feedback response in some browsers you may notice that the button doesn't appear to actually be clicked.  With twitter bootstrap buttons, the button appears to slightly depress when clicked on the web.

You can manually add the "active" class to bootstrap buttons and then remove it after the event has completed.  But, if you drop some logging statements into your click handler function you'll notice that the activity you are triggering might be too quick to actually register.

You can delay removing the active class from a button by 300-400ms to give a better respsonse.  The user will actually be able to see the clicked state of the button.

{% highlight javascript %}
var clickHandler = function (event) {
	var $button = $(event.target).addClass('active');
	doSomeStuff();
	setTimeout(function () {
	      $button.removeClass('active');
	}, 400);  
}
{% endhighlight %}

##Page Unintentionally Zooms or Scrolls
Since we are creating an app, we don't necessarily want the user to able to zoom or scroll the page around.  We can lock the zoom down with the following viewport meta tag.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
{% endhighlight %}

##Overflow Scrolling for List Views
One thing that seems to be missing for a lot of mobile browsers is the ability to set the overflow property for divs to allow for scrolling with or without scrollbars.  It'd be nice to allow these divs to be scrolled by touch events.  For modern mobile browsers, including the ipad it is possible to set a css property to achieve this affect.

{% highlight css %}
.scrolly {
	-webkit-overflow-scrolling: touch;	
}
{% endhighlight %}

Unfortunately for many mobile browsers, including the stock HTC browser on Android 2.3 devices, this will not work.  Luckily some smart people have created an excellent library that will handle all these cases, either with the above mentioned css or a javascript polyfill.  Check out [overthrow.js](http://filamentgroup.github.com/Overthrow/) by the filament group.

##Javascript vs Native Performance
As you can see, there isn't a huge different in the performance of js apps when compared to native apps for typical apps.  Canvas performance for games or anything that requires much in the way of native hardware support might be a little more tricky.  The key to a successful app is good design and competent coding, no matter the language.