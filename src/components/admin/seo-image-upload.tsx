"use client";

import { useState } from "react";

export function SeoImageUpload({ defaultValue }: { defaultValue: string }) {
  const [value, setValue] = useState(defaultValue);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function upload(file: File) {
    setBusy(true);
    setError("");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/admin/seo/upload", { method: "POST", body: formData });
      const result = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error ?? "Không thể tải ảnh lên.");
      setValue(result.url);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Không thể tải ảnh lên.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input name="ogImage" value={value} onChange={(event) => setValue(event.target.value)} className="form-input" placeholder="/uploads/seo/anh.jpg" />
        <label className="shrink-0 cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-semibold text-text-primary hover:bg-muted">
          {busy ? "Đang tải..." : "Chọn ảnh"}
          <input type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="sr-only" disabled={busy} onChange={(event) => { const file = event.target.files?.[0]; if (file) void upload(file); event.currentTarget.value = ""; }} />
        </label>
      </div>
      <p className="text-xs text-text-secondary">JPG, PNG, WebP hoặc AVIF · tối đa 5 MB. Ảnh sẽ được lưu vào thư mục upload của website.</p>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {value && <img src={value} alt="OG image preview" className="max-h-32 rounded-lg border border-border object-contain" />}
    </div>
  );
}
