'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@nextui-org/react");
function MyDropdown() {
    var _a = react_1["default"].useState(new Set(["text"])), selectedKeys = _a[0], setSelectedKeys = _a[1];
    var selectedValue = react_1["default"].useMemo(function () { return Array.from(selectedKeys).join(", ").replaceAll("_", " "); }, [selectedKeys]);
    return (react_1["default"].createElement(react_2.Dropdown, null,
        react_1["default"].createElement(react_2.DropdownTrigger, null,
            react_1["default"].createElement(react_2.Button, { variant: "bordered", className: "capitalize" }, selectedValue)),
        react_1["default"].createElement(react_2.DropdownMenu, { "aria-label": "Single selection example", variant: "flat", disallowEmptySelection: true, selectionMode: "single", selectedKeys: selectedKeys, onSelectionChange: setSelectedKeys },
            react_1["default"].createElement(react_2.DropdownItem, { key: "text" }, "Yellow"),
            react_1["default"].createElement(react_2.DropdownItem, { key: "number" }, "Red"),
            react_1["default"].createElement(react_2.DropdownItem, { key: "date" }, "Orange"),
            react_1["default"].createElement(react_2.DropdownItem, { key: "single_date" }, "Blue"),
            react_1["default"].createElement(react_2.DropdownItem, { key: "iteration" }, "Green"))));
}
exports["default"] = MyDropdown;
