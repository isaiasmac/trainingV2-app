export interface UserProfile {
    id:         number;
    name:       string;
    image_url:  string;
    company_id: number;
    role:       Role;
    user_id:    number;
    created_at: string;
    updated_at: string;
}

export enum Role {
    Admin = "admin",
}