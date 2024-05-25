import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_j0J_GsFo.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"emailsent/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/emailsent","isIndex":false,"type":"page","pattern":"^\\/emailsent\\/?$","segments":[[{"content":"emailsent","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/emailsent.astro","pathname":"/emailsent","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"favicon.ico","links":[],"scripts":[],"styles":[],"routeData":{"route":"/favicon.ico","isIndex":false,"type":"endpoint","pattern":"^\\/favicon\\.ico\\/?$","segments":[[{"content":"favicon.ico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/favicon.ico.ts","pathname":"/favicon.ico","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"manifest.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/manifest.json","isIndex":false,"type":"endpoint","pattern":"^\\/manifest\\.json\\/?$","segments":[[{"content":"manifest.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/manifest.json.ts","pathname":"/manifest.json","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"test/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.html","pathname":"/test","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DnKHv-gp.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://warnockcabinetry.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/Jay/Desktop/wornock-wood-site/astro-site/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jay/Desktop/wornock-wood-site/astro-site/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jay/Desktop/wornock-wood-site/astro-site/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jay/Desktop/wornock-wood-site/astro-site/src/pages/emailsent.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jay/Desktop/wornock-wood-site/astro-site/src/pages/gallery.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jay/Desktop/wornock-wood-site/astro-site/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jay/Desktop/wornock-wood-site/astro-site/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/emailsent@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/gallery@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_DI2lo80X.mjs","/Users/Jay/Desktop/wornock-wood-site/astro-site/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Hb05nn4I.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DhLtkLcX.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_COAycHx1.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_unevOrpk.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_CKYNpEAy.mjs","\u0000@astro-page:src/pages/emailsent@_@astro":"chunks/emailsent_DMp5oCES.mjs","\u0000@astro-page:src/pages/favicon.ico@_@ts":"chunks/favicon_CKhMzBkp.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"chunks/gallery_Br_SmqHY.mjs","\u0000@astro-page:src/pages/manifest.json@_@ts":"chunks/manifest_DIXBsere.mjs","\u0000@astro-page:src/pages/test@_@html":"chunks/test_D36pFkU_.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_B_gqwvvI.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DHLHqwaf.js","astro:scripts/page.js":"_astro/page.DnKHv-gp.js","/astro/hoisted.js?q=1":"_astro/hoisted.Bj-zPPOd.js","@astrojs/react/client.js":"_astro/client.BgH6ih4s.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/favicon.BlB2lusJ.png","/_astro/favicon.c75WWory.svg","/_astro/about.DDinxIoZ.css","/_astro/gallery.-XeG6wgM.css","/_astro/index.Bo2WCP2Y.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16-dark.png","/favicon-16x16.png","/favicon-32x32-dark.png","/favicon-32x32.png","/favicon-48x48-dark.png","/favicon-48x48.png","/favicon-dark.ico","/favicon.ico","/favicon.svg","/manifest.webmanifest","/mstile-150x150.png","/safari-pinned-tab.svg","/yandex-browser-50x50.png","/yandex-browser-manifest.json","/_astro/_commonjsHelpers.Cpj98o6Y.js","/_astro/client.BgH6ih4s.js","/_astro/hoisted.B0KprVdt.css","/_astro/hoisted.Bj-zPPOd.js","/_astro/hoisted.DHLHqwaf.js","/_astro/lottie.aXDALlIb.js","/_astro/lottie_light.B_UoZgEC.js","/_astro/page.DnKHv-gp.js","/js/splide.min.js","/socIcons/_ionicons_svg_logo-facebook.svg","/socIcons/_ionicons_svg_logo-instagram.svg","/styles/splide.min.css","/_astro/page.DnKHv-gp.js","/404.html","/about/index.html","/contact/index.html","/emailsent/index.html","/favicon.ico","/gallery/index.html","/manifest.json","/test/index.html","/index.html"],"buildFormat":"directory"});

export { manifest };
