(() => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".city-toggle").forEach((group) => {
    const input = group.parentElement?.querySelector('input[name="ville"]');
    group.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((b) => b.classList.remove("is-on"));
        btn.classList.add("is-on");
        if (input) input.value = btn.dataset.city || btn.textContent.trim();
      });
    });
  });

  const partnerForm = document.querySelector("#partner-form");
  if (partnerForm) {
    partnerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(partnerForm);
      const etablissement = String(data.get("etablissement") || "").trim();
      const telephone = String(data.get("telephone") || "").trim();
      const ville = String(data.get("ville") || "Gatineau").trim();
      const subject = encodeURIComponent(`Demande de borne — ${etablissement || "nouveau partenaire"}`);
      const body = encodeURIComponent(
        `Établissement : ${etablissement}\nTéléphone : ${telephone}\nVille : ${ville}\n\nMessage : On voudrait une borne Plug.`
      );
      window.location.href = `mailto:allo@plug.ca?subject=${subject}&body=${body}`;
    });
  }

  const list = document.querySelector("#station-list");
  const filters = document.querySelectorAll("[data-filter]");
  if (list && filters.length) {
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        filters.forEach((b) => b.classList.remove("is-on"));
        btn.classList.add("is-on");
        const key = btn.getAttribute("data-filter");
        list.querySelectorAll(".station-row").forEach((row) => {
          const type = row.getAttribute("data-type") || "";
          row.hidden = key !== "all" && type !== key;
        });
      });
    });
  }
})();
