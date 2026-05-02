import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { t as Route } from "./_leadId-BJxdSEFQ.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { n as LeadEditForm } from "./LeadForm-DlZuRnF5.js";
import { i as updateLead, n as getLeadById } from "./leads-crud-BVI0Al5I.js";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/leads/$leadId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/leads/$leadId.tsx?tsr-split=component";
function LeadEditPage() {
	const { leadId } = Route.useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const fetchLead = useServerFn(getLeadById);
	const saveLead = useServerFn(updateLead);
	const [submitError, setSubmitError] = useState(null);
	const query = useQuery({
		queryKey: ["crm-lead", leadId],
		queryFn: () => fetchLead({ data: { id: leadId } }),
		enabled: Boolean(leadId)
	});
	const mutation = useMutation({
		mutationFn: (data) => saveLead({ data }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-leads"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-lead", leadId] });
			await navigate({ to: "/app/leads" });
		},
		onError: (err) => {
			setSubmitError(formatMutationError(err));
		}
	});
	useEffect(() => {
		setSubmitError(null);
	}, [leadId]);
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Editar lead",
			description: "Actualiza datos del prospecto."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando lead..." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el lead." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 24
		}, this) : null,
		query.data === null && query.isFetched ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Lead no encontrado." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 49
		}, this) : null,
		query.data ? /* @__PURE__ */ jsxDEV(LeadEditForm, {
			initial: query.data,
			isSubmitting: mutation.isPending,
			submitError,
			onSubmit: async (values) => {
				setSubmitError(null);
				mutation.mutate(values);
			},
			onCancel: () => void navigate({ to: "/app/leads" })
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 21
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 10
	}, this);
}
//#endregion
export { LeadEditPage as component };
