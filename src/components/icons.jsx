const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function IconLayers(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5 4 8l8 4.5L20 8Z" />
      <path d="m4 12 8 4.5L20 12" />
      <path d="m4 16 8 4.5L20 16" />
    </svg>
  )
}

export function IconCompass(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-2 5-5 2 2-5Z" />
    </svg>
  )
}

export function IconLeaf(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 18c-1.5-6 2-11.5 12-12.5C19 15 13.5 19 6 18Z" />
      <path d="M6 18c1-3 3.5-6.5 8-9" />
    </svg>
  )
}

export function IconInbox(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 13.5 6.5 5.5h11L20 13.5" />
      <path d="M4 13.5v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5h-5l-1.5 2.5h-3L9 13.5Z" />
    </svg>
  )
}

export function IconGrid(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  )
}

export function IconFlag(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 20V4" />
      <path d="M6 5h11l-3 3.5L17 12H6" />
    </svg>
  )
}

export function IconBolt(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5Z" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 12h15.5" />
      <path d="m14 6.5 5.5 5.5-5.5 5.5" />
    </svg>
  )
}
