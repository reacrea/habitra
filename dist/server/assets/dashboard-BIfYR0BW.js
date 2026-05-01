import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/app/dashboard.tsx?tsr-split=component
function AppDashboardPage() {
	return /* @__PURE__ */ jsx("main", {
		className: "min-h-screen bg-slate-100 px-6 py-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-sm",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-semibold text-slate-900",
				children: "Dashboard Habitra"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-slate-600",
				children: "Base inicial de aplicacion lista para evolucionar por modulos en siguientes fases."
			})]
		})
	});
}
//#endregion
export { AppDashboardPage as component };
