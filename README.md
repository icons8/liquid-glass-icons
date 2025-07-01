# 💦 Liquid Glass Icons

Beautiful React icon library with multi-layered gradients and transparency effects that create a stunning glass-like appearance.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **100 unique React components** in Liquid Glass style
- **Multi-layered structure** with gradients and transparency
- **Easy recoloring** - just change the CSS color property
- **TypeScript support** out of the box
- **Optimized React components** with preserved glass effect
- **Tree-shakable** - import only what you need

## 📦 Getting Started

This icon library is currently available as a GitHub repository. You can:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/icons8/liquid-glass-icons.git
   ```

2. **Use React components** from the `/icons` directory

## 🚀 Usage

### Using React Components

Copy the desired icon components from the `/icons` directory to your project:

```tsx
import LgHome from './icons/home';
import LgUser from './icons/user';
import LgSettings from './icons/settings';

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

</details>

## 🌐 Demo

Check out the [live demo](https://icons8.github.io/liquid-glass-icons) to see all icons in action.

## 📄 License

MIT © [Icons8](https://icons8.com)

## 🔗 Links

- [Icons8 Website](https://icons8.com)
- [Report Issues](https://github.com/icons8/liquid-glass-icons/issues)
- [GitHub Repository](https://github.com/icons8/liquid-glass-icons)

---

Made with ❤️ by [Icons8](https://icons8.com) 