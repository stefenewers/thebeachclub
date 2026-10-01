#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ARCHIVE="$ROOT/public/media/concepts/media-pass-01-standalone.zip"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [ ! -f "$ARCHIVE" ]; then
  echo "media archive not found: $ARCHIVE" >&2
  exit 1
fi

unzip -q -o "$ARCHIVE" -d "$TMP"

mkdir -p \
  "$ROOT/public/media/arrival" \
  "$ROOT/public/media/champagne" \
  "$ROOT/public/media/zones" \
  "$ROOT/public/media/people" \
  "$ROOT/public/media/reveal" \
  "$ROOT/public/media/sunset" \
  "$ROOT/public/media/concepts"

cp "$TMP/arrival-valet.webp" "$ROOT/public/media/arrival/valet.webp"
cp "$TMP/champagne-still.webp" "$ROOT/public/media/champagne/still.webp"
cp "$TMP/champagne-bar.webp" "$ROOT/public/media/zones/champagne-bar.webp"
cp "$TMP/cabanas.webp" "$ROOT/public/media/zones/cabanas.webp"
cp "$TMP/dj-terrace.webp" "$ROOT/public/media/zones/dj-terrace.webp"
cp "$TMP/shoreline.webp" "$ROOT/public/media/zones/shore.webp"
cp "$TMP/people.webp" "$ROOT/public/media/people/05.webp"
cp "$TMP/reveal-beach-v3.webp" "$ROOT/public/media/reveal/beach.webp"
cp "$TMP/sunset-crowd.webp" "$ROOT/public/media/sunset/crowd.webp"
cp "$TMP/evening.webp" "$ROOT/public/media/sunset/evening.webp"
cp "$TMP/object-reference.webp" "$ROOT/public/media/concepts/object-reference.webp"

echo "Extracted media-pass-01 standalone previews into public/media."
