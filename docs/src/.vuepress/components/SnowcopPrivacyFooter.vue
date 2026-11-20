<template>
  <footer class="snowcop-privacy-footer" aria-label="Privacy information">
    <nav aria-label="Privacy notices">
      <a :href="$withBase('/privacy/')">Privacy and cookies</a>
      <span class="separator" aria-hidden="true">|</span>
      <a :href="$withBase('/open-call/privacy/')">Privacy information for applicants</a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'SnowcopPrivacyFooter'
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
}
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
