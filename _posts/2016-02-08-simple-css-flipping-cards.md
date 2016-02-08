---
layout: post
title:  "Simple CSS flipping cards"
date:   2016-02-08 16:00:00
description: Simple CSS flipping cards
---

One of my colleagues ([Sam Jones](https://twitter.com/_sam066)) has been making a dashboard recently to monitor our applications and alert us when there is an issue with one of them.

The dashboard uses a card based UI and displays the status of our applications using a traffic light system. As part of the next "phase" of the app he plans on adding more information to the cards by making them "flippable" with more details on the back, so I thought I'd have a go at making some basic flipping cards on CodePen.

<!--excerpt-->

The subject matter I've chosen seems to be the one I always land on - Wolves FC. I'm a big Wolves fan so I created some basic "player cards".

The animations are actually pretty easy to do using CSS3 transforms.

So the basic markup looks like this:

{% highlight html %}
<div class="card">
    <div class="card__front">
        Content
    </div>
    <div class="card__back">
        Content
    </div>
</div>
{% endhighlight %}

I've then added some basic styles to the "cards", along with the transition time and `preserve-3d` to make our animation actually appear to be 3d, rather than the default `flat`.

{% highlight css %}
.card {
	display: inline-block;
	position: relative;
	width: 15rem;
	height: 16rem;
	margin-right: 1rem;
	transform-style: preserve-3d;
	transition: .8s;
}
{% endhighlight %}

After that I've added some styles to the front and back of the cards, including rotating the back of the card by 180 degrees. I've also added a `rotate` to the front of the card to allow for animation between the two values.

{% highlight css %}
.card__front, .card__back {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
}

.card__front {
	transform: rotateY(0deg);
	background: #eee;
}

.card__back {
	transform: rotateY(180deg);
	background: #222;
	color: #fff;
}
{% endhighlight %}

Cool, so all the basics are in place. Finally, I added the hover effect to flip (or `transform`) the card, as below:

{% highlight css %}
.card:hover {
	transform: rotateY(180deg);
}
{% endhighlight %}

And it's really as easy as that! I've added a bit of extra markup and CSS in the pen below, but these are purely cosmetic.

<p data-height="400" data-theme-id="0" data-slug-hash="jWKvgy" data-default-tab="result" data-user="mattcouchman" class='codepen'>See the Pen <a href='http://codepen.io/mattcouchman/pen/jWKvgy/'>Simple CSS card flip</a> by Matt Couchman (<a href='http://codepen.io/mattcouchman'>@mattcouchman</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can see the whole thing over on [CodePen](http://codepen.io/mattcouchman/pen/jWKvgy?editors=1100) or let me know what you think on [Twitter](http://twitter.com/mattcouchman)!
