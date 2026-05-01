import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/layout/PageHeader.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/layout/PageHeader.tsx";
function PageHeader({ title, description, actions }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
		children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
			className: "text-2xl font-semibold tracking-tight text-habitra-text md:text-3xl",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 9
		}, this), description ? /* @__PURE__ */ jsxDEV("p", {
			className: "mt-1 max-w-2xl text-sm text-slate-600 md:text-base",
			children: description
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 24
		}, this) : null] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this), actions ? /* @__PURE__ */ jsxDEV("div", {
			className: "flex shrink-0 flex-wrap gap-2",
			children: actions
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 18
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
//#endregion
export { PageHeader as t };
