/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    api: {
      queryDatabase: (query: string) => Promise<any>
    }
  }
}

// Ini diperlukan untuk membuat file dianggap sebagai modul oleh TypeScript.
export {}
