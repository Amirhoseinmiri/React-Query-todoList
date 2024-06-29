import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";
const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  if (isError) {
    return <p style={{ marginTop: "1rem" }}>Error Find</p>;
  }
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
