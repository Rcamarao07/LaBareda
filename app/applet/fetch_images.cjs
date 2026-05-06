const http = require('https');

http.get('https://labareda-smokehouse.eatbu.com/?lang=pt', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const urls = data.match(/https:\/\/[^"'\s]+\.(jpg|jpeg|png|webp)/gi);
    if (urls) {
      console.log(Array.from(new Set(urls)).join('\n'));
    } else {
      console.log('No images found');
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
