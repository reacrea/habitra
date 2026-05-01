import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as Route } from "./_sellerId-DNljerIy.js";
import { t as PageHeader } from "./PageHeader-fKJQFkAH.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as formatMutationError } from "./mutation-error-D-XfFHYy.js";
import { n as SellerEditForm } from "./SellerForm-zpyIh5tt.js";
import { i as updateSeller, n as getSellerById } from "./sellers-crud-BdA3S8Tc.js";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/sellers/$sellerId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/$sellerId.tsx?tsr-split=component";
function SellerEditPage() {
	const { sellerId } = Route.useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const fetchSeller = useServerFn(getSellerById);
	const saveSeller = useServerFn(updateSeller);
	const [submitError, setSubmitError] = useState(null);
	const query = useQuery({
		queryKey: ["crm-seller", sellerId],
		queryFn: () => fetchSeller({ data: { id: sellerId } }),
		enabled: Boolean(sellerId)
	});
	const mutation = useMutation({
		mutationFn: (data) => saveSeller({ data }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-seller", sellerId] });
			await navigate({ to: "/app/sellers" });
		},
		onError: (err) => {
			setSubmitError(formatMutationError(err));
		}
	});
	useEffect(() => {
		setSubmitError(null);
	}, [sellerId]);
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, { title: "Editar vendedor" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando vendedor..." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el vendedor." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 24
		}, this) : null,
		query.data === null && query.isFetched ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Vendedor no encontrado." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 49
		}, this) : null,
		query.data ? /* @__PURE__ */ jsxDEV(SellerEditForm, {
			initial: query.data,
			isSubmitting: mutation.isPending,
			submitError,
			onSubmit: async (values) => {
				setSubmitError(null);
				mutation.mutate(values);
			},
			onCancel: () => void navigate({ to: "/app/sellers" })
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
export { SellerEditPage as component };
