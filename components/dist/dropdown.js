"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
function MyDropdown() {
    return (react_1["default"].createElement(react_2.Dropdown, null,
        react_1["default"].createElement(react_2.DropdownTrigger, null,
            react_1["default"].createElement(react_2.Button, { variant: "bordered" }, "Open Menu")),
        react_1["default"].createElement(react_2.DropdownMenu, { "aria-label": "Static Actions" },
            react_1["default"].createElement(react_2.DropdownItem, { key: "new" }, "New file"),
            react_1["default"].createElement(react_2.DropdownItem, { key: "copy" }, "Copy link"),
            react_1["default"].createElement(react_2.DropdownItem, { key: "edit" }, "Edit file"),
            react_1["default"].createElement(react_2.DropdownItem, { key: "delete", className: "text-danger", color: "danger" }, "Delete file"))));
}
exports["default"] = MyDropdown;
