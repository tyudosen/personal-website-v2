import posthog from "posthog-js";

export const captureExternalLink = (to: string, rest: Record<string, string> = {}) => posthog.capture('external-link', { to, ...rest })
