const https = require('https');

const routes = [
  '/',
  '/accommodation',
  '/accommodation/cottages',
  '/accommodation/rooms',
  '/accommodation/camping',
  '/experiences',
  '/experiences/winter',
  '/experiences/summer',
  '/sauna-and-relaxation',
  '/cafe-and-gatherings',
  '/gallery',
  '/location',
  '/reservations',
  '/contact',
  '/privacy',
  '/terms'
];

const baseUrl = 'https://holiday-village-kuukiuru.pages.dev';

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const hasTitle = data.includes('Kuura Riverside Resort');
        const hasRoot = data.includes('id="root"');
        resolve({ url, status: res.statusCode, hasTitle, hasRoot, length: data.length });
      });
    }).on('error', (e) => {
      resolve({ url, status: 'ERROR', error: e.message });
    });
  });
}

(async () => {
  console.log(`Checking live deployment at: ${baseUrl}`);
  let allPass = true;
  for (const r of routes) {
    const fullUrl = `${baseUrl}${r}`;
    const result = await checkUrl(fullUrl);
    console.log(`[${result.status}] ${result.url} - Title: ${result.hasTitle}, SPA Root: ${result.hasRoot}, Size: ${result.length} bytes`);
    if (result.status !== 200 || !result.hasTitle || !result.hasRoot) {
      allPass = false;
    }
  }
  if (allPass) {
    console.log('\n>>> ALL 16 ROUTES RETURNED 200 OK WITH VALID SPA ROOT HTML! <<<');
  } else {
    console.log('\n>>> SOME ROUTES FAILED <<<');
  }
})();
