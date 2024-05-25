import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DI2lo80X.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DhLtkLcX.mjs');
const _page1 = () => import('./chunks/404_COAycHx1.mjs');
const _page2 = () => import('./chunks/about_unevOrpk.mjs');
const _page3 = () => import('./chunks/contact_CKYNpEAy.mjs');
const _page4 = () => import('./chunks/emailsent_DMp5oCES.mjs');
const _page5 = () => import('./chunks/favicon_CKhMzBkp.mjs');
const _page6 = () => import('./chunks/gallery_Br_SmqHY.mjs');
const _page7 = () => import('./chunks/manifest_DIXBsere.mjs');
const _page8 = () => import('./chunks/test_D36pFkU_.mjs');
const _page9 = () => import('./chunks/index_B_gqwvvI.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/emailsent.astro", _page4],
    ["src/pages/favicon.ico.ts", _page5],
    ["src/pages/gallery.astro", _page6],
    ["src/pages/manifest.json.ts", _page7],
    ["src/pages/test.html", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3538aa50-a115-4161-9a2e-cdf4a66200e2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
