import { t as PropertyPublicCard } from "./PropertyPublicCard-usgqfcdD.js";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/PropertyResultsGrid.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyResultsGrid.tsx";
function PropertyResultsGrid({ properties }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		children: properties.map((property) => /* @__PURE__ */ jsxDEV(PropertyPublicCard, { property }, property.id, false, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
//#endregion
export { PropertyResultsGrid as t };
