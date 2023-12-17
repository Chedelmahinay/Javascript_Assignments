const changeImageOnHover = () => {
  const targetImage = document.querySelector("#target");
  targetImage.src = "img/pic4.jpg";
};

const changeImageOnMouseLeave = () => {
  const targetImage = document.querySelector("#target");
  targetImage.src = "img/pic3.jpg";
};

const triggerElement = document.querySelector("#trigger");
triggerElement.addEventListener("mouseover", changeImageOnHover);
triggerElement.addEventListener("mouseleave", changeImageOnMouseLeave);
