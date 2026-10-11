import type { ReactNode } from 'react'

// Icônes au trait (style Lucide), en SVG inline pour un import Figma propre.
type IconProps = { size?: number; className?: string }

function icon(paths: ReactNode) {
  return function Icon({ size = 20, className }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        {paths}
      </svg>
    )
  }
}

export const SearchIcon = icon(<><circle cx="11" cy="11" r="7.5" /><path d="m20.5 20.5-4.2-4.2" /></>)
export const HomeIcon = icon(<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />)
export const CompassIcon = icon(<><circle cx="12" cy="12" r="9.5" /><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z" /></>)
export const CalendarIcon = icon(<><rect x="3" y="4.5" width="18" height="17" rx="2.5" /><path d="M16 2.5v4M8 2.5v4M3 10h18" /></>)
export const NewsIcon = icon(<><path d="M4 21h15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2" /><path d="M10 7h7v4h-7zM10 15h7M10 18h4" /></>)
export const UserIcon = icon(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>)
export const UsersIcon = icon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>)
export const ClockIcon = icon(<><circle cx="12" cy="12" r="9.5" /><path d="M12 7v5l3 2" /></>)
export const ArrowRightIcon = icon(<path d="M5 12h14M13 6l6 6-6 6" />)
export const ChevronRightIcon = icon(<path d="m9 18 6-6-6-6" />)
export const ChevronLeftIcon = icon(<path d="m15 18-6-6 6-6" />)
export const ChevronDownIcon = icon(<path d="m6 9 6 6 6-6" />)
export const SlidersIcon = icon(<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />)
export const SortIcon = icon(<path d="m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16" />)
export const FlameIcon = icon(<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1 0-5.5 3-7.5.5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z" />)
export const TrendingIcon = icon(<><path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" /></>)
export const SparklesIcon = icon(<><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 15v4M17 17h4" /></>)
export const PlayIcon = icon(<path d="M7 4.5v15l12.5-7.5z" fill="currentColor" />)
export const PlusIcon = icon(<path d="M12 5v14M5 12h14" />)
export const BellIcon = icon(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a2 2 0 0 0 3.4 0" /></>)
export const CheckIcon = icon(<path d="M20 6 9 17l-5-5" />)
export const XIcon = icon(<path d="M18 6 6 18M6 6l12 12" />)
export const TvIcon = icon(<><rect x="2" y="7" width="20" height="14" rx="2.5" /><path d="m17 2-5 5-5-5" /></>)
export const FilmIcon = icon(<><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M7.5 3v18M16.5 3v18M3 12h18M3 7.5h4.5M3 16.5h4.5M16.5 7.5H21M16.5 16.5H21" /></>)
export const BookmarkIcon = icon(<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />)
export const MenuIcon = icon(<path d="M4 7h16M4 12h16M4 17h10" />)
export const StarIcon = icon(<path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor" stroke="none" />)
export const HeartIcon = icon(<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />)
export const MessageIcon = icon(<path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.6A8.5 8.5 0 1 1 21 12z" />)
export const EyeIcon = icon(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>)
export const ShareIcon = icon(<><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 13.3 7.6 4.4M15.8 6.3l-7.6 4.4" /></>)
export const FilterIcon = icon(<path d="M3 4h18l-7 8.5V19l-4 2v-8.5z" />)
export const CalendarPlusIcon = icon(<><rect x="3" y="4.5" width="18" height="17" rx="2.5" /><path d="M16 2.5v4M8 2.5v4M3 10h18M12 13.5v5M9.5 16h5" /></>)
export const ListIcon = icon(<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />)
export const GridIcon = icon(<><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" /></>)
export const ExternalIcon = icon(<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />)
export const PencilIcon = icon(<path d="M17 3a2.8 2.8 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z" />)
export const CartIcon = icon(<><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6" /></>)
export const ThumbUpIcon = icon(<path d="M7 10v11M15 5.9 14 10h5.8a2 2 0 0 1 2 2.4l-1.4 7a2 2 0 0 1-2 1.6H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2.8a2 2 0 0 0 1.8-1.1L12 3a3.1 3.1 0 0 1 3 2.9z" />)
export const SendIcon = icon(<path d="m22 2-7 20-4-9-9-4zM22 2 11 13" />)
export const ImageIcon = icon(<><rect x="3" y="3" width="18" height="18" rx="2.5" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" /></>)
export const LinkIcon = icon(<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />)
export const InfoIcon = icon(<><circle cx="12" cy="12" r="9.5" /><path d="M12 16v-4M12 8h.01" /></>)
export const SmileIcon = icon(<><circle cx="12" cy="12" r="9.5" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></>)
export const AlertIcon = icon(<><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></>)
export const MoreIcon = icon(<path d="M5 12h.01M12 12h.01M19 12h.01" strokeWidth={3} />)
export const VolumeIcon = icon(<><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></>)
export const AwardIcon = icon(<><circle cx="12" cy="8" r="6" /><path d="M15.5 13 17 22l-5-3-5 3 1.5-9" /></>)
export const ZapIcon = icon(<path d="M13 2 3 14h9l-1 8 10-12h-9z" />)
export const ShieldIcon = icon(<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />)
export const MailIcon = icon(<><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 7 9 6 9-6" /></>)
export const LockIcon = icon(<><rect x="4" y="10.5" width="16" height="11" rx="2.5" /><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" /></>)
export const KeyIcon = icon(<><circle cx="7.5" cy="15.5" r="4.5" /><path d="m10.7 12.3 9.8-9.8M17 6l3 3M15 8l2 2" /></>)
export const LayersIcon = icon(<><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 12 10 5 10-5M2 17l10 5 10-5" /></>)
export const PhoneIcon = icon(<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />)
export const PinIcon = icon(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>)
export const GlobeIcon = icon(<><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19M12 2.5a14.5 14.5 0 0 0 0 19" /></>)
export const RefreshIcon = icon(<><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8" /><path d="M21 3v5h-5M3 21v-5h5" /></>)
export const UserPlusIcon = icon(<><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6" /></>)
export const CrownIcon = icon(<path d="m2 7 5 5 5-8 5 8 5-5-2 12H4z" />)
export const QuoteIcon = icon(<path d="M3 21c3 0 7-1 7-8V5H3v7h4c0 4-1.5 6-4 6zM14 21c3 0 7-1 7-8V5h-7v7h4c0 4-1.5 6-4 6z" />)
export const ShuffleIcon = icon(<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />)
export const ArrowLeftIcon = icon(<path d="M19 12H5M11 18l-6-6 6-6" />)
export const SettingsIcon = icon(<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>)
export const HelpIcon = icon(<><circle cx="12" cy="12" r="9.5" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" /></>)
export const LogoutIcon = icon(<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />)
