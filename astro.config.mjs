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
            head: [
                { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' } },
                { tag: 'link', attrs: { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' } },
                { tag: 'link', attrs: { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' } },
                { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
                { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
            ],
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
            sidebar: [
                { label: "Overview", link: "/overview" },
                { label: "Guides", autogenerate: { directory: "guides" } },
                {
                    label: "Reference",
                    items: [
                        { label: "Overview", link: "/reference" },
                        { label: "Reset", link: "/reference/reset" },
                        {
                            label: "Tokens",
                            items: [
                                { label: "Overview", link: "/reference/tokens" },
                                { label: "Colors", link: "/reference/tokens/colors" },
                                { label: "Typography", link: "/reference/tokens/typography" },
                                { label: "Spacing", link: "/reference/tokens/spacing" },
                                { label: "Motion", link: "/reference/tokens/motion" },
                                { label: "Radius", link: "/reference/tokens/radius" },
                            ]
                        },
                        {
                            label: "Mixins",
                            items: [
                                { label: "Overview", link: "/reference/mixins" },
                                { label: "Animation", link: "/reference/mixins/animation" },
                                { label: "Border", link: "/reference/mixins/border" },
                                { label: "Button", link: "/reference/mixins/button" },
                                { label: "Debug", link: "/reference/mixins/debug" },
                                { label: "Focus", link: "/reference/mixins/focus" },
                                { label: "Gradient", link: "/reference/mixins/gradient" },
                                { label: "Layout", link: "/reference/mixins/layout" },
                                { label: "Padding", link: "/reference/mixins/padding" },
                                { label: "Radius", link: "/reference/mixins/radius" },
                                { label: "Respond To", link: "/reference/mixins/respond-to" },
                                { label: "Scrollbar", link: "/reference/mixins/scrollbar" },
                                { label: "Shadow", link: "/reference/mixins/shadow" },
                            ]
                        },
                    ],
                },
                { label: "About This Site", autogenerate: { directory: "site" } },
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
