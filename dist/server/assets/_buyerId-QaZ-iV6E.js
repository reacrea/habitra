import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { t as Route } from "./_buyerId-ByLLRptl.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-BFusiMHe.js";
import { t as PageHeader } from "./PageHeader-CFdE2-fE.js";
import { t as formatMutationError } from "./mutation-error-BvaFJQHh.js";
import { n as BuyerEditForm } from "./BuyerForm-CqSK_y5S.js";
import { i as updateBuyer, n as getBuyerById } from "./buyers-crud-MTkLWk2C.js";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/buyers/$buyerId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/$buyerId.tsx?tsr-split=component";
function BuyerEditPage() {
	const { buyerId } = Route.useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const fetchBuyer = useServerFn(getBuyerById);
	const saveBuyer = useServerFn(updateBuyer);
	const [submitError, setSubmitError] = useState(null);
	const query = useQuery({
		queryKey: ["crm-buyer", buyerId],
		queryFn: () => fetchBuyer({ data: { id: buyerId } }),
		enabled: Boolean(buyerId)
	});
	const mutation = useMutation({
		mutationFn: (data) => saveBuyer({ data }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-buyers"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-buyer", buyerId] });
			await navigate({ to: "/app/buyers" });
		},
		onError: (err) => {
			setSubmitError(formatMutationError(err));
		}
	});
	useEffect(() => {
		setSubmitError(null);
	}, [buyerId]);
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, { title: "Editar comprador" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando comprador..." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el comprador." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 24
		}, this) : null,
		query.data === null && query.isFetched ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Comprador no encontrado." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 49
		}, this) : null,
		query.data ? /* @__PURE__ */ jsxDEV(BuyerEditForm, {
			initial: query.data,
			isSubmitting: mutation.isPending,
			submitError,
			onSubmit: async (values) => {
				setSubmitError(null);
				mutation.mutate(values);
			},
			onCancel: () => void navigate({ to: "/app/buyers" })
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
export { BuyerEditPage as component };
