import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Views
import AskAuthorization from '@/views/AskAuthorization.vue'
import Authorization from '@/views/Authorization.vue'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ask-authorization',
        name: 'AskAuthorization',
        component: AskAuthorization
    },
    {
        path: '/authorization',
        name: 'Authorization',
        component: Authorization
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

import { AccessToken } from '@/models/access-token'

import { TokenService } from '@/services/token'
import { TokenMapper } from '@/mappers/token'
import store from '@/store'

async function setAccessToken() {
    const service = new TokenService()

    const localStorageAccessToken: any | null = service.getAccessTokenFromLocalStorage()
    const accessToken: AccessToken | null = TokenMapper.localStorageAccessTokenToAccessToken(localStorageAccessToken)
    
    if (accessToken !== null) {
        if (!accessToken.hasExpired()) {
            store.commit('authorization/setAccessToken', accessToken)
        } else if (accessToken.isRefreshable()) {
            await store.dispatch('authorization/refreshToken', accessToken.getRefresh())
        }
    }

    localStorage.removeItem('accessToken')
}

router.beforeEach(async (to, from, next) => {
    await setAccessToken()
    if (store.state.authorization.accessToken === null && to.name !== 'AskAuthorization' && to.name !== 'Authorization') {
        next({
            name: 'AskAuthorization'
        })
    } else {
        next()
    }
})

export default router
