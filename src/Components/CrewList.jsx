import { CrewStatus } from "./CrewStatus";

export const CrewList = () => {
  const crewmates = [
    { id: 1, name: "Mr. Poindibags", isImpostor: true },
    { id: 2, name: "Bombom", isImpostor: false },
    { id: 3, name: "Tito", isImpostor: false },
    { id: 4, name: "X-Ray", isImpostor: false },
    { id: 5, name: "Fixfox", isImpostor: false },
  ];

  let crew = crewmates.map((crewmate) => (
    <CrewStatus key={crewmate.id} {...crewmate} />
  ));

  return <ul>{crew}</ul>;
};
