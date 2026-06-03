import { promises as fs } from "node:fs";
import path from "node:path";
import { CmsContent, cmsContentSchema, defaultContent } from "@/lib/cms/schema";

function getDataFilePath(): string {
  const configuredPath = process.env.CMS_DATA_FILE ?? "web/data/content.json";
  return path.resolve(process.cwd(), "..", configuredPath);
}

export async function readContent(): Promise<CmsContent> {
  const dataFilePath = getDataFilePath();

  try {
    const raw = await fs.readFile(dataFilePath, "utf8");
    const parsed = cmsContentSchema.parse(JSON.parse(raw));
    return parsed;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      await writeContent(defaultContent);
      return defaultContent;
    }

    throw error;
  }
}

export async function writeContent(content: CmsContent): Promise<CmsContent> {
  const nextContent = cmsContentSchema.parse({
    ...content,
    updatedAt: new Date().toISOString(),
  });
  const dataFilePath = getDataFilePath();
  await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
  await fs.writeFile(dataFilePath, JSON.stringify(nextContent, null, 2), "utf8");
  return nextContent;
}

export async function readContentJson(): Promise<string> {
  const content = await readContent();
  return JSON.stringify(content, null, 2);
}

export async function writeContentJson(rawJson: string): Promise<CmsContent> {
  const parsed = cmsContentSchema.parse(JSON.parse(rawJson));
  return writeContent(parsed);
}
