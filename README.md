Another lightbox uses the checkbox hack (with radio buttons) and some flexbox and transitions for an almost full featured lightbox experience. A tiny JavaScript (no dependencies) progressive enhancement was added to allow for closing the lightbox when pressing Escape for better UX. Feel free to not include that.

## Features
* Supports galleries (multiple images in 1 lightbox that navigate to eachother)
* Opening/closing animation
* Navigating to previous/next item with animation
* Navigation icons
* A background overlay
* Image captions
* Navigate with keyboard left/right keys
* Close the lightbox by clicking on the background

## Optional JS for added accessibility & UX
* Close the lightbox with keyboard escape key (JS)</li>

## Browser support
* All IE: Larger images will vertically leave the screen because of lack of "object-fit: contain;" support. Couldn't find another way.
* Flexbox
* Position: fixed;
* Transform
* Transition

## Todo
* Sample
* Accessibility
* Browser testing
* Loading state
* Sass + variables
* Lazy loading
