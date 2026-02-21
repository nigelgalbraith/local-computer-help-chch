document.addEventListener("DOMContentLoaded", () => {
  // Replace placeholders with responsive <picture> elements
  document.querySelectorAll(".responsive-image").forEach((container) => {
    const fileName = container.dataset.imgName;
    const altText = container.dataset.alt || "";
    const imgClass = container.dataset.class || "";
    if (!fileName) return;
    const picture = document.createElement("picture");
    const breakpoints = [
      { media: "(min-width: 1280px)", folder: "desktop" },
      { media: "(min-width: 1024px)", folder: "laptop" },
      { media: "(min-width: 480px)", folder: "mobile" },
    ];
    breakpoints.forEach((bp) => {
      const source = document.createElement("source");
      source.setAttribute("media", bp.media);
      source.setAttribute("srcset", `images/main/optimized/${bp.folder}/standard/${fileName}`);
      picture.appendChild(source);
    });
    const img = document.createElement("img");
    img.src = `images/main/optimized/mobile/standard/${fileName}`;
    img.alt = altText;
    if (imgClass) img.className = imgClass;
    img.loading = "lazy";
    img.decoding = "async";
    picture.appendChild(img);
    container.replaceWith(picture);
  });
});
