import { Button, FilterContainer } from "./styles";
import { IFilterProps } from "./types";

export default function Filter({
  filter,
  setFilter,
  sortByTitle,
}: IFilterProps) {
  return (
    <FilterContainer>
      <Button
        active={filter === "all" ? "true" : "false"}
        onClick={() => setFilter("all")}
      >
        Todos
      </Button>
      <Button
        active={filter === "completed" ? "true" : "false"}
        onClick={() => setFilter("completed")}
      >
        Completo
      </Button>
      <Button
        active={filter === "incomplete" ? "true" : "false"}
        onClick={() => setFilter("incomplete")}
      >
        Incompleto
      </Button>
      <Button onClick={sortByTitle}>Ordenar por título</Button>
    </FilterContainer>
  );
}
