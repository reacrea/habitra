import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-GONQNPi6.js";
import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { t as Route } from "./_slug-BMlVtzv_.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { t as PublicLayout } from "./PublicLayout-CmtcZYaA.js";
import { t as usePublicShortlists } from "./use-public-shortlists-CBF7_adV.js";
import { n as useRequireAuthAction, r as AuthRequiredDialog, t as PropertyPublicCard } from "./PropertyPublicCard-C4gn7hFm.js";
import { i as getPublicSimilarProperties, r as getPublicPropertyBySlug } from "./public-b2c-C_62EE97.js";
import { t as MortgageCalculatorWidget } from "./MortgageCalculatorWidget-BTaBpe30.js";
import { a as CONTACT_INTEREST_TYPES, i as CONTACT_AVAILABILITY, n as scheduleVisitSchema, o as CONTACT_PREFERRED_METHODS, r as startBuyingProcessSchema, t as contactAgentSchema } from "./public-engagement-EXxwA0vb.js";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/server/public-engagement.ts
/**
* Portal B2C: compradores/vendedores actúan sin membresía CRM.
* Personal CRM solo puede crear recursos sobre propiedades de su organización.
*/
/**
* Solo el agente publicado en la listing si sigue siendo miembro de la org.
* Si el anuncio no tiene agente o el usuario ya no pertenece → null (el broker/admin asigna en CRM).
*/
/**
* Agente del anuncio (si pertenece a la org) o primer miembro operativo AGENT/MANAGER/OWNER.
* Usado cuando hace falta un usuario obligatorio (p. ej. Transaction.agentId).
*/
var contactAgentFromPublic = createServerFn({ method: "POST" }).inputValidator((data) => contactAgentSchema.parse(data)).handler(createSsrRpc("52c1af2a133a929dbcd3448ea19e0954e45b1b23c52814ec07a98eb7261579ce"));
var scheduleVisitFromPublic = createServerFn({ method: "POST" }).inputValidator((data) => scheduleVisitSchema.parse(data)).handler(createSsrRpc("babcf2fae0b51626cd490d077ddf468513f544be967398bb2fc7593a33717a37"));
var startBuyingProcessFromPublic = createServerFn({ method: "POST" }).inputValidator((data) => startBuyingProcessSchema.parse(data)).handler(createSsrRpc("fa7c5458134aaa87bc0d27f1c277971e8238a181ccc9822b6c1a4109a6d05e3d"));
//#endregion
//#region src/components/public/ContactAgentForm.tsx
var _jsxFileName$7 = "C:/Jcrea/Projects/Habitra/src/components/public/ContactAgentForm.tsx";
function ContactAgentForm({ propertySlug }) {
	const contactFn = useServerFn(contactAgentFromPublic);
	const authAction = useRequireAuthAction("Inicia sesion o registrate para contactar al agente.");
	const [message, setMessage] = useState("");
	const [interestType, setInterestType] = useState("COMPRAR");
	const [availability, setAvailability] = useState("MANANA");
	const [preferredContactMethod, setPreferredContactMethod] = useState("WHATSAPP");
	const mutation = useMutation({ mutationFn: () => contactFn({ data: {
		propertySlug,
		message: message.trim() ? message.trim() : void 0,
		interestType,
		availability,
		preferredContactMethod
	} }) });
	const handleSubmit = () => {
		authAction.requireAuth(() => mutation.mutate());
	};
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [
			/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: "Contactar agente"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			!authAction.isAuthenticated ? /* @__PURE__ */ jsxDEV("div", {
				className: "mt-3 space-y-3",
				children: [/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm text-slate-600",
					children: "Para enviar un mensaje al agente necesitas una cuenta. No permitimos contacto anonimo."
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 50,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: () => authAction.requireAuth(() => {}),
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
					children: "Iniciar sesion o registrarse"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 53,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 49,
				columnNumber: 9
			}, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("p", {
				className: "mt-2 text-sm text-slate-600",
				children: "Usamos tu nombre, correo y telefono de tu cuenta y perfil de comprador cuando existan."
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 63,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "mt-3 grid gap-2",
				children: [
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold uppercase text-slate-500",
						children: ["Tipo de interes", /* @__PURE__ */ jsxDEV("select", {
							value: interestType,
							onChange: (e) => setInterestType(e.target.value),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text",
							children: CONTACT_INTEREST_TYPES.map((o) => /* @__PURE__ */ jsxDEV("option", {
								value: o.value,
								children: o.label
							}, o.value, false, {
								fileName: _jsxFileName$7,
								lineNumber: 75,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 69,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 67,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold uppercase text-slate-500",
						children: ["Disponibilidad para contacto", /* @__PURE__ */ jsxDEV("select", {
							value: availability,
							onChange: (e) => setAvailability(e.target.value),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text",
							children: CONTACT_AVAILABILITY.map((o) => /* @__PURE__ */ jsxDEV("option", {
								value: o.value,
								children: o.label
							}, o.value, false, {
								fileName: _jsxFileName$7,
								lineNumber: 89,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 83,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 81,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold uppercase text-slate-500",
						children: ["Metodo preferido", /* @__PURE__ */ jsxDEV("select", {
							value: preferredContactMethod,
							onChange: (e) => setPreferredContactMethod(e.target.value),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text",
							children: CONTACT_PREFERRED_METHODS.map((o) => /* @__PURE__ */ jsxDEV("option", {
								value: o.value,
								children: o.label
							}, o.value, false, {
								fileName: _jsxFileName$7,
								lineNumber: 105,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 97,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 95,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold uppercase text-slate-500",
						children: ["Mensaje (opcional)", /* @__PURE__ */ jsxDEV("textarea", {
							value: message,
							onChange: (e) => setMessage(e.target.value),
							placeholder: "Comentarios adicionales para el agente...",
							className: "mt-1 min-h-24 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 113,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 111,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("button", {
						type: "button",
						disabled: mutation.isPending,
						onClick: handleSubmit,
						className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60",
						children: mutation.isPending ? "Enviando..." : "Enviar contacto"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 120,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 66,
				columnNumber: 11
			}, this)] }, void 0, true),
			mutation.isError ? /* @__PURE__ */ jsxDEV("p", {
				className: "mt-2 text-sm text-red-600",
				children: formatMutationError(mutation.error)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 133,
				columnNumber: 9
			}, this) : null,
			mutation.isSuccess ? /* @__PURE__ */ jsxDEV("p", {
				className: "mt-2 text-sm text-emerald-700",
				children: "Contacto enviado. Se genero un lead en CRM."
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 136,
				columnNumber: 9
			}, this) : null,
			/* @__PURE__ */ jsxDEV(AuthRequiredDialog, { ...authAction.authDialog }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 138,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyAgentContactCard.tsx
var _jsxFileName$6 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyAgentContactCard.tsx";
function PropertyAgentContactCard({ agent }) {
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [
			/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: "Agente"
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 flex items-center gap-3",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "h-12 w-12 overflow-hidden rounded-full bg-slate-100",
					children: agent.image ? /* @__PURE__ */ jsxDEV("img", {
						src: agent.image,
						alt: agent.name,
						className: "h-full w-full object-cover"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 18,
						columnNumber: 13
					}, this) : null
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 16,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
					className: "font-semibold text-habitra-text",
					children: agent.name
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 22,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "text-xs text-slate-500",
					children: agent.organizationName
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 23,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 21,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 space-y-2 text-sm text-slate-700",
				children: [agent.phone ? /* @__PURE__ */ jsxDEV("p", { children: ["Tel: ", agent.phone] }, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 27,
					columnNumber: 24
				}, this) : null, agent.email ? /* @__PURE__ */ jsxDEV("p", { children: ["Email: ", agent.email] }, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 28,
					columnNumber: 24
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ jsxDEV("button", {
					className: "rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white",
					children: "Contactar"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 31,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
					children: "Agendar visita"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 34,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 30,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyDocumentClarity.tsx
var _jsxFileName$5 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyDocumentClarity.tsx";
var LABELS = {
	ESCRITURA: "Escritura",
	PREDIAL: "Predial",
	AGUA: "Agua",
	LIBERTAD_GRAVAMEN: "Libertad de gravamen"
};
function PropertyDocumentClarity({ score, items }) {
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [
			/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: "Claridad documental"
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Resumen publico sin exponer archivos privados."
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-3 flex items-center gap-3",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "h-2 w-full rounded-full bg-slate-100",
					children: /* @__PURE__ */ jsxDEV("div", {
						className: "h-2 rounded-full bg-emerald-500",
						style: { width: `${score}%` }
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 23,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 22,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("span", {
					className: "text-sm font-semibold text-habitra-text",
					children: [score, "%"]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 25,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("ul", {
				className: "mt-4 space-y-2 text-sm",
				children: items.map((item) => /* @__PURE__ */ jsxDEV("li", {
					className: "flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2",
					children: [/* @__PURE__ */ jsxDEV("span", { children: LABELS[item.type] }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 30,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV("span", {
						className: `text-xs font-semibold ${item.available ? "text-emerald-700" : "text-slate-500"}`,
						children: item.available ? "Disponible" : "Pendiente"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 31,
						columnNumber: 13
					}, this)]
				}, item.type, true, {
					fileName: _jsxFileName$5,
					lineNumber: 29,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 27,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyGallery.tsx
var _jsxFileName$4 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyGallery.tsx";
function PropertyGallery({ images, title }) {
	const safeImages = useMemo(() => images.length > 0 ? images : [{
		id: "fallback",
		url: "",
		alt: "Sin imagen"
	}], [images]);
	const [activeId, setActiveId] = useState(safeImages[0].id);
	const active = safeImages.find((img) => img.id === activeId) ?? safeImages[0];
	return /* @__PURE__ */ jsxDEV("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:h-[480px]",
			children: active.url ? /* @__PURE__ */ jsxDEV("img", {
				src: active.url,
				alt: active.alt ?? title,
				className: "h-full w-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 21,
				columnNumber: 11
			}, this) : /* @__PURE__ */ jsxDEV("div", {
				className: "flex h-full items-center justify-center text-sm text-slate-500",
				children: "Sin imagen disponible"
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 23,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 19,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "grid grid-cols-4 gap-2 md:grid-cols-6",
			children: safeImages.slice(0, 12).map((img) => /* @__PURE__ */ jsxDEV("button", {
				type: "button",
				onClick: () => setActiveId(img.id),
				className: `overflow-hidden rounded-lg border ${img.id === active.id ? "border-emerald-500" : "border-slate-200"}`,
				children: img.url ? /* @__PURE__ */ jsxDEV("img", {
					src: img.url,
					alt: img.alt ?? title,
					className: "h-16 w-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 37,
					columnNumber: 15
				}, this) : /* @__PURE__ */ jsxDEV("div", { className: "h-16 bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 39,
					columnNumber: 15
				}, this)
			}, img.id, false, {
				fileName: _jsxFileName$4,
				lineNumber: 30,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 28,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/ScheduleVisitForm.tsx
var _jsxFileName$3 = "C:/Jcrea/Projects/Habitra/src/components/public/ScheduleVisitForm.tsx";
function ScheduleVisitForm({ propertySlug }) {
	const scheduleFn = useServerFn(scheduleVisitFromPublic);
	const authAction = useRequireAuthAction();
	const [title, setTitle] = useState("Agendar visita");
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState("");
	const mutation = useMutation({ mutationFn: () => scheduleFn({ data: {
		propertySlug,
		title,
		description: description || void 0,
		dueDate: dueDate ? new Date(dueDate).toISOString() : void 0
	} }) });
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [
			/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: "Agendar visita"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Si el anuncio tiene agente, la tarea se asigna a esa persona; si no, el broker o administrador la enruta desde Tareas en el CRM."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-3 grid gap-2",
				children: [
					/* @__PURE__ */ jsxDEV("input", {
						value: title,
						onChange: (e) => setTitle(e.target.value),
						placeholder: "Titulo",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 37,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("textarea", {
						value: description,
						onChange: (e) => setDescription(e.target.value),
						placeholder: "Descripcion (opcional)",
						className: "min-h-20 rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 43,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						type: "datetime-local",
						value: dueDate,
						onChange: (e) => setDueDate(e.target.value),
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 49,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("button", {
						type: "button",
						disabled: mutation.isPending || title.trim().length < 3,
						onClick: () => authAction.requireAuth(() => mutation.mutate()),
						className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 disabled:opacity-60",
						children: mutation.isPending ? "Agendando..." : "Crear visita"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 55,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 36,
				columnNumber: 7
			}, this),
			mutation.isError ? /* @__PURE__ */ jsxDEV("p", {
				className: "mt-2 text-sm text-red-600",
				children: formatMutationError(mutation.error)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 65,
				columnNumber: 9
			}, this) : null,
			mutation.isSuccess ? /* @__PURE__ */ jsxDEV("p", {
				className: "mt-2 text-sm text-emerald-700",
				children: "Visita agendada y registrada en CRM."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 68,
				columnNumber: 9
			}, this) : null,
			/* @__PURE__ */ jsxDEV(AuthRequiredDialog, { ...authAction.authDialog }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 70,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/StartBuyingProcessModal.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/public/StartBuyingProcessModal.tsx";
function StartBuyingProcessModal({ propertySlug, open, onOpenChange }) {
	const startFn = useServerFn(startBuyingProcessFromPublic);
	const authAction = useRequireAuthAction();
	const [offeredPrice, setOfferedPrice] = useState("");
	const [paymentType, setPaymentType] = useState("CREDITO");
	const [creditType, setCreditType] = useState("BANCARIO");
	const [notesText, setNotesText] = useState("");
	const mutation = useMutation({
		mutationFn: () => startFn({ data: {
			propertySlug,
			offeredPrice: offeredPrice ? Number(offeredPrice) : void 0,
			paymentType,
			creditType: paymentType === "CREDITO" || paymentType === "MIXTO" ? creditType : void 0,
			notesText: notesText || void 0
		} }),
		onSuccess: () => onOpenChange(false)
	});
	if (!open) return null;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl",
			children: [
				/* @__PURE__ */ jsxDEV("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxDEV("h3", {
						className: "text-lg font-semibold text-habitra-text",
						children: "Iniciar proceso de compra"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 46,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("button", {
						type: "button",
						onClick: () => onOpenChange(false),
						className: "text-sm font-semibold text-slate-500",
						children: "Cerrar"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-sm text-slate-600",
					children: "Crea una Transaction conectada al CRM."
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-4 grid gap-2",
					children: [
						/* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 1,
							value: offeredPrice,
							onChange: (e) => setOfferedPrice(e.target.value),
							placeholder: "Precio de oferta (opcional)",
							className: "rounded-xl border px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 53,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("select", {
							value: paymentType,
							onChange: (e) => setPaymentType(e.target.value),
							className: "rounded-xl border px-3 py-2 text-sm",
							children: [
								/* @__PURE__ */ jsxDEV("option", {
									value: "CREDITO",
									children: "Credito"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 66,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("option", {
									value: "CONTADO",
									children: "Contado"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 67,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("option", {
									value: "MIXTO",
									children: "Mixto"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 68,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 61,
							columnNumber: 11
						}, this),
						paymentType !== "CONTADO" ? /* @__PURE__ */ jsxDEV("select", {
							value: creditType,
							onChange: (e) => setCreditType(e.target.value),
							className: "rounded-xl border px-3 py-2 text-sm",
							children: [
								/* @__PURE__ */ jsxDEV("option", {
									value: "BANCARIO",
									children: "Bancario"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 87,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("option", {
									value: "INFONAVIT",
									children: "Infonavit"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 88,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("option", {
									value: "FOVISSSTE",
									children: "Fovissste"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 89,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("option", {
									value: "COFINAVIT",
									children: "Cofinavit"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 90,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("option", {
									value: "MIXTO",
									children: "Mixto"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 91,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("option", {
									value: "OTRO",
									children: "Otro"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 92,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 71,
							columnNumber: 13
						}, this) : null,
						/* @__PURE__ */ jsxDEV("textarea", {
							value: notesText,
							onChange: (e) => setNotesText(e.target.value),
							placeholder: "Notas (opcional)",
							className: "min-h-20 rounded-xl border px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 95,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("button", {
							type: "button",
							disabled: mutation.isPending,
							onClick: () => authAction.requireAuth(() => mutation.mutate()),
							className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60",
							children: mutation.isPending ? "Creando..." : "Iniciar proceso"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 101,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				mutation.isError ? /* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-red-600",
					children: formatMutationError(mutation.error)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 111,
					columnNumber: 11
				}, this) : null
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 44,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV(AuthRequiredDialog, { ...authAction.authDialog }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 114,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyTimelinePreview.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyTimelinePreview.tsx";
function PropertyTimelinePreview({ timeline }) {
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [/* @__PURE__ */ jsxDEV("h3", {
			className: "text-lg font-semibold text-habitra-text",
			children: "Timeline estimado"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 8,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("ol", {
			className: "mt-4 space-y-3",
			children: timeline.map((step, index) => /* @__PURE__ */ jsxDEV("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white",
					children: index + 1
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 12,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm font-semibold text-habitra-text",
					children: step.title
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 16,
					columnNumber: 15
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "text-sm text-slate-600",
					children: step.description
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 17,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 15,
					columnNumber: 13
				}, this)]
			}, step.id, true, {
				fileName: _jsxFileName$1,
				lineNumber: 11,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 9,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/properties/$slug.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/properties/$slug.tsx?tsr-split=component";
function PublicPropertyDetailPage() {
	const { slug } = Route.useParams();
	const fetchDetail = useServerFn(getPublicPropertyBySlug);
	const fetchSimilar = useServerFn(getPublicSimilarProperties);
	const shortlists = usePublicShortlists();
	const authAction = useRequireAuthAction();
	const [startModalOpen, setStartModalOpen] = useState(false);
	const detailQuery = useQuery({
		queryKey: ["public-property-detail", slug],
		queryFn: () => fetchDetail({ data: { slug } }),
		enabled: Boolean(slug)
	});
	const similarQuery = useQuery({
		queryKey: ["public-property-similar", slug],
		queryFn: () => fetchSimilar({ data: { slug } }),
		enabled: Boolean(slug)
	});
	if (detailQuery.isPending) return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl px-4 py-10 md:px-6",
		children: /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando detalle de propiedad..." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 12
	}, this);
	if (detailQuery.isError || !detailQuery.data) return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl px-4 py-10 md:px-6",
		children: /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la propiedad." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 12
	}, this);
	const { property, estimatedTimeline } = detailQuery.data;
	const cardProperty = {
		id: property.id,
		slug: property.slug,
		title: property.title,
		operationType: property.operationType,
		propertyType: property.propertyType,
		price: property.price,
		city: property.city,
		neighborhood: property.neighborhood,
		bedrooms: property.bedrooms,
		bathrooms: property.bathrooms,
		parkingSpaces: property.parkingSpaces,
		readinessScore: property.readinessScore,
		imageUrl: property.imageUrl,
		organizationName: property.organizationName
	};
	const favorite = shortlists.isFavorite(property.id);
	const inCompare = shortlists.isInCompare(property.id);
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: [
		/* @__PURE__ */ jsxDEV("section", {
			className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/properties",
							className: "text-sm font-semibold text-emerald-700",
							children: "Volver a propiedades"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "text-xs font-semibold uppercase text-emerald-700",
							children: property.operationType
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("h1", {
							className: "text-3xl font-bold text-habitra-text md:text-4xl",
							children: property.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "text-sm text-slate-600",
							children: [property.city, property.neighborhood ? `, ${property.neighborhood}` : ""]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "text-2xl font-bold text-slate-900",
							children: [
								"$",
								property.price.toLocaleString("es-MX"),
								" MXN"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(PropertyGallery, {
					images: property.images,
					title: property.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "grid gap-6 lg:grid-cols-[1fr,320px]",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxDEV("section", {
								className: "rounded-2xl border border-slate-200 bg-white p-5",
								children: [
									/* @__PURE__ */ jsxDEV("h3", {
										className: "text-lg font-semibold text-habitra-text",
										children: "Caracteristicas"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 106,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("div", {
										className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-700",
										children: [
											/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.bedrooms ?? "—" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 108,
												columnNumber: 20
											}, this), " recamaras"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 108,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.bathrooms ?? "—" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 109,
												columnNumber: 20
											}, this), " banos"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 109,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.parkingSpaces ?? "—" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 110,
												columnNumber: 20
											}, this), " estacionamientos"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 110,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.landArea ?? "—" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 111,
												columnNumber: 20
											}, this), " m2 terreno"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 111,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.constructionArea ?? "—" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 112,
												columnNumber: 20
											}, this), " m2 construccion"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 112,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.age ?? "—" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 113,
												columnNumber: 20
											}, this), " anos antiguedad"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 113,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 107,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("p", {
										className: "mt-4 text-sm text-slate-700",
										children: property.fullDescription ?? property.description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 115,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(PropertyDocumentClarity, {
								score: property.documentClarityScore,
								items: property.documentClarity
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(PropertyTimelinePreview, { timeline: estimatedTimeline }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(MortgageCalculatorWidget, {
								compact: true,
								defaultPrice: property.price,
								title: "Simulador rapido para esta propiedad"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								id: "contact-form",
								children: /* @__PURE__ */ jsxDEV(ContactAgentForm, { propertySlug: property.slug }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								id: "schedule-form",
								children: /* @__PURE__ */ jsxDEV(ScheduleVisitForm, { propertySlug: property.slug }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("section", {
								className: "rounded-2xl border border-slate-200 bg-white p-5",
								children: [
									/* @__PURE__ */ jsxDEV("h3", {
										className: "text-lg font-semibold text-habitra-text",
										children: "Propiedades similares"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 15
									}, this),
									similarQuery.isPending ? /* @__PURE__ */ jsxDEV("p", {
										className: "mt-3 text-sm text-slate-600",
										children: "Cargando similares..."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 130,
										columnNumber: 41
									}, this) : null,
									similarQuery.data && similarQuery.data.similar.length > 0 ? /* @__PURE__ */ jsxDEV("div", {
										className: "mt-4 grid gap-4 md:grid-cols-2",
										children: similarQuery.data.similar.map((item) => /* @__PURE__ */ jsxDEV(PropertyPublicCard, { property: item }, item.id, false, {
											fileName: _jsxFileName,
											lineNumber: 132,
											columnNumber: 58
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 76
									}, this) : null
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("div", {
						className: "space-y-4 lg:sticky lg:top-24 lg:self-start",
						children: [/* @__PURE__ */ jsxDEV("div", {
							className: "rounded-2xl border border-slate-200 bg-white p-5",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-semibold text-habitra-text",
								children: "Acciones"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("div", {
								className: "mt-4 grid gap-2",
								children: [
									/* @__PURE__ */ jsxDEV("button", {
										type: "button",
										onClick: () => authAction.requireAuth(() => {
											document.getElementById("contact-form")?.scrollIntoView({
												behavior: "smooth",
												block: "start"
											});
										}),
										className: "rounded-xl bg-habitra-action px-4 py-2 text-center text-sm font-semibold text-white",
										children: "Contactar agente"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("button", {
										type: "button",
										onClick: () => authAction.requireAuth(() => {
											document.getElementById("schedule-form")?.scrollIntoView({
												behavior: "smooth",
												block: "start"
											});
										}),
										className: "rounded-xl border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700",
										children: "Agendar visita"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV(Link, {
										to: "/mortgage-calculator",
										className: "rounded-xl border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700",
										children: "Simular compra"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 157,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("button", {
										type: "button",
										onClick: () => authAction.requireAuth(() => setStartModalOpen(true)),
										className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700",
										children: "Iniciar proceso"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 160,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("button", {
										type: "button",
										onClick: () => authAction.requireAuth(() => shortlists.toggleFavorite(cardProperty)),
										className: `rounded-xl border px-4 py-2 text-sm font-semibold ${favorite ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 text-slate-700"}`,
										children: favorite ? "En favoritos" : "Guardar favorito"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 163,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("button", {
										type: "button",
										onClick: () => authAction.requireAuth(() => shortlists.toggleCompare(cardProperty)),
										className: `rounded-xl border px-4 py-2 text-sm font-semibold ${inCompare ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-700"}`,
										children: inCompare ? "En comparador" : "Agregar a comparar"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 140,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 13
						}, this), /* @__PURE__ */ jsxDEV(PropertyAgentContactCard, { agent: property.agent }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ jsxDEV("div", {
			className: "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] lg:hidden",
			children: /* @__PURE__ */ jsxDEV("div", {
				className: "mx-auto flex max-w-7xl gap-2",
				children: [
					/* @__PURE__ */ jsxDEV("button", {
						type: "button",
						onClick: () => authAction.requireAuth(() => {
							document.getElementById("contact-form")?.scrollIntoView({
								behavior: "smooth",
								block: "start"
							});
						}),
						className: "flex-1 rounded-xl bg-habitra-action px-3 py-2 text-center text-sm font-semibold text-white",
						children: "Contactar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("button", {
						type: "button",
						onClick: () => authAction.requireAuth(() => {
							document.getElementById("schedule-form")?.scrollIntoView({
								behavior: "smooth",
								block: "start"
							});
						}),
						className: "flex-1 rounded-xl border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700",
						children: "Visitar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 186,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/mortgage-calculator",
						className: "flex-1 rounded-xl border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700",
						children: "Simular"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 194,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 176,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ jsxDEV(StartBuyingProcessModal, {
			propertySlug: property.slug,
			open: startModalOpen,
			onOpenChange: setStartModalOpen
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 199,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ jsxDEV(AuthRequiredDialog, { ...authAction.authDialog }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 200,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 84,
		columnNumber: 10
	}, this);
}
//#endregion
export { PublicPropertyDetailPage as component };
