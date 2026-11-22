import React from 'react'

/**
 * VaultDrive wordmark — crisp at any size.
 * The wave is drawn as a pure vector path (no SVG <text>, no font fallbacks);
 * the lettering is live HTML text in Poppins for perfectly sharp rendering.
 */
export default function Wordmark({ size = 28, color = '#FFFFFF', withText = true }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.22,
        color,
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      <svg
        width={size * 1.28}
        height={size * 0.92}
        viewBox="18 38 224 154"
        fill="none"
        aria-hidden="true"
        style={{ display: 'block', overflow: 'visible' }}
      >
        <path
          d="M 40 105 C 40 75, 55 58, 75 75 C 88 86, 94 110, 102 130 C 110 150, 122 170, 137 164 C 160 154, 188 118, 220 95"
          stroke={color}
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="geometricPrecision"
        />
      </svg>
      {withText && (
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: size * 0.95,
            letterSpacing: '-0.018em',
            lineHeight: 1,
            transform: 'translateY(0.04em)',
          }}
        >
          vaultdrive
        </span>
      )}
    </span>
  )
}
