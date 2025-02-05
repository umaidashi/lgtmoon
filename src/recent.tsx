import { Grid } from "@raycast/api";
import { Actions } from "./components";
import { useFetchLgtmoonRecent } from "./hooks";

export default function Command() {
  const { isLoading, data } = useFetchLgtmoonRecent();

  return (
    <Grid isLoading={isLoading}>
      {data.map((image) => {
        const key = image.url.split("/").slice(-1)[0];

        return <Grid.Item key={key} content={image.url} title={key} actions={<Actions url={image.url} />} />;
      })}
    </Grid>
  );
}
