import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { t as PageHeader } from "./PageHeader-C8OGwtR3.js";
import { t as formatMutationError } from "./mutation-error-BrwIK5uA.js";
import { t as LeadCreateForm } from "./LeadForm-8z4wQhbC.js";
import { t as createLead } from "./leads-crud-CDf-qj0y.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/leads/new.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/leads/new.tsx?tsr-split=component";
function LeadNewPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const createFn = useServerFn(createLead);
	const [submitError, setSubmitError] = useState(null);
	const mutation = useMutation({
		mutationFn: (data) => createFn({ data }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-leads"] });
			await navigate({ to: "/app/leads" });
		},
		onError: (err) => {
			setSubmitError(formatMutationError(err));
		}
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV(PageHeader, {
		title: "Nuevo lead",
		description: "Registra un prospecto en el CRM."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 7
	}, this), /* @__PURE__ */ jsxDEV(LeadCreateForm, {
		isSubmitting: mutation.isPending,
		submitError,
		onSubmit: async (values) => {
			setSubmitError(null);
			mutation.mutate(values);
		},
		onCancel: () => void navigate({ to: "/app/leads" })
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 10
	}, this);
}
//#endregion
export { LeadNewPage as component };
