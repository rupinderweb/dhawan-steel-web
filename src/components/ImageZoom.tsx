
import React from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageZoom = ({ src, alt, open, onOpenChange }: ImageZoomProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
        <div className="relative">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
          />
          <DialogClose className="absolute top-2 right-2 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 focus:outline-none">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoom;
