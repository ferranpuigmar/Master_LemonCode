import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

export type GalleryImage = {
  id: string;
  src: string;
  title: string;
};

@Injectable({
  providedIn: 'root'
})
export class GalleryStateService {
  private readonly _galleryImages: GalleryImage[] = [
    {
      id: '2976579929',
      src: 'assets/gallery/2976579929.jpg',
      title: 'Gallery image 2976579929'
    },
    {
      id: '3352415115',
      src: 'assets/gallery/3352415115.jpg',
      title: 'Gallery image 3352415115'
    },
    {
      id: '4621801197',
      src: 'assets/gallery/4621801197.jpg',
      title: 'Gallery image 4621801197'
    },
    {
      id: '4802646464',
      src: 'assets/gallery/4802646464.jpg',
      title: 'Gallery image 4802646464'
    },
    {
      id: '6020475157',
      src: 'assets/gallery/6020475157.jpg',
      title: 'Gallery image 6020475157'
    },
    {
      id: '6758404104',
      src: 'assets/gallery/6758404104.jpg',
      title: 'Gallery image 6758404104'
    },
    {
      id: '6789431967',
      src: 'assets/gallery/6789431967.jpg',
      title: 'Gallery image 6789431967'
    },
    {
      id: '7450764929',
      src: 'assets/gallery/7450764929.jpg',
      title: 'Gallery image 7450764929'
    }
  ];

  private readonly _selectedImageSignal: WritableSignal<GalleryImage> = signal(this._galleryImages[0]);
  private readonly _selectedImage: Signal<GalleryImage> = this._selectedImageSignal.asReadonly();

  get selectedImage(): GalleryImage {
    return this._selectedImage();
  }

  get galleryImages(): GalleryImage[] {
    return this._galleryImages;
  }

  selectImage(image: GalleryImage): void {
    this._selectedImageSignal.set(image);
  }
}

