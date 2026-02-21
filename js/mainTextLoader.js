// js/mainTextLoader.js
// Controller class to handle injecting content from MAIN_TEXT_DATA into HTML elements

class MainTextController {
  static render(dataKey, dataSource, targetElement) {
    const content = dataSource[dataKey];
    if (!content || !targetElement) return;

    // Clear existing content to avoid duplicates if re-rendered
    targetElement.innerHTML = "";

    // Append paragraphs
    content.paragraphs?.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      targetElement.appendChild(p);
    });

    // Append lists
    content.lists?.forEach(list => {
      if (list.title) {
        const heading = document.createElement('h3');
        heading.textContent = list.title;
        targetElement.appendChild(heading);
      }
      const ul = document.createElement('ul');
      list.items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item; // Allow <a> and other inline HTML
        ul.appendChild(li);
      });
      targetElement.appendChild(ul);
    });
  }
}

// DOMContentLoaded: populate ALL elements with data-main-text
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('[data-main-text]');
  if (!targets.length) return;

  targets.forEach(target => {
    const key = target.dataset.mainText;
    MainTextController.render(key, MAIN_TEXT_DATA, target);
  });
});