# 💦 Liquid Glass Icons

Beautiful React icons with multi-layered gradients and transparency effects that create a stunning glass-like appearance.

[![npm version](https://badge.fury.io/js/%40icons8%2Fliquid-glass-icons.svg)](https://www.npmjs.com/package/@icons8/liquid-glass-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **100 unique icons** in Liquid Glass style
- **Multi-layered structure** with gradients and transparency
- **Easy recoloring** - just change the CSS color property
- **TypeScript support** out of the box
- **Optimized SVGs** with preserved glass effect
- **Tree-shakable** - import only what you need

## 📦 Installation

```bash
npm install @icons8/liquid-glass-icons
```

```bash
yarn add @icons8/liquid-glass-icons
```

```bash
pnpm add @icons8/liquid-glass-icons
```

## 🚀 Usage

### Import individual icons

```tsx
import { LgHome, LgUser, LgSettings } from '@icons8/liquid-glass-icons';

function App() {
  return (
    <div>
      <LgHome size={24} color="#4ecdc4" />
      <LgUser size={32} color="#ff6b6b" />
      <LgSettings size={20} />
    </div>
  );
}
```

### Import all icons

```tsx
import * as LiquidGlassIcons from '@icons8/liquid-glass-icons';

function IconGallery() {
  return (
    <div>
      <LiquidGlassIcons.LgHome size={32} />
      <LiquidGlassIcons.LgUser size={32} />
      <LiquidGlassIcons.LgSettings size={32} />
    </div>
  );
}
```

## 🎨 What is Liquid Glass?

Liquid Glass is a modern icon style that creates a glass-like effect through:
- Multi-layered gradients with different transparency levels
- Complex overlay system
- Easy recoloring without losing the glass effect

## 🎨 Changing Colors

Thanks to the special gradient structure, icons are easily recolored:

```tsx
// Using CSS
.my-icon {
  color: #ff6b6b; /* Red */
}

// Using inline styles
<LgHome style={{ color: '#4ecdc4' }} />

// Using props
<LgHome color="#9b59b6" />
```

## 🔧 Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size |
| `color` | `string` | `currentColor` | Icon color |
| `className` | `string` | - | CSS class name |
| `style` | `CSSProperties` | - | Inline styles |

Plus all standard SVG props.

## 📋 Available Icons (100 total)

<details>
<summary>Click to see all icons</summary>

- LgAbout
- LgAddUserMale
- LgAppointmentReminders
- LgBack
- LgBinoculars
- LgBookmark
- LgBookmarkRibbon
- LgBox
- LgBriefcase
- LgCalendar
- LgCancel
- LgCancel2
- LgCheckAll
- LgChecked
- LgChecked2
- LgCheckmark
- LgClock
- LgCloseWindow
- LgComboChart
- LgConferenceCall
- LgContacts
- LgCursor
- LgDelete
- LgDeleteSign
- LgDocument
- LgDomain
- LgDownload
- LgDownloads2
- LgEdit
- LgEmail
- LgEmptyTrush
- LgExit
- LgExpandArrow
- LgExternalLink
- LgFacebook
- LgFacebookNew
- LgFile
- LgFilledTrash
- LgFolderInvoices
- LgFolderInvoices19
- LgForYou
- LgForward
- LgGeminiAi
- LgGmail
- LgGoogleLogo
- LgGroups
- LgHandCursor
- LgHome
- LgIdea
- LgImageFile
- LgInfo
- LgInstagramNew
- LgKey
- LgLike
- LgLinkedin
- LgLock
- LgMailboxClosedFlagDown
- LgMaintenance
- LgMarker
- LgMenu
- LgMusic
- LgNews
- LgNoSynchronize
- LgOK
- LgOpenedFolder
- LgPhone
- LgPicture
- LgPinterest
- LgPlus
- LgPlusMath
- LgPuzzle
- LgRefresh
- LgRestart
- LgSave
- LgScroll
- LgSearch
- LgSecuredLetter
- LgService
- LgSettings
- LgShare
- LgShare2
- LgShare3
- LgShutdown
- LgSpeechBubble
- LgStar
- LgSun
- LgSupport
- LgSynchronize
- LgToolbox
- LgTrash
- LgTwitter
- LgUncheckAll
- LgUnlock
- LgUpload2
- LgUser
- LgUserFemale
- LgUserMale
- LgVisible
- LgWhatsapp
- LgYoutubePlay
- LgUserFemale
- LgUserMale
- LgUser
- LgVisible
- LgWhatsapp
- LgYoutubePlay

</details>

## 🌐 Demo

Check out the [live demo](https://icons8.github.io/liquid-glass-icons) to see all icons in action.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © [Icons8](https://icons8.com)

## 🔗 Links

- [Icons8 Website](https://icons8.com)
- [Report Issues](https://github.com/icons8/liquid-glass-icons/issues)
- [NPM Package](https://www.npmjs.com/package/@icons8/liquid-glass-icons)

---

Made with ❤️ by [Icons8](https://icons8.com) 