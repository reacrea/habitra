import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as PageHeader } from "./PageHeader-CGhXjJQ9.js";
import { t as formatMutationError } from "./mutation-error-0FkRNkSP.js";
import { t as SellerCreateForm } from "./SellerForm-CV8bmBUy.js";
import { t as createSeller } from "./sellers-crud-BuYuztmI.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/sellers/new.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/new.tsx?tsr-split=component";
function SellerNewPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const createFn = useServerFn(createSeller);
	const [submitError, setSubmitError] = useState(null);
	const mutation = useMutation({
		mutationFn: (data) => createFn({ data }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
			await navigate({ to: "/app/sellers" });
		},
		onError: (err) => {
			setSubmitError(formatMutationError(err));
		}
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV(PageHeader, {
		title: "Nuevo vendedor",
		description: "Alta de perfil de venta."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 7
	}, this), /* @__PURE__ */ jsxDEV(SellerCreateForm, {
		isSubmitting: mutation.isPending,
		submitError,
		onSubmit: async (values) => {
			setSubmitError(null);
			mutation.mutate(values);
		},
		onCancel: () => void navigate({ to: "/app/sellers" })
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
export { SellerNewPage as component };
