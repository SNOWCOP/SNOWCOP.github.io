import comp from "/home/kscheidt/Documents/Website-SNOWCOP/SNOWCOP/docs/.vuepress/.temp/pages/News.html.vue"
const data = JSON.parse("{\"path\":\"/News.html\",\"title\":\"News\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Output 1\",\"slug\":\"output-1\",\"link\":\"#output-1\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"News.md\"}")
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
