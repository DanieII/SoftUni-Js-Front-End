function create(words) {
  const content = document.querySelector("#content");

  for (const word of words) {
    const container = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = word;
    paragraph.style.display = "none";

    container.addEventListener(
      "click",
      (e) => (e.currentTarget.querySelector("p").style.display = "block"),
    );

    container.appendChild(paragraph);
    content.appendChild(container);
  }
}
