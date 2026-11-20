<template>
  <footer class="snowcop-privacy-footer" aria-label="Copyright and privacy information">
    <p v-if="pageAuthors.length" class="snowcop-copyright__authors">
      Page authors:
      <span v-for="(author, index) in pageAuthors" :key="index">
        <span v-if="index">; </span>
        <a v-if="author.url" :href="author.url">{{ author.name }}</a>
        <span v-else>{{ author.name }}</span>
        <span v-if="author.affiliation"> ({{ author.affiliation }})</span>
      </span>
    </p>
    <p>© 2026 respective SNOWCOP contributors and rights holders.</p>
    <p>
      Original website text, unless otherwise indicated:
      <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
      Other materials retain their stated licences and credits.
    </p>
    <p>
      <a :href="$withBase('/copyright/')">Copyright, licensing and credits</a>
    </p>

    <nav aria-label="Privacy notices">
      <a :href="$withBase('/privacy/')">Privacy and cookies</a>
      <span class="separator" aria-hidden="true">|</span>
      <a :href="$withBase('/open-call/privacy/')">Privacy information for applicants</a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'SnowcopPrivacyFooter',
  computed: {
    pageAuthors () {
      const raw = this.$page && this.$page.frontmatter
        ? this.$page.frontmatter.authors
        : null
      const list = Array.isArray(raw) ? raw : (raw ? [raw] : [])
      return list.map(entry => {
        if (typeof entry === 'string') return { name: entry.trim() }
        if (!entry || typeof entry !== 'object') return null
        const name = typeof entry.name === 'string' ? entry.name.trim() : ''
        if (!name) return null
        const url = typeof entry.url === 'string' && /^https?:\/\//i.test(entry.url)
          ? entry.url
          : ''
        return {
          name,
          url,
          affiliation: typeof entry.affiliation === 'string' ? entry.affiliation : ''
        }
      }).filter(entry => entry && entry.name)
    }
  }
}
</script>

<style scoped>
.snowcop-privacy-footer {
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid #e6e9ee;
  padding: 1.25rem 1rem;
  color: #526273;
  background: #fff;
  font-size: 0.875rem;
  line-height: 1.6;
  text-align: center;
  overflow-wrap: anywhere;
}
.snowcop-privacy-footer p { margin: 0.25rem 0; }
.snowcop-copyright__authors { color: #233446; }
.snowcop-privacy-footer nav {
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.4rem 0.75rem;
}
.snowcop-privacy-footer a {
  color: #b4160e;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  overflow-wrap: anywhere;
}
.snowcop-privacy-footer a:focus-visible {
  outline: 3px solid #233446;
  outline-offset: 4px;
}
@media (max-width: 420px) {
  .snowcop-privacy-footer nav {
    flex-direction: column;
    align-items: center;
  }
  .separator {
    display: none;
  }
}
</style>
