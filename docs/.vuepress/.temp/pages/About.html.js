import comp from "/home/kscheidt/Documents/Website-SNOWCOP/SNOWCOP/docs/.vuepress/.temp/pages/About.html.vue"
const data = JSON.parse("{\"path\":\"/About.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1733492772000,\"contributors\":[{\"name\":\"kscheidt\",\"username\":\"kscheidt\",\"email\":\"kathi_scheidt@yahoo.de\",\"commits\":2,\"url\":\"https://github.com/kscheidt\"}]},\"filePathRelative\":\"About.md\"}")
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
