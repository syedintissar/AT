import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/about", "/insights", "/contact", ...SERVICES_DATA.map(service => `/services/${service.id}`), ...PROJECTS.map(project => `/work/${project.slug}`), ...INSIGHTS.map(article => `/insights/${article.slug}`)];
  return routes.map(route => ({ url: `https://alhawajtech.com${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route.split("/").length > 2 ? .7 : .9 }));
}
