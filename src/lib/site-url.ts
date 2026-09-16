// Share (link preview) image ka path.
// Vercel par "VITE_SITE_URL" (jaise https://quetta-builders.vercel.app) set karne se
// WhatsApp/Facebook ko poora address milta hai. Set na ho to relative path chalta hai.
const SITE_URL = (import.meta.env["VITE_SITE_URL"] as string | undefined)?.replace(/\/$/, "") ?? "";

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
