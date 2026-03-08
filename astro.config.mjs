// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
    integrations: [
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
                    items: [
                        {
                            label: "abstracts",
                            autogenerate: { directory: "reference/abstracts" }
                        }
                    ]
                    ,
                },
            ],
            // customCss: ["./src/styles/index.scss"],
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
