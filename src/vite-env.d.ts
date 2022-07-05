/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BASE_URL: string
  VITE_BASE_URL2: string
}

interface Document {
  ENV: ImportMetaEnv
}
