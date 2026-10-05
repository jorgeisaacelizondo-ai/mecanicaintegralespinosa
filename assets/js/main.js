/**
 * Mecánica Integral Espinosa (MIE)
 * Interactive Engine & UI Handlers
 */

// ==========================================
// 1. CONFIGURATION & CONSTANTS
// ==========================================
const WORKSHOP_CONFIG = {
  name: "Mecánica Integral Espinosa",
  tagline: "Diagnóstico transparente, evidencia en video y garantía por escrito",
  // Modificar este número con el WhatsApp real del taller (+54 9 380 ...)
  phoneDisplay: "+54 9 380 412-3456",
  whatsappNumber: "5493804123456", 
  address: "Pasaje Florida 920 - La Rioja Capital, Argentina",
  googleMapsUrl: "https://maps.app.goo.gl/DfeQPR3kEsBV3Hgc9",
  coordinates: {
    lat: -29.4072331,
    lng: -66.8619793
  },
  // Horarios de atención (Lunes a Viernes de 8:30 a 13:00 y 16:30 a 20:30; Sábados de 8:30 a 13:00)
  schedule: {
    weekdays: [
      { start: 8 * 60 + 30, end: 13 * 60 },
      { start: 16 * 60 + 30, end: 20 * 60 + 30 }
    ],
    saturday: [
      { start: 8 * 60 + 30, end: 13 * 60 }
    ]
  }
};

// ==========================================
// 2. DOM CONTENT LOADED EVENT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initLiveStatus();
  initNavigation();
  initAuthModal();
  initContactForm();
  initServiceFilters();
  initCopyAddress();
  initWhatsAppCTAs();
});

// ==========================================
// 3. LIVE OPEN/CLOSED INDICATOR
// ==========================================
function initLiveStatus() {
  const statusBadges = document.querySelectorAll(".live-status-badge");
  if (!statusBadges.length) return;

  function updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let isOpen = false;
    let nextStatusText = "";

    if (day >= 1 && day <= 5) {
      // Weekdays
      const morning = WORKSHOP_CONFIG.schedule.weekdays[0];
      const afternoon = WORKSHOP_CONFIG.schedule.weekdays[1];

      if (currentMinutes >= morning.start && currentMinutes < morning.end) {
        isOpen = true;
        nextStatusText = "Abierto ahora • Cierra a las 13:00 hs";
      } else if (currentMinutes >= afternoon.start && currentMinutes < afternoon.end) {
        isOpen = true;
        nextStatusText = "Abierto ahora • Cierra a las 20:30 hs";
      } else if (currentMinutes < morning.start) {
        nextStatusText = "Cerrado por ahora • Abre a las 08:30 hs";
      } else if (currentMinutes >= morning.end && currentMinutes < afternoon.start) {
        nextStatusText = "Receso de siesta • Abre a las 16:30 hs";
      } else {
        nextStatusText = "Cerrado por hoy • Abre mañana 08:30 hs";
      }
    } else if (day === 6) {
      // Saturday
      const sat = WORKSHOP_CONFIG.schedule.saturday[0];
      if (currentMinutes >= sat.start && currentMinutes < sat.end) {
        isOpen = true;
        nextStatusText = "Abierto ahora • Cierra a las 13:00 hs";
      } else if (currentMinutes < sat.start) {
        nextStatusText = "Cerrado • Abre hoy a las 08:30 hs";
      } else {
        nextStatusText = "Cerrado hasta el lunes 08:30 hs";
      }
    } else {
      // Sunday
      nextStatusText = "Cerrado domingo • Guardia WhatsApp";
    }

    statusBadges.forEach(badge => {
      const dot = badge.querySelector(".status-dot");
      const text = badge.querySelector(".status-text");

      if (isOpen) {
        badge.classList.remove("border-amber-500/40", "bg-amber-500/10", "text-amber-300", "border-red-500/40", "bg-red-500/10", "text-red-300");
        badge.classList.add("border-lime-500/40", "bg-lime-500/10", "text-lime-400");
        if (dot) {
          dot.className = "status-dot w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse";
        }
      } else {
        badge.classList.remove("border-lime-500/40", "bg-lime-500/10", "text-lime-400");
        badge.classList.add("border-amber-500/40", "bg-amber-500/10", "text-amber-300");
        if (dot) {
          dot.className = "status-dot w-2.5 h-2.5 rounded-full bg-amber-400";
        }
      }

      if (text) {
        text.textContent = nextStatusText;
      }
    });
  }

  updateStatus();
  // Check every 60 seconds
  setInterval(updateStatus, 60000);
}

// ==========================================
// 4. NAVIGATION & MOBILE MENU
// ==========================================
function initNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Header scroll appearance
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("bg-slate-950/95", "shadow-xl", "border-b", "border-slate-800/80");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove("bg-slate-950/95", "shadow-xl", "border-b", "border-slate-800/80");
      header.classList.add("bg-transparent");
    }
  });
}

// ==========================================
// 5. MODAL DE ACCESO PERSONAL (ADMIN / COLABORADORES)
// ==========================================
function initAuthModal() {
  const openButtons = document.querySelectorAll(".open-auth-modal");
  const closeButtons = document.querySelectorAll(".close-auth-modal");
  const modal = document.getElementById("auth-modal");
  const roleButtons = document.querySelectorAll(".role-tab");
  const roleInput = document.getElementById("auth-role-input");
  const authForm = document.getElementById("auth-form");
  const togglePasswordBtn = document.getElementById("toggle-password-btn");
  const passwordInput = document.getElementById("auth-password");
  const dashboardPreview = document.getElementById("portal-dashboard-preview");

  if (!modal) return;

  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    // Reset view to login form
    if (dashboardPreview) dashboardPreview.classList.add("hidden");
    if (authForm) authForm.classList.remove("hidden");
    const userField = document.getElementById("auth-user");
    if (userField) setTimeout(() => userField.focus(), 150);
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  openButtons.forEach(btn => btn.addEventListener("click", openModal));
  closeButtons.forEach(btn => btn.addEventListener("click", closeModal));

  // Close on click outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Role switching
  roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      roleButtons.forEach(b => {
        b.classList.remove("bg-lime-400", "text-slate-950", "font-bold");
        b.classList.add("text-slate-400", "hover:text-white");
      });
      btn.classList.add("bg-lime-400", "text-slate-950", "font-bold");
      btn.classList.remove("text-slate-400", "hover:text-white");

      const role = btn.dataset.role;
      if (roleInput) roleInput.value = role;

      const userPlaceholder = document.getElementById("auth-user-label");
      if (userPlaceholder) {
        userPlaceholder.textContent = role === "admin" 
          ? "Correo Electrónico Administrador" 
          : "Legajo / Usuario Mecánico";
      }
    });
  });

  // Password visibility toggle
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePasswordBtn.querySelector("i")?.classList.toggle("fa-eye");
      togglePasswordBtn.querySelector("i")?.classList.toggle("fa-eye-slash");
    });
  }

  // Handle Auth Submit (Simulated Portal Authentication)
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = authForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Validando credenciales en taller MIE...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast("¡Acceso autorizado! Cargando Sistema Integral MIE...", "success");

        // Show dashboard preview inside modal
        if (dashboardPreview) {
          authForm.classList.add("hidden");
          dashboardPreview.classList.remove("hidden");
          const roleDisplay = document.getElementById("preview-user-role");
          if (roleDisplay) {
            roleDisplay.textContent = (roleInput?.value === "admin") ? "Administrador / Recepción" : "Mecánico Oficial";
          }
        }
      }, 1200);
    });
  }
}

// ==========================================
// 6. CONTACT FORM & WHATSAPP TURNO GENERATOR
// ==========================================
function initContactForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("client-name")?.value.trim() || "";
    const phone = document.getElementById("client-phone")?.value.trim() || "";
    const vehicle = document.getElementById("client-vehicle")?.value.trim() || "";
    const service = document.getElementById("client-service")?.value || "Mecánica General";
    const notes = document.getElementById("client-notes")?.value.trim() || "";

    if (!name || !phone || !vehicle) {
      showToast("Por favor completá los campos obligatorios.", "error");
      return;
    }

    // Build WhatsApp message
    const message = `👋 *Hola Mecánica Integral Espinosa!*\n` +
      `Quisiera coordinar una cotización / turno para mi vehículo:\n\n` +
      `👤 *Cliente:* ${name}\n` +
      `📞 *Teléfono:* ${phone}\n` +
      `🚗 *Vehículo:* ${vehicle}\n` +
      `🔧 *Servicio:* ${service}\n` +
      (notes ? `📝 *Detalle/Falla:* ${notes}\n\n` : `\n`) +
      `📍 *Ubicación del taller:* Pasaje Florida 920, La Rioja Capital.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WORKSHOP_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    showToast("Redirigiendo a WhatsApp con tu turno...", "success");
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      form.reset();
    }, 800);
  });
}

// ==========================================
// 7. DIRECT WHATSAPP CTAS
// ==========================================
function initWhatsAppCTAs() {
  const directButtons = document.querySelectorAll(".btn-direct-whatsapp");
  directButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const customTopic = btn.dataset.service || "Consulta general";
      const message = `👋 Hola Mecánica Integral Espinosa! Me comunico desde su página web para consultar por: *${customTopic}*. Pasaje Florida 920.`;
      const url = `https://wa.me/${WORKSHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  });
}

// ==========================================
// 8. SERVICE CATEGORY FILTERS
// ==========================================
function initServiceFilters() {
  const filterBtns = document.querySelectorAll(".service-filter-btn");
  const serviceCards = document.querySelectorAll(".service-card-item");

  if (!filterBtns.length || !serviceCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle button active classes
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-lime-400", "text-slate-950", "font-bold");
        b.classList.add("bg-slate-800/80", "text-slate-300", "hover:bg-slate-700");
      });
      btn.classList.add("active", "bg-lime-400", "text-slate-950", "font-bold");
      btn.classList.remove("bg-slate-800/80", "text-slate-300", "hover:bg-slate-700");

      const filter = btn.dataset.filter;

      serviceCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// ==========================================
// 9. COPY ADDRESS UTILITY
// ==========================================
function initCopyAddress() {
  const copyBtns = document.querySelectorAll(".btn-copy-address");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText("Pasaje Florida 920, La Rioja Capital, Argentina").then(() => {
        showToast("¡Dirección copiada al portapapeles!", "success");
      }).catch(() => {
        showToast("Pasaje Florida 920, La Rioja Capital", "info");
      });
    });
  });
}

// ==========================================
// 10. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  const bgStyles = type === "success" 
    ? "bg-slate-900 border-lime-500/70 text-lime-300 shadow-lime-500/10" 
    : type === "error" 
    ? "bg-slate-900 border-red-500/70 text-red-300 shadow-red-500/10"
    : "bg-slate-900 border-sky-500/70 text-sky-300 shadow-sky-500/10";

  const icon = type === "success" 
    ? `<svg class="w-5 h-5 text-lime-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`
    : `<svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>`;

  toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-xl text-sm font-medium ${bgStyles}`;
  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger show
  setTimeout(() => toast.classList.add("show"), 20);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

