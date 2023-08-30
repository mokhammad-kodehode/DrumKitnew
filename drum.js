const soundFolder = "sounds/";
const imageFolder = "images/";

const drumkitData = [
  { sound: "clap.wav", name: "Clap" },
  { sound: "hihat.wav", name: "Hi-Hat" },
  { sound: "openhat.wav", name: "Openhat" },
  { sound: "ride.wav", name: "Ride" },
  { sound: "snare.wav", name: "Snare" },
  { sound: "tink.wav", name: "Tink" },
  { sound: "tom.wav", name: "Tom" },
  { sound: "kick.wav", name: "Kick" },
];

const container = document.getElementById("drumkit");

function drum(soundFile, name) {
  const button = document.createElement("button");

  button.textContent = name;

  button.addEventListener("click", () => {
    const sound = new Audio(soundFolder + soundFile);
    const drum = document.getElementById("drum");
    drum.classList.add("bass");
    button.classList.add("color-button");
    sound.play();

    setTimeout(() => {
      button.classList.remove("color-button");
      drum.classList.remove("bass");
    }, 100);
  });
  return button;
}

const drumkitElement = drumkitData.map(({ sound, name, image }) => {
  return drum(sound, name, image);
});

container.append(...drumkitElement);

const soundKeys = {
  q: "clap.wav",
  w: "hihat.wav",
  e: "openhat.wav",
  r: "ride.wav",
  t: "snare.wav",
  y: "tink.wav",
  u: "tom.wav",
  i: "kick.wav",
};

document.addEventListener("keydown", (event) => {
  if (soundKeys[event.key]) {
    const drum = document.getElementById("drum");
    drum.classList.add("bass");
    const sound = new Audio(soundFolder + soundKeys[event.key]);
    sound.play();

    setTimeout(() => {
      drum.classList.remove("bass");
    }, 100);
  }
});
