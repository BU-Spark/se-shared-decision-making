import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useState as E, useEffect as O } from "react";
import { DatePickerPopover as W } from "./components.js";
import { DatePickerTd as H } from "./DatePickerTd.js";
import { DatePickerTh as t } from "./DatePickerTh.js";
import { getDayOfWeek as I } from "./utils/getDayOfWeek.js";
import { getMonths as V } from "./utils/getMonths.js";
import { generateWeeks as q } from "./utils/generateWeeks.js";
import { getYears as z } from "./utils/getYears.js";
import { formatDate as A } from "./utils/formatDate.js";
import { Box as p } from "../Box/Box.js";
import { Flex as G } from "../Flex/Flex.js";
import { FocusTrap as J } from "../FocusTrap/FocusTrap.js";
import { getDefaultLocale as K } from "../helpers/getDefaultLocale.js";
import { RawTable as N } from "../RawTable/RawTable.js";
import "../RawTable/RawTableContext.js";
import { RawThead as Q } from "../RawTable/RawThead.js";
import { RawTbody as U } from "../RawTable/RawTbody.js";
import { RawTr as u } from "../RawTable/RawTr.js";
import { SimpleMenu as g, MenuItem as D } from "../SimpleMenu/SimpleMenu.js";
import { VisuallyHidden as X } from "../VisuallyHidden/VisuallyHidden.js";
const Ce = ({
  onEscape: i,
  popoverSource: c,
  ...d
}) => e(W, {
  source: c,
  role: "dialog",
  "aria-modal": "true",
  spacing: 4,
  children: e(J, {
    onEscape: i,
    children: e(Z, {
      ...d
    })
  })
}), Z = ({
  selectedDate: i,
  initialDate: c = new Date(),
  locale: d,
  onChange: s,
  minDate: w,
  maxDate: k
}) => {
  const [a, m] = E(c), [f, C, M] = q(a, i), {
    sun: x,
    mon: R,
    tue: T,
    wed: P,
    thu: F,
    fri: S,
    sat: Y
  } = I(), h = V(), b = z(w, k), y = d || K();
  O(() => {
    i && m(i);
  }, [i]);
  const v = (r) => {
    const o = new Date(a);
    o.setMonth(h.indexOf(r)), m(o);
  }, L = (r) => {
    const o = new Date(a);
    o.setFullYear(r), m(o);
  }, $ = (r) => () => {
    s && s(r);
  };
  return l(p, {
    padding: 4,
    children: [e(p, {
      paddingBottom: 4,
      paddingLeft: 2,
      paddingRight: 2,
      children: l(G, {
        children: [e(g, {
          label: h[a.getMonth()],
          children: h.map((r) => e(D, {
            onClick: () => v(r),
            children: r
          }, r))
        }), e(p, {
          paddingLeft: 2,
          children: e(g, {
            label: a.getFullYear(),
            children: b.map((r) => e(D, {
              onClick: () => L(r),
              children: r
            }, r))
          })
        })]
      })
    }), l(N, {
      colCount: 7,
      rowCount: f.length + 1,
      initialCol: M,
      initialRow: C,
      role: "grid",
      children: [e(Q, {
        children: l(u, {
          "aria-rowindex": 1,
          children: [e(t, {
            children: x
          }), e(t, {
            children: R
          }), e(t, {
            children: T
          }), e(t, {
            children: P
          }), e(t, {
            children: F
          }), e(t, {
            children: S
          }), e(t, {
            children: Y
          })]
        })
      }), e(U, {
        children: f.map((r, o) => e(u, {
          children: r.map(({
            date: n,
            outsideMonth: j,
            isSelected: B
          }) => l(H, {
            outsideMonth: j,
            onSelectDay: $(n),
            isSelected: B,
            children: [e("span", {
              "aria-hidden": !0,
              children: n.getDate()
            }), e(X, {
              children: e("span", {
                children: A(n, y)
              })
            })]
          }, `${n.getFullYear()}-${n.getMonth() + 1}-${n.getDate()}`))
        }, o))
      })]
    })]
  });
};
export {
  Ce as DatePickerCalendar,
  Z as DatePickerCalendarContent
};
