
import React from "react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageZoom = ({ src, alt, open, onOpenChange }: ImageZoomProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-black/95 overflow-hidden">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative flex items-center justify-center">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[85vh] object-contain"
          />
          <DialogClose className="absolute top-4 right-4 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <span className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">{alt}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoom;
