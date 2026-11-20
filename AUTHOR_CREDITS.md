# Maintaining real author credits

The copyright page describes a fallback attribution, but verified individual authors should be credited wherever they are known. Website maintainership, project coordination and a Git commit do not by themselves establish authorship or ownership of all material.

## Page authors

The supplied footer can show an optional `authors` field from a page's YAML front matter. Add it only after confirming the names and institutional credits. These examples are illustrative and must not be copied as actual authors:

```yaml
authors:
  - name: Actual author's name
    affiliation: Actual institution
    url: https://orcid.org/actual-verified-identifier
```

Strings are also supported:

```yaml
authors:
  - Actual first author
  - Actual second author
```

The component also accepts a single string or author object. Names are rendered as text, not HTML. Only HTTP(S) author links are allowed. With no authors metadata the footer does not invent a byline; the public licensing page explains the supplied SNOWCOP project-contributors fallback.

If a page contains multiple contributions, identify the author of each section or figure next to that contribution. A page-level byline does not automatically mean every listed person created every included asset.

## Figures and photographs

Preserve the existing creator, institution, source and licence. Once the actual rights holder has authorised a CC BY 4.0 release, a caption may follow this pattern:

```markdown
Credit: [actual creator], [actual institution].
Source: [original source or DOI].
Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Changes: [describe modifications, if any].
```

Do not use this pattern to assign CC BY to a photograph, publication figure or dataset whose rights are unknown. A credit line alone is not permission to relicense it. Existing open licences remain applicable regardless of the website's default scope.

## Reuse attribution

For CC BY-covered material, retain the supplied author/attribution parties, relevant notices, source and licence link and indicate changes in a manner appropriate to the reuse. The example citation on the public page is guidance, not a compulsory citation format or an additional licence restriction.

For research data and publications, include the recommended DOI/version citation when appropriate; their release-specific licences govern reuse independently of this website's text licence.
