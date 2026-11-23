import { Check, Clock, MapPin, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ConferenceSession } from "@/data/mockSessions";

interface AgendaSessionCardProps {
  session: ConferenceSession;
  isSaved: boolean;
  onToggle: (session: ConferenceSession) => void;
}

const trackColors: Record<string, string> = {
  Keynote: "bg-slate-900 text-white",
  Frontend: "bg-sky-100 text-sky-800",
  "AI & Tooling": "bg-fuchsia-100 text-fuchsia-800",
  "Design Systems": "bg-orange-100 text-orange-800",
};

const AgendaSessionCard = ({ session, isSaved, onToggle }: AgendaSessionCardProps) => {
  return (
    <div
      className={`rounded-xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${
        isSaved ? "border-emerald-400 ring-1 ring-emerald-200" : "border-slate-200"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              trackColors[session.track] ?? "bg-slate-100 text-slate-700"
            }`}
          >
            {session.track}
          </span>
          <h3 className="text-lg font-semibold text-slate-900">{session.title}</h3>
          <p className="text-sm text-slate-600">{session.description}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {session.startTime} – {session.endTime}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {session.room}
        </span>
        <span className="flex items-center gap-1">
          <User className="h-4 w-4" />
          {session.speaker}
        </span>
      </div>

      <div className="mt-4">
        <Button
          variant={isSaved ? "secondary" : "default"}
          size="sm"
          onClick={() => onToggle(session)}
        >
          {isSaved ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {isSaved ? "Added" : "Add to My Agenda"}
        </Button>
      </div>
    </div>
  );
};

export default AgendaSessionCard;
