## Frontend UI Development with Gulp and living Styleguide (SC5)
---

### Getting Started

1. Open `CMD` or `Terminal`, point the path to your designed folder.
2. In the same CMD or , run `git clone git@github.com:pagevamp/frontend-architecture.git`
3. Next, run `npm i`
4. Now, run `gulp` from same CMD window. It will open the project server: 
- `Project` - `http://localhost:3000/`
- `Styleguide` - `http://localhost:3001/`



**Gulp Tasks**
- `gulp` - Compiles the development files and generate the production ready files including Styleguide.
- `gulp servews` - Compiles the development files and generate the production ready files without Styleguide.
- `gulp styleguide` - Generate the styleguides with *styleguide* folder on root path.
- `gulp webstandards` - Validates whether your HTML/CSS/JS is up-to-date or not and or according to Web Standards.


### File Structure

**Production Files:-**
```
	+-- dist
	|   +-- images
	|   +-- scripts
	|	|   +-- main.min.js
	|   +-- css
	|	|   +-- colors.min.css 
	|	|   +-- fonts.min.css g
	|	|   +-- styles.min.css
	|	|   +-- themes.min.css
	|       |   +-- maps
	|       |   |   +-- colors.min.css.map
	|       |   |   +-- fonts.min.css.map
	|       |   |   +-- styles.min.css.map
	|       |   |   +-- themes.min.css.map
	|   +-- index.html
```

**Development Files:-**
```
	+-- src
	|   +-- fonts
	|   +-- images
	|   +-- scripts
	|	|   +-- vendors
	|	|	|   +-- Dependencies 1
	|	|	|   +-- Dependencies 2
	|	|   +-- scripts.js
	|   +-- scss
	|	|   +-- base
	|	|	|   +-- _branding.scss
	|	|	|   +-- _config.scss
	|	|	|   +-- _typo.scss
	|	|	|   +-- _units.scss
	|	|   +-- layout
	|	|	|   +-- _header.scss
	|	|	|   +-- _nav.scss
	|	|	|   +-- _footer.scss
	|	|	|   +-- _page.scss
	|	|	|   +-- _sidebar.scss
	|	|   +-- modules
	|	|	|   +-- _button.scss
	|	|	|   +-- _form.scss
	|	|   +-- theme
	|	|	|   +-- colors
	|	|	|   |   +-- _blue.scss
	|	|	|   |   +-- _orange.scss
	|	|	|   |   +-- _red.scss
	|	|	|   +-- fonts
	|	|	|   |   +-- _typo.scss
	|	|	|   +-- skin
	|	|	|   |   +-- dark
	|	|	|   |   |   +-- _vars.scss
	|	|	|   |   |   +-- _dark.scss
	|	|	|   |   +-- light
	|	|	|   |   |   +-- _vars.scss
	|	|	|   |   |   +-- _light.scss
	|	|   +-- utilities
	|	|	|   +-- _vars.scss
	|	|	|   +-- _functions.scss
	|	|	|   +-- _mixins.scss
	|	|	|   +-- _helper.scss
	|	|   +-- vendors
	|	|	|   +-- bootstrap
	|	|	|   +-- _vendors.scss
	|	|   +-- colors.scss
	|	|   +-- fonts.scss
	|	|   +-- styles.scss
	|	|   +-- theme.scss
	|   +-- includes
	|	|	|   +-- header.html
	|	|	|   +-- aside.html
	|	|	|   +-- footer.html
	|   +-- index.html
```


