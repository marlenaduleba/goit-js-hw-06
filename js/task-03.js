const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

images.forEach((image) => {
  image.style = "max-width: 100%; min-height: 100%;";
});

const gallery = document.querySelector(".gallery");

gallery.style.display = "flex";
gallery.style.gap = "15px";
gallery.style.listStyle = "none";

const imagesListItems = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" style="${image.style}"></img></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", imagesListItems);
