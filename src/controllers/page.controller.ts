import type { Request, Response } from 'express'
import { LoadPageConfig, createPageConfig } from '../service/page.service.js'
import { createPageConfigSchema } from '../validation/validate.js'


export async function loadPageConfig(req: Request, res: Response) {
    const data = await LoadPageConfig()
    return res.json(data)
}

export async function CreatePageConfig(req: Request, res: Response) {
    const body = req.body
    const validate = createPageConfigSchema.safeParse(body)

    if (validate.error) {
        res.json(validate.error)
    }

    const data = await createPageConfig(validate.data!)
    return res.json(data)
}
