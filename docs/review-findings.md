# Code Review Findings

## Typographical issue
- **Problem**: The heading in the legacy business formation info section spells the firm's name as "Esquiyaslaw" instead of the consistent "Esquivel & Asociados" used elsewhere.
- **Suggested task**: Update the heading copy in `src/Legacybusinesshome/InfoSection.jsx` to use the correct firm name.

## Functional bug
- **Problem**: `ClientCodeModal` passes a zero-argument `handleClose` to `Dialog`'s `onOpenChange`. Radix UI calls this handler with the desired `open` state, so the modal immediately closes even when the library tries to open it.
- **Suggested task**: Adjust the modal's `onOpenChange` handler to respect the `open` boolean (closing only when `false`) so the dialog can stay open when triggered.

## Documentation discrepancy
- **Problem**: The README only references English and Spanish support, but the codebase ships full Italian translations and pages.
- **Suggested task**: Update `README.md` (and any related docs) to mention Italian support and reflect the current folder structure (`it` locale files and pages).

## Test improvement
- **Problem**: The routing logic inside `LanguageSwitcher` that rewrites URLs per language prefix is untested, even though it handles several edge cases.
- **Suggested task**: Extract the path rewriting logic into a pure helper and cover it with unit tests (e.g., Vitest) to ensure English prefixes are removed and Spanish/Italian prefixes are added or replaced correctly.
