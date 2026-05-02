import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/CrmTableFilterControls.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/crm/CrmTableFilterControls.tsx";
/** Barra sobre la tabla cuando hay filtros activos: conteo y limpiar. */
function CrmFilterSummary({ filteredCount, totalCount, hasActive, onClear }) {
	if (!hasActive) return null;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700",
		children: [/* @__PURE__ */ jsxDEV("span", { children: [
			"Mostrando ",
			/* @__PURE__ */ jsxDEV("strong", { children: filteredCount }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 19
			}, this),
			" de ",
			/* @__PURE__ */ jsxDEV("strong", { children: totalCount }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 55
			}, this),
			" registros"
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("button", {
			type: "button",
			onClick: onClear,
			className: "rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",
			children: "Limpiar filtros"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
function CrmFilterText({ value, onChange, placeholder }) {
	return /* @__PURE__ */ jsxDEV("input", {
		type: "text",
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder: placeholder ?? "Filtrar…",
		className: "w-full min-w-[4rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-normal normal-case tracking-normal text-habitra-text placeholder:text-slate-400"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
function CrmFilterSelect({ value, onChange, options, placeholder = "Todos" }) {
	return /* @__PURE__ */ jsxDEV("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "w-full min-w-[5rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-normal normal-case tracking-normal text-habitra-text",
		children: [/* @__PURE__ */ jsxDEV("option", {
			value: "",
			children: placeholder
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this), options.map((o) => /* @__PURE__ */ jsxDEV("option", {
			value: o.value,
			children: o.label
		}, o.value, false, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 9
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
/** Dos campos numéricos compactos (min / max) en una celda. */
function CrmFilterNumberRange({ minValue, maxValue, onMinChange, onMaxChange, minPlaceholder = "Min", maxPlaceholder = "Max" }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-w-[6rem] flex-col gap-1 sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ jsxDEV("input", {
			type: "text",
			inputMode: "decimal",
			value: minValue,
			onChange: (e) => onMinChange(e.target.value),
			placeholder: minPlaceholder,
			className: "w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-normal normal-case tracking-normal text-habitra-text placeholder:text-slate-400"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 89,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("input", {
			type: "text",
			inputMode: "decimal",
			value: maxValue,
			onChange: (e) => onMaxChange(e.target.value),
			placeholder: maxPlaceholder,
			className: "w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-normal normal-case tracking-normal text-habitra-text placeholder:text-slate-400"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 97,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 88,
		columnNumber: 5
	}, this);
}
function CrmFilterDateRange({ fromValue, toValue, onFromChange, onToChange }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-w-[7rem] flex-col gap-1",
		children: [/* @__PURE__ */ jsxDEV("input", {
			type: "date",
			value: fromValue,
			onChange: (e) => onFromChange(e.target.value),
			className: "w-full rounded-lg border border-slate-200 bg-white px-1 py-1 text-[11px] font-normal normal-case tracking-normal text-habitra-text"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("input", {
			type: "date",
			value: toValue,
			onChange: (e) => onToChange(e.target.value),
			className: "w-full rounded-lg border border-slate-200 bg-white px-1 py-1 text-[11px] font-normal normal-case tracking-normal text-habitra-text"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 125,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 118,
		columnNumber: 5
	}, this);
}
//#endregion
export { CrmFilterText as a, CrmFilterSummary as i, CrmFilterNumberRange as n, CrmFilterSelect as r, CrmFilterDateRange as t };
