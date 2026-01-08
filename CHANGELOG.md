# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
-   **Backgrounds**: Added `hive background ai.png` to the **"Our Story"** (`#story`) and **"Products"** (`#products`) sections.
-   **UI**: Added a white overlay (`bg-white/80`) to textured sections to ensure text readability.
-   **Animation**: Implemented an asymmetric idle loop for the bee animation:
    -   Upon landing, the bee pauses for 4 seconds.
    -   Flaps wings (GIF) for 1.5 seconds.
    -   Repeats the cycle indefinitely.

### Fixed
-   **Bee Landing**: Fixed the visual transition when the bee lands on the melting heart.
    -   Removed the image swap logic causing alignment jumps.
    -   Aligned the flying bee container size (`w-56`) to match the static asset.
    -   Ensured the "flying" GIF remains visible and active after landing to support the idle loop.
-   **Layout**: Restored the original layout and mobile positioning (reverted experimental mobile changes).
-   **Types**: Fixed a TypeScript type error in `translations.ts` by ensuring the English translation object matches the Portuguese structure (added missing `subtitle` property).

### Changed
-   **Assets**: Optimized usage of `bee-wingless.gif` and `bee-wingless00.png` for the animation states.
-   **Internationalization**: Changed the default language to Portuguese (`pt`) for all visitors.
    -   Removed IP-based location detection.
    -   Updated `index.html` language attribute to `pt-BR`.

