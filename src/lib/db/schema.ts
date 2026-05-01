import { pgTable, text, timestamp, boolean, uuid, pgEnum, jsonb } from 'drizzle-orm/pg-core';

export const socialProviderEnum = pgEnum("social_provider", [
    "google",
    "facebook",
    "discord",
    "linkedin",
    "pinterest",
    "notion",
    "github",
    "twitter",
]);

// ─────────────────────────────────────────────
// Main table
// ─────────────────────────────────────────────

export const loginPageConfigs = pgTable("login_page_configs", {
    id: uuid("id").defaultRandom().primaryKey(),

    // If multi-tenant (recommended)
    tenantId: uuid("tenant_id").notNull(),

    // ─────────────────────────
    // Header (JSON)
    // ─────────────────────────
    header: jsonb("header").$type<{
        title?: string;
        description?: string;
        logo?: string; // store URL or key, not ReactNode
        pageTitle?: string;
        pageDescription?: string;
    }>(),

    // ─────────────────────────
    // Email / Password
    // ─────────────────────────
    emailEnabled: boolean("email_enabled").default(true),
    emailConfig: jsonb("email_config").$type<{
        emailPlaceholder?: string;
        forgotPassword?: boolean;
        showPasswordToggle?: boolean;
        submitLabel?: string;
    }>(),

    // ─────────────────────────
    // Passkey
    // ─────────────────────────
    passkeyEnabled: boolean("passkey_enabled").default(false),
    passkeyLabel: text("passkey_label"),

    // ─────────────────────────
    // Social
    // ─────────────────────────
    socialEnabled: boolean("social_enabled").default(true),

    providers: text("providers")
        .array()
        .$type<(
            | "google"
            | "facebook"
            | "discord"
            | "linkedin"
            | "pinterest"
            | "notion"
            | "github"
            | "twitter"
        )[]>(),

    dividerLabel: text("divider_label"),

    // ─────────────────────────
    // Terms
    // ─────────────────────────
    termsEnabled: boolean("terms_enabled").default(false),
    termsConfig: jsonb("terms_config").$type<{
        termsUrl?: string;
        privacyUrl?: string;
        label?: string;
    }>(),

    // ─────────────────────────
    // Signup link
    // ─────────────────────────
    signUpEnabled: boolean("signup_enabled").default(true),
    signUpConfig: jsonb("signup_config").$type<{
        href?: string;
        label?: string;
    }>(),

    // ─────────────────────────
    // Meta
    // ─────────────────────────
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});
