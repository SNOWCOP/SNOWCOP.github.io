import comp from "/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/our-project.html.vue"
const data = JSON.parse("{\"path\":\"/our-project.html\",\"title\":\"Our Project\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1732811775000,\"contributors\":[{\"name\":\"kscheidt\",\"username\":\"kscheidt\",\"email\":\"kathi_scheidt@yahoo.de\",\"commits\":1,\"url\":\"https://github.com/kscheidt\"}]},\"filePathRelative\":\"our-project.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
