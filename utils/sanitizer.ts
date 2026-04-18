export function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
}

export function validateImageDimensions(file: File): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.width >= 200 && img.height >= 200);
    img.onerror = () => resolve(false);
    img.src = URL.createObjectURL(file);
  });
}
