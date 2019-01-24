# [See live demo on repl.it](https://repl.it/@Inventsable/Wrench-Loading-Icons)

![](https://thumbs.gfycat.com/PepperyAcademicChafer-size_restricted.gif)

Colors are flexible and defined by CSS class, important things to note about use are:

* You have to define `SVG { width: 100% }` (or explicitly define any SVG tag width)
* The `.anim-main` class needs `fill` and `stroke` values for color.
* There are masking shapes at play in the wrench, `.anim-mask`, which should have a `fill` the same color as your background (can't be transparent).
* The Blue and Yellow variations' main class is `anim-color` instead of `anim-main`. This is all commented in the `style.css` sheet.
* If you're confused about vanilla JS use (instead of a Vue context), [see examples and documentation on the main lottie page here](https://github.com/airbnb/lottie-web).

## Need compatibility with React-Native? [Use this editor](https://editor.lottiefiles.com/) on any JSON in `./wrenchesNoCSS/`