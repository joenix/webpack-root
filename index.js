module.exports = ( dir, path = './' ) =>
{
	if ( dir === undefined )
	{
		return require('path').resolve( __dirname, path = '..' );
	}

	return require('path').resolve( dir, path );
}
