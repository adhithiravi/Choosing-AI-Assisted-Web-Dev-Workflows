# Module 1: Assess Project Requirements and Artifacts

Branch `m1` of **Choosing AI-Assisted Web Development Workflows**. This is everything you need for Module 1's demos.

## What's here

| Folder / file | What it is |
| --- | --- |
| `conference-planner/` | The existing conference app (React + TypeScript + Vite). It has a schedule, speakers, and tracks, but no My Agenda yet. |
| `conference-planner/docs/acceptance-criteria.md` | My Agenda acceptance criteria (AC1–AC6) |
| `conference-planner/docs/constraints-checklist.md` | The constraints checklist: a blank table to fill in, plus a completed version |
| `figma-design-reference/` | The My Agenda design: saved, conflict, agenda, and mobile states |
| `lovable-prompt.md` | The prompt used to generate the My Agenda prototype in Lovable |
| `lovable-prototype-reference/` | A copy of that prototype's code, so you can run and inspect it locally |

## Run the app

```bash
cd conference-planner
npm install
npm run dev      # http://localhost:5173
npm test
```

## Run the prototype

```bash
cd lovable-prototype-reference
npm install
npm run dev      # http://localhost:8080
```

Or paste `lovable-prompt.md` into a new Lovable project to generate your own. Its output varies, so check that it lets you save two overlapping sessions (the gap we examine in Clip 2).

## The sessions to watch

| | Session | Time |
| --- | --- | --- |
| A | Design Tokens at Scale | 10:00–11:00 AM |
| B | Hands-on: Testing AI-Generated Components | 10:30–11:30 AM |
| C | Accessible Interactions by Default | 11:00 AM–12:00 PM |

A and B overlap, so adding both must be blocked. A and C are back-to-back, so both must be allowed.

## Next

Module 2 continues on the [`m2`](../../tree/m2) branch.
