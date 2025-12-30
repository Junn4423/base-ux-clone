
export const API_CONFIG = {
    URL: process.env.NEXT_PUBLIC_API_URL,
    TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
};

export interface AuthResponse {
    status: number;
    success: boolean;
    data: {
        username: string;
        token: string;
        name: string;
        role: string;
        email?: string;
        phone?: string;
        status: number;
        message: string;
        errorType: string;
    };
    message: string;
    errorType: string;
    timestamp: string;
    requestId: string;
}

export interface LoginPayload {
    username: string;
    password?: string; // Optional because we might handle password separately or reuse this type
}

export interface RegisterPayload {
    username: string;
    password?: string;
    email: string;
    phone: string;
    companyName: string;
}

export const authService = {
    login: async (username: string, password: string): Promise<AuthResponse> => {
        try {
            // Use internal proxy to avoid CORS
            const res = await fetch("/api/proxy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    method: "login",
                    username,
                    password,
                }),
            });

            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Login API Error:", error);
            throw error;
        }
    },

    register: async (payload: RegisterPayload): Promise<AuthResponse> => {
        try {
            const res = await fetch("/api/proxy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    method: "registerCustomer",
                    ...payload,
                }),
            });

            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Register API Error:", error);
            throw error;
        }
    },
};
