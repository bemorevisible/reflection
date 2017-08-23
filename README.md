# reflection.js
Uses JavaScript &amp; CSS (Sass) to create a reflection effect

# HTML Setup
- Wrap all your page's content in a div with the class .reflective
- Add another div after .reflective with the class .reflection-container
  - If you want the reflection to be fixed to the top of the page (instead of the default bottom of the page) add the class top to your div.reflection-container

# JavaScript Setup
- Include the reflections.js.  This requires no dependencies.

# Styles Setup
- If using gulp, modify the sass/style.scss
- Available options include: 
  - $footerSize: (default: 12vh), specify height of the reflection element
  - $blur: (default: 6px), specify blurriness for the reflection element
  - $opacity: (default: 0.75), specify opacity for the reflection element
- If using regular CSS, just find and replace the values in the style.css
