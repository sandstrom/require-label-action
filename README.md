# Require PR label

Enforce choosing label before merging PR. Usefull for generating automatic changelog and release notes with `github-release-notes`

## Example:

```yaml
name: Require PR label

on: [pull_request]

jobs:
  require-label:
    runs-on: ubuntu-latest
    steps:
    - uses: yogevbd/require-label-action@master
      with:
        valid-labels: ["bug", "enhancement", "feature"]
```
