/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "20px",
                screens: {
                    'sm': "640px",
                    'md': "768px",
                    'lg': "1024px",
                    'xl': "1180px",
                }
            },
            fontSize: {
                'custom-2xl': "40px",
                'custom-3xl': "54px",
            },
            lineHeight: {
                'custom-sm': "19px",
                'custom-base': "21px",
                'custom-lg': "25px",
                'custom-xl': "27px",
                'custom-2xl': "30px",
                'custom-3xl': "48px",
                'custom-4xl': "50px",
                'custom-5xl': "57px",
                'custom-6xl': "65px",
            },
            colors: {
                'blue': "#2abae9",
                'gray': "#666666",
                'z-black': "#1c1d1d",
                'off-white': "#fefefe",
                'dusk-black': "#111223",
                'light-blue': "#2ABAE9",
                'dark-blue': "#1B77CC",
                'deep-blue': "#4AB6FE",
                'purple': "#994FFF",
                'light-purple': "#dcdefe",
                'sky-blue': "#2CB9E94D",
                'light-pink': "#E939D9",
                'light-gray': "#0000001A",

            },
            boxShadow: {
                'custom-xl': "0px 1px 30px 0px #0000001A",
                'custom-2xl': "0px 4px 4px 0px #00000040",
                'custom-3xl': "0px 6px 13px 0px #0000001A",
                'custom-4xl': "0px 9px 34px 0px #0000001A",

            },
            bgImage: {
                'hero-section-bg': "url('./assets/images/png/hero-section-bg.png')",
            },
            fontFamily: {
                'inter': "'inter' ,sans serif",
                'outfit': "'outfit' ,sans serif",
            }
        },
    },
    plugins: [],
}