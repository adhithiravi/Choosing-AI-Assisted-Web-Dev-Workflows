# My Agenda: acceptance criteria

Feature: attendees save the sessions they plan to attend.

| # | Criterion | Expected behavior | Example from the real data |
| --- | --- | --- | --- |
| AC1 | Add and remove | An attendee can save a session to My Agenda and remove it again. | Add *Design Tokens at Scale*, then remove it. |
| AC2 | Overlap prevention | A session that overlaps one already in My Agenda can't be added. | With *Design Tokens at Scale* (10:00–11:00) saved, *Hands-on: Testing AI-Generated Components* (10:30–11:30) is blocked. |
| AC3 | Conflict feedback | A clear message explains why, names the conflicting session, and is announced to screen readers. | "Conflicts with Design Tokens at Scale (10:00–11:00 AM)" |
| AC4 | Back-to-back sessions | Sessions that only touch at a boundary are allowed. | *Design Tokens at Scale* (10:00–11:00) and *Accessible Interactions by Default* (11:00–12:00) can both be saved. |
| AC5 | Real data | My Agenda uses the app's session data via `useConferenceData()`. No copied or mock data. | |
| AC6 | Keyboard and responsive | Every action works with the keyboard alone, and the layout works at mobile (390px) and desktop widths. | |

Overlap rule: two sessions conflict when `a.start < b.end && b.start < a.end` (half-open intervals).
