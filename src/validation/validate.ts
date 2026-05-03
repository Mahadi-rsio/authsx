import { boolean, object, string } from 'zod'

export const createPageConfigSchema = object({
    emailPassword: boolean(),
    tenant_id: string().min(3, "id required at 3 car")

})
