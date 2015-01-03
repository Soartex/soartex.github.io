Here is a quick guide on how to add to the Soartex Knowledge Base. To create a page you must first create a file in the `/_posts/` folder. This is where all files go. The naming convention is as follows `YYYY-MM-DD-name-of-slug-here.md`. The name following the date will be the url slug that is seen in the browser. See the official jekyll page for more information [here](http://jekyllrb.com/docs/posts/). Once the post file is created in the `/_posts/` folder the following header must be created.

```
---
layout: content_small_header
title: ""
title_sub: ""
author: ""
categories: modded
subject: ""
---
```

As seen in the template above there is some important information needed to be filled out. The layout field determines what the page should be rendered as. Currently we only have content_small_header. The title parameter is what is displayed as a `<h1>` header on the page. The title_sub is smaller text that is displayed under the title tag. This one is not needed, but is a nice thing to have. The categories field is very important. For the post to be displayed on the website you need to either put `modded` or `tutorial` in this field. This tells the system to display this article on that respective page. Finally the subject is a paragraph long summary covering what happens in this post. This gets displayed in the listings, so it is important to explain what the reader will gain from it.

Once you have the header just add markdown below it. In order to get a nice sidebar menu you need to have at least one `<h1>` tag on the page. From there you can get submenus by adding `<h2>/<h3>` tags. It is important to note that an id for each header is needed. See the template below for an example. The section tags are needed for each top level menu, these are used to create the side menu, and separate between each section.

```md

<section markdown="1" class="bs-docs-section">

{:#top-level}
# Top Level

{:#sub-level-1}
## Sub Menu #1

{:#sub-sub-level}
### Sub Sub Menu

{:#sub-level-2}
## Sub Menu #2

</section>
<section markdown="1" class="bs-docs-section">

{:#top-level}
# Top Level 2

</section>

```


You can add a class or id to any markdown element with the following options.
```md
{:#i-am-an-ID}
## Menu

{:.page-header}
# Menu
```
```html
<h2 id="i-am-an-ID">Menu</h2>

<h1 class="page-header">Menu</h1>
```
