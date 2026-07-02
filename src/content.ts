import { getParsedContent } from "applesauce-content/text";
import type { Content } from "applesauce-content/nast";
import { isImageURL, type NostrEvent } from "applesauce-core/helpers";

function imagesFromNode(node: Content): string[] {
  if (node.type === "gallery") return node.links;
  if (node.type === "link" && isImageURL(node.href)) return [node.href];
  return [];
}

/** Image URLs linked in a note's content, de-duped. */
export function getImages(event: NostrEvent): string[] {
  const urls = getParsedContent(event).children.flatMap(imagesFromNode);
  return [...new Set(urls)];
}

const GM = /\bgm\b/i;

/** A note counts as a "GM" post if its content mentions gm as a word. */
export function isGmPost(event: NostrEvent): boolean {
  return GM.test(event.content);
}
