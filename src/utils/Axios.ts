import axios from 'axios'

export class AxiosUtils {
  public static post<T>(
    url: string,
    headers: { [key: string]: any } = {},
    params: { [key: string]: any } = {},
    body: { [key: string]: any } | null = null
  ): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      await axios.post(
        url,
        body,
        {
          headers: headers,
          params: params
        }
      ).then((resp: { data: T }) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}