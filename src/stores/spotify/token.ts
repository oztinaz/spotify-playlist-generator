import { defineStore, storeToRefs } from 'pinia'
import { useSpotifyAuthorizationStore } from '@/stores/spotify/authorization'
import { computed, ref, type ComputedRef, type Ref } from 'vue'
import { Buffer } from 'buffer'
import type { SpotifyToken } from '@/types/spotify/Token'
import { AxiosUtils } from '@/utils/Axios'

export const useSpotifyTokenStore = defineStore('spotify-token', () => {
  const spotifyAuthorizationStore = useSpotifyAuthorizationStore()
  const { accountsUrl, clientId, clientSecret, redirectUri } = storeToRefs(spotifyAuthorizationStore)

  const contentType: Ref<string> = ref('application/x-www-form-urlencoded')

  const tokenUrl: ComputedRef<string> = computed((): string => {
    return `${accountsUrl.value}/api/token`
  })

  const getAccessTokenRequestHeaders = (): { [key: string]: any } => {
    return {
      'content-type': contentType.value,
      'Authorization': 'Basic ' + Buffer.from(`${clientId.value}:${clientSecret.value}`).toString('base64')
    }
  }

  const getAccessTokenRequestBody = (code: string): { [key: string]: any } => {
    return {
      code: code,
      redirect_uri: redirectUri.value,
      grant_type: 'authorization_code'
    }
  }

  const fetchToken = async (headers: { [key: string]: any }, body: { [key: string]: any }): Promise<SpotifyToken> => {
    return await AxiosUtils.post<SpotifyToken>(
      tokenUrl.value,
      headers,
      {},
      body
    )
  }

  const fetchAccessToken = async (code: string) => {
    const headers = getAccessTokenRequestHeaders()
    const body = getAccessTokenRequestBody(code)
  
    return await fetchToken(headers, body)
  }

  return {
    fetchAccessToken
  }
})
