// Keypress listener (IE9+)
document.addEventListener( 'keydown', function( e ) {

	// Escape key = close any open lightbox
	if ( e.key === 'Escape' ) {

		var i = j = 0;
		var lightbox, close_radio, radios, radio;
		var lightboxes = document.querySelectorAll( '.lightbox' );

		// Loop over each lightbox
		for ( i; i < lightboxes.length; i += 1 ) {

			lightbox = lightboxes[ i ];
			close_radio = lightbox.previousElementSibling;
			radios = lightbox.querySelectorAll( '.lightbox-radio' );

			// Check if any of this lightbox's radio is checked
			j = 0;
			for ( j; j < radios.length; j += 1 ) {
				radio = radios[ j ];
				if ( radio.checked ) {

					// Trigger a click on the close button
					close_radio.checked = true;

				}
			}

		}

	}

} );
