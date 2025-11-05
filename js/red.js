const rl = require('readline').createInterface({ input: process.stdin });
const it = rl[Symbol.asyncIterator]();
const read = async () => (await it.next()).value;

const MOD = 1000000007n; // BigInt

// (a^e) % MOD —— 纯 BigInt
function powMod(a, e) {
  a %= MOD;
  let r = 1n;
  while (e > 0n) {
    if (e & 1n) r = (r * a) % MOD;
    a = (a * a) % MOD;
    e >>= 1n;
  }
  return r;
}
function invMod(x) {
  // MOD 为质数，费马小定理
  return powMod(x, MOD - 2n);
}

// 组合数 C(n,k) —— 传入 Number，内部统一转 BigInt
function C(n, k) {
  if (k < 0 || k > n) return 0n;
  if (k > n - k) k = n - k;
  let num = 1n,
    den = 1n;
  for (let i = 1; i <= k; i++) {
    const term = BigInt(n - k + i); // (n-k+i)
    num = (num * term) % MOD;
    den = (den * BigInt(i)) % MOD;
  }
  return (num * invMod(den)) % MOD;
}

void (async function () {
  const s = (await read()).trim();
  const n = s.length; // 这里是 Number，但只用于计数与比较

  // 统计
  let r0 = 0,
    e0 = 0,
    d0 = 0,
    q = 0;
  for (const ch of s) {
    if (ch === 'r') r0++;
    else if (ch === 'e') e0++;
    else if (ch === 'd') d0++;
    else if (ch === '?') q++;
  }

  // 判定
  if (n % 3 !== 0) {
    console.log(0);
    return;
  }
  const t = n / 3;
  if (r0 > t || e0 > t || d0 > t) {
    console.log(0);
    return;
  }

  const R = t - r0,
    E = t - e0,
    D = t - d0;
  if (R + E + D !== q || R < 0 || E < 0 || D < 0) {
    console.log(0);
    return;
  }

  // 方案数：C(q, R) * C(q - R, E) % MOD —— 两次 C 都返回 BigInt
  const part1 = C(q, R);
  const part2 = C(q - R, E);
  const ans = (part1 * part2) % MOD;

  console.log(ans.toString()); // 输出字符串，避免再与 Number 混用
})();
