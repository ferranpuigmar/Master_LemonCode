import { Component, OnDestroy, inject, WritableSignal, signal } from '@angular/core';
import { GalleryImage, GalleryStateService } from '../../gallery/gallery-state.service';

@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './app-gallery.component.html',
    styleUrls: ['./app-gallery.component.css']
})
export class AppGalleryComponent implements OnDestroy {
    private readonly galleryService = inject(GalleryStateService);
    private timmer: ReturnType<typeof setInterval> | null = null;

    private readonly isPlayingSignal: WritableSignal<boolean> = signal(false);
    readonly isPlaying = this.isPlayingSignal.asReadonly();

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
        this.imageScale += 0.1;
    }

    decreaseZoom(): void {
        if(this.imageScale <= 1) {
            return;
        }

        this.imageScale -= 0.1;
    }

    play(): void {
        this.isPlayingSignal.set(true);
        this.timmer = setInterval(() => {
            this.showNextImage();
        }, 2000);
    }

    stop(): void {
        this.isPlayingSignal.set(false);
        this.timmer && clearInterval(this.timmer);
    }

    ngOnDestroy(): void {
        this.stop();
    }
}
