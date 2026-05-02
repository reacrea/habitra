import { Link } from "@tanstack/react-router";

export function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm md:grid-cols-3 md:px-6">
        <div>
          <p className="text-base font-semibold text-habitra-text">Habitra</p>
          <p className="mt-2 text-slate-600">
            Plataforma de compra inteligente para encontrar propiedades que si puedes comprar.
          </p>
        </div>
        <div>
          <p className="font-semibold text-habitra-text">Explorar</p>
          <div className="mt-2 flex flex-col gap-1 text-slate-600">
            <Link to="/properties" search={{ operationType: "SALE" }}>
              Comprar
            </Link>
            <Link to="/properties" search={{ operationType: "RENT" }}>
              Rentar
            </Link>
            <Link to="/sell">Vender</Link>
            <Link to="/zones">Zonas</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-habitra-text">Plataforma</p>
          <div className="mt-2 flex flex-col gap-1 text-slate-600">
            <Link to="/demo">Solicitar demo</Link>
            <Link to="/login">Acceso agentes</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
