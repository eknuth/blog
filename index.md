---
layout: page
title: Hello World!
tagline: Supporting tagline
---
{% include JB/setup %}
<div class="container">
    <div class="row">
        <div class="span12">
            <!-- slider -->
            <div class="flexslider" id="map">
                <ul class="slides">
                    {% for place in site.tags.place reversed %}
                    <li data-lat="{{place.lat}}" data-lng="{{place.lng}}" data-zoom="{{place.zoom}}" {% if forloop.first %}class="flex-active-slide"{% endif %}>                                
                      <div class="flex-caption hidden">
                            <h3>{{ place.title }}</h3>
                            {{ place.content }}
                            <!-- <div class="buttons">
                                <a href="{{ place.url }}" class="btn btn-1 pull-right">read more</a>
                            </div> -->
                        </div>
                    </li>
                    {% endfor %}
                </ul>
            </div>
            <span id="responsiveFlag">
            </span>
            <div class="block-slogan">
                <h2>
                    Welcome!
                </h2>
                <div>
                    <p>
                        My name is Edwin Knuth. I'm a web developer in Portland, Oregon. I've lived in Boulder,
                        Colorado, Bloomington, Indiana, Takoma Park, Maryland and Juneau, Alaska, among other
                        places.
                    </p>
                    <p>
                        I've been a sysadmin, dba and gis technician. I have an interest in maps, science
                        and information. I love javascript and enjoy building things for the web and mobile
                        devices.
                    </p>
                    <p>
                        I work for
                        <a href="http://ecotrust.org">Ecotrust</a>
                        as a front end developer.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- content -->
<div id="content" class="content-extra">
    <div class="ic">
    </div>
    <div class="row-1">
              <div class="container">
                <div class="row">
                  <article class="span12">
                    <h4>
                      Photographs
                    </h4>
                  </article>
                  <div class="clear">
                  </div>
                  <ul class="portfolio clearfix">
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/1.jpg"></a>
                    </li>
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/2.jpg"></a>
                    </li>
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/3.jpg"></a>
                    </li>
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/4.jpg"></a>
                    </li>
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/5.jpg"></a>
                    </li>
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/6.jpg"></a>
                    </li>
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/7.jpg"></a>
                    </li>
                    <li class="box">
                      <a href="{{BASE_PATH}}/assets/themes/map/img/image-blank.png" class="magnifier"><img alt="" src="{{BASE_PATH}}/assets/themes/map/img/work/8.jpg"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    <div class="row-1">
        <div class="container">
            <div class="row">
                <article class="span12">
                    <h4>From the blog</h4>
                </article>
            </div>
            <div class="row">
                    <ul class="thumbnails thumbnails-1">
                        {% for post in site.posts |limit:4 %}
                        <li class="span3">
                            <div class="thumbnail thumbnail-1">
                                <img src="{{BASE_PATH}}/assets/themes/map/img/blog-featured-01.jpg" alt="">
                                <section>
                                    <a href="{{ post.url }}"><h3>{{ post.title }}</h3></a>
                                    <div class="meta">
                                        <time datetime="{{ post.date }}" class="date-1">
                                            <i class="icon-calendar">
                                            </i>
                                            {{ post.date |date: "%m-%d-%Y"}}
                                        </time>
                                        <!-- <div class="name-author">
                                                        <i class="icon-user">
                                                        </i>
                                                        <a href="#">Admin</a>
                                                    </div> -->
                                        <!-- <a href="#" class="comments"><i class="icon-comment"></i> 7 comments</a> -->
                                    </div>
                                    <div class="clear">
                                    </div>
                                    <a href="{{ post.url }}" class="btn btn-1">read more</a>
                                </section>
                            </div>
                        </li>
                        {% endfor %}
                    </ul>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <article class="span6">
                <h3>
                    Edwin Knuth
                </h3>
                    <img src="http://farm3.staticflickr.com/2816/8974817223_f0241bda5a_d.jpg" alt=""/>
                            With my son in Boulder, Colorado.
            </article>
            <article class="span6">
                <h3>
                    Some quick links
                </h3>
                <div class="wrapper">
                    <ul class="list">
                        <li>
                            <a href="http://ecotrust.org">Work</a>
                        </li>
                        <li>
                            <a href="http://github.com/eknuth">Github</a>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </div>
</div>