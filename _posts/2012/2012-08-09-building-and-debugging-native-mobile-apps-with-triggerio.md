---
layout: post
title: "Building and Debugging Native Mobile Apps with trigger.io"
description: ""
category: 
tags: ["mobile", "javascript", "trigger.io"]
---
{% include JB/setup %}
##To phonegap or Not?
[Phonegap](http://phonegap.com) or Cordova as it is now known is one of the projects that makes wrapping a web app in a native web view a fairly straightforward process.  The project was acquired by Adobe, but has been taken on by the Apache Foundation as an open source project.

Phonegap is a mature project and offers numerous plugins for using the gps, camera, filesystem, etc.  It is definitely worth checking out.

Unfortunately it seems to require the use of Eclipse.  The configuration process seems to be somewhat involved.  My goal was to build and deploy a native app in one week. I succeeded, in part, by not using phonegap.

Lately, I have been hearing good things about a company called [trigger.io](http://trigger.io).  They offer a service to build android and ios apps from html and javascript for free.  They even include chrome apps with their [freemium offering](https://trigger.io/pricing/).  If you pay, you can build for windows phone as well.

Theoretically you can build ios apps without the use of xcode, but I did not explore that option.

##Native Modules
They also offer a solid core of native features accessible through a javascript api.  You can use the camera, sms, events, contacts, geolocation, filesystem, facebook auth and some ui elements through js.  I used the sms module, which was absolutely easy.  The facebook api also looked like a great offering.

The in app payment module looked like it would be handy, but while it is free now, they are planning on charging in the future.  Making money with that sort of thing would definitely be a service worth money.

The value that trigger.io adds is definitely worth money.  The free service they offer is unbeatable for anyone getting started with mobile app development.  If I were making money from an app, I would definitely consider paying for trigger.io.

##Vendor Lock
I'm extremely cautious about recommending a free service that may end up costing a lot some day.  Google Maps is the obvious example. 

I feel like the risk involved with trigger.io is minimal because the only commitment you have to the platform is the code you write for the native modules.  One could easily drop back to phonegap if the price was too high.

trigger.io is definitely worth checking out.  The build process was streamlined and the tools were easy to use.  I mostly stuck with the command line tools, but be sure to keep them up to date.  When the company upgrades their service you need to download the latest version.  There is also an excellent gui for building and deploying apps.

##trigger.io Bootstrap
To get up to speed trigger.io provides a [sample project](https://github.com/trigger-corp/Forge-Bootstrap) on github.  It is a simple single page app that uses backbone and zepto and includes animated transitions to better simulate a native app. 

##Remote Debugging with Catalyst/weinre
Another feature of trigger.io is [catalyst](https://trigger.io/catalyst/), the hosted version of weinre, the remote debugger.  This service works a bit like firebug or the chrome developer tools, but for apps deployed to devices.  You include a script in your app and then visit the url provided by the service.

You can't actually set breakpoints, but you can inspect the dom and output console logging statements.  It is an invaluable tool for debugging natively wrapped webapps.

If you are using phonegap, catalyst is essentially the same as the [phonegap weinre service](http://debug.phonegap.com/).

##In Other Words
Apps that use html and javascript are becoming the norm.  Here is a great article that describes the difficulties one dev shop had in [porting their app to Windows 8](http://gkosev.blogspot.com/2012/08/why-native-development-sucks-and-html5.html).  Apparently it took all of sixty minutes to get it up and running on the new platform.