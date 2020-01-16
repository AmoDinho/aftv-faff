const path = require('path')

module.exports = ({config, mode}) => {
    // PostCSS Support

    config.module.rules.push({
        test: /\.css$/,
        loaders:[
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap:true,
                    config: {
                        path: './.storybook/'
                    }
                }
            }
        ],
        include: path.resolve(__dirname, '../')
    })

    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
    })
    return config
}