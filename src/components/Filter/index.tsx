import { FilterAction } from "../../global/types/filter.types";
import { Button, FilterContainer } from "./styles";
import { IFilterProps } from "./types";

export default function Filter({
  filter,
  setFilter,
  sortByTitle,
}: IFilterProps) {
  const buttonDescription = [
    {
      children: "Todos",
      active: FilterAction.all,
    },
    {
      children: "Completo",
      active: FilterAction.completed,
    },
    {
      children: "Incompleto",
      active: FilterAction.incomplete,
    },
  ];

  return (
    <FilterContainer>
      {buttonDescription.map((button) => (
        <Button
          key={button.children}
          active={FilterAction[button.active] === filter ? "true" : "false"}
          onClick={() => setFilter(FilterAction[button.active])}
        >
          {button.children}
        </Button>
      ))}
      <Button onClick={sortByTitle}>Ordenar por título</Button>
    </FilterContainer>
  );
}
