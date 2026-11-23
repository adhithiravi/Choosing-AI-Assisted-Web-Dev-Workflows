# Lovable prompt for the My Agenda prototype

Paste this into a new Lovable project. It's written the way a product team exploring an idea would write it: it describes the experience, **not** the scheduling rule. Don't add anything about overlapping sessions or conflicts, or Lovable may implement them and the M1 defect demo won't work.

---

Build a single-page prototype for "Horizon Web Conf", a one-day web development conference.

Attendees should be able to browse the conference sessions and build their own personal agenda called **My Agenda**.

- Show a list of session cards. Each card shows the track (as a colored badge), title, short description, start and end time, room, and speaker.
- Each card has an "Add to My Agenda" button. When a session is added, the card gets a highlighted state and the button changes to "Added". Clicking it again removes the session.
- Show a My Agenda panel on the right side (below the list on mobile) listing the saved sessions in time order, each with a small remove button.
- Show a count of saved sessions in the header.
- Show a short toast when a session is added or removed.
- Use a clean, modern, friendly style.

Use these sessions as sample data:

| Title | Speaker | Track | Room | Time |
| --- | --- | --- | --- | --- |
| Keynote: Shipping the Web in the Age of AI | Maya Lindqvist | Keynote | Hall A | 8:30–9:15 AM |
| React Server Components in Practice | Daniel Okafor | Frontend | Room 201 | 9:30–10:00 AM |
| Design Tokens at Scale | Lucas Ferreira | Design Systems | Hall A | 10:00–11:00 AM |
| Hands-on: Testing AI-Generated Components | Kenji Watanabe | AI & Tooling | Room 202 | 10:30–11:30 AM |
| Accessible Interactions by Default | Sofia Martínez | Frontend | Room 201 | 11:00 AM–12:00 PM |
| Evaluating LLM Output in CI | Kenji Watanabe | AI & Tooling | Hall A | 1:00–2:00 PM |
| Building a Component Library Your Team Will Use | Lucas Ferreira | Design Systems | Room 202 | 2:00–3:00 PM |
| Closing Panel: What Should We Still Write by Hand? | Maya Lindqvist, Hannah Weiss, Sofia Martínez | Keynote | Hall A | 3:15–4:00 PM |

---

## After generating, check before recording

1. Add *Design Tokens at Scale*, then *Hands-on: Testing AI-Generated Components*. Both should save. (If Lovable blocks it, regenerate or edit the code to remove the check. Otherwise slide 10 is wrong.)
2. Open Code view and confirm sessions are a hardcoded array in the project.
3. Note the name of the card and button components it created; update the M1 script if they differ from `AgendaSessionCard` and `components/ui/button`.
4. Tab through the page with the keyboard and note what the toast does for screen readers.
