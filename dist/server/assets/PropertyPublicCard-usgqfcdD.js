import { t as authClient } from "./auth-client-C-8kn0qt.js";
import { t as usePublicShortlists } from "./use-public-shortlists-CBF7_adV.js";
import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/AuthRequiredDialog.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/public/AuthRequiredDialog.tsx";
function AuthRequiredDialog({ open, onOpenChange, message }) {
	if (!open) return null;
	const redirect = typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : void 0;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/50 p-4",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "w-full max-w-md rounded-2xl bg-white p-5 shadow-xl",
			children: [
				/* @__PURE__ */ jsxDEV("h3", {
					className: "text-lg font-semibold text-habitra-text",
					children: "Inicia sesion para continuar"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-slate-600",
					children: message ?? "Para continuar, inicia sesion o crea una cuenta."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/login",
							search: redirect ? { redirect } : void 0,
							className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
							onClick: () => onOpenChange(false),
							children: "Iniciar sesion"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 25,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("a", {
							href: "/register",
							className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700",
							onClick: () => onOpenChange(false),
							children: "Registrarse"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 33,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("button", {
							type: "button",
							onClick: () => onOpenChange(false),
							className: "ml-auto rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700",
							children: "Cancelar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 40,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 24,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/hooks/use-require-auth-action.ts
function useRequireAuthAction(defaultMessage) {
	const { data: session } = authClient.useSession();
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState(defaultMessage ?? "Para continuar, inicia sesion o crea una cuenta.");
	const requireAuth = useCallback((action, customMessage) => {
		if (session?.user) {
			action();
			return true;
		}
		setMessage(customMessage ?? defaultMessage ?? "Para continuar, inicia sesion o crea una cuenta.");
		setOpen(true);
		return false;
	}, [defaultMessage, session?.user]);
	return {
		isAuthenticated: Boolean(session?.user),
		requireAuth,
		authDialog: {
			open,
			onOpenChange: setOpen,
			message
		}
	};
}
//#endregion
//#region src/components/public/PropertyPublicCard.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyPublicCard.tsx";
function formatPrice(value) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function PropertyPublicCard({ property }) {
	const shortlists = usePublicShortlists();
	const authAction = useRequireAuthAction();
	const favorite = shortlists.isFavorite(property.id);
	const inCompare = shortlists.isInCompare(property.id);
	return /* @__PURE__ */ jsxDEV("article", {
		className: "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "h-44 w-full bg-slate-100",
				children: property.imageUrl ? /* @__PURE__ */ jsxDEV("img", {
					src: property.imageUrl,
					alt: property.title,
					className: "h-full w-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 11
				}, this) : /* @__PURE__ */ jsxDEV("div", {
					className: "flex h-full items-center justify-center text-xs text-slate-500",
					children: "Sin imagen"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "space-y-2 p-4",
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "text-lg font-bold text-slate-900",
							children: formatPrice(property.price)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 11
						}, this), /* @__PURE__ */ jsxDEV("span", {
							className: "rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700",
							children: ["Readiness ", property.readinessScore]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "line-clamp-1 text-base font-semibold text-habitra-text",
						children: property.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: [property.city, property.neighborhood ? `, ${property.neighborhood}` : ""]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-xs text-slate-500",
						children: [
							property.bedrooms ?? "—",
							" rec · ",
							property.bathrooms ?? "—",
							" banos · ",
							property.parkingSpaces ?? "—",
							" est."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex items-center gap-2 pt-1",
						children: [/* @__PURE__ */ jsxDEV(Link, {
							to: "/properties/$slug",
							params: { slug: property.slug },
							className: "rounded-lg bg-habitra-action px-3 py-2 text-xs font-semibold text-white",
							children: "Ver propiedad"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 11
						}, this), /* @__PURE__ */ jsxDEV(Link, {
							to: "/mortgage-calculator",
							className: "rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
							children: "Simular compra"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex items-center gap-2 pt-1",
						children: [/* @__PURE__ */ jsxDEV("button", {
							type: "button",
							onClick: () => authAction.requireAuth(() => shortlists.toggleFavorite(property)),
							className: `rounded-lg border px-3 py-2 text-xs font-semibold ${favorite ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 text-slate-700"}`,
							children: favorite ? "En favoritos" : "Guardar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this), /* @__PURE__ */ jsxDEV("button", {
							type: "button",
							onClick: () => authAction.requireAuth(() => shortlists.toggleCompare(property)),
							className: `rounded-lg border px-3 py-2 text-xs font-semibold ${inCompare ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-700"}`,
							children: inCompare ? "En comparador" : "Comparar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(AuthRequiredDialog, { ...authAction.authDialog }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
//#endregion
export { useRequireAuthAction as n, AuthRequiredDialog as r, PropertyPublicCard as t };
