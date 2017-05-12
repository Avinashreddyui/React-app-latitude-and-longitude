/**
 * Created by Avinash Theppala on 4/27/2017.
 */
module.exports={
    entry:'./app/app.jsx',
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
  resolve:{
        
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/public/Assets/pinImage.png"}

        ]
    }
};