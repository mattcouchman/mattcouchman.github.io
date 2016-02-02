---
layout: post
title:  "Another approach to BEM"
date:   2015-12-28 20:00:00
description: A different approach to BEM
---

When I first read about BEM my reaction was the same as most - "wow... that's ugly".

Syntax aside though I do really like the BEM methodology and it's been adopted by many large organisations, such as the BBC.

<!--excerpt-->

My main gripe with the stadard BEM syntax is repetition, particularly when a block or element has multiple modifiers. As below:

{% highlight html %}
<div class="block block--modifier block--another-modifier block--etc">
	<div class="block__element">
		Content
	</div>
</div>
{% endhighlight %}

The `block` is starting to get very long, ugly and potentially pretty hard to read. It can also lead to bloated CSS as you can end up repeating and/or overwriting styles for all of your modifiers, depending on how you approach it. For example:

{% highlight scss %}
.block, .block--modifier, .block--another-modifier, .block--etc {
	// Common properties
}
{% endhighlight %}

This led me to create my own interpretation of BEM.

The first thing I did was scrap the double `_`'s in favour of single ones. So words would be seperated by `-`'s and elements by `_`'s.

{% highlight html %}
<div class="block-name">
	<div class="block-name_element-name">
	</div>
</div>
{% endhighlight %}

Then I stripped out the modifiers so it was separate to the block/element.

{% highlight html %}
<div class="block-name -modifier">
	<div class="block-name_element-name">
		</div>
	</div>
</div>
{% endhighlight %}

This allows me to chain modifiers if necessary, for example.

{% highlight html %}
<div class="block -modifier -another-modifier -etc">
	<div class="block_element">
		Content
	</div>
</div>
{% endhighlight %}

Which for me is much cleaner and reads much better. This would require the following CSS:

{% highlight css %}
.block {}
.block_element {}
.block.-modifier {}
{% endhighlight %}

As opposed to:

{% highlight css %}
.block {}
.block__element {}
.block--modifier {}
{% endhighlight %}

So it's not a huge change from the classic syntax, but allows for more readable HTML and less bloated CSS. Let me know what you think.
