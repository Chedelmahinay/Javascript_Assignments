"use strict";
const picArray = [
  {
    title: "Title 1",
    caption: "Caption 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    image: {
      large: "images/pic1.jpg",
      medium: "Thumbnailsss/pic1.jpg",
    },
  },
  {
    title: "Title 2",
    caption: "Caption 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
    image: {
      large: "images/pic2.jpg",
      medium: "Thumbnailsss/pic2.jpg",
    },
  },
  {
    title: "Title 3",
    caption: "Caption 3",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
    image: {
      large: "images/pic3.jpg",
      medium: "Thumbnailsss/pic3.jpg",
    },
  },
  {
    title: "Title 4",
    caption: "Caption 4",
    description:
      "Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: {
      large: "images/pic4.jpg",
      medium: "Thumbnailsss/pic4.jpg",
    },
  },
  {
    title: "Title 5",
    caption: "Caption 5",
    description:
      "Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ",
    image: {
      large: "images/pic5.jpg",
      medium: "Thumbnailsss/pic5.jpg",
    },
  },
  {
    title: "Title 6",
    caption: "Caption 6",
    description:
      "Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.",
    image: {
      large: "images/pic6.jpg",
      medium: "Thumbnailsss/pic6.jpg",
    },
  },
  {
    title: "Title 7",
    caption: "Caption 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    image: {
      large: "images/pic7.jpg",
      medium: "Thumbnailsss/pic7.jpg",
    },
  },
  {
    title: "Title 8",
    caption: "Caption 8",
    description:
      "Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ",
    image: {
      large: "images/pic8.jpg",
      medium: "Thumbnailsss/pic8.jpg",
    },
  },
  {
    title: "Title 9",
    caption: "Caption 9",
    description:
      "Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ",
    image: {
      large: "images/pic9.jpg",
      medium: "Thumbnailsss/pic9.jpg",
    },
  },
];

// add your code here

const section = document.querySelector("#pictures");

const addArticle = (obj) => {
  const article = document.createElement("article");
  article.classList = "card";
  const h2 = document.createElement("h2");
  h2.textContent = obj.title;
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = obj.image.medium;
  img.alt = obj.title;
  const figCaption = document.createElement("figcaption");
  figCaption.textContent = obj.caption;
  figure.appendChild(img);
  figure.appendChild(figCaption);
  const p = document.createElement("p");
  p.textContent = obj.description;
  article.appendChild(h2);
  article.appendChild(figure);
  article.appendChild(p);
  section.appendChild(article);
};

picArray.forEach((obj) => addArticle(obj));
