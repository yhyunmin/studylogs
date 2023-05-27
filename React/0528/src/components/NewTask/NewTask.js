import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../../hooks/fetch-hooks";

const NewTask = ({ taskText }) => {
  const fetchData = useFetch(taskText);
  const { isLoading, data, error, loadedTask } = fetchData;

  return (
    <Section>
      <TaskForm onEnterTask={fetchData} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
