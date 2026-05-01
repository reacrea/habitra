import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError } from "./CrmStates-B4LS3d6E.js";
import { t as PageHeader } from "./PageHeader-C0qh1Y-M.js";
import { t as formatMutationError } from "./mutation-error-D0IZCg1w.js";
import { n as runAiDummyInsights } from "./ai-dummy-B1BobnKK.js";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/reports/ai.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/reports/ai.tsx?tsr-split=component";
function AiDummyPage() {
	const runAi = useServerFn(runAiDummyInsights);
	const [prompt, setPrompt] = useState("Resumen de riesgos de mi pipeline actual.");
	const mutation = useMutation({ mutationFn: () => runAi({ data: { prompt } }) });
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "AI dummy",
				description: "Modulo simulado para recomendaciones operativas."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			mutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutation.error) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 27
			}, this) : null,
			/* @__PURE__ */ jsxDEV("div", {
				className: "rounded-2xl border border-slate-200 bg-white p-6",
				children: [/* @__PURE__ */ jsxDEV("textarea", {
					className: "h-32 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
					value: prompt,
					onChange: (e) => setPrompt(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					onClick: () => mutation.mutate(),
					disabled: mutation.isPending,
					className: "mt-3 rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
					children: mutation.isPending ? "Analizando..." : "Generar insights"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			mutation.data ? /* @__PURE__ */ jsxDEV("div", {
				className: "rounded-2xl border border-slate-200 bg-white p-6 text-sm",
				children: [
					/* @__PURE__ */ jsxDEV("p", {
						className: "font-semibold text-habitra-text",
						children: mutation.data.summary
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-2",
						children: ["Riesgo estimado: ", /* @__PURE__ */ jsxDEV("strong", { children: mutation.data.riskScore }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 48
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: ["Sentimiento: ", /* @__PURE__ */ jsxDEV("strong", { children: mutation.data.sentiment }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 27
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("ul", {
						className: "mt-3 list-disc pl-5",
						children: mutation.data.nextActions.map((action) => /* @__PURE__ */ jsxDEV("li", { children: action }, action, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 54
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 24
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 10
	}, this);
}
//#endregion
export { AiDummyPage as component };
