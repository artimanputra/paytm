

// const JWT_SECRET= "artisecret"

// module.exports={JWT_SECRET}

// config.js
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'your_fallback_secret_key'
 };
 