const imgur_uploader = require('./imgur_uploader');
imgur_uploader('a.png','imgur client ID').then((url)=>console.log(url), (err)=>console.log('error'));
