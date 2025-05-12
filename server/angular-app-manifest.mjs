
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5JOAQK6A.js",
      "chunk-DKAK5SIV.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7BIZWU3.js",
      "chunk-DKAK5SIV.js"
    ],
    "route": "/info"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JLMMYBPC.js"
    ],
    "route": "/tickets"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ILTMOHBK.js",
      "chunk-VAYTTDHK.js",
      "chunk-DKAK5SIV.js"
    ],
    "route": "/standhouders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TBZ4HOZ4.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TDX6TXYX.js"
    ],
    "route": "/reglement"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3QRP5JPN.js"
    ],
    "route": "/reglement-standhouder"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VEUJLJ42.js",
      "chunk-VAYTTDHK.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24124, hash: '6ad6f61e68c6706c158a7b0c635218e5e960b99c6c8a36d42eff2d7029b78766', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17502, hash: 'd26ac50769b7cad8ecca8cae7aefe938506f3f36957b9e7a94e975691319abd2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'info/index.html': {size: 42095, hash: '55bd51f2b68126c980d010fc3f064f6e4e60bdce4a4291d06c159261c9c137a5', text: () => import('./assets-chunks/info_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 41883, hash: '0db37fdd49f827d4dd086eec32e8c4695c6c85a6868fc3835375d41d59a4f174', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tickets/index.html': {size: 32616, hash: '10f4fa403c214cbe48015a90c419543ec0a2a02430438c11fbf12adf22564e5b', text: () => import('./assets-chunks/tickets_index_html.mjs').then(m => m.default)},
    'reglement/index.html': {size: 42688, hash: 'ba69b39a423c0f454e868297e70f633b8c3b6c1d96647ae24b35f5a5de6e1f79', text: () => import('./assets-chunks/reglement_index_html.mjs').then(m => m.default)},
    'reglement-standhouder/index.html': {size: 37830, hash: '77913929b6e9455eae5857126f901636f2e7223ecd56ef58f107127358d98e3b', text: () => import('./assets-chunks/reglement-standhouder_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 92346, hash: '13f8f04a6cdc0defbabf900ec551ed650cb56eeac1e86b00d0f41255b84dc339', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 38095, hash: 'f9a848b039c5a1a4e0a7335e55ad189b1f14441e0f9f61e6646b61c4c363fbcf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'standhouders/index.html': {size: 144586, hash: 'f52054f44568846ed2d3132aa58e5cf77de567c2b3cd6d1d19ed3b828061bab3', text: () => import('./assets-chunks/standhouders_index_html.mjs').then(m => m.default)},
    'styles-EGDZBIIY.css': {size: 8757, hash: 'AfFWrsRa2EE', text: () => import('./assets-chunks/styles-EGDZBIIY_css.mjs').then(m => m.default)}
  },
};
