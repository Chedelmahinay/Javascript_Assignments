const fetchParticipantNames = () => {
  const participantCount = prompt("How many participants?");
  const participantsList = [];

  let currentParticipantIndex = 1;
  while (currentParticipantIndex <= participantCount) {
    const participantName = prompt(`Enter participant #${currentParticipantIndex}'s name:`);
    participantsList.push(participantName);
    currentParticipantIndex++;
  }

  return participantsList.sort();
};

const displayParticipantList = (participantsList) => {
  participantsList.forEach((participant) => {
    const listItemElement = document.createElement("li");
    listItemElement.innerHTML = participant;
    document.querySelector(".name-list").appendChild(listItemElement);
  });
};

const participantsList = fetchParticipantNames();
displayParticipantList(participantsList);
