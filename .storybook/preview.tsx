import type { Preview } from "@storybook/nextjs-vite";
import { Inter, IBM_Plex_Sans_Thai, Geist_Mono } from "next/font/google";
import * as React from "react";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-thai",
});
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const THEMES = {
  light: { class: "", attr: undefined, label: "Light" },
  dark: { class: "dark", attr: undefined, label: "Dark" },
  primary: { class: "", attr: "primary", label: "Primary (blue)" },
  secondary: { class: "", attr: "secondary", label: "Secondary (yellow)" },
} as const;

type ThemeKey = keyof typeof THEMES;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "error" },
    backgrounds: { disable: true },
    layout: "centered",
  },
  globalTypes: {
    theme: {
      description: "Project theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: (Object.keys(THEMES) as ThemeKey[]).map((k) => ({
          value: k,
          title: THEMES[k].label,
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeKey = (context.globals.theme as ThemeKey) ?? "light";
      const theme = THEMES[themeKey];
      React.useEffect(() => {
        const html = document.documentElement;
        html.classList.toggle("dark", theme.class === "dark");
        if (theme.attr) {
          html.setAttribute("data-theme", theme.attr);
        } else {
          html.removeAttribute("data-theme");
        }
      }, [themeKey, theme.class, theme.attr]);
      return (
        <div
          className={`${inter.variable} ${ibmPlexSansThai.variable} ${geistMono.variable} bg-background text-foreground font-sans p-8`}
          style={{ minWidth: 320 }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
