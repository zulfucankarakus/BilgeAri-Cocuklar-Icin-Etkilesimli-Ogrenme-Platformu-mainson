let score = 0;
const scoreEl = document.getElementById("scoreValue");

function addScore(v) {
  score += v;
  scoreEl.textContent = score;
}

/* Drag başlangıcı */
document.querySelectorAll("[draggable='true']").forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("id", item.id);
  });
});

/* Geri dönüşüm */
const recycle = {
  paperBin: "paper",
  plasticBin: "plastic",
  organicBin: "banana"
};

Object.keys(recycle).forEach(binId => {
  const bin = document.getElementById(binId);
  if (!bin) return;

  bin.addEventListener("dragover", e => e.preventDefault());
  bin.addEventListener("drop", e => {
    const id = e.dataTransfer.getData("id");
    if (id === recycle[binId]) {
      document.getElementById(id).style.display = "none";
      addScore(10);
    } else {
      addScore(-5);
    }
  });
});

/* Hayvan – habitat */
const habitats = {
  forest: "lion",
  ocean: "fish",
  sky: "bird"
};

Object.keys(habitats).forEach(h => {
  const area = document.getElementById(h);
  if (!area) return;

  area.addEventListener("dragover", e => e.preventDefault());
  area.addEventListener("drop", e => {
    const id = e.dataTransfer.getData("id");
    if (id === habitats[h]) {
      document.getElementById(id).style.display = "none";
      addScore(10);
    } else {
      addScore(-5);
    }
  });
});
