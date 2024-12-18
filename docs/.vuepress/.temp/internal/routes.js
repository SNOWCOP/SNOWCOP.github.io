export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/Team.html", { loader: () => import(/* webpackChunkName: "Team.html" */"/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/Team.html.js"), meta: {"title":"Team"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About"} }],
  ["/get-started%20copy.html", { loader: () => import(/* webpackChunkName: "get-started copy.html" */"/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/get-started copy.html.js"), meta: {"title":"Get Started"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"The Latest Research from SNOWCOP"} }],
  ["/guide/assets.html", { loader: () => import(/* webpackChunkName: "guide_assets.html" */"/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/guide/assets.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
