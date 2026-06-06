import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'node:child_process'

// https://vite.dev/config/

// Penanda build otomatis:
// - nomor urut diambil dari jumlah commit git (naik otomatis tiap commit/deploy)
// - tanggal-jam diambil saat proses build berjalan, ditampilkan zona WIB
function getBuildNumber() {
  try {
    return execSync('git rev-list --count HEAD').toString().trim()
  } catch {
    return '0'
  }
}

const buildTime = new Date().toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
  dateStyle: 'medium',
  timeStyle: 'short',
})

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_NUMBER__: JSON.stringify(getBuildNumber()),
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
})
