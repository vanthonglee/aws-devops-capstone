module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            aspectRatio: {
                "mv-banner": "100 / 148",
            },
            screens: {},
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
