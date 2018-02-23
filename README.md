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
* Object-fit: In all of IE, larger images will vertically fall off screen because of lack of "object-fit: contain;" support. Couldn't think of another way.
* Flexbox: IE11+
* Transition: IE10+
* Transform: IE9+
* Position fixed: IE7+

## Todo
* Sample
* Accessibility
* Browser testing
* RTL support
* Loading state
* Sass + variables
* Lazy loading
* More graceful flexbox fallback for <IE11
