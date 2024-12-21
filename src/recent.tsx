import { ActionPanel, Action, Grid } from "@raycast/api";
import { useFetchLgtmoonRecent } from "./hooks";
import { Actions } from "./components";

export default function Command() {
  const { isLoading, data, revalidate } = useFetchLgtmoonRecent();

  return (
    <Grid
      isLoading={isLoading}
      actions={
        <ActionPanel>
          <Action title="Select" onAction={() => revalidate()} />
        </ActionPanel>
      }
    >
      {
        data.map((image) => {
          const key = image.url.split("/").slice(-1)[0];

          return (
            <Grid.Item
              key={key}
              content={image.url}
              title={key}
              actions={<Actions url={image.url} />}
            />
          )
        })}
    </Grid>
  );
}
