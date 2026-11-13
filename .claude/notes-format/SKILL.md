---
name: notes-formatter
description: Use when the user shares personal dev notes (JavaScript, React, Next.js, Node.js) written in VS Code files with comments and code snippets, and wants them organized/formatted for revision. Only the formatting changes; every comment, code snippet and example stays exactly as written.
---

# Notes Formatter

Goal: make notes easy to revise (clear Q/A, clear bullets, clear sections) WITHOUT changing the content.

## 1. Golden rules (never break)

1. NEVER edit, reword, translate, fix typos in, shorten, or "improve" any existing comment, text, code snippet, or example.
2. NEVER re-indent, reorder lines inside a snippet, rename variables, add/remove semicolons, or run a formatter (Prettier etc.) on snippets.
3. NEVER delete anything. Nothing is "duplicate" or "unnecessary" unless the user says so.
4. NEVER add new explanations, new examples, or new notes of your own. If something looks wrong or unclear, mention it in the chat reply, not in the file.
5. Original language stays (Hinglish/Roman Urdu/English as written).
6. Original order of content stays, unless the user explicitly asks to reorder topics.
7. Code must still work: if the file is .js/.jsx/.ts/.tsx, every line you add must be a valid comment so the file does not break.

## 2. What you ARE allowed to do

Only ADD structure around the existing content:
- Add an icon at the START of an existing line (the text after the icon stays character-for-character the same).
- Add section banners/dividers (as comments) between topics.
- Add blank lines between blocks for breathing space.
- Group related existing lines under a banner, keeping their original order.

## 3. Icon legend

| Icon | Meaning | Applied to |
|------|---------|-----------|
| 📘 | Topic / section title | Banner line for a new topic |
| ❓ | Question | Any line that is a question |
| ✅ | Answer | The line(s) answering that question |
| 🔹 | Bullet point | Every bullet / list item |
| ↳ | Sub-bullet | Nested bullet |
| 💡 | Tip / remember this | Lines already saying "note", "yaad rakho", "important" |
| ⚠️ | Warning / common mistake | Lines already describing a mistake or pitfall |
| 🧪 | Example | Line introducing an existing example |
| 💻 | Code snippet | Line just above an existing code block |
| 🆚 | Comparison | Lines comparing two things (X vs Y) |

Rules for icons:
- Use ONLY icons from this table, so notes stay consistent.
- Pick the icon by what the existing line already is. Do not invent new meaning.
- One icon per line, always at the start, followed by one space, then the untouched original text.
- If the original line already starts with `-`, `*`, `•` or a number, replace only that marker with the icon (keep the number if it is a numbered step, e.g. `1. 🔹 text`).

## 4. Format by file type

Default: keep the user's file type and format inside it.

JS / JSX / TS / TSX / Node files (comments in code):
```js
// ═══════════════════════════════════════════
// 📘 TOPIC NAME (use the topic name already in the notes)
// ═══════════════════════════════════════════

// ❓ original question text here
// ✅ original answer text here
// 🔹 original bullet text here
//   ↳ original sub bullet text here

// 💻 (only if a snippet follows)
<original snippet, untouched>
```
- Block comments `/* ... */` stay block comments; add the icon inside at line start.
- Banner width: keep one consistent width across the whole file.

Markdown (.md) notes: use `##` for topics, `**❓ Question**` / `✅ Answer`, bullets as `- 🔹`, and keep snippets in fenced code blocks with the correct language tag. Original text untouched.

Only convert to another format (HTML, PDF, Markdown) if the user asks.

## 5. Process

1. Read the whole file first. Identify topic boundaries, questions, answers, bullets, snippets.
2. Add structure per sections 2-4. Work top to bottom, never skipping content.
3. Self-check (mandatory): mentally (or with a script) remove everything you added (banners, icons, blank lines). The result must be IDENTICAL to the original. If not, fix it.
   Quick script idea: strip the icon characters from the legend + banner lines from the new file, then `diff` against the original ignoring blank lines.
4. For big files, process in chunks of topics, but keep icon and banner style identical across all chunks.
5. Save as a new file next to the original (e.g. `notes.formatted.js`) unless the user says to overwrite. Never touch the original.

## 6. Reply style

- Reply in the user's language (Roman Urdu/Hinglish).
- Keep the reply short: which file, how many topics formatted, and confirm "content unchanged".
- If you noticed errors or unclear lines, list them separately in chat and ask; do not fix them in the file.