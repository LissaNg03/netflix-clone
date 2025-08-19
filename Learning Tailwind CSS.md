<!-- @format -->

Learning Tailwind CSS:

Tailwind is a CSS library, that makes styling websites easy by shortening CSS syntax, having predefined prop-value pairs called UTILITIES for easy accessibility:

<h1 class="text-lg text-center text-green-400">Hello World</h1>

**Tailwind in the background**
UTILITIES:
.text-center {
text-align: center;
}
.text-lg {
font-size: var(--text-lg);
line-height: var(--tw-leading, var(--text-lg--line-height));
}
.text-green-400 {
color: var(--color-green-400);
}

**It also creates these variables (that it uses)**

:root, :host {
--font-sans: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji';
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
monospace;
--color-green-400: oklch(79.2% 0.209 151.711);
--text-lg: 1.125rem;
--text-lg--line-height: calc(1.75 / 1.125);
--default-font-family: var(--font-sans);
--default-mono-font-family: var(--font-mono);
}

///////////////////////////////////////////

If you want to use custom values and not the predefined, u use square brackets like this:

<h1 class="text-lg text-center text-green-400">Hello World</h1>
NB: text-lg (predefined and == (1.125rem * 10), -lg == 10.....
custom : text-[20px]

    **ORRR***

use custom CSS variables, in the config file....extends{}:

  <p class="bg-stone-100 p-[16px] text-[12px] text-white">Chestnut</p>

//YOU WANT CUSTOM TEXT COLOR:

export default {
darkMode: 'class',
theme: {
extend: {
color:{
chestnum: '#973F29',
},
fontSize:{
chestnum: '#973F29',
},
},
plugins: [],
}

.....then

  <p class="bg-stone-100 p-[16px] text-[12px] text-chestnut">Chestnut</p>

...EXAMPLE OF MODIFYING THE CONFIG FILE....
/** @type {import('tailwindcss').Config} \*/
export default {
content: ['./index.html', './src/**/\*.{js,ts,jsx,tsx}'],
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#1e40af',
light: '#60a5fa',
dark: '#1e3a8a',
},
accent: '#f59e0b',
},
fontSize: {
'xxs': '0.625rem',
'tiny': '0.7rem',
'huge': '5rem',
},
fontFamily: {
sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
mono: ['Fira Code', 'Menlo', 'monospace'],
custom: ['"Press Start 2P"', 'cursive'],
},
spacing: {
'128': '32rem',
'144': '36rem',
},
borderRadius: {
'xl': '1rem',
'2xl': '1.5rem',
'3xl': '2rem',
},
},
},
plugins: [],
}

//////////////////////////////////////////////////

export default function App() {
return (

<div className="min-h-screen bg-brand text-white p-10 font-custom">
<h1 className="text-huge mb-6">🚀 Welcome!</h1>

      <p className="text-tiny mb-4">
        This is a custom-themed Tailwind app using your own font, colors, and spacing.
      </p>

      <div className="bg-accent text-black p-8 rounded-2xl max-w-md">
        <h2 className="text-2xl font-bold mb-2">Custom Accent Box</h2>
        <p className="text-base">
          Spacing: <code className="font-mono">p-8</code>, Border radius: <code>rounded-2xl</code>
        </p>
      </div>
    </div>

);
}

**\*\***\*\***\*\***\*\***\*\***\*\***\*\***\***\*\***\*\***\*\***\*\***\*\***\*\***\*\***888

//////////////////////////////////////////////

HANDLING LAYOUT: position / flex-box / grid

<!-- Layout -->
<main class="relative">
   <div class="fixed top-0 w-10 h-10 bg-red-500"></div>
  <div class="flex items-center justify-around gap-5 space-x-2">
    <div class="w-16 h-16 bg-blue-500 rounded-full"></div>
    <div class="w-16 h-16 bg-blue-500 rounded-full"></div>
    <div class="w-16 h-16 bg-blue-500 rounded-full"></div>
    <div class="w-16 h-16 bg-blue-500 rounded-full"></div>
  </div>

  <div class="grid grid-cols-4 gap-2 mt-3">
    <div class="h-12 bg-violet-500"></div>
    <div class="h-12 bg-violet-500"></div>
    <div class="h-12 bg-violet-500"></div>
    <div class="h-12 bg-violet-500"></div>
  </div>
</main>

//////////////////////////////////////////////////

MEDIA QUERIES:
NB: Tailwind has predefined media queries i.e most commonly used: 768px, 1024px etc.

sm: = 640px;
md: = 768px
lg: = 1024px
xl: = 1280px
2xl: = 1536px

e.g md:block means, the element must display:block when the window is >= 768px,
precede with 'max-', max-md:block, this now means display block when less than, "max-" means less than md i.e 768px

**md:block**

  <div class="hidden text-green-500 md:block">
    <p>I will appear for device resolution > 768px</p>
  </div>

  <div class="hidden text-red-500 max-md:block">
    <p>I will appear for device resolution < 768px</p>
  </div>

////////////////////////////////////////////////////////////////

PSEUDO CLASSES IN TAILWIND:
focus:styling
hover:styling
active:styling
odd:styling
even:styling
first:styling

EXAMPLES:

<button class="px-4 py-2 my-2 text-white transition-all bg-blue-500 rounded-lg cursor-pointer pointer transition-2 hover:bg-blue-700 focus:ring focus:outline-none active:bg-blue-900">Click Me</button>

<ul>
    <li class="p-2 bg-green-500 first:bg-yellow-100 odd:bg-orange-500">Item 1</li>
    <li class="p-2 bg-green-500 first:bg-yellow-100 odd:bg-orange-500">Item 2</li>
    <li class="p-2 bg-green-500 first:bg-yellow-100 odd:bg-orange-500">Item 3</li>
    <li class="p-2 bg-green-500 first:bg-yellow-100 odd:bg-orange-500">Item 4</li>
    <li class="p-2 bg-green-500 first:bg-yellow-100 odd:bg-orange-500">Item 5</li>
  </ul>

\***_<li class="p-2 bg-green-500 first:bg-yellow-100 odd:bg-orange-500">Item 1</li>_**

NB: base bg is green-500, if it's first of parent, bg is yellow-100 and lastly if it's odd, bg color is orange-500

...if more than one pseudo class applies, the last declared will apply. In this case: first: and odd: apply, but odd is declared lastly, so it'll apply

///////////////////////////////////////////////

DARK MODE THEME:
\*\*Tailwind has built-in way of handling website theme, can be handled with a btn toggle, or automatically by a devices settings:

/\*_ @type {import('tailwindcss').Config} _/
export default {
darkMode: 'class',
theme: {
extend: {
// ...
},
},
plugins: [],
}

....➡️ tailwind.config.js or tailwind.config.ts

darkMode: 'class' // OR 'media'
Sets how dark mode is activated.

'class' means Tailwind will apply dark styles only when .dark class is present on <html> or <body>:

'media' behind the scenes:

@media (prefers-color-scheme: dark) {
/_ dark styles _/
}

html
Copy code

<html class="dark"> <!-- dark mode on -->
Other option: 'media' — uses system-level dark mode (prefers-color-scheme).

/////////////////////////////////

CUSTOM DARKMODE LIKE VARIANTS:

Custom State-Based Styling with Arbitrary Parent Classes
You can create your own “mode” by simply toggling a custom class on a parent element, and using arbitrary variants in Tailwind like this:

✅ Example: "my-mode" trigger
html
Copy code

<!-- Parent with your custom mode class -->
<div class="my-mode">
  <button class="[.my-mode_&]:bg-green-500 [.my-mode_&]:text-white">
    My Button
  </button>
</div>
This uses Tailwind’s arbitrary variants to say:

“When .my-mode is on a parent, style this element like this.”

✅ This works out of the box with Tailwind v3.2+

💡 Explanation
my-mode is your custom mode.

[.my-mode_&]:bg-green-500 means:

If .my-mode is on a parent (like how dark: looks for .dark), apply bg-green-500 to the element.

🎯 More Realistic Example:
html
Copy code

<!-- Simulate a 'danger-mode' -->
<div class="danger-mode">
  <p class="[.danger-mode_&]:text-red-600 [.danger-mode_&]:font-bold">
    Something went wrong!
  </p>
</div>

////////////////////////////////////////

theme: { extend: { ... } }
The theme key customizes Tailwind’s default design system (colors, spacing, fonts, etc.).

extend means you’re adding to (not replacing) Tailwind's defaults.

For example:

js
Copy code
extend: {
colors: {
brand: '#1da1f2',
},
}
This would let you use bg-brand in your classes.

////////////////////////////////////////////

✅ plugins: []
An array where you can include Tailwind plugins to add extra functionality (e.g., forms, typography, animations).

Example:

js
Copy code
plugins: [require('@tailwindcss/forms')]
/////////////////////////////////////////

---

TAILWIND DIRECTIVES: used for custom styles, repeated styles, global styling, component based styles, creating varibles;

@tailwind base;
@tailwind components;
@tailwind utilities;

@tailwind Directives
These are used in your main CSS file to inject Tailwind’s styles into your build output:

1. @tailwind base (Global);
   Injects Tailwind’s base styles (normalize/reset styles).

Includes things like:

Setting box-sizing: border-box

Removing default browser margins

Setting up default font sizes, line heights

🔧 Think of it as a CSS reset + sensible defaults.

E.G:
index.css and import it in /_main.jsx_/
@layer base {
h1 {
@apply text-3xl font-bold;
}
body {
@apply bg-gray-100 text-gray-800;
}
}

2. @tailwind components;
   Adds predefined component classes, such as:

Forms, buttons (if you use Tailwind plugins)

Utility-style components created using @layer components

Empty by default unless you define or import components.

🔧 Good for reusable design blocks.

@layer components {
.card {
@apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black;
}
}

3. @tailwind utilities;
   Injects all the utility classes (like p-4, text-center, bg-red-500, etc.).

This is the core of Tailwind’s utility-first approach.

🔧 Most of Tailwind lives here.

✅ @layer
Tailwind uses @layer to define styles in one of its three layers:

css
Copy code
@layer base {
h1 {
font-size: 2rem;
}
}

@layer components {
.btn {
@apply px-4 py-2 bg-blue-500 text-white rounded;
}
}

@layer utilities {
.skew-45 {
transform: skewY(45deg);
}
}
💡 Why @layer matters:
Tailwind uses it to:

Control CSS injection order (base → components → utilities)

Allow tree-shaking (it purges unused styles correctly)

Help you extend Tailwind without breaking CSS order

**\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***@layer utilities\***\*\*\*\*\*\*\***

Great follow-up — `@layer utilities` is the third official Tailwind layer, and it’s used for defining **custom utility classes**. Let’s break it down with clear examples and usage:

---

## 🧱 Tailwind’s Three Layers

| Layer               | Purpose                                           | When to Use                    |
| ------------------- | ------------------------------------------------- | ------------------------------ |
| `@layer base`       | For styling raw HTML tags (`h1`, `body`, etc.)    | Base styles / resets           |
| `@layer components` | For reusable UI blocks (`.card`, `.btn`)          | Custom components              |
| `@layer utilities`  | For atomic, utility-like classes (`.text-shadow`) | Single-purpose utility classes |

---

## 🧪 How to use `@layer utilities`

### 🔧 Example: Create a custom utility class

```css
@layer utilities {
	.text-shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.rotate-y-180 {
		transform: rotateY(180deg);
	}
}
```

### ✅ Use in HTML like a Tailwind class:

```html
<p class="text-lg text-shadow">This text has a shadow!</p>

<div class="rotate-y-180">This div is flipped!</div>
```

---

## ⚠️ Key Notes

- **`@layer utilities` classes act like Tailwind’s default utilities**, so they:

  - Are highly specific
  - Can be combined with other classes
  - Override styles from `@layer base` and `@layer components`

- You **should not use `@apply` inside `@layer utilities`** for atomic classes — write the CSS property directly.

---

## 🧩 When to use each layer?

| Use case                                  | Layer               |
| ----------------------------------------- | ------------------- |
| Set default styles for `h1`, `body`       | `@layer base`       |
| Create a reusable `.card`, `.btn`         | `@layer components` |
| Create a new `.text-shadow`, `.clip-path` | `@layer utilities`  |

NB: @layer base styles are less prioritized, meaning easily overridden
@layer components more prioritized than base (Global)
@layer utilities most prioritized as they override Tailwind pre defined utilities/styles.....don't use @apply, just right the direct syles

---

---

//the component be4 directive styling:

  <div class="px-6 py-8 m-10 bg-white rounded-lg shadow-xl ring-1 ring-slate-900/5 dark:bg-black">
  </div>

@layer components {
.card {
@apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black;
}
}

after...

<div class="card">
  </div>

NB: It is only necessary to do this in elements that have a lot of styling or many different elements with the same styling.

**\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***88

/////////////////////////////////////////////////////////////////////
TAILWIND ANIMATIONS:

Tailwind CSS supports **custom animations with keyframes** via your `tailwind.config.js`. It gives you full control over defining and applying custom animations, including complex keyframe sequences.

---

## ✅ Step-by-Step: Create a Custom Keyframe Animation in Tailwind

---

### 1️⃣ **Define keyframes and animation in `tailwind.config.js`**

```js
// tailwind.config.js
export default {
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				wiggle: "wiggle 0.5s ease-in-out infinite",
				fadeIn: "fadeIn 1s ease-out forwards",
			},
		},
	},
	plugins: [],
};
```

---

### 2️⃣ **Use the animation class in your component**

```html
<div class="animate-wiggle">Wiggle!</div>

<div class="animate-fadeIn">Fade In!</div>
```

That’s it! Tailwind will compile your keyframes and animation utilities.

---

## 💡 Optional: Customize duration, delay, repeat, etc.

Tailwind gives you utilities for tweaking animations too:

| Class            | Description                     |
| ---------------- | ------------------------------- |
| `animate-[name]` | Applies a custom animation      |
| `duration-1000`  | Duration in ms (`1000ms = 1s`)  |
| `delay-500`      | Delay before animation starts   |
| `ease-in-out`    | Timing function                 |
| `infinite`       | Infinite repeat (add to config) |

```html
<div class="duration-1000 delay-300 animate-fadeIn">Fade in after 300ms</div>
```

---

## ⚠️ Important Notes:

- You **must restart your dev server** after editing `tailwind.config.js`.
- Animation names (`wiggle`, `fadeIn`, etc.) can be anything you like.
- You can combine this with `hover:` or `group-hover:` for interactive animations.

---

Would you like help making a bounce, slide-in, pulse, or other type of animation? I can generate full examples.

////////////////////////////////////////////////////////////////////

THEME.EXTEND:

| Key                        | Description                                     |
| -------------------------- | ----------------------------------------------- |
| `colors`                   | Custom color palette                            |
| `spacing`                  | Padding/margin/width/height sizes               |
| `fontSize`                 | Font size and line-height                       |
| `fontFamily`               | Custom fonts                                    |
| `borderRadius`             | Rounded corners                                 |
| `boxShadow`                | Shadow utilities                                |
| `screens`                  | Custom breakpoints                              |
| `maxWidth`, `minWidth`     | Custom sizing                                   |
| `zIndex`                   | Z-index values                                  |
| `opacity`                  | Custom opacity levels                           |
| `inset`                    | Top/right/bottom/left values                    |
| `transitionDuration`       | Animation timing                                |
| `transitionTimingFunction` | Custom easing                                   |
| `keyframes`                | Custom keyframe definitions                     |
| `animation`                | Name + duration combos that reference keyframes |
| `backgroundImage`          | Gradients, images, etc.                         |
| `gridTemplateColumns`      | Custom grid layouts                             |
| `height`, `width`          | Sizing utilities                                |
| `lineHeight`               | Line height control                             |
| `letterSpacing`            | Tracking/kerning                                |

export default {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: '#1DA1F2',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
},
animation: {
fadeIn: 'fadeIn 1s ease-out forwards',
},
},
},
plugins: [
require('@tailwindcss/forms'),
require('@tailwindcss/typography'),
],
}

////////////////////////////////////////////////////////////////////

CSS PARENT BASED SELECTION, WITH GROUP::
How group and group-hover, etc. work
🔹 1. Add group to the parent element
This gives the parent a special class that tells Tailwind:

"Child elements can now react to the state of this parent."

html
Copy code

<div class="group">
  ...
</div>
🔹 2. Use group-hover: (or group-focus:, etc.) on child elements
Now inside that group, child elements can react when the group is hovered.

html
Copy code

<div class="p-4 border group hover:border-blue-500">
  <h1 class="text-lg group-hover:text-blue-500">Title</h1>
  <p class="text-gray-500 group-hover:text-black">Subtitle</p>
</div>
Here’s what’s happening:

When you hover the whole group div, both the <h1> and <p> inside change styles.

✅ Common group-_ variants:
Variant Meaning
group-hover: When the parent with group is hovered
group-focus: When the parent is focused
group-active: When parent is active (e.g., button click)
group-aria-_: React to ARIA states (e.g., group-aria-expanded)
group-data-_: React to data attributes (like data-open)
peer-_: Like group-\* but used between siblings

👀 Example: Expandable Card with group-hover
html
Copy code

<div class="w-64 p-4 transition-all border rounded-lg group hover:shadow-lg">
  <h2 class="text-xl font-bold group-hover:text-blue-600">Hover me</h2>
  <p class="text-sm text-gray-600 transition opacity-0 group-hover:opacity-100">Extra info appears!</p>
</div>
When you hover over the group, the paragraph fades in (via opacity).

All children can change appearance together.

⚙️ How it works behind the scenes
Tailwind turns group-hover:text-blue-500 into a CSS selector like:

css
Copy code
.group:hover .group-hover\:text-blue-500 {
color: #3b82f6;
}
So you're using a hover on the parent to style a child element.
