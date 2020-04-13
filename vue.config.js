module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                target: 'http://localhost:8081',
                // changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    }
}