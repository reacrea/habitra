import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/demo.tsx?tsr-split=component
function DemoPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "mx-auto min-h-screen max-w-4xl px-6 py-20",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-3xl font-semibold text-slate-900",
			children: "Solicitar demo"
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-3 text-slate-600",
			children: "Esta pantalla queda lista para conectar formulario comercial en siguientes fases."
		})]
	});
}
//#endregion
export { DemoPage as component };
