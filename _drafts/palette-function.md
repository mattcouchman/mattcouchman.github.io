---
layout: post
title:  "Sass color palette function"
date:   2016-02-02 17:14:12
description: Sass palette function for working with color variables and palettes.
---

When it comes to creating a Sass structure for large applications I always wonder about best practices in terms of naming the colours and palettes. I generally tend to avoid actual colour names, to guard against future changes to brand colours.

For example, if we have a website consisting of 100s of pages and classes such as `.bg-blue`, what happens when the company decides to rebrand to red? We have to go through all the pages and change `.bg-blue` to `.bg-red` - not ideal.

Likewise in your Sass files, you would have to root through all your files to replace `$blue` with `$red`.

<!--excerpt-->

So I usually en up calling my brand colours something abstract, like `.bg-alpha`. That way, we can make 'alpha' any colour we want, without it impacting the CSS or markup.

But recently I've been thinking about how we can be a bit more clever in terms of naming both our colours and colour palettes. So how do we go about naming our variables in our Sass files? We could just go down a route like `$color-alpha: #ff0;`, which works absolutely fine. However we can get a bit more clever about it. Sass comes with really powerful features like arrays, functions and loops, and with a combination of those we can create a smarter way of referencing our colours throughout our stylesheets.

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

You can see the whole thing over on [http://codepen.io/mattcouchman/pen/bEjNJV?editors=0100](CodePen).
