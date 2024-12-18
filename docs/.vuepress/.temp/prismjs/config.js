import "/home/cmarin@eurac.edu/SNOWCOP.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/home/cmarin@eurac.edu/SNOWCOP.github.io/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/home/cmarin@eurac.edu/SNOWCOP.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/home/cmarin@eurac.edu/SNOWCOP.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/home/cmarin@eurac.edu/SNOWCOP.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/home/cmarin@eurac.edu/SNOWCOP.github.io/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
