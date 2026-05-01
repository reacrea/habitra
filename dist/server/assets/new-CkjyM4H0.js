import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { t as PageHeader } from "./PageHeader-C8OGwtR3.js";
import { t as formatMutationError } from "./mutation-error-BrwIK5uA.js";
import { t as BuyerCreateForm } from "./BuyerForm-B6Fh9-se.js";
import { t as createBuyer } from "./buyers-crud-oJFtTF98.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/buyers/new.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/new.tsx?tsr-split=component";
function BuyerNewPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const createFn = useServerFn(createBuyer);
	const [submitError, setSubmitError] = useState(null);
	const mutation = useMutation({
		mutationFn: (data) => createFn({ data }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-buyers"] });
			await navigate({ to: "/app/buyers" });
		},
		onError: (err) => {
			setSubmitError(formatMutationError(err));
		}
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV(PageHeader, {
		title: "Nuevo comprador",
		description: "Alta de perfil de compra."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 7
	}, this), /* @__PURE__ */ jsxDEV(BuyerCreateForm, {
		isSubmitting: mutation.isPending,
		submitError,
		onSubmit: async (values) => {
			setSubmitError(null);
			mutation.mutate(values);
		},
		onCancel: () => void navigate({ to: "/app/buyers" })
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
export { BuyerNewPage as component };
