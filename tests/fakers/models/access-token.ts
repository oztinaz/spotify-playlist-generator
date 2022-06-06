import { AccessToken } from '@/models/access-token'
import { faker } from '@faker-js/faker'

export function generateFakeAccessToken(): AccessToken {
    return new AccessToken(
        faker.database.mongodbObjectId(),
        faker.datatype.datetime(),
        [faker.random.word()],
        faker.database.mongodbObjectId()
    )
}