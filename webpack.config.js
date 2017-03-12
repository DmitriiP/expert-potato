const path = require('path');


module.exports = {
    entry: "./front/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {test: /\.tsx?$/, use: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
};

