export default function apiAnchors({fileContent}: {fileContent: string}) {
  return fileContent.replace(
    /<a (?=aria-hidden="true" tabIndex="-1" class="list-anchor-link" id="[^"]+"\/>)/g,
    '<ApiAnchor ',
  );
}
