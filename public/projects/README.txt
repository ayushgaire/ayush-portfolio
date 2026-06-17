==============================================
  Optional: Add client screenshots
==============================================

The new Krystal-Klean and Namaste Kalika cards on
the /client-work page work right now — they show a
styled beige card with the client name (fallback).

To replace the fallback with real screenshots:

1. Take a homepage screenshot of each site:
   - https://www.krystal-klean.com/
   - https://www.namastekalika.com/

   Tip on macOS: open the site, then press
   Cmd+Shift+4 then Space, then click the browser
   window to capture just the visible page.

2. Save them with these exact filenames in this
   folder (public/projects/):
   - krystal-klean.jpg
   - namaste-kalika.jpg

3. Recommended size: ~1280x800. Keep file size
   under 1MB for fast loading (use an image
   compressor like tinypng.com if needed).

That's it. No code changes needed. Just commit
and push:

   git add .
   git commit -m "Add client screenshots"
   git push
