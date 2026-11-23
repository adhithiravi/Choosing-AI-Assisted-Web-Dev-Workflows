# Project constraints checklist: My Agenda

Fill in during Module 1, Clip 3. Record evidence from the artifacts, not opinions.
Importance: High / Medium / Low. Implication: one line about what it means for choosing a workflow. Don't choose a workflow yet.

| Constraint | Evidence (artifact + observation) | Importance | Implication |
| --- | --- | --- | --- |
| Business logic | | | |
| Component reuse | | | |
| Data integration | | | |
| Design fidelity | | | |
| Accessibility | | | |
| Responsiveness | | | |
| Existing architecture | | | |
| Maintainability | | | |
| Validation requirements | | | |
| Delivery effort | | | |

---

## Completed version (for the demo / course files)

| Constraint | Evidence (artifact + observation) | Importance | Implication |
| --- | --- | --- | --- |
| Business logic | Lovable prototype saved *Design Tokens at Scale* (10:00–11:00) **and** *Testing AI-Generated Components* (10:30–11:30). No conflict check exists. | High | Specify the overlap rule explicitly, including back-to-back, and test it. |
| Component reuse | Starter has `SessionCard` (with an `actions` slot) and `Button`. Prototype ships its own `AgendaSessionCard` and `ui/button`. | High | Reuse, don't regenerate. Generated UI must be mapped onto existing components. |
| Data integration | Starter loads `/api/sessions.json` through `useConferenceData()`. Prototype uses a hardcoded `mockSessions.ts` with a different shape (`"10:00 AM"` strings, `speaker` string). | High | Use the existing session data and types. Prototype data can't be carried over. |
| Design fidelity | Figma defines default, saved, and conflict states, plus the My Agenda panel. | Medium | Use Figma as the visual reference for states and messaging. |
| Accessibility | Prototype: buttons are reachable by keyboard, but there's no conflict message at all, and the "Added" toast isn't announced. | High | Test keyboard-only flow and confirm the conflict message is announced (live region). |
| Responsiveness | Figma has a 390px mobile frame. Starter already collapses the schedule grid below 640px. | Medium | Verify at mobile and desktop. Follow existing breakpoints. |
| Existing architecture | Starter: CSS Modules + tokens, data via hook, pages/components split. Prototype: Tailwind, single page, local state. | High | Implementation must follow the starter's architecture, not the prototype's. |
| Maintainability | Prototype duplicates card/button and mixes data, logic, and UI in one file. | Medium | Keep conflict logic in a small, testable function. |
| Validation requirements | Acceptance criteria AC1–AC6 include an edge case (back-to-back) and accessibility. | High | Plan automated tests for the conflict rule plus manual keyboard/screen reader checks. |
| Delivery effort | Prototype took minutes, but needs logic, data, component, and accessibility rework before it could ship. | Medium | Measure time to a validated feature in this app, not time to first screen. |

**High-importance rows that will drive Module 2:** business logic, component reuse, data integration, existing architecture, accessibility, validation.
