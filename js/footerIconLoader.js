document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  if (!footer) return;

  // Determine correct path prefix for images based on page location
  const isInProjectsFolder = window.location.pathname.includes("/services/");
  const imagePathPrefix = isInProjectsFolder ? "../images" : "images";

  // Clear any existing footer content
  footer.innerHTML = "";

  // Add copyright notice
  const copyright = document.createElement("span");
  copyright.textContent = "© 2025 Nigel Galbraith";
  footer.appendChild(copyright);

  // Add separator between text and icons
  footer.append(" | ");

  // List of social/contact icons with links
  const iconList = [
    {
      href: "mailto:nigelgalbraith@proton.me",
      alt: "Email",
      title: "Email Nigel",
      src: `${imagePathPrefix}/icons/optimized/email.png`,
    },
    {
      href: "tel:+642102314973",
      alt: "Phone",
      title: "Call Nigel",
      src: `${imagePathPrefix}/icons/optimized/phone.png`,
    },
  ];

  // Create and append each icon to the footer
  iconList.forEach(({ href, alt, src }) => {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = "footer-icon";

    a.appendChild(img);
    footer.appendChild(a);
  });
});
