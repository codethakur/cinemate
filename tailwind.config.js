module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode:'class',
    theme: {
      extend: {
        screen:{
          "other":{'min':'340px', 'max':'1200px'},
        },
        colors:{
          darkbg: "#1E293B",
          violet:{
            Violet: "#2e1065"
        }
        },
        spacing: {
          '11': '2.75rem',
        }
      },
    },
    plugins: [],
  }