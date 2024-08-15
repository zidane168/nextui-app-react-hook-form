'use client';
"use strict";
exports.__esModule = true;
var myDropdown_1 = require("@/components/myDropdown");
var myMultipleDropdown_1 = require("@/components/myMultipleDropdown");
var primitives_1 = require("@/components/primitives");
var input_1 = require("@nextui-org/input");
var react_1 = require("@nextui-org/react");
function ControlPage() {
    return (React.createElement("div", null,
        React.createElement("h1", { className: primitives_1.title() }, "Dropdown"),
        React.createElement("div", { className: "flex gap-4 mt-4" },
            React.createElement(myDropdown_1["default"], null),
            React.createElement(myMultipleDropdown_1["default"], null)),
        React.createElement("div", { className: "flex flex-wrap w-full gap-4 mt-4 md:flex-nowrap" },
            React.createElement(input_1.Input, { type: "email", label: "Email" }),
            React.createElement(input_1.Input, { type: "email", label: "Email", placeholder: "Enter your email" })),
        React.createElement("div", { className: "flex flex-wrap w-full gap-4 mt-4 md:flex-nowrap" },
            React.createElement(react_1.DatePicker, { label: "Birth date", className: "max-w-[284px]", isRequired: true, isInvalid: true, errorMessage: "Please enter a valid date." })),
        React.createElement("div", { className: "m-4" },
            React.createElement(react_1.Image, { isZoomed: true, width: 240, src: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg", alt: "NextUI Album Cover" })),
        React.createElement("div", { className: "flex gap-4" },
            React.createElement(react_1.Kbd, { keys: ["command"] }, "K"),
            React.createElement(react_1.Kbd, { keys: ["command", "shift"] }, "N"),
            React.createElement(react_1.Kbd, { keys: ["option", "command"] }, "P")),
        React.createElement("div", { className: "flex items-center gap-3 mt-4" },
            React.createElement(react_1.Avatar, { src: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }),
            React.createElement(react_1.Avatar, { name: "Junior" }),
            React.createElement(react_1.Badge, { content: "5", color: "success" },
                React.createElement(react_1.Avatar, { radius: "md", src: "https://i.pravatar.cc/150?u=a042f81f4e29026024d" })),
            React.createElement(react_1.Breadcrumbs, { radius: "none", variant: "solid" },
                React.createElement(react_1.BreadcrumbItem, null, "Home"),
                React.createElement(react_1.BreadcrumbItem, null, "Music"),
                React.createElement(react_1.BreadcrumbItem, null, "Artist"),
                React.createElement(react_1.BreadcrumbItem, null, "Album"),
                React.createElement(react_1.BreadcrumbItem, null, "Song"))),
        React.createElement("div", { className: "flex justify-between gap-4 mt-4" },
            React.createElement(react_1.CheckboxGroup, { defaultValue: ["Primary", "Secondary", "Warning"] },
                React.createElement(react_1.Checkbox, { value: "Default", color: "default" }, "Default"),
                React.createElement(react_1.Checkbox, { value: "Primary", color: "primary" }, "Primary"),
                React.createElement(react_1.Checkbox, { value: "Secondary", color: "secondary" }, "Secondary"),
                React.createElement(react_1.Checkbox, { value: "Success", color: "success" }, "Success"),
                React.createElement(react_1.Checkbox, { value: "Warning", color: "warning" }, "Warning"),
                React.createElement(react_1.Checkbox, { value: "Danger", color: "danger" }, "Danger")),
            React.createElement(react_1.Card, { className: "w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500" },
                React.createElement(react_1.CardBody, { className: "items-center justify-center pb-0" },
                    React.createElement(react_1.CircularProgress, { classNames: {
                            svg: "w-36 h-36 drop-shadow-md",
                            indicator: "stroke-white",
                            track: "stroke-white/5",
                            value: "text-3xl font-semibold text-white"
                        }, value: 70, strokeWidth: 4, showValueLabel: true })),
                React.createElement(react_1.CardFooter, { className: "items-center justify-center pt-0" },
                    React.createElement(react_1.Chip, { classNames: {
                            base: "border-1 border-white/30",
                            content: "text-white/90 text-small font-semibold"
                        }, variant: "bordered" }, "2800 Data points")))),
        React.createElement("div", { className: "flex gap-4 mt-4" },
            React.createElement(react_1.CircularProgress, { size: "lg", "aria-label": "Loading..." }),
            React.createElement(react_1.CircularProgress, { label: "Speed", size: "lg", value: 70, color: "success", formatOptions: { style: "unit", unit: "kilometer" }, showValueLabel: true })),
        React.createElement("div", { className: "mt-4" },
            React.createElement(react_1.Progress, { size: "sm", isIndeterminate: true, "aria-label": "Loading...", className: "max-w-md" }))));
}
exports["default"] = ControlPage;
