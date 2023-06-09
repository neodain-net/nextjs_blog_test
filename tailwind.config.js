/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/openai/*.{js,ts,jsx,tsx}",
  "./pages/api/*.{js,ts,jsx,tsx}",
  "./pages/api/posts/*.{js,ts,jsx,tsx}",
  "./pages/posts/*.{js,ts,jsx,tsx}",
  "./pages/langs/*.{js,ts,jsx,tsx}",
  "./pages/tags/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/components/*.{js,ts,jsx,tsx}",
  "./src/components/_child/*.{js,ts,jsx,tsx}",
  "./src/components/openai/**/*.{js,ts,jsx,tsx}",
  "./src/*.{js,ts,jsx,tsx}",
  "./styles/*.css",
];
export const darkMode = "class";
export const theme = {
  extend: {},
};
export const plugins = [];
