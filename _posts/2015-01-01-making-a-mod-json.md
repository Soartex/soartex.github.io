---
layout: content_small_header
title: "Making Mod.json Files"
title_sub: "How to create a mod.json and what is it used for"
categories: modded
subject: "In this article we explain what the mod.json file purpose is and how it ties into the modded system. We cover how to create such a file, and the guidelines to adding to the repo. A detailed parameter list is included."
---

<section markdown="1" class="bs-docs-section">

{:#overview .page-header}
# Overview

Our modpatcher system and server scripts uses `mod.json` files to get data and directory information each mod. Each mod has a respective `mod.json` in the repository that represents each mod. Each json holds information that the future patcher will harness to provide a rich experience for the user. When creating or updating a mod we ask that you please create/update the `mod.json` file for the mod. This both allows us to track the the textures' mod version dependency and other details.


{:#template}
### Template

{% highlight json %}
{
  "mod_id": "",
  "mod_name": "",
  "mod_dir": "",
  "mod_version": "v",
  "mc_version": "1.7.x",
  "mod_authors": [""],
  "url_website": "",
  "description": ""
}
{% endhighlight %}

{:#example}
### Example

{% highlight json %}
{
  "mod_id": "appliedenergistics2",
  "mod_name": "Applied Energistics 2",
  "mod_dir": "/Applied_Energistics_2/",
  "mod_version": "rv1.stable build 1",
  "mc_version": "1.7.10",
  "mod_authors": ["AlgorithmX2"],
  "url_website": "http://ae-mod.info/",
  "description": "A Mod about Matter, Energy and using them to conquer the world.."
}
{% endhighlight %}

The Json template above can be used for creating a file. While the `mod.json` can be placed anywhere in the repo, but we ask that it is placed in the root folder for the mod. This allows for the modularity of the system to remain intact. A break down of each one is below:

{:#parameter-breakdown}
### Parameter Breakdown

{:.table .table-bordered}
| Parameter | Explanation |
|-----------|-------------|
| mod_id | This is the mod id that the respective mod author chooses for his/her mod. This should not be changed once a mod is added to the repo, as this id is how other systems determent what mod is what. |
| mod_name | This is a human readable version of the mod |
| mod_dir | This is the path from the root of the repo. For example if the mod is two folders down, it should be `/folder_one/folder_two/`. There should be both beginning and ending slashes. |
| mod_version | This is the *latest* mod version the textures are compatible with. This should be prefixed with a "v" for the sake of prettiness. |
| mc_version | This is the minecraft version the mod is compatible with. |
| mod_authors | This is a Json array of each author that has created the mod. Please note the format is a json array, not a string. `["", "", "", ""]` |
| url_website | This is the url to the forum thread or website the mod resides on. Try to link to the minecraft forum thread so we can provide liable urls to users. |
| description | A small single sentence description that explains what the mod does. The idea is this allows people to link the name of the mod, with a mod that they have seen another person play. |

</section>