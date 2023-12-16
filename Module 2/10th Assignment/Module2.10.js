"use strict";

const getNumberOfEntities = (entity) => {
  return +prompt(`How many ${entity}s?`);
};

const createEntityList = (numberOfEntities, entityName) => {
  let i = 1;
  let entityList = [];
  while (i <= numberOfEntities) {
    const initialVotes = 0;
    const entityNameLower = prompt(`Name for ${entityName} ${i}`).toLowerCase();
    const entityObj = { name: entityNameLower, votes: initialVotes };
    entityList.push(entityObj);
    i++;
  }
  return entityList;
};

const getEntityName = () => {
  return prompt("Who will you vote for?");
};

const getEntityNameList = (list) => {
  return list.map((entityObject) => entityObject["name"]);
};

const castVote = (entityName, entityList) => {
  if (entityName !== "") {
    for (const objectEntity of entityList) {
      if (entityName === objectEntity["name"]) {
        objectEntity["votes"]++;
      }
    }
  }
  return entityList;
};

const sortByVotes = (current, next) => {
  return next["votes"] - current["votes"];
};

const sortEntities = (entityList) => {
  entityList.sort(sortByVotes);
};

const announceWinner = (entityList) => {
  sortEntities(entityList);
  const winner = entityList[0];
  console.log(
    `The winner is ${winner["name"]} with ${winner["votes"]} vote${winner["votes"] > 1 ? "s" : ""}.`
  );
};

const showResults = (entityList) => {
  console.log(`Results:`);
  for (const obj of entityList) {
    console.log(
      `${obj["name"]}: ${obj["votes"]} vote${obj["votes"] > 1 ? "s" : ""}`
    );
  }
};

const initializeVoting = () => {
  const candidateEntity = "candidate";
  const voterEntity = "voter";
  const numOfCandidates = getNumberOfEntities(candidateEntity);
  let candidateList = createEntityList(numOfCandidates, candidateEntity);

  const numOfVoters = getNumberOfEntities(voterEntity);
  for (let i = 1; i <= numOfVoters; i++) {
    const candidateName = getEntityName().toLowerCase();
    candidateList = castVote(candidateName, candidateList);
  }
  announceWinner(candidateList);
  showResults(candidateList);
};

initializeVoting();
