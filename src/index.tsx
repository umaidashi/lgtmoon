import { ActionPanel, Action, Icon, Grid, Color } from "@raycast/api";

export default function Command() {
  return (
    <Grid
      inset={Grid.Inset.Large}
    >
      {
        Object.entries(Icon).map(([name, icon]) => (
          <Grid.Item
            key={name}
            content={{ value: { source: icon, tintColor: Color.PrimaryText }, tooltip: name }}
            title={name}
            subtitle={icon}
            actions={
              <ActionPanel>
                <Action.CopyToClipboard content={icon} />
              </ActionPanel>
            }
          />
        ))}
    </Grid>
  );
}
