import comp from "/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"The Latest Research from SNOWCOP\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"KO meeting\",\"slug\":\"ko-meeting\",\"link\":\"#ko-meeting\",\"children\":[]}],\"git\":{\"updatedTime\":1732811775000,\"contributors\":[{\"name\":\"kscheidt\",\"username\":\"kscheidt\",\"email\":\"kathi_scheidt@yahoo.de\",\"commits\":1,\"url\":\"https://github.com/kscheidt\"}]},\"filePathRelative\":\"get-started.md\"}")
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
