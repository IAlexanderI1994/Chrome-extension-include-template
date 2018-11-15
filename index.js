/**
 * Функция добавления шаблонов в хром extension
 * @param path (относительно корня)
 * @param append_to ( селектор, в который нужно добавить шаблон )
 */
export function includeTemplate( path, append_to ) {
	if ( undefined === append_to ) {
		append_to = 'body';
	}
	jQuery.get( chrome.extension.getURL( path ), function ( data ) {
		jQuery( data ).appendTo( append_to );
	} );
}