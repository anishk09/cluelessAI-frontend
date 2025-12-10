import { fetchWithAuth } from "./apiClient";

interface PreSignedUrlResponse {
  uploadUrl: string;
  assetKey: string;
}

export async function uploadGarmentImage(file: File): Promise<string> {
  const { uploadUrl, assetKey } = await fetchWithAuth<PreSignedUrlResponse>("/api/v1/storage/presigned-url", {
    method: "POST",
    body: JSON.stringify({ filename: file.name, mimeType: file.type })
  });

  const uploadResult = await fetch(uploadUrl, {
    method: "PUT",
    body: file,
    headers: { "Content-Type": file.type }
  });

  if (!uploadResult.ok) {
    throw new Error("Direct S3 upload failed.");
  }

  return assetKey;
}
