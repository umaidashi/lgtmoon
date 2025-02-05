import { Grid } from "@raycast/api";
import { useLocalStorage } from "@raycast/utils";
import { Actions } from "./components";

export type Urls = {
  url: string;
}[];

export default function Command() {
  const { value: urls, isLoading } = useLocalStorage<Urls>("url");

  return (
    <Grid isLoading={isLoading}>
      {urls?.map((item) => {
        return <Grid.Item key={item.url} content={item.url} title={item.url} actions={<Actions url={item.url} />} />;
      })}
    </Grid>
  );
}
