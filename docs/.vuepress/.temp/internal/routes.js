export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/kscheidt/Documents/Website-SNOWCOP/SNOWCOP/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/kscheidt/Documents/Website-SNOWCOP/SNOWCOP/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/our-project.html", { loader: () => import(/* webpackChunkName: "our-project.html" */"/home/kscheidt/Documents/Website-SNOWCOP/SNOWCOP/docs/.vuepress/.temp/pages/our-project.html.js"), meta: {"title":"Our Project"} }],
  ["/guide/assets.html", { loader: () => import(/* webpackChunkName: "guide_assets.html" */"/home/kscheidt/Documents/Website-SNOWCOP/SNOWCOP/docs/.vuepress/.temp/pages/guide/assets.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/kscheidt/Documents/Website-SNOWCOP/SNOWCOP/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
