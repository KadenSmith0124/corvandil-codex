console.log("AHHHHHHHH");

fetch("./data/pantheon.json")
  .then((response) => response.json())
  .then((data) => {
    const output = document.getElementById("pantheon-output");

    // Title
    const heading = document.createElement("h2");
    heading.textContent = data.circle;

    // List of deities
    const list = document.createElement("ul");

    data.deities.forEach((d) => {
      const item = document.createElement("li");
      item.textContent = `${d.name} — ${d.title}`;
      list.appendChild(item);
    });

    // Render
    output.innerHTML = "";
    output.appendChild(heading);
    output.appendChild(list);
  })
  .catch((error) => {
    console.error("Error loading pantheon:", error);
  });
