'use client'

const COLOR = '#D4A24C'
const W = 1200
const H = 420

// Cubic bezier point at parameter t
function bPoint(t: number, p: number[][]): [number, number] {
  const [p0, p1, p2, p3] = p
  const m = 1 - t
  return [
    m*m*m*p0[0] + 3*m*m*t*p1[0] + 3*m*t*t*p2[0] + t*t*t*p3[0],
    m*m*m*p0[1] + 3*m*m*t*p1[1] + 3*m*t*t*p2[1] + t*t*t*p3[1],
  ]
}

// Tangent direction at parameter t
function bTangent(t: number, p: number[][]): [number, number] {
  const [p0, p1, p2, p3] = p
  const m = 1 - t
  return [
    3*m*m*(p1[0]-p0[0]) + 6*m*t*(p2[0]-p1[0]) + 3*t*t*(p3[0]-p2[0]),
    3*m*m*(p1[1]-p0[1]) + 6*m*t*(p2[1]-p1[1]) + 3*t*t*(p3[1]-p2[1]),
  ]
}

// Paw print — toes face UP at angle=0 (palm below, 4 toes arcing above)
function Paw({ x, y, angle, s }: { x: number; y: number; angle: number; s: number }) {
  return (
    <g
      transform={`translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${angle.toFixed(2)}) scale(${s.toFixed(4)})`}
      fill={COLOR}
    >
      {/* Palm pad */}
      <ellipse cx="0"   cy="10"  rx="20"  ry="18" />
      {/* Toe pads */}
      <ellipse cx="-18" cy="-7"  rx="9.5" ry="8.5" />
      <ellipse cx="-6"  cy="-23" rx="9.5" ry="8.5" />
      <ellipse cx="6"   cy="-23" rx="9.5" ry="8.5" />
      <ellipse cx="18"  cy="-7"  rx="9.5" ry="8.5" />
    </g>
  )
}

interface ArrowSpec {
  pts:   number[][]
  n:     number
  s0:    number   // tail scale (small)
  s1:    number   // arrowhead scale (large)
  delay: string
}

// All tails radiate from bottom-center (~600, 400).
// Arrowheads fan across the full top width.
// Control points create dramatic sweeping arcs — outer arrows curl far out before rising.
const ARROWS: ArrowSpec[] = [
  // Far left — sweeps hard left then rises
  { pts: [[558,398],[170,385],[ 55,230],[ 75, 38]], n:13, s0:0.14, s1:1.10, delay:'0s'    },
  // Mid-left
  { pts: [[572,400],[340,370],[165,195],[238, 28]], n:12, s0:0.15, s1:1.05, delay:'0.18s' },
  // Near-left
  { pts: [[586,402],[490,368],[348,185],[428, 18]], n:11, s0:0.16, s1:1.00, delay:'0.34s' },
  // Center — straight up
  { pts: [[600,404],[600,285],[600,148],[600, 12]], n:12, s0:0.17, s1:1.08, delay:'0.50s' },
  // Near-right
  { pts: [[614,402],[710,368],[852,185],[772, 18]], n:11, s0:0.16, s1:1.00, delay:'0.34s' },
  // Mid-right
  { pts: [[628,400],[860,370],[1035,195],[962, 28]], n:12, s0:0.15, s1:1.05, delay:'0.18s' },
  // Far right — sweeps hard right then rises
  { pts: [[642,398],[1030,385],[1145,230],[1125, 38]], n:13, s0:0.14, s1:1.10, delay:'0s'    },
]

export default function PawArrows() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      style={{
        display: 'block',
        overflow: 'visible',
        maxWidth: '680px',
        marginTop: '4px',
      }}
      aria-hidden
    >
      {ARROWS.map((arrow, ai) => {
        const paws = []
        for (let i = 0; i < arrow.n; i++) {
          const t  = i / (arrow.n - 1)   // 0 = tail (bottom/small), 1 = arrowhead (top/large)
          const [x, y]   = bPoint(t,   arrow.pts)
          const [dx, dy] = bTangent(t, arrow.pts)
          // +90 so toes face the direction of travel (upward along the path)
          const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
          const s     = arrow.s0 + (arrow.s1 - arrow.s0) * t
          paws.push(<Paw key={i} x={x} y={y} angle={angle} s={s} />)
        }
        return (
          <g key={ai} style={{ animation: `arrowFloat 2.2s ease-in-out ${arrow.delay} infinite` }}>
            {paws}
          </g>
        )
      })}
    </svg>
  )
}
