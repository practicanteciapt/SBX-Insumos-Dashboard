/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Insumos.qvf', config);

	//get objects -- inserted here --
	app.getObject('QV11','EVZfQP');
	app.getObject('QV10','qZdv');
	
	
	app.getObject('QV09','LaJeveA');
	app.getObject('CurrentSelections','CurrentSelections');
	app.getObject('QV08','GfYkBr');
	app.getObject('QV07','fNTDXj');
	app.getObject('QV06','NsCEJP');
	app.getObject('QV05','VtvNTRD');
	app.getObject('QV04','aCtRU');
	app.getObject('QV03','eERAQK');
	app.getObject('QV02','mUPxdG');
	app.getObject('QV01','hmjWv');
	//create cubes and lists -- inserted here --

} );
