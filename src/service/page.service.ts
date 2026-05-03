import { db } from "../lib/db/db.js";
import { auth_instance } from "../lib/db/schema.js";

interface CreatePageType {
    emailPassword: boolean;
    tenant_id: string;

}

export async function LoadPageConfig() {
    const data = await db.select().from(auth_instance)
    console.log(data);
    return data

}

export async function createPageConfig(data: CreatePageType) {
    const res = await db.insert(auth_instance).values({
        tenant_id: data.tenant_id,
        emailPassword: data.emailPassword
    })

    return res
}
