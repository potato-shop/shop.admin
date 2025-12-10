import {defineStore} from 'pinia'
import router from '@/router'
import {useSessionStorage} from '@vueuse/core'
import type {User} from '@/types/auth'

export const useAuthStore = defineStore('auth_store', () => {
    const user = useSessionStorage<string | null>('__osen_auth_session__', null)

    const saveSession = (newUser: User) => {
        user.value = JSON.stringify(newUser)
    }

    const removeSession = () => {
        user.value = null
        router.push('/auth/login')
    }

    const isAuthenticated = () => user.value != null

    return {
        user,
        saveSession,
        removeSession,
        isAuthenticated
    }
})
