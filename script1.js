const body = document.querySelector("body"),
        toggle = document.querySelector(".toggle"),
        content = document.querySelector(".content"),
        case_text = document.querySelector(".case_text");

        let getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark"){
          body.classList.add("dark");
          content.classList.add("dark");   
          toggle.classList.add("active");
        }

        toggle.addEventListener("click", () => {
          body.classList.toggle("dark");
          content.classList.toggle("dark");

          if (!body.classList.contains("dark")) {
            return localStorage.setItem("mode", "light");
          }
          localStorage.setItem("mode", "dark");
        });

        toggle.addEventListener("click", () => toggle.classList.toggle("active"));