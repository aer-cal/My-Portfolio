const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const root = path.resolve(__dirname, '..')
const IGNORED_DIRS = ['.git', 'node_modules', 'dist', '.github', '.vscode', 'public']
const IGNORED_EXT = ['.map']

let changed = new Set()
let timer = null

function isIgnored(file) {
  if (!file) return true
  const norm = file.replace(/\\/g, '/')
  for (const d of IGNORED_DIRS) if (norm.includes(`/${d}/`)) return true
  for (const ext of IGNORED_EXT) if (norm.endsWith(ext)) return true
  return false
}

function scheduleCommit(file) {
  if (isIgnored(file)) return
  changed.add(file)
  clearTimeout(timer)
  timer = setTimeout(runCommit, 1200)
}

function runCommit() {
  if (changed.size === 0) return
  const files = Array.from(changed).slice(0, 20)
  changed.clear()
  const message = `Auto: update ${files.join(', ')} `
  console.log('[autopush] committing:', files)

  // run git add/commit/push
  exec(`git add -A && git commit -m "${message}"`, { cwd: root }, (err, stdout, stderr) => {
    if (err) {
      const text = (stdout + stderr).trim()
      if (text.includes('nothing to commit')) {
        console.log('[autopush] no changes to commit')
        return
      }
      console.error('[autopush] commit error:', text)
      return
    }
    console.log('[autopush] commit ok, pushing...')
    exec('git push origin main', { cwd: root }, (pe, po, peerr) => {
      if (pe) {
        console.error('[autopush] push error:', (po + peerr).trim())
        return
      }
      console.log('[autopush] push successful')
    })
  })
}

try {
  console.log('[autopush] watching for changes in', root)
  fs.watch(root, { recursive: true }, (evt, filename) => {
    if (!filename) return
    scheduleCommit(filename)
  })
} catch (e) {
  console.error('[autopush] watcher failed:', e.message)
}
