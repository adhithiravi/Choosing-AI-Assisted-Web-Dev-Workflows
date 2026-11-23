# Horizon Web Conf 2026: Conference Session Planner (starter)

The existing conference website for the capstone in **Choosing AI-assisted Web Development Workflows**.
It shows the schedule, speakers, tracks, and rooms. It does **not** have a My Agenda feature yet: that's what the course adds.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # Vitest + Testing Library
npm run build    # type-check + production build
```

Requires Node 20.19 or later.

## Project layout

```
public/api/
  sessions.json          ← the conference API (served as static JSON)
  speakers.json
src/
  api/conferenceApi.ts   ← the only place that fetches data
  hooks/useConferenceData.ts
  types/conference.ts    ← Session, Speaker, Track types
  utils/time.ts          ← time formatting in conference time (America/Chicago)
  components/
    Button/              ← shared button: primary | secondary | ghost, sm | md
    SessionCard/         ← shared session card with `actions` and `children` slots
    Header/
    TrackFilter/
  pages/
    SchedulePage.tsx     ← sessions grouped by start time, filterable by track
    SpeakersPage.tsx
  styles/
    tokens.css           ← design tokens (colors, spacing, radius, type)
    global.css
docs/
  acceptance-criteria.md
  constraints-checklist.md
```

## Conventions

- **Data:** components never import or hardcode session data. Everything comes through `useConferenceData()`.
- **Components:** use `Button` and `SessionCard`. Don't create one-off buttons or cards.
- **Styling:** CSS Modules plus the tokens in `styles/tokens.css`. No hardcoded colors.
- **Time:** sessions are half-open intervals `[start, end)` stored as ISO 8601 strings with an offset. Display them with `utils/time.ts` so they always show in conference time.
- **Accessibility:** interactive elements are real buttons, keyboard reachable, with visible focus. Status changes that matter must be announced, not just shown.

## Sessions worth knowing for the demos

| Label in course | Session | Time | Room |
| --- | --- | --- | --- |
| Session A | Design Tokens at Scale (`s04`) | 10:00–11:00 AM | Hall A |
| Session B | Hands-on: Testing AI-Generated Components (`s05`) | 10:30–11:30 AM | Room 202 |
| Session C | Accessible Interactions by Default (`s06`) | 11:00 AM–12:00 PM | Room 201 |

A + B overlap (must be blocked). A + C are back-to-back (must be allowed).
