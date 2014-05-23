# Froots Theme

Froots is a WordPress starter theme based on [Roots](http://roots.io/) & [Foundation](http://foundation.zurb.com) that will help you make better themes.

Froots is derived from the famous Roots WordPress starter theme. The main difference is that Bootstrap has been ripped out and left for dead only to be replaced by it's evil twin brother, Foundation.

## Installation

Clone the git repo - `git clone git://github.com/LogicSpot/Froots.git` - or [download it](https://github.com/LogicSpot/Froots/archive/master.zip) and then rename the directory to the name of your theme or website. [Install Ruby](http://rubyinstaller.org/). [Install Grunt](http://gruntjs.com/getting-started), and then install the dependencies for Froots contained in `package.json` by running the following from the Roots theme directory:

```
npm install
```

Reference the [theme activation](http://roots.io/roots-101/#theme-activation) documentation to understand everything that happens once you activate Froots.

## Theme Development

After you've installed Grunt and ran `npm install` from the theme root, use `grunt watch` to watch for updates to your SASS and JS files and Grunt will automatically re-build as you write your code.

## Configuration

Edit `lib/config.php` to enable or disable support for various theme functions and to define constants that are used throughout the theme.

Edit `lib/init.php` to setup custom navigation menus and post thumbnail sizes.


## Features

* Organized file and template structure
* HTML5 Boilerplate's markup along with ARIA roles and microformat
* Bootstrap
* [Grunt build script](http://roots.io/using-grunt-for-wordpress-theme-development/)
* [Theme activation](http://roots.io/froots-101/#theme-activation)
* [Theme wrapper](http://roots.io/an-introduction-to-the-froots-theme-wrapper/)
* Root relative URLs
* Cleaner HTML output of navigation menus
* Cleaner output of `wp_head` and enqueued scripts/styles
* Nice search (`/search/query/`)
* Image captions use `<figure>` and `<figcaption>`
* Example vCard widget
* Posts use the [hNews](http://microformats.org/wiki/hnews) microformat
* [Multilingual ready](http://roots.io/wpml/) (Brazilian Portuguese, Bulgarian, Catalan, Danish, Dutch, English, Finnish, French, German, Hungarian, Indonesian, Italian, Korean, Macedonian, Norwegian, Polish, Russian, Simplified Chinese, Spanish, Swedish, Traditional Chinese, Turkish, Vietnamese, Serbian)

## Contributing

Everyone is welcome to help and improve this project.

## Support

No support as of yet

## Credits

Thanks to [Ben Word](http://roots.io/author/benword/) and the [team at Zurb](http://foundation.zurb.com/)
