import { Image } from '@/models/image'

const fakeUrl: string = 'fakeUrl'
const fakeHeight: number = 40
const fakeWidth: number = 40

describe('@/models/image.ts', () => {
    it('checks getters', () => {
        const image: Image = new Image(
            fakeUrl,
            fakeHeight,
            fakeWidth
        )

        expect(image.getUrl()).toBe(fakeUrl)
        expect(image.getHeight()).toBe(fakeHeight)
        expect(image.getWidth()).toBe(fakeWidth)
    })

    it('checks setters', () => {
        const image: Image = new Image(
            'a',
            40,
            40
        )

        image.setUrl(fakeUrl)
        expect(image.getUrl()).toBe(fakeUrl)

        image.setHeight(fakeHeight)
        expect(image.getHeight()).toBe(fakeHeight)

        image.setWidth(fakeWidth)
        expect(image.getWidth()).toBe(fakeWidth)
    })
})