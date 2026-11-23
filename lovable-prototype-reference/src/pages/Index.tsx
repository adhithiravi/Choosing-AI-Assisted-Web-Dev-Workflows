import { useState } from "react";
import { CalendarHeart, Sparkles, X } from "lucide-react";
import AgendaSessionCard from "@/components/AgendaSessionCard";
import { Button } from "@/components/ui/button";
import { mockSessions, type ConferenceSession } from "@/data/mockSessions";

const Index = () => {
  const [myAgenda, setMyAgenda] = useState<ConferenceSession[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const toggleSession = (session: ConferenceSession) => {
    if (myAgenda.find((s) => s.id === session.id)) {
      setMyAgenda(myAgenda.filter((s) => s.id !== session.id));
      showToast("Removed from My Agenda");
    } else {
      setMyAgenda([...myAgenda, session]);
      showToast("Added to My Agenda 🎉");
    }
  };

  const sortedAgenda = [...myAgenda].sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-slate-900">Horizon Web Conf</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
            <CalendarHeart className="h-4 w-4" />
            My Agenda ({myAgenda.length})
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <section>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Build your agenda</h1>
          <p className="mt-2 text-slate-600">
            Browse sessions and save the ones you don't want to miss.
          </p>

          <div className="mt-8 space-y-4">
            {mockSessions.map((session) => (
              <AgendaSessionCard
                key={session.id}
                session={session}
                isSaved={!!myAgenda.find((s) => s.id === session.id)}
                onToggle={toggleSession}
              />
            ))}
          </div>
        </section>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <CalendarHeart className="h-5 w-5 text-indigo-600" />
            My Agenda
          </h2>

          {sortedAgenda.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">
              No sessions yet. Tap “Add to My Agenda” on any session.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {sortedAgenda.map((session) => (
                <li
                  key={session.id}
                  className="flex items-start justify-between gap-2 rounded-lg bg-slate-50 p-3"
                >
                  <div>
                    <p className="text-xs font-medium text-indigo-600">
                      {session.startTime} – {session.endTime}
                    </p>
                    <p className="text-sm font-medium text-slate-900">{session.title}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => toggleSession(session)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </main>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
};

export default Index;
