import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as PageHeader } from "./PageHeader-fKJQFkAH.js";
import { t as CREDIT_TYPE_LABELS } from "./crm-labels-D8Q8XEcK.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as formatMutationError } from "./mutation-error-D-XfFHYy.js";
import { a as getTransactionCreateOptions, n as createTransaction } from "./transactions-crud-D0Qa66z-.js";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/transactions/TransactionCreateForm.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/transactions/TransactionCreateForm.tsx";
function TransactionCreateForm({ buyers, sellers, properties, agents, isSubmitting, onSubmit }) {
	return /* @__PURE__ */ jsxDEV("form", {
		className: "mx-auto max-w-3xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6",
		onSubmit: (e) => {
			e.preventDefault();
			const fd = new FormData(e.currentTarget);
			onSubmit({
				propertyId: String(fd.get("propertyId") ?? ""),
				buyerId: String(fd.get("buyerId") ?? ""),
				sellerId: String(fd.get("sellerId") ?? ""),
				agentId: String(fd.get("agentId") ?? ""),
				offeredPrice: fd.get("offeredPrice") ? Number(fd.get("offeredPrice")) : void 0,
				acceptedPrice: fd.get("acceptedPrice") ? Number(fd.get("acceptedPrice")) : void 0,
				paymentType: fd.get("paymentType") ?? void 0,
				creditType: String(fd.get("creditType") ?? "") || void 0,
				probabilityToClose: fd.get("probabilityToClose") ? Number(fd.get("probabilityToClose")) : void 0,
				notesText: String(fd.get("notesText") ?? "") || void 0
			});
		},
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ jsxDEV("select", {
					name: "propertyId",
					required: true,
					className: "rounded-xl border px-3 py-2",
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "",
						children: "Propiedad"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 58,
						columnNumber: 11
					}, this), properties.map((x) => /* @__PURE__ */ jsxDEV("option", {
						value: x.id,
						children: x.label
					}, x.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 60,
						columnNumber: 13
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					name: "agentId",
					required: true,
					className: "rounded-xl border px-3 py-2",
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "",
						children: "Agente"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 64,
						columnNumber: 11
					}, this), agents.map((x) => /* @__PURE__ */ jsxDEV("option", {
						value: x.id,
						children: x.label
					}, x.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 66,
						columnNumber: 13
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 63,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					name: "buyerId",
					required: true,
					className: "rounded-xl border px-3 py-2",
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "",
						children: "Comprador"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 70,
						columnNumber: 11
					}, this), buyers.map((x) => /* @__PURE__ */ jsxDEV("option", {
						value: x.id,
						children: x.label
					}, x.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 72,
						columnNumber: 13
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 69,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					name: "sellerId",
					required: true,
					className: "rounded-xl border px-3 py-2",
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "",
						children: "Vendedor"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 76,
						columnNumber: 11
					}, this), sellers.map((x) => /* @__PURE__ */ jsxDEV("option", {
						value: x.id,
						children: x.label
					}, x.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 78,
						columnNumber: 13
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 75,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					name: "offeredPrice",
					type: "number",
					step: "0.01",
					min: 0,
					placeholder: "Precio oferta",
					className: "rounded-xl border px-3 py-2"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 81,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					name: "acceptedPrice",
					type: "number",
					step: "0.01",
					min: 0,
					placeholder: "Precio aceptado",
					className: "rounded-xl border px-3 py-2"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 82,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					name: "paymentType",
					className: "rounded-xl border px-3 py-2",
					children: [
						/* @__PURE__ */ jsxDEV("option", {
							value: "",
							children: "Tipo pago (default credito)"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 84,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "CONTADO",
							children: "Contado"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 85,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "CREDITO",
							children: "Credito"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 86,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "MIXTO",
							children: "Mixto"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 87,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 83,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					name: "creditType",
					className: "rounded-xl border px-3 py-2",
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "",
						children: "Tipo credito"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 90,
						columnNumber: 11
					}, this), Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
						value,
						children: label
					}, value, false, {
						fileName: _jsxFileName$1,
						lineNumber: 92,
						columnNumber: 13
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 89,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					name: "probabilityToClose",
					type: "number",
					min: 0,
					max: 100,
					placeholder: "Probabilidad cierre (0-100)",
					className: "rounded-xl border px-3 py-2"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 95,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("textarea", {
					name: "notesText",
					rows: 3,
					placeholder: "Notas",
					className: "rounded-xl border px-3 py-2 sm:col-span-2"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 96,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 56,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("button", {
			disabled: isSubmitting,
			className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
			children: isSubmitting ? "Creando..." : "Crear operacion"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 98,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/transactions/new.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/new.tsx?tsr-split=component";
function TransactionNewPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const fetchOptions = useServerFn(getTransactionCreateOptions);
	const createFn = useServerFn(createTransaction);
	const optionsQuery = useQuery({
		queryKey: ["crm-transaction-options"],
		queryFn: () => fetchOptions()
	});
	const mutation = useMutation({
		mutationFn: (payload) => createFn({ data: payload }),
		onSuccess: async (created) => {
			await queryClient.invalidateQueries({ queryKey: ["crm-transactions"] });
			await navigate({
				to: "/app/transactions/$transactionId",
				params: { transactionId: created.id }
			});
		}
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Nueva operacion",
			description: "Conecta buyer/seller/property/agent."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 7
		}, this),
		optionsQuery.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando opciones..." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 33
		}, this) : null,
		optionsQuery.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar opciones." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 31
		}, this) : null,
		mutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutation.error) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 27
		}, this) : null,
		optionsQuery.data ? /* @__PURE__ */ jsxDEV(TransactionCreateForm, {
			buyers: optionsQuery.data.buyers,
			sellers: optionsQuery.data.sellers,
			properties: optionsQuery.data.properties,
			agents: optionsQuery.data.agents,
			isSubmitting: mutation.isPending,
			onSubmit: (values) => mutation.mutate(values)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 28
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 10
	}, this);
}
//#endregion
export { TransactionNewPage as component };
