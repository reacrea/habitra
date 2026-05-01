import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/CrmStates.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/crm/CrmStates.tsx";
function CrmLoading({ label = "Cargando..." }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/80 px-6 py-16 text-sm text-slate-600",
		children: /* @__PURE__ */ jsxDEV("span", {
			className: "animate-pulse",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
function CrmInlineError({ message, className }) {
	return /* @__PURE__ */ jsxDEV("div", {
		role: "alert",
		className: `rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 ${className ?? ""}`,
		children: message
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
function CrmEmpty({ title, hint }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center",
		children: [/* @__PURE__ */ jsxDEV("p", {
			className: "font-medium text-habitra-text",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 7
		}, this), hint ? /* @__PURE__ */ jsxDEV("p", {
			className: "mt-2 text-sm text-slate-600",
			children: hint
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 15
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
//#endregion
export { CrmInlineError as n, CrmLoading as r, CrmEmpty as t };
