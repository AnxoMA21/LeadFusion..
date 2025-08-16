import { Check, LineChart, Rocket, Zap, Mail, Phone } from "lucide-react";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";

export const revalidate = 60;

export default function Page() {
  return (
    <main>
      {/* NAV */}
      <header className="container flex items-center justify-between py-6">
        <a href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="LeadFusion" className="h-8 w-auto" />
        </a>
        <nav className="hidden gap-8 md:flex">
          <a href="#servicios" className="text-white/80 hover:text-white">Servicios</a>
          <a href="#proceso" className="text-white/80 hover:text-white">Proceso</a>
          <a href="#casos" className="text-white/80 hover:text-white">Resultados</a>
          <a href="#precios" className="text-white/80 hover:text-white">Planes</a>
          <a href="#contacto" className="text-white/80 hover:text-white">Contacto</a>
        </nav>
        <Button href="#contacto">Agendar consultoría</Button>
      </header>

      {/* HERO */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Crece con <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">LeadFusion</span>: demanda predecible impulsada por IA
            </h1>
            <p className="mt-5 text-white/70">
              Combinamos creatividad, datos e inteligencia artificial para generar leads calificados,
              optimizar ROAS y construir un motor de crecimiento 24/7.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#contacto">Quiero más leads</Button>
              <a href="#casos" className="text-white/70 underline-offset-4 hover:underline">Ver resultados</a>
            </div>
            <ul className="mt-8 grid grid-cols-3 gap-4 text-sm text-white/70">
              <li className="card p-4"><div className="text-2xl font-semibold">+210%</div>ROAS medio</li>
              <li className="card p-4"><div className="text-2xl font-semibold">-38%</div>CPL promedio</li>
              <li className="card p-4"><div className="text-2xl font-semibold">30 días</div>para ver impacto</li>
            </ul>
          </div>

          <div className="card p-6">
            <div className="grid gap-4">
              <Item icon={<Rocket />} title="Performance Ads" desc="Campañas multicanal enfocadas en resultados." />
              <Item icon={<LineChart />} title="Analítica & CRO" desc="Optimización continua basada en datos." />
              <Item icon={<Zap />} title="Automatización" desc="Flujos con IA para gestión de leads." />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section bg-white/5">
        <div className="container">
          <h2 className="text-3xl font-semibold">Servicios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Performance Ads", ["Google/Meta Ads", "Lanzamientos y escalado", "Creatividades que convierten"]],
              ["SEO & Contenido", ["Arquitectura SEO", "Contenido con IA", "Backlinks de calidad"]],
              ["Automatización & CRM", ["Lead scoring", "Email/SMS flows", "Integraciones (HubSpot/Make)"]]
            ].map(([t, items]) => (
              <div key={t as string} className="card p-6">
                <h3 className="text-xl font-semibold">{t as string}</h3>
                <ul className="mt-4 space-y-2 text-white/70">
                  {(items as string[]).map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-cyan-300" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="section">
        <div className="container">
          <h2 className="text-3xl font-semibold">Nuestro proceso</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {["Diagnóstico", "Estrategia", "Implementación", "Optimización"].map((p, idx) => (
              <div key={p} className="card p-6">
                <div className="text-2xl font-semibold">{idx + 1}</div>
                <div className="mt-2">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="section bg-white/5">
        <div className="container">
          <h2 className="text-3xl font-semibold">Resultados</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Ecommerce moda", "+260% ventas / 90 días"],
              ["Edtech B2C", "CPL -42% manteniendo volumen"],
              ["SaaS B2B", "Pipeline x3 con lead scoring"]
            ].map(([t, d]) => (
              <div key={t} className="card p-6">
                <div className="text-xl font-semibold">{t}</div>
                <div className="mt-2 text-white/70">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section">
        <div className="container">
          <h2 className="text-3xl font-semibold">Planes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Launch", "Ideal para validar rápido", "USD 499/mes", ["1 canal de ads", "Reporting mensual", "Automatización básica"]],
              ["Scale", "Para escalar rendimiento", "USD 1,499/mes", ["3 canales", "CRO + contenidos", "Automatización avanzada"]],
              ["Elite", "Crecimiento agresivo", "USD 2,999/mes", ["Multicanal + UGC", "Modelos de atribución", "Soporte prioritario"]]
            ].map(([name, desc, price, feats]) => (
              <div key={name as string} className="card p-6">
                <div className="text-xl font-semibold">{name as string}</div>
                <div className="text-white/70">{desc as string}</div>
                <div className="mt-4 text-3xl font-semibold">{price as string}</div>
                <ul className="mt-4 space-y-2 text-white/70">
                  {(feats as string[]).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-cyan-300" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section bg-white/5">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Hablemos</h2>
            <p className="mt-2 text-white/70">
              Agenda una consultoría gratuita de 20 minutos. Te mostramos oportunidades y un plan de acción.
            </p>
            <div className="mt-6 space-y-2 text-white/80">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5" /> hola@leadfusion.agency</div>
              <div className="flex items-center gap-2"><Phone className="h-5 w-5" /> +52 55 0000 0000</div>
            </div>
          </div>

          {/* Aquí antes estaba el <form />. Lo reemplazamos por el Client Component */}
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container py-10 text-center text-white/60">
        © {new Date().getFullYear()} LeadFusion. Todos los derechos reservados.
      </footer>
    </main>
  );
}

function Item({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white/5 p-4">
      <div className="rounded-lg bg-white/10 p-2">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-white/70 text-sm">{desc}</div>
      </div>
    </div>
  );
}
