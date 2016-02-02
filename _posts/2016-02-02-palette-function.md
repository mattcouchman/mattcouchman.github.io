---
layout: post
title:  "Managing brand colours and palettes in large scale applications using Sass"
date:   2016-02-02 18:14:00
description: Sass palette function for working with color variables and palettes.
---

When it comes to structuring Sass in large applications it's difficult to come up with a solution in terms of best practices and naming conventions for colours and palettes. In general, I tend to avoid actual colour names, to guard against future changes to brand colours.

For example, if we have a website consisting of 100s of pages and classes (such as `.bg-blue`), what happens when the company decides to rebrand to red? We have to go through all of the markup and change `.bg-blue` to `.bg-red`, or just explain to newer developers that `.bg-blue` actually means red now... not ideal.

Likewise in your Sass files, you would have to go through all of your files to replace `$blue` with `$red`.

<!--excerpt-->

To get around this I usually end up naming my colour variables something abstract, like 'alpha'. That way, we can make 'alpha' any colour we want, without it impacting the CSS or markup if we decide to change the colour at a later date.

So recently I've been thinking about how we can be a bit more clever in terms of naming both our colours and colour palettes. Sass is a great tool, and it comes with some really powerful features that we're used to using every day in other programming languages - including functions. This is a function that I wrote in Sass to allow us to reference colours by their palette and shade. I'll explain more below.

So to start we need an array (Sass list) of our colour palette(s). I've added two different palettes below:

{% highlight scss %}
$palettes:
	('brand'
		(
			('main', #444),
			('dark', #000)
		)
	),
	('accent'
		(
			('main', #fff),
			('dark', #ddd)
		)
	);
{% endhighlight %}

This is basically just giving us two different colour palettes, with two colours each in them.

Next we need to create a function, I've called it palette, and pass it two arguments:

{% highlight scss %}
@function palette($selectedPalette, $shade) {
	// fun stuff
}
{% endhighlight %}

Inside the function we need to loop over our palettes list:

{% highlight scss %}
@function palette($selectedPalette, $shade) {
	@each $palette in $palettes {
		// for each palette in palettes
	}
}
{% endhighlight %}

Then, we need to check if the palette name passed in actually matches one of the given names:

{% highlight scss %}
@function palette($selectedPalette, $shade) {
	@each $palette in $palettes {
		@if nth($palette, 1) == $selectedPalette {
			// if selectedPalette is equal to one of the palette names
		}
	}
}
{% endhighlight %}

We then need to loop over the selected palette's colours, and return it if it matches the one passed in.

{% highlight scss %}
@function palette($selectedPalette, $shade) {
	@each $palette in $palettes {
		@if nth($palette, 1) == $selectedPalette {
			@each $color in nth($palette, 2) {
				@if nth($color, 1) == $shade {
					@return nth($color, 2);
				}
			}
			@return null;
		}
	}
}
{% endhighlight %}

And that's our function done. We can then reference colours from our palette(s) nicely as below:

{% highlight scss %}
.class-name {
	background: palette(brand, main);
}
{% endhighlight %}

Then we can change our main brand colour to whatever we want without having an impact on our stylesheets or variables.

You can see the whole thing over on [CodePen](http://codepen.io/mattcouchman/pen/bEjNJV?editors=0100) or let me know what you think on [Twitter](http://twitter.com/mattcouchman)!
