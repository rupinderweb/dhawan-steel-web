
import React from "react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        <ScrollArea className="h-full max-h-[90vh] w-full">
          <div className="relative flex items-center justify-center p-2">
            <img 
              src={src} 
              alt={alt} 
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
            />
            <DialogClose className="absolute top-4 right-4 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">{alt}</div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoom;
