import { createFileRoute } from "@tanstack/react-router";

import { BuyerProfileSection } from "@/components/buyer/BuyerProfileSection";

export const Route = createFileRoute("/buyer/profile")({
  component: BuyerProfilePage,
});

function BuyerProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-habitra-text">Mi perfil comprador</h1>
        <p className="mt-1 text-sm text-slate-600">Actualiza presupuesto y preferencias para mejorar tus matches.</p>
      </div>
      <BuyerProfileSection
        title="Perfil"
        description="Mismos datos que en el dashboard. Nombre, email y telefono se guardan en tu cuenta y en tu ficha de comprador."
      />
    </div>
  );
}
