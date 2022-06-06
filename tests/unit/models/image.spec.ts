// Fakers
import { generateFakeImage } from '@/../tests/fakers/models/image'

// Models
import { Image } from '@/models/image'

describe('@/models/image.ts', () => {
    it('checks getters and setters', () => {
        const fakeImage: Image = generateFakeImage()
        const image: Image = new Image()

        image.setUrl(fakeImage.getUrl())
        expect(image.getUrl()).toBe(fakeImage.getUrl())

        image.setHeight(fakeImage.getHeight())
        expect(image.getHeight()).toBe(fakeImage.getHeight())

        image.setWidth(fakeImage.getWidth())
        expect(image.getWidth()).toBe(fakeImage.getWidth())
    })
})