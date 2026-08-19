const path = require("path"); //importando o módulo path do node.js
const HtmlWebpackPlugin = require("html-webpack-plugin"); //importando o plugin html-webpack-plugin

module.exports = {
    entry: "./index.js", //ponto de entrada do webpack(app)

    //config de saída
    output: {
        //caminho absoluto para o diretório de saída
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    //config do modulo
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/, //expressão regular para arquivos js e jsx
                exclude: /node_modules/, //excluindo a pasta node_modules
                use: {
                    loader: "babel-loader" //usando o babel-loader para transpilar o código
                },  
            },
        ],
    },
    //lista de plugins do webpack
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", //arquivo html de template
        })
    ],

    //config de resolução de módulos
    resolve: {
        extensions: [".js", ".jsx"], //extensões de arquivos que o webpack irá resolver
    },

    //config do servidor de desenvolvimento
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), //diretório de arquivos estáticos
        },
        port: 3000, //porta do servidor de desenvolvimento
    },
};