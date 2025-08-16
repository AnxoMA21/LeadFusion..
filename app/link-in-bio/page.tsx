import Button from "../../components/Button";

export const metadata = { title: "LeadFusion — Links", description: "Todos los accesos rápidos de LeadFusion." };

export default function LinkInBio() {
  return (
    <main className="container section">
      <div className="mx-auto max-w-xl text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="LeadFusion" className="mx-auto h-12 w-auto" />
        <h1 className="mt-6 text-3xl font-semibold">Recursos rápidos</h1>
        <div className="mt-8 grid gap-4">
          <a className="card p-4 text-center hover:bg-white/10" href="/">Sitio principal</a>
          <a className="card p-4 text-center hover:bg-white/10" href="/#servicios">Servicios</a>
          <a className="card p-4 text-center hover:bg-white/10" href="/#casos">Resultados</a>
          <Button href="/#contacto">Agendar consultoría</Button>
        </div>
      </div>
    </main>
  );
}
