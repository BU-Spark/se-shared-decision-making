"use strict";
(self["webpackChunkse_decisions_backend"] = self["webpackChunkse_decisions_backend"] || []).push([[5162],{

/***/ 40703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Webhooks_EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 18 modules
var helper_plugin_esm = __webpack_require__(81849);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.js
var Play = __webpack_require__(90321);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(71997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(41451);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/EventRow.js




const EventRow = ({ disabledEvents, name, events, inputValue, handleChange, handleChangeAll }) => {
  const enabledCheckboxes = events.filter((event) => {
    return !disabledEvents.includes(event);
  });
  const areAllCheckboxesSelected = inputValue.length === enabledCheckboxes.length;
  const hasSomeCheckboxSelected = inputValue.length > 0;
  const onChangeAll = ({ target: { name: name2 } }) => {
    const valueToSet = !areAllCheckboxesSelected;
    handleChangeAll({
      target: { name: name2, value: valueToSet }
    });
  };
  return /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      indeterminate: hasSomeCheckboxSelected && !areAllCheckboxesSelected,
      "aria-label": "Select all entries",
      name,
      onChange: onChangeAll,
      value: areAllCheckboxesSelected
    },
    upperFirst_default()(name)
  )), events.map((event) => {
    return /* @__PURE__ */ react.createElement("td", { key: event }, /* @__PURE__ */ react.createElement(
      BaseCheckbox/* BaseCheckbox */.C,
      {
        disabled: disabledEvents.includes(event),
        "aria-label": event,
        name: event,
        value: inputValue.includes(event),
        onValueChange: (value) => handleChange({ target: { name: event, value } })
      }
    ));
  }));
};
EventRow.defaultProps = {
  disabledEvents: [],
  events: [],
  inputValue: [],
  handleChange() {
  },
  handleChangeAll() {
  }
};
EventRow.propTypes = {
  disabledEvents: (prop_types_default()).array,
  events: (prop_types_default()).array,
  inputValue: (prop_types_default()).array,
  handleChange: (prop_types_default()).func,
  handleChangeAll: (prop_types_default()).func,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const EventInput_EventRow = (EventRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/utils/formatValue.js
const formatValue = (value) => value.reduce((acc, curr) => {
  const key = curr.split(".")[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
/* harmony default export */ const utils_formatValue = (formatValue);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/index.js








const StyledTable = styled_components_browser_esm/* default.table */.ZP.table`
  td {
    height: ${52 / 16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;
const displayedData = {
  headers: {
    default: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" }
    ],
    draftAndPublish: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" },
      { id: "app.utils.publish", defaultMessage: "Publish" },
      { id: "app.utils.unpublish", defaultMessage: "Unpublish" }
    ]
  },
  events: {
    default: {
      entry: ["entry.create", "entry.update", "entry.delete"],
      media: ["media.create", "media.update", "media.delete"]
    },
    draftAndPublish: {
      entry: ["entry.create", "entry.update", "entry.delete", "entry.publish", "entry.unpublish"],
      media: ["media.create", "media.update", "media.delete"]
    }
  }
};
const EventInput = ({ isDraftAndPublish }) => {
  const headersName = isDraftAndPublish ? displayedData.headers.draftAndPublish : displayedData.headers.default;
  const events = isDraftAndPublish ? displayedData.events.draftAndPublish : displayedData.events.default;
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { values, handleChange: onChange } = (0,formik_esm/* useFormikContext */.u6)();
  const inputName = "events";
  const inputValue = values.events;
  const disabledEvents = [];
  const formattedValue = utils_formatValue(inputValue);
  const handleChange = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      set.add(name);
    } else {
      set.delete(name);
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  const handleChangeAll = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      events[name].forEach((event) => {
        if (!disabledEvents.includes(event)) {
          set.add(event);
        }
      });
    } else {
      events[name].forEach((event) => set.delete(event));
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "Settings.webhooks.form.events",
    defaultMessage: "Events"
  })), /* @__PURE__ */ react.createElement(StyledTable, null, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null), headersName.map((header) => {
    if (header === "app.utils.publish" || header === "app.utils.unpublish") {
      return /* @__PURE__ */ react.createElement(
        "td",
        {
          key: header.id,
          title: formatMessage({
            id: "Settings.webhooks.event.publish-tooltip",
            defaultMessage: "This event only exists for content with draft & publish enabled"
          })
        },
        /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage(header))
      );
    }
    return /* @__PURE__ */ react.createElement("td", { key: header.id }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage(header)));
  }))), /* @__PURE__ */ react.createElement("tbody", null, Object.keys(events).map((event) => {
    return /* @__PURE__ */ react.createElement(
      EventInput_EventRow,
      {
        disabledEvents,
        key: event,
        name: event,
        events: events[event],
        inputValue: formattedValue[event],
        handleChange,
        handleChangeAll
      }
    );
  }))));
};
EventInput.propTypes = {
  isDraftAndPublish: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_EventInput = (EventInput);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js + 1 modules
var Combobox = __webpack_require__(38855);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/keys.js
const keys = [
  "A-IM",
  "Accept",
  "Accept-Charset",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Datetime",
  "Access-Control-Request-Method",
  "Access-Control-Request-Headers",
  "Authorization",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Cookie",
  "Date",
  "Expect",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Max-Forwards",
  "Origin",
  "Pragma",
  "Proxy-Authorization",
  "Range",
  "Referer",
  "TE",
  "User-Agent",
  "Upgrade",
  "Via",
  "Warning"
];
/* harmony default export */ const HeadersInput_keys = (keys);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/Combobox.js




const Combobox_Combobox = ({ name, onChange, value, ...props }) => {
  const [options, setOptions] = (0,react.useState)(value ? [...HeadersInput_keys, value] : HeadersInput_keys);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 } });
  };
  const handleCreateOption = (value2) => {
    setOptions((prev) => [...prev, value2]);
    onChange({ target: { name, value: value2 } });
  };
  return /* @__PURE__ */ react.createElement(
    Combobox/* CreatableCombobox */.X,
    {
      ...props,
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      placeholder: "",
      value
    },
    options.map((key) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: key, key }, key))
  );
};
Combobox_Combobox.defaultProps = {
  value: void 0
};
Combobox_Combobox.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const HeadersInput_Combobox = (Combobox_Combobox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/index.js







const HeadersInput = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { values, errors } = (0,formik_esm/* useFormikContext */.u6)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "Settings.webhooks.form.headers",
    defaultMessage: "Headers"
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "neutral100", hasRadius: true }, /* @__PURE__ */ react.createElement(
    formik_esm/* FieldArray */.F2,
    {
      validateOnChange: false,
      name: "headers",
      render: ({ push, remove }) => /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, values.headers?.map((header, i) => (
        // eslint-disable-next-line
        /* @__PURE__ */ react.createElement(react.Fragment, { key: i }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
          formik_esm/* Field */.gN,
          {
            as: HeadersInput_Combobox,
            name: `headers.${i}.key`,
            "aria-label": `row ${i + 1} key`,
            label: formatMessage({
              id: "Settings.webhooks.key",
              defaultMessage: "Key"
            }),
            error: errors.headers?.[i]?.key && formatMessage({
              id: errors.headers[i]?.key,
              defaultMessage: errors.headers[i]?.key
            })
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { flex: 1 } }, /* @__PURE__ */ react.createElement(
          formik_esm/* Field */.gN,
          {
            as: TextInput/* TextInput */.o,
            "aria-label": `row ${i + 1} value`,
            label: formatMessage({
              id: "Settings.webhooks.value",
              defaultMessage: "Value"
            }),
            name: `headers.${i}.value`,
            error: errors.headers?.[i]?.value && formatMessage({
              id: errors.headers[i]?.value,
              defaultMessage: errors.headers[i]?.value
            })
          }
        )), /* @__PURE__ */ react.createElement(
          Flex/* Flex */.k,
          {
            paddingLeft: 2,
            style: { alignSelf: "center" },
            paddingTop: errors.headers?.[i]?.value ? 0 : 5
          },
          /* @__PURE__ */ react.createElement(
            helper_plugin_esm/* RemoveRoundedButton */.fG,
            {
              onClick: () => values.headers.length !== 1 && remove(i),
              label: formatMessage(
                {
                  id: "Settings.webhooks.headers.remove",
                  defaultMessage: "Remove header row {number}"
                },
                { number: i + 1 }
              )
            }
          )
        ))))
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12 }, /* @__PURE__ */ react.createElement(
        TextButton/* TextButton */.A,
        {
          type: "button",
          onClick: () => {
            push({ key: "", value: "" });
          },
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
        },
        formatMessage({
          id: "Settings.webhooks.create.header",
          defaultMessage: "Create new header"
        })
      )))
    }
  )));
};
/* harmony default export */ const components_HeadersInput = (HeadersInput);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Loader.js
var Loader = __webpack_require__(86647);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/TriggerContainer/index.js







const Icon = styled_components_browser_esm/* default.svg */.ZP.svg(
  ({ theme, color }) => `
  width: ${12 / 16}rem;
  height: ${12 / 16}rem;

  path {
    fill: ${theme.colors[color]};
  }
`
);
const Status = ({ isPending, statusCode }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (isPending) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Loader/* default */.Z }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.pending", defaultMessage: "pending" })));
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Check/* default */.Z, color: "success700" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.success", defaultMessage: "success" })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Cross/* default */.Z, color: "danger700" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.error", defaultMessage: "error" }), " ", statusCode));
  }
  return null;
};
Status.propTypes = {
  isPending: (prop_types_default()).bool.isRequired,
  statusCode: (prop_types_default()).number
};
Status.defaultProps = {
  statusCode: void 0
};
const Message = ({ statusCode, message }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600", ellipsis: true }, formatMessage({
      id: "Settings.webhooks.trigger.success.label",
      defaultMessage: "Trigger succeeded"
    })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { maxWidth: (0,helper_plugin_esm/* pxToRem */.Q1)(250), justifyContent: "flex-end", title: message }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: true, textColor: "neutral600" }, message)));
  }
  return null;
};
Message.propTypes = {
  statusCode: (prop_types_default()).number,
  message: (prop_types_default()).string
};
Message.defaultProps = {
  statusCode: void 0,
  message: void 0
};
const CancelButton = ({ onCancel }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement("button", { onClick: onCancel, type: "button" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral400" }, formatMessage({ id: "Settings.webhooks.trigger.cancel", defaultMessage: "cancel" })), /* @__PURE__ */ react.createElement(Icon, { as: Cross/* default */.Z, color: "neutral400" }))));
};
CancelButton.propTypes = { onCancel: (prop_types_default()).func.isRequired };
const TriggerContainer = ({ isPending, onCancel, response }) => {
  const { statusCode, message } = response;
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 5, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "Settings.webhooks.trigger.test",
    defaultMessage: "Test-trigger"
  }))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3 }, /* @__PURE__ */ react.createElement(Status, { isPending, statusCode })), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, !isPending ? /* @__PURE__ */ react.createElement(Message, { statusCode, message }) : /* @__PURE__ */ react.createElement(CancelButton, { onCancel }))));
};
TriggerContainer.defaultProps = {
  isPending: false,
  onCancel() {
  },
  response: {}
};
TriggerContainer.propTypes = {
  isPending: (prop_types_default()).bool,
  onCancel: (prop_types_default()).func,
  response: (prop_types_default()).object
};
/* harmony default export */ const components_TriggerContainer = (TriggerContainer);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/fieldsRegex.js
const NAME_REGEX = /(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/;
const URL_REGEX = /(^$)|((https?:\/\/.*)(d*)\/?(.*))/;


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/schema.js



const schema = yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_(helper_plugin_esm/* translatedErrors.string */.I0.string).required(helper_plugin_esm/* translatedErrors.required */.I0.required).matches(NAME_REGEX, helper_plugin_esm/* translatedErrors.regex */.I0.regex),
  url: yup_es/* string */.Z_(helper_plugin_esm/* translatedErrors.string */.I0.string).required(helper_plugin_esm/* translatedErrors.required */.I0.required).matches(URL_REGEX, helper_plugin_esm/* translatedErrors.regex */.I0.regex),
  headers: yup_es/* lazy */.Vo((array) => {
    let baseSchema = yup_es/* array */.IX();
    if (array.length === 1) {
      const { key, value } = array[0];
      if (!key && !value) {
        return baseSchema;
      }
    }
    return baseSchema.of(
      yup_es/* object */.Ry().shape({
        key: yup_es/* string */.Z_().required(helper_plugin_esm/* translatedErrors.required */.I0.required),
        value: yup_es/* string */.Z_().required(helper_plugin_esm/* translatedErrors.required */.I0.required)
      })
    );
  }),
  events: yup_es/* array */.IX()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/WebhookForm/index.js











const WebhookForm = ({
  handleSubmit,
  data,
  triggerWebhook,
  isCreating,
  isTriggering,
  triggerResponse,
  isDraftAndPublishEvents
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showTriggerResponse, setShowTriggerResponse] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      onSubmit: handleSubmit,
      initialValues: {
        name: data?.name || "",
        url: data?.url || "",
        headers: Object.keys(data?.headers || []).length ? Object.entries(data.headers).map(([key, value]) => ({ key, value })) : [{ key: "", value: "" }],
        events: data?.events || []
      },
      validationSchema: utils_schema,
      validateOnChange: false,
      validateOnBlur: false
    },
    ({ handleSubmit: handleSubmit2, errors }) => /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.l0, { noValidate: true }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            onClick: () => {
              triggerWebhook();
              setShowTriggerResponse(true);
            },
            variant: "tertiary",
            startIcon: /* @__PURE__ */ react.createElement(Play/* default */.Z, null),
            disabled: isCreating || isTriggering,
            size: "L"
          },
          formatMessage({
            id: "Settings.webhooks.trigger",
            defaultMessage: "Trigger"
          })
        ), /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), onClick: handleSubmit2, type: "submit", size: "L" }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        }))),
        title: isCreating ? formatMessage({
          id: "Settings.webhooks.create",
          defaultMessage: "Create a webhook"
        }) : data?.name,
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/webhooks" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, showTriggerResponse && /* @__PURE__ */ react.createElement("div", { className: "trigger-wrapper" }, /* @__PURE__ */ react.createElement(
      components_TriggerContainer,
      {
        isPending: isTriggering,
        response: triggerResponse,
        onCancel: () => setShowTriggerResponse(false)
      }
    )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 8, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      formik_esm/* Field */.gN,
      {
        as: TextInput/* TextInput */.o,
        name: "name",
        error: errors.name && formatMessage({ id: errors.name }),
        label: formatMessage({
          id: "global.name",
          defaultMessage: "Name"
        }),
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12 }, /* @__PURE__ */ react.createElement(
      formik_esm/* Field */.gN,
      {
        as: TextInput/* TextInput */.o,
        name: "url",
        error: errors.url && formatMessage({ id: errors.url }),
        label: formatMessage({
          id: "Settings.roles.form.input.url",
          defaultMessage: "Url"
        }),
        required: true
      }
    ))), /* @__PURE__ */ react.createElement(components_HeadersInput, null), /* @__PURE__ */ react.createElement(components_EventInput, { isDraftAndPublish: isDraftAndPublishEvents }))))))
  );
};
WebhookForm.propTypes = {
  data: (prop_types_default()).object,
  handleSubmit: (prop_types_default()).func.isRequired,
  triggerWebhook: (prop_types_default()).func.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isDraftAndPublishEvents: (prop_types_default()).bool.isRequired,
  isTriggering: (prop_types_default()).bool.isRequired,
  triggerResponse: (prop_types_default()).object
};
WebhookForm.defaultProps = {
  data: void 0,
  triggerResponse: void 0
};
/* harmony default export */ const components_WebhookForm = (WebhookForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/utils/formatData.js
const cleanData = (data) => {
  return { ...data, headers: unformatHeaders(data.headers) };
};
const unformatHeaders = (headers) => {
  return headers.reduce((acc, current) => {
    const { key, value } = current;
    if (key !== "") {
      return {
        ...acc,
        [key]: value
      };
    }
    return acc;
  }, {});
};
/* harmony default export */ const formatData = (cleanData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/index.js








const EditView = () => {
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)("/settings/webhooks/:id");
  const { replace } = (0,react_router/* useHistory */.k6)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.o1)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const queryClient = (0,es.useQueryClient)();
  const { isLoading: isLoadingForModels, collectionTypes } = (0,hooks/* useModels */.bP)();
  const { post } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const isCreating = id === "create";
  const fetchWebhook = (0,react.useCallback)(
    async (id2) => {
      const [err, { data: data2 }] = await (0,helper_plugin_esm.to)(
        (0,helper_plugin_esm/* request */.WY)(`/admin/webhooks/${id2}`, {
          method: "GET"
        })
      );
      if (err) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
        return null;
      }
      return data2;
    },
    [toggleNotification]
  );
  const { isLoading, data } = (0,es.useQuery)(["get-webhook", id], () => fetchWebhook(id), {
    enabled: !isCreating
  });
  const {
    isLoading: isTriggering,
    data: triggerResponse,
    isIdle: isTriggerIdle,
    mutate
  } = (0,es.useMutation)(() => post(`/admin/webhooks/${id}/trigger`));
  const triggerWebhook = () => mutate(null, {
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const createWebhookMutation = (0,es.useMutation)(
    (body) => (0,helper_plugin_esm/* request */.WY)("/admin/webhooks", {
      method: "POST",
      body
    })
  );
  const updateWebhookMutation = (0,es.useMutation)(
    ({ id: id2, body }) => (0,helper_plugin_esm/* request */.WY)(`/admin/webhooks/${id2}`, {
      method: "PUT",
      body
    })
  );
  const handleSubmit = async (data2) => {
    if (isCreating) {
      lockApp();
      createWebhookMutation.mutate(formatData(data2), {
        onSuccess(result) {
          toggleNotification({
            type: "success",
            message: { id: "Settings.webhooks.created" }
          });
          replace(`/settings/webhooks/${result.data.id}`);
          unlockApp();
        },
        onError(e) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
          console.log(e);
          unlockApp();
        }
      });
    } else {
      lockApp();
      updateWebhookMutation.mutate(
        { id, body: formatData(data2) },
        {
          onSuccess() {
            queryClient.invalidateQueries(["get-webhook", id]);
            toggleNotification({
              type: "success",
              message: { id: "notification.form.success.fields" }
            });
            unlockApp();
          },
          onError(e) {
            toggleNotification({
              type: "warning",
              message: { id: "notification.error" }
            });
            console.log(e);
            unlockApp();
          }
        }
      );
    }
  };
  const isDraftAndPublishEvents = (0,react.useMemo)(
    () => collectionTypes.some((ct) => ct.options.draftAndPublish === true),
    [collectionTypes]
  );
  if (isLoading || isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(
    components_WebhookForm,
    {
      ...{
        handleSubmit,
        data,
        triggerWebhook,
        isCreating,
        isTriggering,
        isTriggerIdle,
        triggerResponse: triggerResponse?.data.data,
        isDraftAndPublishEvents
      }
    }
  ));
};
/* harmony default export */ const Webhooks_EditView = (EditView);


/***/ }),

/***/ 3672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81849);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40703);




const ProtectedCreateView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .O4, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.create */ .Z.settings.webhooks.create }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedCreateView);


/***/ }),

/***/ 42122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81849);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40703);




const ProtectedEditView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .O4, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.update */ .Z.settings.webhooks.update }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedEditView);


/***/ }),

/***/ 38855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ I),
  "X": () => (/* binding */ W)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/components.js
var components = __webpack_require__(74020);
// EXTERNAL MODULE: ./node_modules/compute-scroll-into-view/dist/index.mjs
var dist = __webpack_require__(70389);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/utils.js


const utils_t = {
  Close: "Close",
  CloseSelect: "CloseSelect",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  PageDown: "PageDown",
  PageUp: "PageUp",
  Previous: "Previous",
  Select: "Select",
  Space: "Space",
  Type: "Type"
}, f = {
  Close: "Close",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  Previous: "Previous",
  Select: "Select",
  UpLevel: "UpLevel"
};
function utils_d(e = [], n = null, i = []) {
  const o = String(n ?? "").toLowerCase();
  return o ? e.filter((s) => s.props.children.toString().toLowerCase().includes(o) && i.indexOf(s) < 0) : e;
}
function C(e, n) {
  if (!n && e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Open;
  if (e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Next;
  if (e === keyboardKeys/* KeyboardKeys.UP */.y.UP)
    return utils_t.Previous;
  if (e === keyboardKeys/* KeyboardKeys.HOME */.y.HOME)
    return utils_t.First;
  if (e === keyboardKeys/* KeyboardKeys.END */.y.END)
    return utils_t.Last;
  if (e === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE)
    return utils_t.Close;
  if (e === keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER)
    return utils_t.CloseSelect;
  if (e === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE || e === keyboardKeys/* KeyboardKeys.CLEAR */.y.CLEAR || e.length === 1)
    return utils_t.Type;
}
function utils_S(e, n, i) {
  switch (i) {
    case utils_t.First:
      return 0;
    case utils_t.Last:
      return n;
    case utils_t.Previous:
      return Math.max(0, e - 1);
    case utils_t.Next:
      return Math.min(n, e + 1);
    default:
      return e;
  }
}
function utils_P(e) {
  (0,dist/* default */.Z)(e, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: i, top: o, left: s }) => {
    i.scrollTop = o, i.scrollLeft = s;
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.js
var useId = __webpack_require__(2504);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js + 2 modules
var Popover = __webpack_require__(26048);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/components.js
var Select_components = __webpack_require__(81318);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js






















const I = ({
  children: s,
  clearLabel: G,
  creatable: h,
  createMessage: J,
  disabled: c,
  error: O,
  hasMoreItems: Q,
  hint: $,
  id: X,
  label: E,
  labelAction: Y,
  loading: w,
  loadingMessage: Z,
  noOptionsMessage: ee,
  onChange: F,
  onClear: S,
  onCreateOption: te,
  onInputChange: T,
  onLoadMore: oe,
  placeholder: ne,
  required: A,
  value: d,
  ...re
}) => {
  const ae = () => s.find((t) => t.props?.value.toLowerCase() === d.toLowerCase()).props?.children, [i, P] = (0,react.useState)(0), [ie, le] = (0,react.useState)(null), [l, V] = (0,react.useState)(s), [u, se] = (0,react.useState)(!1), [r, k] = (0,react.useState)(""), v = (0,react.useRef)(), M = (0,react.useRef)(!1), x = (0,react.useRef)(), K = (0,react.useRef)(), ce = (0,react.useRef)(), N = (0,react.useRef)(!0), a = (0,useId/* useId */.M)(X), pe = `${a}-label`;
  if (!E && !re["aria-label"])
    throw new Error('The Combobox component needs a "label" or an "aria-label" props');
  (0,react.useEffect)(() => {
    V(utils_d(s, r));
  }, [r, s]), (0,react.useEffect)(() => {
    u && v.current && utils_P(v.current);
  }, [i, u]), (0,react.useLayoutEffect)(() => {
    N.current && (N.current = !1);
  }, [d]);
  const de = u ? `${a}-${i}` : "", H = () => {
    F(null), k("");
  }, fe = (t) => {
    T && T(t);
    const n = x.current.value;
    V(utils_d(s, n)), P(0), le(null), r !== n && k(n), u || f(!0, !1);
  }, ue = (t) => {
    const { key: n } = t, p = h && r ? l.length : l.length - 1, g = C(n, u);
    switch (d && !r && n === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE && H(), g) {
      case utils_t.Next: {
        if (i === p) {
          m(0);
          break;
        }
        m(utils_S(i, p, g));
        break;
      }
      case utils_t.Previous: {
        if (i === 0) {
          m(p);
          break;
        }
        m(utils_S(i, p, g));
        break;
      }
      case utils_t.Last:
      case utils_t.First: {
        if (i === p) {
          m(0);
          break;
        }
        m(utils_S(i, p, g));
        break;
      }
      case utils_t.CloseSelect:
        t.preventDefault(), L(i);
        break;
      case utils_t.Close:
        t.preventDefault(), f(!1);
        break;
      case utils_t.Open:
        f(!0);
        break;
    }
  }, me = (t) => {
    if (t.preventDefault(), d && !M.current && k(""), M.current) {
      M.current = !1;
      return;
    }
    f(!1, !1);
  }, m = (t) => {
    P(t);
  }, be = (t) => {
    m(t), L(t);
  }, U = () => {
    M.current = !0;
  }, L = (t) => {
    const n = l[t];
    if (k(""), n) {
      F(n.props.value), f(!1);
      return;
    }
    h && (te(r), f(!1));
  }, f = (t, n = !0) => {
    se(t), n && x.current.focus();
  }, ge = react.Children.toArray(l).map((t, n) => {
    const p = i === n;
    return (0,react.cloneElement)(t, {
      id: `${a}-${n}`,
      "aria-selected": ie === n,
      "aria-posinset": n + 1,
      "aria-setsize": react.Children.toArray(l).length,
      ref(g) {
        p && (v.current = g);
      },
      onClick: () => be(n),
      onMouseDown: U,
      isSelected: p
    });
  }), Ce = () => {
    x.current.focus(), S && S(), H();
  }, he = () => {
    x.current.focus(), f(!0);
  }, Ee = () => {
    const t = l.findIndex((n) => n.props?.children === r);
    return r && t === -1;
  }, ve = (t) => {
    t.preventDefault(), f(t, !0);
  };
  let D;
  return O ? D = `${a}-error` : $ && (D = `${a}-hint`), /* @__PURE__ */ react.createElement(Field/* Field */.g, { hint: $, error: O, id: a, required: A }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text" }, d), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: E || $ || O ? 1 : 0 }, E && /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { action: Y }, E), /* @__PURE__ */ react.createElement(components/* MainRow */.d8, { ref: K, $disabled: c, hasError: O }, /* @__PURE__ */ react.createElement(components/* InputContainer */.fv, { wrap: "wrap" }, !r && d && /* @__PURE__ */ react.createElement(components/* ValueContainer */.K7, { id: `${a}-selected-value` }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, ae())), /* @__PURE__ */ react.createElement(
    components/* Input */.II,
    {
      "aria-activedescendant": de,
      "aria-autocomplete": "list",
      "aria-controls": `${a}-listbox`,
      "aria-disabled": c,
      "aria-expanded": u,
      "aria-haspopup": "listbox",
      "aria-describedby": D,
      autoComplete: "off",
      autoCorrect: "off",
      id: a,
      onBlur: c ? void 0 : me,
      onClick: c ? void 0 : ve,
      onInput: c ? void 0 : fe,
      onKeyDown: c ? void 0 : ue,
      placeholder: d ? "" : ne,
      readOnly: c,
      ref: x,
      required: A,
      role: "combobox",
      spellCheck: "off",
      type: "text",
      value: r
    }
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, (d || r) && /* @__PURE__ */ react.createElement(
    Select_components/* IconBox */.zb,
    {
      id: `${a}-clear`,
      "aria-label": G,
      disabled: c,
      paddingLeft: 3,
      as: "button",
      onClick: Ce,
      type: "button"
    },
    /* @__PURE__ */ react.createElement(Cross/* default */.Z, null)
  ), /* @__PURE__ */ react.createElement(
    Select_components/* CaretBox */.AV,
    {
      disabled: c,
      paddingLeft: 3,
      "aria-hidden": !0,
      as: "button",
      onClick: he,
      tabIndex: -1,
      type: "button"
    },
    /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, null)
  ))), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)), u && /* @__PURE__ */ react.createElement(
    Popover/* Popover */.J2,
    {
      id: `${a}-popover`,
      source: K,
      spacing: 4,
      fullWidth: !0,
      intersectionId: `${a}-listbox-popover-intersection`,
      onReachEnd: Q && !w ? oe : void 0
    },
    /* @__PURE__ */ react.createElement(
      "div",
      {
        role: "listbox",
        ref: ce,
        id: `${a}-listbox`,
        "aria-labelledby": E ? pe : void 0
      },
      (Boolean(l.length) || h) && /* @__PURE__ */ react.createElement(react.Fragment, null, ge, Ee() && h && /* @__PURE__ */ react.createElement(
        ComboboxOption/* ComboboxOption */.O,
        {
          isSelected: i === l.length,
          ref: (t) => {
            i === l.length && (v.current = t);
          },
          onMouseDown: U,
          onClick: () => L(),
          taindex: 0
        },
        J(r)
      )),
      !l.length && !h && !w && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, ref: v }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, ee(r))),
      w && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", alignItems: "center", paddingTop: 2, paddingBottom: 2 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: !0 }, Z))
    )
  ));
}, W = (s) => /* @__PURE__ */ react.createElement(I, { ...s, creatable: !0 });
I.defaultProps = {
  "aria-label": void 0,
  clearLabel: "clear",
  creatable: !1,
  createMessage: (s) => `Create "${s}"`,
  disabled: !1,
  error: void 0,
  hasMoreItems: !1,
  hint: void 0,
  id: void 0,
  label: void 0,
  loading: !1,
  loadingMessage: "Loading content...",
  noOptionsMessage: () => "No results found",
  onClear: void 0,
  onCreateOption: void 0,
  onInputChange: void 0,
  onLoadMore: void 0,
  placeholder: "Select or enter a value",
  value: void 0
};
W.defaultProps = I.defaultProps;
I.propTypes = {
  "aria-label": prop_types.string,
  children: prop_types.oneOfType([prop_types.arrayOf(prop_types.node), prop_types.node]),
  clearLabel: prop_types.string,
  creatable: prop_types.bool,
  createMessage: prop_types.func,
  disabled: prop_types.bool,
  error: prop_types.string,
  hasMoreItems: prop_types.bool,
  id: prop_types.string,
  hint: prop_types.oneOfType([prop_types.string, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  label: prop_types.string,
  labelAction: prop_types.element,
  loading: prop_types.bool,
  loadingMessage: prop_types.string,
  noOptionsMessage: prop_types.func,
  onChange: prop_types.func.isRequired,
  onClear: prop_types.func,
  onCreateOption: prop_types.func,
  onInputChange: prop_types.func,
  onLoadMore: prop_types.func,
  placeholder: prop_types.string,
  value: prop_types.string
};
W.propTypes = {
  ...I.propTypes,
  onCreateOption: prop_types.func.isRequired
};



/***/ }),

/***/ 90608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74020);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75515);




const r = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ isSelected: e, children: p, ...i }, n) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  _components_js__WEBPACK_IMPORTED_MODULE_1__/* .OptionBox */ .Zq,
  {
    hasRadius: !0,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    role: "option",
    background: "neutral0",
    isSelected: e,
    ref: n,
    ...i
  },
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, { textColor: e ? "primary600" : "neutral800", fontWeight: e ? "bold" : null }, p)
));
r.defaultProps = {
  isSelected: !1
};
r.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.string, prop_types__WEBPACK_IMPORTED_MODULE_3__.number]).isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
};
r.displayName = "ComboboxOption";



/***/ }),

/***/ 74020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ g),
/* harmony export */   "K7": () => (/* binding */ p),
/* harmony export */   "Zq": () => (/* binding */ $),
/* harmony export */   "d8": () => (/* binding */ c),
/* harmony export */   "fv": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71997);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11047);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15585);




const c = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  position: relative;
  border: 1px solid ${({ theme: o, hasError: r }) => r ? o.colors.danger600 : o.colors.neutral200};
  padding-right: ${({ theme: o }) => o.spaces[3]};
  padding-left: ${({ theme: o }) => o.spaces[3]};
  border-radius: ${({ theme: o }) => o.borderRadius};
  background: ${({ theme: o }) => o.colors.neutral0};

  ${({ theme: o, $disabled: r }) => r ? `
    color: ${o.colors.neutral600};
    background: ${o.colors.neutral150};
  ` : void 0}

  ${(0,_themes_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .inputFocusStyle */ .k3)()}
`, p = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`, u = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`, g = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].input */ .ZP.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40 / 16}rem;
  border: none;
  flex: 1;
  font-size: ${14 / 16}rem;
  color: ${({ theme: o }) => o.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`, $ = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({ isSelected: o, theme: r }) => o && `background: ${r.colors.primary100};`}

  &:hover {
    background: ${({ theme: o }) => o.colors.primary100};
  }
`;



/***/ }),

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const e = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "1rem",
  height: "1rem",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...r,
  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",
    fill: "#212134"
  })
}), a = e;



/***/ })

}]);