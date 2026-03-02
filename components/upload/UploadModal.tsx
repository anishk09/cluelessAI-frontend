import React, { useState } from "react";
import { ImageDropzone } from "./ImageDropzone";
import { uploadGarmentImage } from "../../services/s3Uploader";
import { Button } from "../ui/Button";

export const UploadModal: React.FC<{ isOpen: boolean; onClose: () => void; onComplete: () => void }> = ({ isOpen, onClose, onComplete }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  if (!isOpen) return null;

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      await uploadGarmentImage(file);
      onComplete();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4">
        <h3 className="text-lg font-bold text-white">Digitize Apparel</h3>
        <ImageDropzone onFileSelected={setFile} />
        {file && <p className="text-xs text-slate-400 truncate">Selected: {file.name}</p>}
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleUpload} isLoading={uploading} disabled={!file}>Upload & Segment</Button>
        </div>
      </div>
    </div>
  );
};
