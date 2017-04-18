const path = require ('path');

module.exports = {
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: [
						'react',
						'es2015'
					],
					plugins: [
						'react-relay',
						'transform-decorators-legacy',
						'transform-class-properties'
					]
				}
			},
			{
				include: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	externals: {
	   	'jsdom': 'window',
	   	'cheerio': 'window',
	   	'react/lib/ExecutionEnvironment': true,
	   	'react/lib/ReactContext': 'window',
	   	'react/addons': true
	},
	resolve: {
    	alias: {
      		'react-relay': path.join (__dirname, '/../src/mocks/react-relay'),
      		'real-react-relay': path.join (__dirname, '/../node_modules/react-relay/')
    	}
  	}
}