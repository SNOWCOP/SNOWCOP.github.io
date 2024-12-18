import comp from "/home/cmarin@eurac.edu/SNOWCOP.github.io/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Overall Objective\",\"slug\":\"overall-objective\",\"link\":\"#overall-objective\",\"children\":[]},{\"level\":2,\"title\":\"Methodology\",\"slug\":\"methodology\",\"link\":\"#methodology\",\"children\":[]},{\"level\":2,\"title\":\"CDSE\",\"slug\":\"cdse\",\"link\":\"#cdse\",\"children\":[]},{\"level\":2,\"title\":\"EGNSS snow stations\",\"slug\":\"egnss-snow-stations\",\"link\":\"#egnss-snow-stations\",\"children\":[]},{\"level\":2,\"title\":\"Impacts\",\"slug\":\"impacts\",\"link\":\"#impacts\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about.md\"}")
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
