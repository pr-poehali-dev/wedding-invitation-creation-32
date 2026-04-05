import { useState } from "react";
import Icon from "@/components/ui/icon";

const FLORAL_BG = "https://cdn.poehali.dev/projects/14f0c6c9-ffd2-49c3-9383-d09b1d938570/files/a5a9a8a2-dd91-45da-9f35-6f63afb532f4.jpg";

const program = [
  { time: "14:00", event: "Торжественная церемония", icon: "Heart" },
  { time: "15:00", event: "Фотосессия молодых", icon: "Camera" },
  { time: "16:00", event: "Фуршет и встреча гостей", icon: "Wine" },
  { time: "17:30", event: "Банкет и первый танец", icon: "Music" },
  { time: "20:00", event: "Торт и живая музыка", icon: "Star" },
  { time: "23:00", event: "Продолжение праздника", icon: "Sparkles" },
];

const RSVP_URL = "https://functions.poehali.dev/58607415-7327-4889-aaa0-fa79d4fb50d1";

export default function Index() {
  const [form, setForm] = useState({ name: "", guests: "1", attend: "yes", wishes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(RSVP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="wedding-page min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif", background: "#fdf8f4" }}>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${FLORAL_BG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(253,248,244,0.2) 0%, rgba(253,248,244,0.6) 60%, #fdf8f4 100%)" }} />

        {/* Gold decorative lines */}
        <div className="relative z-10 text-center px-6 py-20">
          <p className="tracking-[0.4em] uppercase text-xs mb-8" style={{ color: "#b8965a", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Мы приглашаем вас разделить с нами<br />самый главный день в нашей жизни
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "1.2rem" }}>✦</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 400,
            color: "#3d2c1e",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}>
            Свадьба
          </p>

          <h1 className="mb-0" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 700,
            color: "#3d2c1e",
            lineHeight: 1.05,
            letterSpacing: "0.02em"
          }}>
            Никита &amp; Елизавета
          </h1>

          <div className="flex items-center justify-center gap-4 mt-6 mb-10">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "1.2rem" }}>✦</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, transparent, #c9a96e)" }} />
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
            color: "#3d2c1e",
            fontWeight: 300,
            letterSpacing: "0.1em"
          }}>
            14 · 06 · 2026
          </p>

          <a href="#rsvp" className="inline-block mt-10 px-10 py-3 tracking-[0.25em] uppercase text-xs transition-all duration-300"
            style={{
              border: "1px solid #c9a96e",
              color: "#c9a96e",
              background: "transparent",
              letterSpacing: "0.25em",
              fontWeight: 500,
              textDecoration: "none"
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.background = "#c9a96e";
              (e.target as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = "transparent";
              (e.target as HTMLElement).style.color = "#c9a96e";
            }}
          >
            Подтвердить присутствие
          </a>
        </div>
      </section>

      {/* Date & Venue */}
      <section className="py-20 px-6" style={{ background: "#fff9f5" }}>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Дата и место</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <InfoCard icon="Calendar" title="Дата и время">
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#3d2c1e", fontWeight: 400 }}>
                14 июня 2026
              </p>
              <p className="mt-1" style={{ color: "#9e7c58", fontSize: "1rem" }}>Начало в 14:00</p>
            </InfoCard>

            <InfoCard icon="MapPin" title="Место проведения">
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#3d2c1e", fontWeight: 400 }}>
                Усадьба «Берёзовая роща»
              </p>
              <p className="mt-1" style={{ color: "#9e7c58", fontSize: "0.9rem" }}>Московская область, Красногорск</p>
              <p style={{ color: "#9e7c58", fontSize: "0.9rem" }}>ул. Парковая, 12</p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-20 px-6" style={{ background: "#fdf8f4" }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Программа вечера</SectionTitle>

          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, #e8d5bc, #e8d5bc, transparent)" }} />

            {program.map((item, i) => (
              <div key={i} className={`flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#c9a96e" }}>{item.time}</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", color: "#3d2c1e" }}>{item.event}</p>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10" style={{ background: "#fff9f5", border: "1px solid #e8d5bc" }}>
                  <Icon name={item.icon} size={16} style={{ color: "#c9a96e" }} />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 px-6" style={{ background: "#fff9f5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle>Дресс-код</SectionTitle>

          <p className="mt-8 mb-10" style={{ color: "#7a6045", fontSize: "0.95rem", lineHeight: 1.8 }}>
            Мы будем рады видеть вас в торжественных нарядах в нашей цветовой гамме
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">
            {[
              { color: "#f5e6d3", name: "Пудровый" },
              { color: "#e8d5c0", name: "Шампань" },
              { color: "#c9a96e", name: "Золото" },
              { color: "#8b6f56", name: "Капучино" },
              { color: "#f0e8e0", name: "Айвори" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full shadow-md" style={{ background: c.color, border: "2px solid #e8d5bc" }} />
                <span style={{ fontSize: "0.7rem", color: "#9e7c58", letterSpacing: "0.05em" }}>{c.name}</span>
              </div>
            ))}
          </div>

          <p style={{ color: "#b8925a", fontSize: "0.85rem", fontStyle: "italic" }}>
            Просим воздержаться от белого и чёрного цветов
          </p>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-20 px-6" style={{ background: "#fdf8f4" }}>
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle>Пожелания по подаркам</SectionTitle>

          <div className="mt-10 p-10 relative" style={{ border: "1px solid #e8d5bc", background: "#fff9f5" }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4" style={{ background: "#fdf8f4" }}>
              <span style={{ color: "#c9a96e", fontSize: "1.2rem" }}>✦</span>
            </div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              color: "#3d2c1e",
              fontWeight: 300,
              lineHeight: 1.7,
              fontStyle: "italic"
            }}>
              «Лучшим подарком для нас будет ваше присутствие и добрые пожелания. Если же вы хотите сделать нам приятное, мы будем рады денежному подарку на нашу совместную мечту — путешествие»
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section id="rsvp" className="py-20 px-6" style={{ background: "#fff9f5" }}>
        <div className="max-w-xl mx-auto">
          <SectionTitle>Подтверждение присутствия</SectionTitle>
          <p className="text-center mt-4 mb-10" style={{ color: "#9e7c58", fontSize: "0.9rem" }}>
            Просим подтвердить ваше присутствие до 1 мая 2026
          </p>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#f5e6d3", border: "1px solid #e8d5bc" }}>
                <Icon name="Heart" size={28} style={{ color: "#c9a96e" }} />
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#3d2c1e" }}>
                Спасибо, {form.name}!
              </p>
              <p className="mt-3" style={{ color: "#9e7c58", fontSize: "0.9rem" }}>
                Ваш ответ принят. Мы с нетерпением ждём встречи с вами!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#b8965a" }}>Ваше имя *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Иванов Иван Иванович"
                  className="w-full px-5 py-3 outline-none transition-all"
                  style={{ background: "#fdf8f4", border: "1px solid #e8d5bc", color: "#3d2c1e", fontSize: "0.95rem", fontFamily: "'Montserrat', sans-serif" }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = "#c9a96e"}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = "#e8d5bc"}
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#b8965a" }}>Вы придёте?</label>
                <div className="flex gap-3">
                  {[{ value: "yes", label: "Да, буду!" }, { value: "no", label: "К сожалению, нет" }].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, attend: opt.value })}
                      className="flex-1 py-3 text-sm transition-all duration-200"
                      style={{
                        border: "1px solid",
                        borderColor: form.attend === opt.value ? "#c9a96e" : "#e8d5bc",
                        background: form.attend === opt.value ? "#c9a96e" : "transparent",
                        color: form.attend === opt.value ? "#fff" : "#7a6045",
                        fontFamily: "'Montserrat', sans-serif",
                        cursor: "pointer"
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {form.attend === "yes" && (
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#b8965a" }}>Количество гостей</label>
                  <select
                    value={form.guests}
                    onChange={e => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-5 py-3 outline-none appearance-none"
                    style={{ background: "#fdf8f4", border: "1px solid #e8d5bc", color: "#3d2c1e", fontSize: "0.95rem", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? "гость" : "гостя"}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#b8965a" }}>Пожелания молодым</label>
                <textarea
                  value={form.wishes}
                  onChange={e => setForm({ ...form, wishes: e.target.value })}
                  placeholder="Ваши добрые пожелания..."
                  rows={3}
                  className="w-full px-5 py-3 outline-none resize-none transition-all"
                  style={{ background: "#fdf8f4", border: "1px solid #e8d5bc", color: "#3d2c1e", fontSize: "0.95rem", fontFamily: "'Montserrat', sans-serif" }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = "#c9a96e"}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = "#e8d5bc"}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 tracking-[0.25em] uppercase text-sm transition-all duration-300"
                style={{
                  background: "#c9a96e",
                  color: "#fff",
                  border: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  cursor: "pointer",
                  letterSpacing: "0.2em"
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.background = "#b8965a"}
                onMouseLeave={e => (e.target as HTMLElement).style.background = "#c9a96e"}
                disabled={loading}
              >
                {loading ? "Отправляем..." : "Отправить ответ"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 text-center" style={{ background: "#3d2c1e" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#e8d5bc", fontWeight: 300, fontStyle: "italic" }}>
          Никита &amp; Елизавета
        </p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-10" style={{ background: "#c9a96e", opacity: 0.5 }} />
          <span style={{ color: "#c9a96e", fontSize: "0.8rem" }}>✦</span>
          <div className="h-px w-10" style={{ background: "#c9a96e", opacity: 0.5 }} />
        </div>
        <p className="mt-3 text-xs tracking-widest uppercase" style={{ color: "#9e7c58" }}>14 · 06 · 2026</p>
      </footer>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a96e", fontWeight: 500 }}>
        ✦ ✦ ✦
      </p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        color: "#3d2c1e",
        fontWeight: 300,
        letterSpacing: "0.05em"
      }}>
        {children}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #c9a96e)" }} />
        <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#c9a96e" }} />
        <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #c9a96e)" }} />
      </div>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="p-8 text-center" style={{ border: "1px solid #e8d5bc", background: "#fdf8f4" }}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#fff9f5", border: "1px solid #e8d5bc" }}>
        <Icon name={icon} size={20} style={{ color: "#c9a96e" }} />
      </div>
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#c9a96e" }}>{title}</p>
      {children}
    </div>
  );
}