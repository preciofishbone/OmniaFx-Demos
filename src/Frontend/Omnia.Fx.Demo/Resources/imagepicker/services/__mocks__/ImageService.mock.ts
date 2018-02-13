import {ImageService} from "../Image.service";

/**
 * Mock for image service
 */
export class ImageServiceMock implements ImageService{
    public getImages = jest.fn();
    
}