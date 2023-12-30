import { defineStore, storeToRefs } from 'pinia'
import { useSpotifyAuthorizationStore } from '@/stores/spotify/authorization'
import { computed, ref, type ComputedRef, type Ref } from 'vue'
import { Buffer } from 'buffer'
import { AxiosUtils } from '@/utils/Axios'
import type { SpotifyAccessToken, SpotifyRefreshToken } from '@/types/spotify/Token'

export const useSpotifyTokenStore = defineStore('spotify-token', () => {
  const spotifyAuthorizationStore = useSpotifyAuthorizationStore()
  const { accountsUrl, clientId, clientSecret, redirectUri } =
    storeToRefs(spotifyAuthorizationStore)

  const contentType: Ref<string> = ref('application/x-www-form-urlencoded')

  const tokenUrl: ComputedRef<string> = computed((): string => {
    return `${accountsUrl.value}/api/token`
  })

  const getAccessTokenRequestHeaders = (): { [key: string]: any } => {
    return {
      'content-type': contentType.value,
      Authorization:
        'Basic ' + Buffer.from(`${clientId.value}:${clientSecret.value}`).toString('base64')
    }
  }

  const getAccessTokenRequestBody = (code: string): { [key: string]: any } => {
    return {
      code: code,
      redirect_uri: redirectUri.value,
      grant_type: 'authorization_code'
    }
  }

  const getRefreshTokenRequestHeaders = (): { [key: string]: any } => {
    return {
      'content-type': contentType.value,
      Authorization:
        'Basic ' + Buffer.from(`${clientId.value}:${clientSecret.value}`).toString('base64')
    }
  }

  const getRefreshTokenRequestBody = (refreshToken: string): { [key: string]: any } => {
    return {
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }
  }

  const fetchToken = async <T>(
    headers: { [key: string]: any },
    body: { [key: string]: any }
  ): Promise<T> => {
    return await AxiosUtils.post<T>(tokenUrl.value, headers, {}, body)
  }

  const fetchAccessToken = async (code: string): Promise<SpotifyAccessToken> => {
    const headers = getAccessTokenRequestHeaders()
    const body = getAccessTokenRequestBody(code)

    return await fetchToken<SpotifyAccessToken>(headers, body)
  }

  const fetchRefreshToken = async (code: string): Promise<SpotifyRefreshToken> => {
    const headers = getRefreshTokenRequestHeaders()
    const body = getRefreshTokenRequestBody(code)

    return await fetchToken<SpotifyRefreshToken>(headers, body)
  }

  return {
    fetchAccessToken,
    fetchRefreshToken
  }
})
