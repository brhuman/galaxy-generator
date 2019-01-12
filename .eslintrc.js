module.exports = { 
    extends: 'airbnb-base',
    // quotes: [2, 'single'],
    globals: {
      SwaggerEditor: false,      
      "$": false,
    },
    env: {
        browser: true
    },
    rules: {
        "linebreak-style": 0
    } 
};