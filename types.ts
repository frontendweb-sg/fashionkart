declare module NodeJS {
  interface ProcessEnv {
    GITHUB_ID: string;
    GITHUB_CLIENT_SECRET: string;
    MONGODB_URL: string;
    NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_API_URL: string;
  }
}

type Color =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "success"
  | "danger"
  | "text";
