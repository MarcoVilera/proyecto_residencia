"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./SidebarStyle.css");
const NavbarLateral = () => {
    return (react_1.default.createElement("div", { className: "navbar-lateral" },
        react_1.default.createElement("div", { className: "logo" },
            react_1.default.createElement("img", { src: "logo.png", alt: "Logo" })),
        react_1.default.createElement("ul", { className: "menu" },
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#" }, "Vista 1")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#" }, "Vista 2")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#" }, "Vista 3")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#" }, "Vista 4")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#" }, "Vista 5")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#" }, "Vista 6")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#" }, "Vista 7")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("button", { className: "btn-logout" }, "Cerrar sesi\u00F3n")))));
};
exports.default = NavbarLateral;
