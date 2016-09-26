module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Examples: 'app/components/examples/Examples.jsx',
            Weather: 'app/components/weather/Weather.jsx',
            About: 'app/components/about/About.jsx',
            WeatherForm: 'app/components/weather/WeatherForm.jsx',
            WeatherMessage: 'app/components/weather/WeatherMessage.jsx',
            OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test:  /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },

};
