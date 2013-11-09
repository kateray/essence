Mozilla is working on a number of awesome new projects (FirefoxOS, Firefox Accounts, etc) that together are greater than the sum of their parts and will (hopefully) help the web leapfrog traditionally native platforms in a way that restores sovereignty to users!

There's but one major thing missing in Mozilla's current tech roadmaps: an approach to wrangling control of personal data across the web back into the hands of users.

We're looking to fill this strategic gap by proposing an extensibility model for Mozilla's WebAPI project that would enable RESTful API ecosystems to align with Mozilla's user-centric values. We are calling this extensibility model 'Essence'

In nutshell, we are aiming to influence the Firefox  development roadmap. To do so, we are building prototypes that demonstrate the UX of Essence that can also act as a polyfill for additional prototypes that demonstrate the implications of a WebAPI extensibility model for products across Mozilla as well as the API ecosystems across the web.

Our first step is to simulate API discovery. For this we need:
 * RAML files that model existing popular APIs such as Flickr or Soundcloud
 * A Firefox Add-on or Greasemonkey script that embeds these RAML files into the <head> of their respective web sites.
 * A Firefox Add-on that keeps a registry/database of RAML files passively discovered while users browse the web.

 ## TO USE

Install Greasemonkey:
https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/

Install Greasemonkey script for embedding RAML files in web pages:
http://userscripts.org/scripts/show/182643

visit www.flickr.com
view RAML files in the status bar (bottom right)