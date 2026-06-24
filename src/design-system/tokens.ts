export const colors = {
  primary: "#0C66E4",
  primaryHover: "#0052CC",
  primaryActive: "#0747A6",
  lightBlueSurface: "#E9F2FF",
  pageBackground: "#F7F8F9",
  surface: "#FFFFFF",
  surfaceSubtle: "#F1F2F4",
  border: "#DFE1E6",
  borderStrong: "#C1C7D0",
  textMuted: "#44546F",
  textStrong: "#172B4D",
  textInverse: "#FFFFFF",
  focus: "#0C66E4",
  success: "#22A06B",
  warning: "#F5CD47",
  danger: "#E34935",
  purpleAccent: "#6554C0"
} as const;

export const statusColors = {
  aiHandled: {
    text: "#0052CC",
    background: "#E9F2FF",
    border: "#85B8FF"
  },
  managerApproval: {
    text: "#533F04",
    background: "#FFF7D6",
    border: "#F5CD47"
  },
  humanReview: {
    text: "#AE2E24",
    background: "#FFECEB",
    border: "#E34935"
  },
  automationPaused: {
    text: "#6554C0",
    background: "#F3F0FF",
    border: "#C0B6F2"
  },
  healthy: {
    text: "#216E4E",
    background: "#DCFFF1",
    border: "#22A06B"
  },
  warning: {
    text: "#533F04",
    background: "#FFF7D6",
    border: "#F5CD47"
  },
  highRisk: {
    text: "#AE2E24",
    background: "#FFECEB",
    border: "#E34935"
  }
} as const;

export const typography = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  productTitle: {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 700
  },
  pageTitle: {
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: 700
  },
  sectionTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700
  },
  body: {
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: 400
  },
  helper: {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400
  },
  tableHeader: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 700,
    textTransform: "uppercase"
  },
  tableBody: {
    fontSize: "13px",
    lineHeight: "20px",
    fontWeight: 500
  }
} as const;

export const spacing = {
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px"
} as const;

export const radii = {
  small: "4px",
  medium: "6px",
  large: "8px"
} as const;

export const shadows = {
  subtle: "0 1px 2px rgba(9, 30, 66, 0.08)"
} as const;

export type StatusKind = keyof typeof statusColors;
