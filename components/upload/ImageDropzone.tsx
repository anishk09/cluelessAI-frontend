import React, { useState } from "react";

interface ImageDropzoneProps {
  onFileSelected: (file: File) => void;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onFileSelected }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.[0]) onFileSelected(e.dataTransfer.files[0]);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer ${dragOver ? "border-indigo-500 bg-indigo-950/20" : "border-slate-700 hover:border-slate-600"}`}
    >
      <p className="text-slate-300 text-sm">Drag and drop apparel imagery or click to browse</p>
      <input type="file" accept="image/*" className="hidden" id="garment-upload" onChange={(e) => e.target.files?.[0] && onFileSelected(e.target.files[0])} />
      <label htmlFor="garment-upload" className="mt-3 inline-block text-xs font-semibold text-indigo-400 hover:underline cursor-pointer">Select Image File</label>
    </div>
  );
};
