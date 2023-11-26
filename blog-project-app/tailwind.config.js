/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                card: "repeat(auto-fit, minmax(280px, 1fr))",
            },
            fontFamily: {
                roboto: ['Roboto'],
                poppins: ['Poppins'],
            },
            fontWeight: {
                thin: 100,
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700,
                black: 900,
                
            },
            colors: {
                black1: 'rgba(0, 0, 0, 0.8)',
            },
        },
    },
    plugins: [],
}