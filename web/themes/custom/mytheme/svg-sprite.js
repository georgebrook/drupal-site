// Use CommonJS syntax for Webpack entry
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./images/icons', false, /\.svg$/));
