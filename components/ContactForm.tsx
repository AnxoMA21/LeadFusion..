"use client";
import React from "react";
import Button from "./Button";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    alert("¡Gracias! Te contactamos pronto.");
  };

  return (
    <form className="card p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <input required placeholder="Nombre" className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" />
        <input required type="email" placeholder="Email" className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" />
        <input placeholder="Sitio web / Instagram" className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" />
        <textarea placeholder="Cuéntanos tu objetivo" rows={4} className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40"></textarea>
        <Button>Enviar</Button>
      </div>
    </form>
  );
}
