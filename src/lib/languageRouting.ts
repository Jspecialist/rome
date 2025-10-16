export const supportedLanguagePrefixes = ["es", "it"] as const;

const prefixPattern = (prefix: string) => new RegExp(`^/${prefix}(?:/|$)`);

const findPrefix = (path: string, prefixes: readonly string[]) =>
  prefixes.find((prefix) => prefixPattern(prefix).test(path));

const stripPrefix = (path: string, prefix: string) => {
  const stripped = path.replace(prefixPattern(prefix), "");
  if (!stripped) {
    return "/";
  }
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
};

const addPrefix = (path: string, prefix: string) => {
  if (path === "/") {
    return `/${prefix}`;
  }
  return `/${prefix}${path.startsWith("/") ? path : `/${path}`}`;
};

export function getLanguageRedirectPath(
  currentPath: string,
  targetLanguage: string,
  prefixes: readonly string[] = supportedLanguagePrefixes,
): string | null {
  const normalizedPath = currentPath || "/";
  const currentPrefix = findPrefix(normalizedPath, prefixes);

  if (targetLanguage === "en") {
    if (!currentPrefix) {
      return null;
    }
    return stripPrefix(normalizedPath, currentPrefix);
  }

  if (currentPrefix) {
    if (currentPrefix === targetLanguage) {
      return null;
    }
    const suffixPath = stripPrefix(normalizedPath, currentPrefix);
    return addPrefix(suffixPath, targetLanguage);
  }

  return addPrefix(normalizedPath, targetLanguage);
}
