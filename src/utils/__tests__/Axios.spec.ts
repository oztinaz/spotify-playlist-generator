import { afterEach, describe, expect, test, vi, type Mocked } from 'vitest'
import axios from 'axios'
import { AxiosUtils } from '@/utils/Axios'

vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

describe('utils/Axios', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('post resolves data when axios.post works successfully', async () => {
    const fakeResponse: string = 'Fake response'
    mockedAxios.post.mockResolvedValueOnce({
      data: fakeResponse
    })
    const response = await AxiosUtils.post<any>('')
    expect(response).toBe(fakeResponse)
  })

  test('post rejects error when axios.post fails', () => {
    const fakeError: string = 'Fake error'
    mockedAxios.post.mockRejectedValueOnce(fakeError)
    expect(async () => {
      await AxiosUtils.post<any>('')
    }).rejects.toThrow(fakeError)
  })

  test('get resolves data when axios.get works successfully', async () => {
    const fakeResponse: string = 'Fake response'
    mockedAxios.get.mockResolvedValueOnce({
      data: fakeResponse
    })
    const response = await AxiosUtils.get<any>('')
    expect(response).toBe(fakeResponse)
  })

  test('get rejects error when axios.get fails', () => {
    const fakeError: string = 'Fake error'
    mockedAxios.get.mockRejectedValueOnce(fakeError)
    expect(async () => {
      await AxiosUtils.get<any>('')
    }).rejects.toThrow(fakeError)
  })
})
