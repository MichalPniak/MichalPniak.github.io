/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './docs/*.html'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#DCEEFB',
                    100: '#B6E0FE',
                    200: '#84C5F4',
                    300: '#62B0E8',
                    400: '#4098D7',
                    500: '#2680C2',
                    600: '#186FAF',
                    700: '#0F609B',
                    800: '#0A558C',
                    900: '#003E6B',
                }
            }
        },
    },
    plugins: [],
}