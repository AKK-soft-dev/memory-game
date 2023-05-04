import smileEmoji from "../assets/wired-lineal-261-emoji-smile.gif";
import wowEmoji from "../assets/wired-lineal-262-emoji-wow.gif";
import pictureLandscape from "../assets/wired-flat-54-photo-picturelandscape-gallery.gif";
import camera from "../assets/wired-flat-61-camera.gif";
import avatar from "../assets/wired-lineal-21-avatar.gif";
import edit from "../assets/wired-lineal-35-edit.gif";

export const gifSources = {
  smile: smileEmoji,
  wow: wowEmoji,
  picture: pictureLandscape,
  camera,
  avatar,
  edit,
};

export const gifNames = Object.getOwnPropertyNames(gifSources);

export const generateRandomGifs = () => {
  const randomGifs = [...gifNames, ...gifNames];
  for (let i = randomGifs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomGifs[i], randomGifs[j]] = [randomGifs[j], randomGifs[i]];
  }

  return randomGifs;
};
