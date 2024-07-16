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
        active={filter === "all"}
        onClick={() =>
          setFilter(() => {
            localStorage.setItem("filter", "all");
            return "all";
          })
        }
      >
        Todos
      </Button>
      <Button
        active={filter === "completed"}
        onClick={() =>
          setFilter(() => {
            localStorage.setItem("filter", "completed");
            return "completed";
          })
        }
      >
        Completo
      </Button>
      <Button
        active={filter === "incomplete"}
        onClick={() =>
          setFilter(() => {
            localStorage.setItem("filter", "incomplete");
            return "incomplete";
          })
        }
      >
        Incompleto
      </Button>
      <Button onClick={sortByTitle}>Ordenar por título</Button>
    </FilterContainer>
  );
}
