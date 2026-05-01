import { useState } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/PropertySearchBar.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/public/PropertySearchBar.tsx";
function PropertySearchBar({ onSearch, defaultOperation = "buy" }) {
	const [operation, setOperation] = useState(defaultOperation);
	const [city, setCity] = useState("");
	const [type, setType] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	return /* @__PURE__ */ jsxDEV("form", {
		className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:p-5",
		onSubmit: (e) => {
			e.preventDefault();
			onSearch({
				operation,
				city: city || void 0,
				type: type || void 0,
				minPrice: minPrice || void 0,
				maxPrice: maxPrice || void 0
			});
		},
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "grid gap-3 md:grid-cols-5",
			children: [
				/* @__PURE__ */ jsxDEV("select", {
					value: operation,
					onChange: (e) => setOperation(e.target.value),
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm",
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "buy",
						children: "Comprar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("option", {
						value: "rent",
						children: "Rentar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					value: city,
					onChange: (e) => setCity(e.target.value),
					placeholder: "Ciudad o zona",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					value: type,
					onChange: (e) => setType(e.target.value),
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm",
					children: [
						/* @__PURE__ */ jsxDEV("option", {
							value: "",
							children: "Tipo propiedad"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "CASA",
							children: "Casa"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "DEPARTAMENTO",
							children: "Departamento"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "TERRENO",
							children: "Terreno"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "OFICINA",
							children: "Oficina"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					value: minPrice,
					onChange: (e) => setMinPrice(e.target.value),
					placeholder: "Precio minimo",
					type: "number",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					value: maxPrice,
					onChange: (e) => setMaxPrice(e.target.value),
					placeholder: "Precio maximo",
					type: "number",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "mt-3 flex justify-end",
			children: /* @__PURE__ */ jsxDEV("button", {
				className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
				children: "Buscar"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
//#endregion
export { PropertySearchBar as t };
