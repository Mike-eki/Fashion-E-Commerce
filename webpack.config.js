/*

Pasos para configurar webpack.config.js:

1. entry -> Declaras donde esta el archivo que quieres que comienze a empaquetar (por defecto es "./src/index.js")
2. output -> Dentro de un objeto, colocas la ruta absoluta, y le asignas el nombre de la carpeta por defecto (en este caso es "build")
3. module -> Con otro objeto, escribimos las "rules" en donde seteamos lo necesario para que webpack entienda los archivos que queremos que importe, ademas de que tambien configuramos Babel.
*/

//NodeJs nos da la ruta absoluta
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//Podemos hacer mas "legible" esto guardando las reglas por ejemplo, en constantes
const cssRules = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const jsRules = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic', // 'classic' -> por defualt
                }
            ]
        ]
    }
}

// const fileRules = {
//     test: /\(jpe?g|png|gif|svg)$/,
//     loader: 'file-loader',
//     options: {
//         name:'[path][name].[ext]',
//         outputPath: 'images',
//     }
// }

const rules = [
    jsRules,
    cssRules
]

module.exports = (env, argv) => {

    resolve: {
        modules: ["src", "node_modules"]
    }

    const {mode} = argv;
    const isProduction = mode === 'production';

    return {
        // entry: './src/index.js',
        output: {
        // filename: 'main.js', (Por default)
        // El [name] es el nombre por defecto del archivo
        // El [contenthash] dependiendo del contenido que tiene ese fichero, le podra un hash diferente para que lo puedas cachear.
        // Cuando cambia el contenido del mismo, el hash sera distinto.
            filename: isProduction
                ? '[mode].js'
                : 'main.js',
            path: path.resolve(__dirname, 'build'),
        },
        plugins: [
            new HtmlWebpackPlugin( { template: './src/index.html' } )
        ],
        //Este es un "loader", hay de varios tipos como para Typescript, Sass, noLoader, etc.
        module: {
            rules
        },
        devServer: {
            open: true, // Abrir el navegador cuando se inicia el servidor
            port: 3050,
            compress: true, // Compresion con gzip
        }
    }
}