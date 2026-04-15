import { Component, OnDestroy, inject } from '@angular/core';
import { GalleryImage, GalleryStateService } from '../../gallery/gallery-state.service';

@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './app-gallery.component.html',
    styleUrls: ['./app-gallery.component.css']
})
export class AppGalleryComponent {
    private readonly galleryService = inject(GalleryStateService);

    hasImages = this.galleryService.galleryImages.length > 0;
    selectedImage: GalleryImage = this.galleryService.selectedImage;
    thumbnailImages: GalleryImage[] = this.galleryService.galleryImages;
    imageScale = 1;
    currentIndex = this.thumbnailImages.findIndex((image) => image.id === this.selectedImage.id);
    previousArrowVisible = false;
    nextArrowVisible = this.thumbnailImages.length > 1;

    handleSelectImage(image: GalleryImage): void {
        this.galleryService.selectImage(image);
        this.selectedImage = image;
        this.currentIndex = this.thumbnailImages.findIndex((img) => img.id === image.id);

        this.previousArrowVisible = this.currentIndex !== 0;
        this.nextArrowVisible = this.currentIndex !== this.thumbnailImages.length - 1;
    }

    showPreviousImage(): void {
        const previousIndex = this.currentIndex <= 0 ? this.thumbnailImages.length - 1 : this.currentIndex - 1;
        this.handleSelectImage(this.thumbnailImages[previousIndex]);
    }

    showNextImage(): void {
        const nextIndex = this.currentIndex >= this.thumbnailImages.length - 1 ? 0 : this.currentIndex + 1;
        this.handleSelectImage(this.thumbnailImages[nextIndex]);
    }

    increaseZoom(): void {
    }

    decreaseZoom(): void {
    }

    play(): void {
    }

    stop(): void {
    }
}
