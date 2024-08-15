'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var react_hook_form_1 = require("react-hook-form");
var date_1 = require("@internationalized/date");
function FormPage() {
    var _a = react_hook_form_1.useForm(), control = _a.control, register = _a.register, setValue = _a.setValue, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var _b = react_2.useState(), result = _b[0], setResult = _b[1];
    var animals = [
        { label: 'Cat', value: '1' },
        { label: 'Dog', value: '2' },
        { label: 'Elephant', value: '3' },
        { label: 'Tiger', value: '4' },
        { label: 'Lion', value: '5' },
        { label: 'Dolphin', value: '6' }
    ];
    var _c = react_2.useState('abc@gmail.com'), email = _c[0], setEmail = _c[1];
    var onSubmit = function (data) {
        console.log(data);
        setResult(data);
    };
    function onEmailChange(e) {
        setEmail(email);
    }
    // const handleAnimalsChange = (selectedItem: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue('animals', selectedItem.target.value)
    // }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-col max-w-lg mx-auto text-center" },
            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React.createElement("div", { className: "flex justify-between gap-4" },
                    React.createElement(react_1.Input, __assign({ isRequired: true, type: "email", label: "Email", value: email, onChange: function (e) { return onEmailChange(e); }, className: "max-w-xs" }, register("email", { required: "This fields is required" }))),
                    React.createElement("div", { className: "text-left" }, errors.email && React.createElement("span", { className: "text-red-600" },
                        " ",
                        errors.email.message,
                        " ")),
                    React.createElement(react_1.Input, __assign({ isRequired: true, type: "name", label: "Name", className: "max-w-xs" }, register("name", { required: "This fields is required" })))),
                React.createElement("div", { className: "text-left" }, errors.email && React.createElement("span", { className: "text-red-600" },
                    " ",
                    errors.name.message,
                    " ")),
                React.createElement(react_1.Spacer, { y: 4 }),
                React.createElement(react_1.Select, __assign({ label: "Country", placeholder: "Select an option", className: 'flex justify-start max-w-xs' }, register("country", { required: "This field is required" })),
                    React.createElement(react_1.SelectItem, { value: "canada", key: "canada" }, "Canada"),
                    React.createElement(react_1.SelectItem, { value: "american", key: "american" }, "American")),
                React.createElement("div", { className: "text-left" }, errors.country && React.createElement("span", { className: "text-red-600" },
                    " ",
                    errors.country.message,
                    " ")),
                React.createElement(react_1.Spacer, { y: 4 }),
                React.createElement(react_1.CheckboxGroup, { label: "Favour Color", className: "text-left", defaultValue: ["Red, Pink"] },
                    React.createElement(react_1.Checkbox, __assign({}, register("favourColors"), { value: "1" }), " Red "),
                    React.createElement(react_1.Checkbox, __assign({}, register("favourColors"), { value: "2" }), " Yellow "),
                    React.createElement(react_1.Checkbox, __assign({}, register("favourColors"), { value: "3" }), " Blue "),
                    React.createElement(react_1.Checkbox, __assign({}, register("favourColors"), { value: "4" }), " Green "),
                    React.createElement(react_1.Checkbox, __assign({}, register("favourColors"), { value: "5" }), " Pink ")),
                React.createElement("div", { className: "flex flex-wrap w-full gap-4 mt-4 md:flex-nowrap" },
                    React.createElement("div", null,
                        React.createElement(react_hook_form_1.Controller, { name: "birthDate", rules: { required: "Birth date is required" }, control: control, render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(react_1.DatePicker, __assign({ label: "Birth date", className: "max-w-xs text-left", isRequired: true }, field)));
                            } }),
                        React.createElement("div", { className: "text-left" }, errors.birthDate && React.createElement("span", { className: "text-red-600" },
                            " ",
                            errors.birthDate.message,
                            " "))),
                    React.createElement("div", null,
                        React.createElement(react_hook_form_1.Controller, { name: "rangeDate", rules: { required: 'Range Date is required' }, control: control, render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(react_1.DateRangePicker, __assign({ label: "Stay duration", isRequired: true }, field, { defaultValue: {
                                        start: date_1.parseDate("2024-04-01"),
                                        end: date_1.parseDate("2024-04-08")
                                    }, className: "max-w-xs" })));
                            } }),
                        React.createElement("div", { className: "text-left" }, errors.birthDate && React.createElement("span", { className: "text-red-600" },
                            " ",
                            errors.rangeDate.message,
                            " ")))),
                React.createElement("div", { className: "max-w-xs mt-4" },
                    React.createElement(react_hook_form_1.Controller, { name: "animals", control: control, rules: { required: "This field is required" }, render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(react_1.Autocomplete, { isRequired: true, label: "Animals", defaultItems: animals, placeholder: "Search an animal", defaultSelectedKey: "1", className: "max-w-xs", onChange: function (selectedItem) { return field.onChange(selectedItem.value); } }, function (item) { return React.createElement(react_1.AutocompleteItem, { key: item.value }, item.label); }));
                        } }),
                    React.createElement("div", { className: "text-left" }, errors.animals && React.createElement("span", { className: "text-red-600" },
                        " ",
                        errors.animals.message,
                        " "))),
                React.createElement("button", { className: "p-2 mt-4 transition border border-white rounded-md hover:scale-110 hover:bg-blue-500", color: "primary", type: "submit" }, " Submit "))),
        React.createElement("div", { className: "w-full" },
            React.createElement("hr", { className: "mt-4 mb-4 " }),
            React.createElement("div", { className: "mt-4 text-left" }, " Result here:  "),
            React.createElement("div", { className: "flex justify-between gap-8 mb-4" },
                React.createElement("div", null, result === null || result === void 0 ? void 0 :
                    result.email,
                    "  "),
                React.createElement("div", null,
                    " ", result === null || result === void 0 ? void 0 :
                    result.country,
                    "  "),
                React.createElement("div", null,
                    " ", result === null || result === void 0 ? void 0 :
                    result.favourColors),
                React.createElement("div", null,
                    " animals = ", result === null || result === void 0 ? void 0 :
                    result.animals),
                React.createElement("div", null,
                    " ", result === null || result === void 0 ? void 0 :
                    result.birthDate.year,
                    " | ", result === null || result === void 0 ? void 0 :
                    result.birthDate.month,
                    " | ", result === null || result === void 0 ? void 0 :
                    result.birthDate.day),
                React.createElement("div", null,
                    " ", result === null || result === void 0 ? void 0 :
                    result.rangeDate.start.year,
                    " | ", result === null || result === void 0 ? void 0 :
                    result.rangeDate.start.month,
                    " | ", result === null || result === void 0 ? void 0 :
                    result.rangeDate.start.day),
                React.createElement("div", null,
                    " ", result === null || result === void 0 ? void 0 :
                    result.rangeDate.end.year,
                    " | ", result === null || result === void 0 ? void 0 :
                    result.rangeDate.end.month,
                    " | ", result === null || result === void 0 ? void 0 :
                    result.rangeDate.end.day)))));
}
exports["default"] = FormPage;
