import { Action, ActionPanel } from "@raycast/api";
import { useLocalStorage } from "@raycast/utils";
import { Urls } from "./history";

export const Actions = ({ url }: { url: string }) => {
  const urlMarkdown = `![${url}](${url})`;

  const { value: urls, setValue } = useLocalStorage<Urls>("url");
  const setLocalStorage = async (): Promise<void> => {
    const beforeUrls = urls ? urls : [];
    const isExist = beforeUrls.find((u) => u.url === url);
    if (isExist) {
      return;
    }
    const newUrls = [{ url: url }, ...beforeUrls];
    await setValue(newUrls);
  };
  return (
    <ActionPanel>
      <Action.Paste content={urlMarkdown} title="Paste Lgtm" onPaste={setLocalStorage} />
      <Action.CopyToClipboard content={urlMarkdown} title="Copy Lgtm" />
      <Action.OpenInBrowser url={url} title="Open in Browser" />
      <Action.OpenInBrowser
        url={"https://github.com/pulls?q=sort:updated-desc+is:pr+is:open+archived:false+review-requested:@me+"}
        title="Let's Review Pull Requests!!"
      />
    </ActionPanel>
  );
};
