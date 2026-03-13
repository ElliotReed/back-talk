// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import path from "node:path";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon(),
        starlight({
            title: "Backtalk",
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
            sidebar: [
                {
                    label: "Guides",
                    autogenerate: { directory: "guides" },
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
                {
                    label: "Development",
                    autogenerate: { directory: "development" },
                },
                {
                    label: "Display Pages",
                    items: [
                        { label: "Home", link: "/display/home" },
                        { label: "Colors", link: "/display/colors" },
                    ],
                },
            ],
        }),
    ],
    site: "https://docs.backtalk.elliotreed.dev",
    vite: {
        resolve: {
            alias: {
                "~": path.resolve("./src"),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    loadPaths: [path.resolve("./src/styles")]
                },
            }
        },
        server: {
            allowedHosts: ["backtalk.local"],
            // These settings don't matter, the npm dev script sets these values via flags
            host: "backtalk.local",
            port: 5001,
        },
    },
});
