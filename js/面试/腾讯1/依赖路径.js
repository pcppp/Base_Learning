function resolveRequireOrder(files) {
  const graph = new Map()
  const visited = new Set()
  const result = []

  for (const file of files) {
    graph.set(file.filename, file.requires)
  }

  function dfs(file) {
    if (visited.has(file)) return
    visited.add(file)
    const requires = graph.get(file) || []
    for (const req of requires) {
      dfs(req)
    }
    result.push(file)
  }
  for (const file of files) {
    dfs(file.filename)
  }
  return result
}

const a = [
  { filename: 'a.js', requires: ['b.js', 'c.js'] },
  { filename: 'b.js', requires: ['c.js', 'd.js'] },
  { filename: 'd/a.js', requires: ['d/b.js', 'a.js'] },
]
console.log(resolveRequireOrder(a))
