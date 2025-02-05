import { Grid } from "@raycast/api";
import { Actions } from "./components";
import { useFetchLgtmoonRandom } from "./hooks";

export default function Command() {
  const { isLoading, data } = useFetchLgtmoonRandom();

  return (
    <Grid isLoading={isLoading}>
      {data.map((image) => {
        const key = image.url.split("/").slice(-1)[0];

        return <Grid.Item key={key} content={image.url} title={key} actions={<Actions url={image.url} />} />;
      })}
    </Grid>
  );
}
