import { t as Route } from "./routes-BeZXl2H_.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
function LandingPage() {
	const message = Route.useLoaderData();
	return /* @__PURE__ */ jsx("main", {
		className: "min-h-screen bg-stone-50 text-slate-800",
		children: /* @__PURE__ */ jsxs("section", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold uppercase tracking-wide text-emerald-700",
					children: "Habitra"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "max-w-3xl text-4xl font-bold leading-tight md:text-6xl",
					children: "Compra, vende y cierra propiedades con claridad."
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "max-w-2xl text-lg text-slate-600",
					children: [message, ". Habitra organiza leads, documentos, compradores, vendedores y operaciones en un solo lugar."]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/demo",
						className: "rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700",
						children: "Solicitar demo"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/app/dashboard",
						className: "rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50",
						children: "Ver plataforma"
					})]
				})
			]
		})
	});
}
//#endregion
export { LandingPage as component };
