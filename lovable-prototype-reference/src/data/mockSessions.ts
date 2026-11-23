export interface ConferenceSession {
  id: number;
  title: string;
  speaker: string;
  track: string;
  room: string;
  startTime: string;
  endTime: string;
  description: string;
}

export const mockSessions: ConferenceSession[] = [
  {
    id: 1,
    title: "Keynote: Shipping the Web in the Age of AI",
    speaker: "Maya Lindqvist",
    track: "Keynote",
    room: "Hall A",
    startTime: "8:30 AM",
    endTime: "9:15 AM",
    description: "What changes, and what doesn't, when AI writes a growing share of our code.",
  },
  {
    id: 2,
    title: "React Server Components in Practice",
    speaker: "Daniel Okafor",
    track: "Frontend",
    room: "Room 201",
    startTime: "9:30 AM",
    endTime: "10:00 AM",
    description: "Lessons from migrating a production dashboard to server components.",
  },
  {
    id: 3,
    title: "Design Tokens at Scale",
    speaker: "Lucas Ferreira",
    track: "Design Systems",
    room: "Hall A",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    description: "Keeping five products visually consistent with one token pipeline.",
  },
  {
    id: 4,
    title: "Hands-on: Testing AI-Generated Components",
    speaker: "Kenji Watanabe",
    track: "AI & Tooling",
    room: "Room 202",
    startTime: "10:30 AM",
    endTime: "11:30 AM",
    description: "Write behavioral tests that catch the mistakes generated code tends to make.",
  },
  {
    id: 5,
    title: "Accessible Interactions by Default",
    speaker: "Sofia Martínez",
    track: "Frontend",
    room: "Room 201",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    description: "Keyboard support, focus management, and live regions.",
  },
  {
    id: 6,
    title: "Evaluating LLM Output in CI",
    speaker: "Kenji Watanabe",
    track: "AI & Tooling",
    room: "Hall A",
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    description: "Gate generated code with tests, lint, and review.",
  },
  {
    id: 7,
    title: "Building a Component Library Your Team Will Use",
    speaker: "Lucas Ferreira",
    track: "Design Systems",
    room: "Room 202",
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    description: "Adoption, documentation, and API design for shared components.",
  },
  {
    id: 8,
    title: "Closing Panel: What Should We Still Write by Hand?",
    speaker: "Maya Lindqvist, Hannah Weiss, Sofia Martínez",
    track: "Keynote",
    room: "Hall A",
    startTime: "3:15 PM",
    endTime: "4:00 PM",
    description: "Where AI assistance helps, where it hurts, and where it doesn't belong.",
  },
];
