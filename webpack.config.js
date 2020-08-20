const path = require("path");

module.exports = {
    entry: ["webpack/hot/poll?100", "./src/main.ts"],
    optimization: {
        minimize: false,
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "server.js",
    },
};
