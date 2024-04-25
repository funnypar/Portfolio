/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                box: "33rem",
            },
            width: {
                box: "70rem",
            },
            colors: {
                leftSide: "#444444",
                rightSide: "#222222",
                header: "#f5f5f5",
                front: "#9d9d9d",
                item: "#5fa3da",
            },
            borderRadius: {
                box: "2rem",
            },
            gridTemplateColumns: {
                box: ".5fr 1fr",
            },
            fontFamily: {
                roberto: ["Roboto", "sans-serif"],
            },
            boxShadow: {
                box: "0px 0px 30px 10px rgba(256, 256, 256, 0.6)",
                menu: "0px 0px 5px 5px rgba(256, 256, 256, 0.6)",
            },
        },
    },
    plugins: [],
};
