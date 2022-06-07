import { ImageFactory } from '@/factories/image'
import { Image } from '@/models/image'
import { generateFakeImage } from '@/../tests/fakers/models/image'

describe('@/factories/image.ts', () => {
    it('checks create method', () => {
        const fakeImage: Image = generateFakeImage()
        const image: Image = ImageFactory.create(
            fakeImage.getUrl() as string,
            fakeImage.getHeight(),
            fakeImage.getWidth()
        )

        expect(image.getUrl()).toBe(fakeImage.getUrl())
        expect(image.getHeight()).toBe(fakeImage.getHeight())
        expect(image.getWidth()).toBe(fakeImage.getWidth())
    })
})