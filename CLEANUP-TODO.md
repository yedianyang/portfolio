# Remaining Unused Files — Cleanup Checklist

## Definitely Unused (Safe to Delete)

| File / Directory | Reason |
|---|---|
| `_sass/1-tools/animations/` (11 files) | Animation classes never used anywhere |
| `_sass/1-tools/_spinner.scss` | `.loader` class never referenced |
| `_sass/1-tools/_icon-font.scss` | Custom icon font unused; site uses Font Awesome CDN |
| `_sass/1-tools/_fonts.scss` | No custom fonts; site uses Google Fonts |
| `_sass/3-sections/_blog.sass` | No blog on the site |
| `_sass/3-sections/_image.sass` | For deleted `image.html` include |
| `_includes/image.html` | No files reference this include |
| `_layouts/post.html` | Identical to `project.html` — duplicate |
| jQuery in `default.html` | No JS anywhere on the site |
| `questions.txt` | Replaced by `pages/questions.md` |

## Possibly Unused (Needs Refactoring)

| File / Directory | Reason |
|---|---|
| `_sass/1-tools/bourbon/` (68 files, 116KB) | Only 5 mixins actually used: `clearfix`, `position`, `display`, `align-items`, `justify-content`, `size`. Could replace with pure CSS. |

## Summary

- **Quick win:** ~15 files, ~75KB of dead code can be deleted right now
- **Bigger refactor:** Replace Bourbon with inline CSS to remove 68 more files (~116KB)
