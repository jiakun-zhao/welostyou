import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { minify } from 'html-minifier'

const html = await readFile('index.html', 'utf-8')
const result = minify(html, {
    removeComments: true,
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true,
})
await rm('dist', { force: true, recursive: true })
await mkdir('dist')
await writeFile('dist/index.html', result)
