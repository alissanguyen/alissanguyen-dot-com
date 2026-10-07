import { z } from "zod";

// Single source of truth for the site's domain, so it only needs to change
// in one place (NEXT_PUBLIC_SITE_DOMAIN) instead of in every hardcoded URL.
export const SITE_DOMAIN = z
  .string({
    required_error: "NEXT_PUBLIC_SITE_DOMAIN not found."
  })
  .parse(process.env.NEXT_PUBLIC_SITE_DOMAIN);

export const WEBSITE_URL = `https://www.${SITE_DOMAIN}`;

// Builds a URL for a project hosted on a subdomain, e.g. subdomainUrl("planets") -> "https://planets.alissanguyen.me/"
export const subdomainUrl = (subdomain: string) => `https://${subdomain}.${SITE_DOMAIN}/`;
