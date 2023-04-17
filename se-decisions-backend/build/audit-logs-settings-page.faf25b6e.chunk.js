"use strict";
(self["webpackChunkse_decisions_backend"] = self["webpackChunkse_decisions_backend"] || []).push([[2812],{

/***/ 94699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86896);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29728);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89597);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81849);






const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterPopoverURLQuery */ .J5,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterListURLQuery */ .W$, { filtersSchema: displayedFilters }));
};
Filters.propTypes = {
  displayedFilters: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(
    prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired),
      metadatas: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ label: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) }),
      fieldSchema: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) })
    })
  ).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


/***/ }),

/***/ 35915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuditLogs_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 18 modules
var helper_plugin_esm = __webpack_require__(81849);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.js
var Eye = __webpack_require__(8934);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__(23855);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/hooks/useFormatTimeStamp.js


const useFormatTimeStamp = () => {
  const { formatDate } = (0,useIntl/* default */.Z)();
  const formatTimeStamp = (value) => {
    const date = (0,parseISO/* default */.Z)(value);
    const formattedDate = formatDate(date, {
      dateStyle: "long"
    });
    const formattedTime = formatDate(date, {
      timeStyle: "medium",
      hourCycle: "h24"
    });
    return `${formattedDate}, ${formattedTime}`;
  };
  return formatTimeStamp;
};
/* harmony default export */ const hooks_useFormatTimeStamp = (useFormatTimeStamp);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/getActionTypesDefaultMessages.js
const actionTypes = {
  "entry.create": "Create entry{model, select, undefined {} other { ({model})}}",
  "entry.update": "Update entry{model, select, undefined {} other { ({model})}}",
  "entry.delete": "Delete entry{model, select, undefined {} other { ({model})}}",
  "entry.publish": "Publish entry{model, select, undefined {} other { ({model})}}",
  "entry.unpublish": "Unpublish entry{model, select, undefined {} other { ({model})}}",
  "media.create": "Create media",
  "media.update": "Update media",
  "media.delete": "Delete media",
  "media-folder.create": "Create media folder",
  "media-folder.update": "Update media folder",
  "media-folder.delete": "Delete media folder",
  "user.create": "Create user",
  "user.update": "Update user",
  "user.delete": "Delete user",
  "admin.auth.success": "Admin login",
  "admin.logout": "Admin logout",
  "content-type.create": "Create content type",
  "content-type.update": "Update content type",
  "content-type.delete": "Delete content type",
  "component.create": "Create component",
  "component.update": "Update component",
  "component.delete": "Delete component",
  "role.create": "Create role",
  "role.update": "Update role",
  "role.delete": "Delete role",
  "permission.create": "Create permission",
  "permission.update": "Update permission",
  "permission.delete": "Delete permission"
};
const getDefaultMessage = (value) => {
  return actionTypes[value] || value;
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/TableRows/index.js








const TableRows = ({ headers, rows, onOpenModal }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const formatTimeStamp = hooks_useFormatTimeStamp();
  const getCellValue = ({ type, value, model }) => {
    if (type === "date") {
      return formatTimeStamp(value);
    }
    if (type === "action") {
      return formatMessage(
        {
          id: `Settings.permissions.auditLogs.${value}`,
          defaultMessage: getDefaultMessage(value)
        },
        { model }
      );
    }
    return value || "-";
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, rows.map((data) => {
    return /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        key: data.id,
        ...(0,helper_plugin_esm/* onRowClick */.X7)({
          fn: () => onOpenModal(data.id)
        })
      },
      headers.map(({ key, name, cellFormatter }) => {
        return /* @__PURE__ */ react.createElement(Cell.Td, { key }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getCellValue({
          type: key,
          value: cellFormatter ? cellFormatter(data[name]) : data[name],
          model: data.payload?.model
        })));
      }),
      /* @__PURE__ */ react.createElement(Cell.Td, { ...helper_plugin_esm/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onOpenModal(data.id),
          "aria-label": formatMessage(
            { id: "app.component.table.view", defaultMessage: "{target} details" },
            { target: `${data.action} action` }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Eye/* default */.Z, null)
        }
      )))
    );
  }));
};
TableRows.defaultProps = {
  rows: []
};
TableRows.propTypes = {
  headers: (prop_types_default()).array.isRequired,
  rows: (prop_types_default()).array,
  onOpenModal: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListView_TableRows = (TableRows);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "action",
    key: "action",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.action",
        defaultMessage: "Action"
      },
      sortable: true
    }
  },
  {
    name: "date",
    key: "date",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.date",
        defaultMessage: "Date"
      },
      sortable: true
    }
  },
  {
    key: "user",
    name: "user",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.user",
        defaultMessage: "User"
      },
      sortable: false
    },
    cellFormatter: (user) => user ? user.displayName : ""
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* PageSizeURLQuery */.v4, null), /* @__PURE__ */ react.createElement(helper_plugin_esm/* PaginationURLQuery */.tU, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 50,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};
/* harmony default export */ const ListView_PaginationFooter = (PaginationFooter);

// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(2407);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/JSONInput/JSONInput.js + 23 modules
var JSONInput = __webpack_require__(26614);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/ActionItem.js



const ActionItem = ({ actionLabel, actionName }) => {
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "baseline", gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600", variant: "sigma" }, actionLabel), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600" }, actionName));
};
ActionItem.propTypes = {
  actionLabel: (prop_types_default()).string.isRequired,
  actionName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Modal_ActionItem = (ActionItem);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/ActionBody.js






const ActionBody = ({ status, data, formattedDate }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (status === "loading") {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { padding: 7, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, "Loading content..."));
  }
  const { action, user, payload } = data;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginBottom: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", id: "title" }, formatMessage({
    id: "Settings.permissions.auditLogs.details",
    defaultMessage: "Log Details"
  }))), /* @__PURE__ */ react.createElement(
    Grid/* Grid */.r,
    {
      gap: 4,
      gridCols: 2,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 6,
      paddingRight: 6,
      marginBottom: 4,
      background: "neutral100",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        actionName: formatMessage(
          {
            id: `Settings.permissions.auditLogs.${action}`,
            defaultMessage: getDefaultMessage(action)
          },
          { model: payload?.model }
        )
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        }),
        actionName: formattedDate
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.user",
          defaultMessage: "User"
        }),
        actionName: user?.displayName || "-"
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.userId",
          defaultMessage: "User ID"
        }),
        actionName: user?.id.toString() || "-"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    JSONInput/* JSONInput */.V,
    {
      value: JSON.stringify(payload, null, 2),
      disabled: true,
      label: formatMessage({
        id: "Settings.permissions.auditLogs.payload",
        defaultMessage: "Payload"
      })
    }
  ));
};
ActionBody.defaultProps = {
  data: {}
};
ActionBody.propTypes = {
  status: prop_types_default().oneOf(["idle", "loading", "error", "success"]).isRequired,
  data: prop_types_default().shape({
    action: (prop_types_default()).string,
    date: (prop_types_default()).string,
    payload: (prop_types_default()).object,
    user: (prop_types_default()).object
  }),
  formattedDate: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Modal_ActionBody = (ActionBody);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/index.js







const Modal = ({ handleClose, logId }) => {
  const { get } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const fetchAuditLog = async (id) => {
    const { data: data2 } = await get(`/admin/audit-logs/${id}`);
    if (!data2) {
      throw new Error("Audit log not found");
    }
    return data2;
  };
  const { data, status } = (0,es.useQuery)(["audit-log", logId], () => fetchAuditLog(logId), {
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
      handleClose();
    }
  });
  const formatTimeStamp = hooks_useFormatTimeStamp();
  const formattedDate = data ? formatTimeStamp(data.date) : "";
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: formattedDate, id: "title" }, /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, null, formattedDate))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Modal_ActionBody, { status, data, formattedDate })));
};
Modal.propTypes = {
  handleClose: (prop_types_default()).func.isRequired,
  logId: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListView_Modal = (Modal);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
var Filters = __webpack_require__(94699);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js + 1 modules
var Combobox = __webpack_require__(38855);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/ComboboxFilter/index.js




const ComboboxFilter = ({ value, options, onChange }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const ariaLabel = formatMessage({
    id: "Settings.permissions.auditLogs.filter.aria-label",
    defaultMessage: "Search and select an option to filter"
  });
  return /* @__PURE__ */ react.createElement(Combobox/* Combobox */.h, { "aria-label": ariaLabel, value, onChange }, options.map(({ label, customValue }) => {
    return /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { key: customValue, value: customValue }, label);
  }));
};
ComboboxFilter.defaultProps = {
  value: null
};
ComboboxFilter.propTypes = {
  value: (prop_types_default()).string,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      customValue: (prop_types_default()).string.isRequired
    }).isRequired
  ).isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListView_ComboboxFilter = (ComboboxFilter);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/getDisplayedFilters.js


const customOperators = [
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$eq", defaultMessage: "is" },
    value: "$eq"
  },
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$ne", defaultMessage: "is not" },
    value: "$ne"
  }
];
const getDisplayedFilters = ({ formatMessage, users }) => {
  const getDisplaynameFromUser = (user) => {
    if (user.username) {
      return user.username;
    }
    if (user.firstname && user.lastname) {
      return formatMessage(
        {
          id: "Settings.permissions.auditLogs.user.fullname",
          defaultMessage: "{firstname} {lastname}"
        },
        {
          firstname: user.firstname,
          lastname: user.lastname
        }
      );
    }
    return user.email;
  };
  const actionOptions = Object.keys(actionTypes).map((action) => {
    return {
      label: formatMessage(
        {
          id: `Settings.permissions.auditLogs.${action}`,
          defaultMessage: getDefaultMessage(action)
        },
        { model: void 0 }
      ),
      customValue: action
    };
  });
  const userOptions = users && users.results.map((user) => {
    return {
      label: getDisplaynameFromUser(user),
      // Combobox expects a string value
      customValue: user.id.toString()
    };
  });
  return [
    {
      name: "action",
      metadatas: {
        customOperators,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        options: actionOptions,
        customInput: ListView_ComboboxFilter
      },
      fieldSchema: { type: "enumeration" }
    },
    {
      name: "date",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        })
      },
      fieldSchema: { type: "datetime" }
    },
    {
      name: "user",
      metadatas: {
        customOperators,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.user",
          defaultMessage: "User"
        }),
        options: userOptions,
        customInput: ListView_ComboboxFilter
      },
      fieldSchema: { type: "relation", mainField: { name: "id" } }
    }
  ];
};
/* harmony default export */ const utils_getDisplayedFilters = (getDisplayedFilters);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/hooks/useAuditLogsData.js



const useAuditLogsData = ({ canRead }) => {
  const { get } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const { search } = (0,react_router/* useLocation */.TH)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const fetchAuditLogsPage = async ({ queryKey }) => {
    const search2 = queryKey[1];
    const { data } = await get(`/admin/audit-logs${search2}`);
    return data;
  };
  const fetchAllUsers = async () => {
    const { data } = await get(`/admin/users`);
    return data;
  };
  const queryOptions = {
    enabled: canRead,
    keepPreviousData: true,
    retry: false,
    staleTime: 1e3 * 20,
    // 20 seconds
    onError: (error) => toggleNotification({ type: "warning", message: error.message })
  };
  const {
    data: auditLogs,
    isLoading,
    isError: isAuditLogsError
  } = (0,es.useQuery)(["auditLogs", search], fetchAuditLogsPage, queryOptions);
  const { data: users, isError: isUsersError } = (0,es.useQuery)(["auditLogsUsers"], fetchAllUsers, {
    ...queryOptions,
    staleTime: 2 * (1e3 * 60)
    // 2 minutes
  });
  const hasError = isAuditLogsError || isUsersError;
  return { auditLogs, users: users?.data, isLoading, hasError };
};
/* harmony default export */ const hooks_useAuditLogsData = (useAuditLogsData);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/index.js












const ListView = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const {
    allowedActions: { canRead }
  } = (0,helper_plugin_esm/* useRBAC */.ss)(permissions/* default.settings.auditLogs */.Z.settings.auditLogs);
  const [{ query }, setQuery] = (0,helper_plugin_esm/* useQueryParams */.Kx)();
  const { auditLogs, users, isLoading, hasError } = hooks_useAuditLogsData({ canRead });
  (0,helper_plugin_esm/* useFocusWhenNavigate */.go)();
  const displayedFilters = utils_getDisplayedFilters({ formatMessage, users });
  const title = formatMessage({
    id: "global.auditLogs",
    defaultMessage: "Audit Logs"
  });
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  if (hasError) {
    return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 8 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* AnErrorOccurred */.Hn, null))));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL, { name: title }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title,
      subtitle: formatMessage({
        id: "Settings.permissions.auditLogs.listview.header.subtitle",
        defaultMessage: "Logs of all the activities that happened in your environment"
      })
    }
  ), /* @__PURE__ */ react.createElement(ActionLayout/* ActionLayout */.Z, { startActions: /* @__PURE__ */ react.createElement(Filters/* default */.Z, { displayedFilters }) }), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, { canRead }, /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* DynamicTable */.tM,
    {
      contentType: "Audit logs",
      headers,
      rows: auditLogs?.results || [],
      withBulkActions: true,
      isLoading
    },
    /* @__PURE__ */ react.createElement(
      ListView_TableRows,
      {
        headers,
        rows: auditLogs?.results || [],
        onOpenModal: (id) => setQuery({ id })
      }
    )
  ), /* @__PURE__ */ react.createElement(ListView_PaginationFooter, { pagination: auditLogs?.pagination })), query?.id && /* @__PURE__ */ react.createElement(ListView_Modal, { handleClose: () => setQuery({ id: null }, "remove"), logId: query.id }));
};
/* harmony default export */ const AuditLogs_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ProtectedListPage/index.js




const ProtectedListPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.O4, { permissions: permissions/* default.settings.auditLogs.main */.Z.settings.auditLogs.main }, /* @__PURE__ */ react.createElement(AuditLogs_ListView, null));
/* harmony default export */ const AuditLogs_ProtectedListPage = (ProtectedListPage);


/***/ }),

/***/ 2407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ h),
/* harmony export */   "O": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16405);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71997);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63237);







const s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({
  theme: r
}) => r.colors.neutral500};
    }
  }
  :last-of-type ${_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x} {
    display: none;
  }
  :last-of-type ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
    color: ${({
  theme: r
}) => r.colors.neutral800};
    font-weight: ${({
  theme: r
}) => r.fontWeights.bold};
  }
`, h = ({
  children: r
}) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(s, {
  inline: !0,
  as: "li",
  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
    variant: "pi",
    textColor: "neutral600",
    children: r
  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
    "aria-hidden": !0,
    paddingLeft: 3,
    paddingRight: 3,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
  })]
});
h.displayName = "Crumb";
const c = ({
  children: r,
  label: n,
  ...a
}) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, {
  ...a,
  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, {
    children: n
  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", {
    "aria-hidden": !0,
    children: r
  })]
});
c.displayName = "Breadcrumbs";



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

/***/ 36989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71997);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);





const l = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  & > * + * {
    margin-left: ${({ theme: t }) => t.spaces[2]};
  }

  margin-left: ${({ pullRight: t }) => t ? "auto" : void 0};
`, m = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(l)`
  flex-shrink: 0;
`, p = ({ startActions: t, endActions: o }) => t || o ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingBottom: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, { justifyContent: "space-between", alignItems: "flex-start" }, t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, { wrap: "wrap" }, t), o && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(m, { pullRight: !0 }, o)))) : null;
p.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
p.propTypes = {
  endActions: prop_types__WEBPACK_IMPORTED_MODULE_4__.node,
  startActions: prop_types__WEBPACK_IMPORTED_MODULE_4__.node
};



/***/ })

}]);