import { Action, ActionPanel } from "@raycast/api";

export const Actions = ({ url }: { url: string }) => {
  const urlMarkdown = `![${url}](${url})`;
  return (
    <ActionPanel>
      <Action.Paste content={urlMarkdown} title="Paste Lgtm" />
      <Action.CopyToClipboard content={urlMarkdown} title="Copy Lgtm" />
      <Action.OpenInBrowser url={url} title="Open in Browser" />
      <Action.OpenInBrowser
        url={"https://github.com/pulls?q=sort:updated-desc+is:pr+is:open+archived:false+review-requested:@me+"}
        title="Let's Review Pull Requests!!"
      />
    </ActionPanel>
  );
};
