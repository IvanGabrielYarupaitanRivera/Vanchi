# daisyUI 5 Components

Complete reference for all daisyUI 5 components. Each section includes class names, syntax, and usage rules.

## Table of Contents

- [accordion](#accordion) - Show/hide content (one open at a time)
- [alert](#alert) - Inform users about important events
- [avatar](#avatar) - Show a thumbnail image
- [badge](#badge) - Show status of specific data
- [breadcrumbs](#breadcrumbs) - Navigation aid
- [button](#button) - User action triggers
- [calendar](#calendar) - Calendar library styles
- [card](#card) - Group and display content
- [carousel](#carousel) - Scrollable image/content display
- [chat](#chat) - Conversation bubbles
- [checkbox](#checkbox) - Select/deselect values
- [collapse](#collapse) - Show/hide content
- [countdown](#countdown) - Number transition effect
- [diff](#diff) - Side-by-side comparison
- [divider](#divider) - Content separator
- [dock](#dock) - Bottom navigation bar
- [drawer](#drawer) - Toggleable sidebar
- [dropdown](#dropdown) - Menu on click
- [fab](#fab) - Floating action button
- [fieldset](#fieldset) - Group related form elements
- [file-input](#file-input) - File upload field
- [filter](#filter) - Radio button group with reset
- [footer](#footer) - Page footer
- [hero](#hero) - Large hero section
- [hover-3d](#hover-3d) - 3D hover effect wrapper
- [hover-gallery](#hover-gallery) - Image hover gallery
- [indicator](#indicator) - Element on corner of another
- [input](#input) - Text input field
- [join](#join) - Group multiple items
- [kbd](#kbd) - Display keyboard shortcuts
- [label](#label) - Input field label
- [link](#link) - Styled links
- [list](#list) - Vertical information rows
- [loading](#loading) - Loading animation
- [mask](#mask) - Crop content to shapes
- [menu](#menu) - Vertical/horizontal link list
- [mockup-browser](#mockup-browser) - Browser window mockup
- [mockup-code](#mockup-code) - Code editor mockup
- [mockup-phone](#mockup-phone) - iPhone mockup
- [mockup-window](#mockup-window) - OS window mockup
- [modal](#modal) - Dialog box
- [navbar](#navbar) - Navigation bar
- [pagination](#pagination) - Button group for navigation
- [progress](#progress) - Progress bar
- [radial-progress](#radial-progress) - Circular progress
- [radio](#radio) - Select one option
- [range](#range) - Slider input
- [rating](#rating) - Star rating
- [select](#select) - Dropdown selection
- [skeleton](#skeleton) - Loading placeholder
- [stack](#stack) - Stacked elements
- [stat](#stat) - Data display block
- [status](#status) - Small status icon
- [steps](#steps) - Process step list
- [swap](#swap) - Toggle two elements
- [tab](#tab) - Tabbed content
- [table](#table) - Data table
- [text-rotate](#text-rotate) - Rotating text animation
- [textarea](#textarea) - Multi-line text input
- [theme-controller](#theme-controller) - Theme selection
- [timeline](#timeline) - Chronological event list
- [toast](#toast) - Corner notification stack
- [toggle](#toggle) - Switch checkbox
- [validator](#validator) - Form validation styling

---

## accordion

Accordion shows/hides content but only one item can stay open at a time.

**Class names:**
- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

**Syntax:**
```html
<div class="collapse {MODIFIER}">
  <input type="radio" name="{name}" checked="{checked}" />
  <div class="collapse-title">{title}</div>
  <div class="collapse-content">{CONTENT}</div>
</div>
```

**Rules:**
- All radio inputs with same name work together (only one open)
- Use different names for separate accordion groups
- Replace `{checked}` with `checked="checked"` for default open

---

## alert

Alert informs users about important events.

**Class names:**
- component: `alert`
- style: `alert-outline`, `alert-dash`, `alert-soft`
- color: `alert-info`, `alert-success`, `alert-warning`, `alert-error`
- direction: `alert-vertical`, `alert-horizontal`

**Syntax:**
```html
<div role="alert" class="alert {MODIFIER}">{CONTENT}</div>
```

**Rules:**
- Can have one of each style/color/direction class
- Use `sm:alert-horizontal` for responsive

---

## avatar

Avatars show a thumbnail image.

**Class names:**
- component: `avatar`, `avatar-group`
- modifier: `avatar-online`, `avatar-offline`, `avatar-placeholder`

**Syntax:**
```html
<div class="avatar {MODIFIER}">
  <div>
    <img src="{image-url}" />
  </div>
</div>
```

**Rules:**
- Use `avatar-group` for multiple avatars
- Set custom sizes with `w-*` and `h-*`
- Use mask classes: `mask-squircle`, `mask-hexagon`, `mask-triangle`

---

## badge

Badges show status of specific data.

**Class names:**
- component: `badge`
- style: `badge-outline`, `badge-dash`, `badge-soft`, `badge-ghost`
- color: `badge-neutral`, `badge-primary`, `badge-secondary`, `badge-accent`, `badge-info`, `badge-success`, `badge-warning`, `badge-error`
- size: `badge-xs`, `badge-sm`, `badge-md`, `badge-lg`, `badge-xl`

**Syntax:**
```html
<span class="badge {MODIFIER}">Badge</span>
```

**Rules:**
- Can have one of each style/color/size class
- Can be used inside text or buttons
- Remove text for empty badge

---

## breadcrumbs

Breadcrumbs help users navigate.

**Class names:**
- component: `breadcrumbs`

**Syntax:**
```html
<div class="breadcrumbs">
  <ul><li><a>Link</a></li></ul>
</div>
```

**Rules:**
- Only one main class name
- Can contain icons inside links
- Scrolls if list exceeds container width

---

## button

Buttons allow users to take actions.

**Class names:**
- component: `btn`
- color: `btn-neutral`, `btn-primary`, `btn-secondary`, `btn-accent`, `btn-info`, `btn-success`, `btn-warning`, `btn-error`
- style: `btn-outline`, `btn-dash`, `btn-soft`, `btn-ghost`, `btn-link`
- behavior: `btn-active`, `btn-disabled`
- size: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`
- modifier: `btn-wide`, `btn-block`, `btn-square`, `btn-circle`

**Syntax:**
```html
<button class="btn {MODIFIER}">Button</button>
```

**Rules:**
- Can have one of each color/style/behavior/size/modifier class
- Works on `<button>`, `<a>`, `<input>`
- For disabled with class: `tabindex="-1" role="button" aria-disabled="true"`

---

## calendar

Styles for different calendar libraries.

**Class names:**
- component: `cally` (Cally), `pika-single` (Pikaday), `react-day-picker` (React Day Picker)

**Syntax:**
```html
<!-- Cally -->
<calendar-date class="cally">{CONTENT}</calendar-date>

<!-- Pikaday -->
<input type="text" class="input pika-single">

<!-- React Day Picker -->
<DayPicker className="react-day-picker">
```

---

## card

Cards group and display content.

**Class names:**
- component: `card`
- part: `card-title`, `card-body`, `card-actions`
- style: `card-border`, `card-dash`
- modifier: `card-side`, `image-full`
- size: `card-xs`, `card-sm`, `card-md`, `card-lg`, `card-xl`

**Syntax:**
```html
<div class="card {MODIFIER}">
  <figure><img src="{image-url}" alt="{alt-text}" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{CONTENT}</p>
    <div class="card-actions">{actions}</div>
  </div>
</div>
```

**Rules:**
- `<figure>` and `<div class="card-body">` are optional
- Use `sm:card-horizontal` for responsive
- Image after `card-body` places at bottom

---

## carousel

Carousel shows images or content in scrollable area.

**Class names:**
- component: `carousel`
- part: `carousel-item`
- modifier: `carousel-start`, `carousel-center`, `carousel-end`
- direction: `carousel-horizontal`, `carousel-vertical`

**Syntax:**
```html
<div class="carousel {MODIFIER}">
  <div class="carousel-item">{CONTENT}</div>
</div>
```

**Rules:**
- Content is list of `carousel-item` divs
- Add `w-full` to each item for full-width

---

## chat

Chat bubbles show conversation data.

**Class names:**
- component: `chat`
- part: `chat-image`, `chat-header`, `chat-footer`, `chat-bubble`
- placement: `chat-start`, `chat-end`
- color: `chat-bubble-neutral`, `chat-bubble-primary`, `chat-bubble-secondary`, `chat-bubble-accent`, `chat-bubble-info`, `chat-bubble-success`, `chat-bubble-warning`, `chat-bubble-error`

**Syntax:**
```html
<div class="chat {PLACEMENT}">
  <div class="chat-image"></div>
  <div class="chat-header"></div>
  <div class="chat-bubble {COLOR}">Message text</div>
  <div class="chat-footer"></div>
</div>
```

**Rules:**
- `{PLACEMENT}` is required: `chat-start` or `chat-end`
- `{COLOR}` is optional
- For avatar: `<div class="chat-image avatar">` nested inside

---

## checkbox

Checkboxes select or deselect values.

**Class names:**
- component: `checkbox`
- color: `checkbox-primary`, `checkbox-secondary`, `checkbox-accent`, `checkbox-neutral`, `checkbox-success`, `checkbox-warning`, `checkbox-info`, `checkbox-error`
- size: `checkbox-xs`, `checkbox-sm`, `checkbox-md`, `checkbox-lg`, `checkbox-xl`

**Syntax:**
```html
<input type="checkbox" class="checkbox {MODIFIER}" />
```

**Rules:**
- Can have one of each color/size class

---

## collapse

Collapse shows/hides content.

**Class names:**
- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

**Syntax:**
```html
<div tabindex="0" class="collapse {MODIFIER}">
  <div class="collapse-title">{title}</div>
  <div class="collapse-content">{CONTENT}</div>
</div>
```

**Rules:**
- Can use `<input type="checkbox">` as first child instead of `tabindex="0"`
- Can be details/summary tags

---

## countdown

Countdown gives transition effect for numbers 0-999.

**Class names:**
- component: `countdown`

**Syntax:**
```html
<span class="countdown">
  <span style="--value:{number};">number</span>
</span>
```

**Rules:**
- `--value` and text must be 0-999
- Change both span text and `--value` via JS
- Add `aria-live="polite"` and `aria-label="{number}"` for accessibility

---

## diff

Diff shows side-by-side comparison of two items.

**Class names:**
- component: `diff`
- part: `diff-item-1`, `diff-item-2`, `diff-resizer`

**Syntax:**
```html
<figure class="diff">
  <div class="diff-item-1">{item1}</div>
  <div class="diff-item-2">{item2}</div>
  <div class="diff-resizer"></div>
</figure>
```

**Rules:**
- Add `aspect-16/9` or similar to `<figure>` for aspect ratio

---

## divider

Divider separates content vertically or horizontally.

**Class names:**
- component: `divider`
- color: `divider-neutral`, `divider-primary`, `divider-secondary`, `divider-accent`, `divider-success`, `divider-warning`, `divider-info`, `divider-error`
- direction: `divider-vertical`, `divider-horizontal`
- placement: `divider-start`, `divider-end`

**Syntax:**
```html
<div class="divider {MODIFIER}">{text}</div>
```

**Rules:**
- Can have one of each direction/color/placement class
- Omit text for blank divider

---

## dock

Dock (bottom navigation) provides navigation options. Sticks to bottom of screen.

**Class names:**
- component: `dock`
- part: `dock-label`
- modifier: `dock-active`
- size: `dock-xs`, `dock-sm`, `dock-md`, `dock-lg`, `dock-xl`

**Syntax:**
```html
<div class="dock {MODIFIER}">
  <button>
    <svg>{icon}</svg>
    <span class="dock-label">Text</span>
  </button>
</div>
```

**Rules:**
- Add `dock-active` class to active button
- Add `<meta name="viewport" content="viewport-fit=cover">` for iOS responsiveness

---

## drawer

Drawer shows/hides sidebar on left or right.

**Class names:**
- component: `drawer`
- part: `drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`
- placement: `drawer-end`
- modifier: `drawer-open`
- variant: `is-drawer-open:`, `is-drawer-close:`

**Syntax:**
```html
<div class="drawer {MODIFIER}">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">{CONTENT}</div>
  <div class="drawer-side">{SIDEBAR}</div>
</div>
```

Sidebar content:
```html
<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

Open/close button:
```html
<label for="my-drawer" class="btn drawer-button">Open/close drawer</label>
```

Responsive (visible on large screen):
```html
<div class="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="my-drawer" class="btn drawer-button lg:hidden">Open drawer</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4"></ul>
  </div>
</div>
```

**Rules:**
- `id` required for `drawer-toggle` input
- `lg:drawer-open` makes sidebar visible on large screens
- Every page content must be inside `drawer-content`

---

## dropdown

Dropdown opens menu or element on button click.

**Class names:**
- component: `dropdown`
- part: `dropdown-content`
- placement: `dropdown-start`, `dropdown-center`, `dropdown-end`, `dropdown-top`, `dropdown-bottom`, `dropdown-left`, `dropdown-right`
- modifier: `dropdown-hover`, `dropdown-open`, `dropdown-close`

**Syntax (details/summary):**
```html
<details class="dropdown">
  <summary>Button</summary>
  <ul class="dropdown-content">{CONTENT}</ul>
</details>
```

**Syntax (popover API):**
```html
<button popovertarget="{id}" style="anchor-name:--{anchor}">{button}</button>
<ul class="dropdown-content" popover id="{id}" style="position-anchor:--{anchor}">{CONTENT}</ul>
```

**Syntax (CSS focus):**
```html
<div class="dropdown">
  <div tabindex="0" role="button">Button</div>
  <ul tabindex="-1" class="dropdown-content">{CONTENT}</ul>
</div>
```

**Rules:**
- Replace `{id}` and `{anchor}` with unique name
- For CSS focus: use `tabindex="0"` and `role="button"`
- Content can be any HTML element

---

## fab

FAB (Floating Action Button) stays in bottom corner. Clicking shows additional buttons (Speed Dial).

**Class names:**
- component: `fab`
- part: `fab-close`, `fab-main-action`
- modifier: `fab-flower`

**Syntax (single button):**
```html
<div class="fab">
  <button class="btn btn-lg btn-circle">{IconOriginal}</button>
</div>
```

**Syntax (opens 3 buttons vertically):**
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="btn btn-lg btn-circle">{Icon1}</button>
  <button class="btn btn-lg btn-circle">{Icon2}</button>
  <button class="btn btn-lg btn-circle">{Icon3}</button>
</div>
```

**Syntax (with labels):**
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
  <div>{Label2}<button class="btn btn-lg btn-circle">{Icon2}</button></div>
  <div>{Label3}<button class="btn btn-lg btn-circle">{Icon3}</button></div>
</div>
```

**Syntax (with close button):**
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div class="fab-close">Close <span class="btn btn-circle btn-lg btn-error">✕</span></div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
</div>
```

**Syntax (flower arrangement):**
```html
<div class="fab fab-flower">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="fab-main-action btn btn-circle btn-lg">{IconMainAction}</button>
  <button class="btn btn-lg btn-circle">{Icon1}</button>
  <button class="btn btn-lg btn-circle">{Icon2}</button>
  <button class="btn btn-lg btn-circle">{Icon3}</button>
</div>
```

**Rules:**
- Use SVG icons for {Icon*}
- {IconOriginal} = icon before opening
- {IconMainAction} = icon after opening
- {Icon1}, {Icon2}, {Icon3} = additional buttons

---

## fieldset

Fieldset groups related form elements.

**Class names:**
- component: `fieldset`, `label`
- part: `fieldset-legend`

**Syntax:**
```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">{title}</legend>
  {CONTENT}
  <p class="label">{description}</p>
</fieldset>
```

---

## file-input

File input for uploading files.

**Class names:**
- component: `file-input`
- style: `file-input-ghost`
- color: `file-input-neutral`, `file-input-primary`, `file-input-secondary`, `file-input-accent`, `file-input-info`, `file-input-success`, `file-input-warning`, `file-input-error`
- size: `file-input-xs`, `file-input-sm`, `file-input-md`, `file-input-lg`, `file-input-xl`

**Syntax:**
```html
<input type="file" class="file-input {MODIFIER}" />
```

---

## filter

Filter is a radio button group with reset button.

**Class names:**
- component: `filter`
- part: `filter-reset`

**Syntax (HTML form):**
```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</form>
```

**Syntax (without form):**
```html
<div class="filter">
  <input class="btn filter-reset" type="radio" name="{NAME}" aria-label="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</div>
```

**Rules:**
- Replace `{NAME}` with context-appropriate value
- Each set needs unique `name` attributes
- Use `<form>` when possible

---

## footer

Footer contains logo, copyright, links.

**Class names:**
- component: `footer`
- part: `footer-title`
- placement: `footer-center`
- direction: `footer-horizontal`, `footer-vertical`

**Syntax:**
```html
<footer class="footer {MODIFIER}">{CONTENT}</footer>
```

Content can contain `<nav>` tags with `footer-title` and links.

**Rules:**
- Use `sm:footer-horizontal` for responsive
- Suggestion: use `base-200` for background

---

## hero

Hero displays large box/image with title and description.

**Class names:**
- component: `hero`
- part: `hero-content`, `hero-overlay`

**Syntax:**
```html
<div class="hero {MODIFIER}">{CONTENT}</div>
```

**Rules:**
- Use `hero-content` for text content
- Use `hero-overlay` to overlay background image with color
- Content can contain a figure

---

## hover-3d

Hover-3D adds 3D tilt effect on mouse movement. Only use non-interactive content inside.

**Class names:**
- component: `hover-3d`

**Syntax:**
```html
<div class="hover-3d my-12 mx-2">
  <figure class="max-w-100 rounded-2xl">
    <img src="{image-url}" alt="{alt}" />
  </figure>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

**Rules:**
- Can be `<div>` or `<a>`
- Must have exactly 9 direct children: first is main content, other 8 are empty `<div>`s for hover zones
- Content should be non-interactive (no buttons, links, inputs)

---

## hover-gallery

Hover-gallery shows images on horizontal hover. Up to 10 images.

**Class names:**
- component: `hover-gallery`

**Syntax:**
```html
<figure class="hover-gallery max-w-60">
  <img src="{image-1}" />
  <img src="{image-2}" />
  <img src="{image-3}" />
  <img src="{image-4}" />
</figure>
```

**Rules:**
- Can be `<div>` or `<figure>`
- Up to 10 images
- Needs max width
- Images must be same dimensions

---

## indicator

Indicator places element on corner of another.

**Class names:**
- component: `indicator`
- part: `indicator-item`
- placement: `indicator-start`, `indicator-center`, `indicator-end`, `indicator-top`, `indicator-middle`, `indicator-bottom`

**Syntax:**
```html
<div class="indicator">
  <span class="indicator-item">{indicator content}</span>
  <div>{main content}</div>
</div>
```

**Rules:**
- Add all `indicator-item` elements before main content
- Can have one horizontal and one vertical placement class
- Default: `indicator-end indicator-top`

---

## input

Text input field.

**Class names:**
- component: `input`
- style: `input-ghost`
- color: `input-neutral`, `input-primary`, `input-secondary`, `input-accent`, `input-info`, `input-success`, `input-warning`, `input-error`
- size: `input-xs`, `input-sm`, `input-md`, `input-lg`, `input-xl`

**Syntax:**
```html
<input type="{type}" placeholder="Type here" class="input {MODIFIER}" />
```

**Rules:**
- Works with any input type (text, password, email, etc.)
- Use `input` class for parent when containing multiple elements

---

## join

Join groups multiple items (buttons, inputs, etc.).

**Class names:**
- component: `join`, `join-item`
- direction: `join-vertical`, `join-horizontal`

**Syntax:**
```html
<div class="join {MODIFIER}">{CONTENT}</div>
```

**Rules:**
- Direct children get joined together
- Any element with `join-item` is affected
- Use `lg:join-horizontal` for responsive

---

## kbd

Kbd displays keyboard shortcuts.

**Class names:**
- component: `kbd`
- size: `kbd-xs`, `kbd-sm`, `kbd-md`, `kbd-lg`, `kbd-xl`

**Syntax:**
```html
<kbd class="kbd {MODIFIER}">K</kbd>
```

---

## label

Label provides name/title for input field.

**Class names:**
- component: `label`, `floating-label`

**Syntax (regular):**
```html
<label class="input">
  <span class="label">{label text}</span>
  <input type="text" placeholder="Type here" />
</label>
```

**Syntax (floating):**
```html
<label class="floating-label">
  <input type="text" placeholder="Type here" class="input" />
  <span>{label text}</span>
</label>
```

**Rules:**
- The `input` class styles the parent (not the label itself)
- Use `floating-label` for label that floats above on focus

---

## link

Link adds underline style to links.

**Class names:**
- component: `link`
- style: `link-hover`
- color: `link-neutral`, `link-primary`, `link-secondary`, `link-accent`, `link-success`, `link-info`, `link-warning`, `link-error`

**Syntax:**
```html
<a class="link {MODIFIER}">Click me</a>
```

---

## list

List displays information in vertical rows.

**Class names:**
- component: `list`, `list-row`
- modifier: `list-col-wrap`, `list-col-grow`

**Syntax:**
```html
<ul class="list">
  <li class="list-row">{CONTENT}</li>
</ul>
```

**Rules:**
- Use `list-row` for each item
- By default, second child fills remaining space
- Use `list-col-grow` on another child to fill space instead
- Use `list-col-wrap` to force item to next line

---

## loading

Loading shows animation indicating something is loading.

**Class names:**
- component: `loading`
- style: `loading-spinner`, `loading-dots`, `loading-ring`, `loading-ball`, `loading-bars`, `loading-infinity`
- size: `loading-xs`, `loading-sm`, `loading-md`, `loading-lg`, `loading-xl`

**Syntax:**
```html
<span class="loading {MODIFIER}"></span>
```

---

## mask

Mask crops content to common shapes.

**Class names:**
- component: `mask`
- style: `mask-squircle`, `mask-heart`, `mask-hexagon`, `mask-hexagon-2`, `mask-decagon`, `mask-pentagon`, `mask-diamond`, `mask-square`, `mask-circle`, `mask-star`, `mask-star-2`, `mask-triangle`, `mask-triangle-2`, `mask-triangle-3`, `mask-triangle-4`
- modifier: `mask-half-1`, `mask-half-2`

**Syntax:**
```html
<img class="mask {MODIFIER}" src="{image-url}" />
```

**Rules:**
- Modifier is required (one style/modifier class)
- Works on any element
- Set custom sizes with `w-*` and `h-*`

---

## menu

Menu displays list of links vertically or horizontally.

**Class names:**
- component: `menu`
- part: `menu-title`, `menu-dropdown`, `menu-dropdown-toggle`
- modifier: `menu-disabled`, `menu-active`, `menu-focus`, `menu-dropdown-show`
- size: `menu-xs`, `menu-sm`, `menu-md`, `menu-lg`, `menu-xl`
- direction: `menu-vertical`, `menu-horizontal`

**Syntax (vertical):**
```html
<ul class="menu">
  <li><button>Item</button></li>
</ul>
```

**Syntax (horizontal):**
```html
<ul class="menu menu-horizontal">
  <li><button>Item</button></li>
</ul>
```

**Rules:**
- Use `lg:menu-horizontal` for responsive
- Use `menu-title` for list item title
- Use `<details>` for collapsible submenus
- Use `menu-dropdown` and `menu-dropdown-toggle` for JS toggle

---

## mockup-browser

Browser window mockup.

**Class names:**
- component: `mockup-browser`
- part: `mockup-browser-toolbar`

**Syntax:**
```html
<div class="mockup-browser">
  <div class="mockup-browser-toolbar">
    {toolbar content}
  </div>
  <div>{CONTENT}</div>
</div>
```

**Rules:**
- Use just `mockup-browser` for default
- Add `div` with `input` class for URL in toolbar

---

## mockup-code

Code block in editor-like box.

**Class names:**
- component: `mockup-code`

**Syntax:**
```html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
```

**Rules:**
- Use `<pre data-prefix="{prefix}">` for line prefix
- Use `<code>` for syntax highlighting (requires library)
- Add background/text color to highlight line

---

## mockup-phone

iPhone mockup.

**Class names:**
- component: `mockup-phone`
- part: `mockup-phone-camera`, `mockup-phone-display`

**Syntax:**
```html
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display">{CONTENT}</div>
</div>
```

---

## mockup-window

OS window mockup.

**Class names:**
- component: `mockup-window`

**Syntax:**
```html
<div class="mockup-window">
  <div>{CONTENT}</div>
</div>
```

---

## modal

Modal shows dialog/box on button click.

**Class names:**
- component: `modal`
- part: `modal-box`, `modal-action`, `modal-backdrop`, `modal-toggle`
- modifier: `modal-open`
- placement: `modal-top`, `modal-middle`, `modal-bottom`, `modal-start`, `modal-end`

**Syntax (HTML dialog):**
```html
<button onclick="my_modal.showModal()">Open modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">{CONTENT}</div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
```

**Syntax (checkbox - legacy):**
```html
<label for="my-modal" class="btn">Open modal</label>
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">{CONTENT}</div>
  <label class="modal-backdrop" for="my-modal">Close</label>
</div>
```

**Syntax (anchor - legacy):**
```html
<a href="#my-modal" class="btn">Open modal</a>
<div class="modal" id="my-modal">
  <div class="modal-box">{CONTENT}</div>
</div>
```

**Rules:**
- Add `tabindex="0"` for focusable
- Use unique IDs
- For dialog: add `<form method="dialog">` for closing

---

## navbar

Navbar shows navigation bar at top of page.

**Class names:**
- component: `navbar`
- part: `navbar-start`, `navbar-center`, `navbar-end`

**Syntax:**
```html
<div class="navbar">{CONTENT}</div>
```

**Rules:**
- Use `navbar-start`, `navbar-center`, `navbar-end` for horizontal positioning
- Suggestion: use `base-200` for background

---

## pagination

Pagination is a button group for navigation.

**Class names:**
- component: `join`
- part: `join-item`
- direction: `join-vertical`, `join-horizontal`

**Syntax:**
```html
<div class="join">{CONTENT}</div>
```

**Rules:**
- Use `join-item` for each button/link
- Use `btn` class for styling items

---

## progress

Progress bar shows task progress or time passing.

**Class names:**
- component: `progress`
- color: `progress-neutral`, `progress-primary`, `progress-secondary`, `progress-accent`, `progress-info`, `progress-success`, `progress-warning`, `progress-error`

**Syntax:**
```html
<progress class="progress {MODIFIER}" value="50" max="100"></progress>
```

**Rules:**
- Must specify `value` and `max` attributes

---

## radial-progress

Circular progress indicator.

**Class names:**
- component: `radial-progress`

**Syntax:**
```html
<div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>
```

**Rules:**
- `--value` CSS variable and text must be 0-100
- Add `aria-valuenow="{value}"` for accessibility
- Use `div` (browsers can't show text inside `<progress>` tag)
- Use `--size` for size (default 5rem)
- Use `--thickness` for indicator thickness

---

## radio

Radio buttons allow selecting one option.

**Class names:**
- component: `radio`
- color: `radio-neutral`, `radio-primary`, `radio-secondary`, `radio-accent`, `radio-success`, `radio-warning`, `radio-info`, `radio-error`
- size: `radio-xs`, `radio-sm`, `radio-md`, `radio-lg`, `radio-xl`

**Syntax:**
```html
<input type="radio" name="{name}" class="radio {MODIFIER}" />
```

**Rules:**
- Replace `{name}` with unique name for radio group
- Each set needs unique `name` attributes

---

## range

Range slider selects value by sliding handle.

**Class names:**
- component: `range`
- color: `range-neutral`, `range-primary`, `range-secondary`, `range-accent`, `range-success`, `range-warning`, `range-info`, `range-error`
- size: `range-xs`, `range-sm`, `range-md`, `range-lg`, `range-xl`

**Syntax:**
```html
<input type="range" min="0" max="100" value="40" class="range {MODIFIER}" />
```

**Rules:**
- Must specify `min` and `max` attributes

---

## rating

Rating is star radio buttons.

**Class names:**
- component: `rating`
- modifier: `rating-half`, `rating-hidden`
- size: `rating-xs`, `rating-sm`, `rating-md`, `rating-lg`, `rating-xl`

**Syntax:**
```html
<div class="rating {MODIFIER}">
  <input type="radio" name="rating-1" class="mask mask-star" />
</div>
```

**Rules:**
- Each set needs unique `name` attributes
- Add `rating-hidden` to first radio for clearing rating

---

## select

Select picks value from dropdown list.

**Class names:**
- component: `select`
- style: `select-ghost`
- color: `select-neutral`, `select-primary`, `select-secondary`, `select-accent`, `select-info`, `select-success`, `select-warning`, `select-error`
- size: `select-xs`, `select-sm`, `select-md`, `select-lg`, `select-xl`

**Syntax:**
```html
<select class="select {MODIFIER}">
  <option>Option</option>
</select>
```

---

## skeleton

Skeleton shows loading state.

**Class names:**
- component: `skeleton`
- modifier: `skeleton-text`

**Syntax:**
```html
<div class="skeleton"></div>
```

Text skeleton:
```html
<div class="skeleton skeleton-text">Loading data...</div>
```

**Rules:**
- Add `h-*` and `w-*` utility classes for height and width

---

## stack

Stack visually puts elements on top of each other.

**Class names:**
- component: `stack`
- modifier: `stack-top`, `stack-bottom`, `stack-start`, `stack-end`

**Syntax:**
```html
<div class="stack {MODIFIER}">{CONTENT}</div>
```

**Rules:**
- Use `w-*` and `h-*` to set size (all items same size)

---

## stat

Stat shows numbers and data in a block.

**Class names:**
- component: `stats`
- part: `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`, `stat-actions`
- direction: `stats-horizontal`, `stats-vertical`

**Syntax:**
```html
<div class="stats {MODIFIER}">
  <div class="stat">{CONTENT}</div>
</div>
```

**Rules:**
- Horizontal by default, use `stats-vertical` for vertical
- Content includes `stat-title`, `stat-value`, `stat-desc` inside `stat`

---

## status

Status is a small icon showing element state (online, offline, error, etc.).

**Class names:**
- component: `status`
- color: `status-neutral`, `status-primary`, `status-secondary`, `status-accent`, `status-info`, `status-success`, `status-warning`, `status-error`
- size: `status-xs`, `status-sm`, `status-md`, `status-lg`, `status-xl`

**Syntax:**
```html
<span class="status {MODIFIER}"></span>
```

**Rules:**
- Does not render anything visible

---

## steps

Steps shows list of steps in a process.

**Class names:**
- component: `steps`
- part: `step`, `step-icon`
- color: `step-neutral`, `step-primary`, `step-secondary`, `step-accent`, `step-info`, `step-success`, `step-warning`, `step-error`
- direction: `steps-vertical`, `steps-horizontal`

**Syntax:**
```html
<ul class="steps {MODIFIER}">
  <li class="step">{step content}</li>
</ul>
```

**Rules:**
- Add `step-primary` to make step active
- Add icon using `step-icon` class
- Use `data-content="{value}"` on `<li>` for display data

---

## swap

Swap toggles visibility of two elements.

**Class names:**
- component: `swap`
- part: `swap-on`, `swap-off`, `swap-indeterminate`
- modifier: `swap-active`
- style: `swap-rotate`, `swap-flip`

**Syntax (checkbox):**
```html
<label class="swap {MODIFIER}">
  <input type="checkbox" />
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</label>
```

**Syntax (class name):**
```html
<div class="swap {MODIFIER}">
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</div>
```

**Rules:**
- Use hidden checkbox or add/remove `swap-active` class via JS
- Use `swap-indeterminate` for indeterminate checkbox state

---

## tab

Tabs show links in tabbed format.

**Class names:**
- component: `tabs`
- part: `tab`, `tab-content`
- style: `tabs-box`, `tabs-border`, `tabs-lift`
- modifier: `tab-active`, `tab-disabled`
- placement: `tabs-top`, `tabs-bottom`

**Syntax (buttons):**
```html
<div role="tablist" class="tabs {MODIFIER}">
  <button role="tab" class="tab">Tab</button>
</div>
```

**Syntax (radio inputs):**
```html
<div role="tablist" class="tabs tabs-box">
  <input type="radio" name="my_tabs" class="tab" aria-label="Tab" />
</div>
```

**Rules:**
- Radio inputs needed for tab content to work
- Backgrounded tabs become rounded from both top corners

---

## table

Table shows data in table format.

**Class names:**
- component: `table`
- modifier: `table-zebra`, `table-pin-rows`, `table-pin-cols`
- size: `table-xs`, `table-sm`, `table-md`, `table-lg`, `table-xl`

**Syntax:**
```html
<div class="overflow-x-auto">
  <table class="table {MODIFIER}">
    <thead>
      <tr><th></th></tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
    </tbody>
  </table>
</div>
```

**Rules:**
- `overflow-x-auto` wrapper makes table horizontally scrollable

---

## text-rotate

Text-rotate shows up to 6 lines of text, one at a time, with infinite loop animation.

**Class names:**
- component: `text-rotate`

**Syntax:**
```html
<span class="text-rotate">
  <span>
    <span>Word 1</span>
    <span>Word 2</span>
    <span>Word 3</span>
    <span>Word 4</span>
    <span>Word 5</span>
    <span>Word 6</span>
  </span>
</span>
```

**Rules:**
- Must have one span/div inside containing 2-6 spans/divs
- Default duration is 10000ms
- Use `duration-{value}` for custom duration (milliseconds)

---

## textarea

Textarea allows multi-line text entry.

**Class names:**
- component: `textarea`
- style: `textarea-ghost`
- color: `textarea-neutral`, `textarea-primary`, `textarea-secondary`, `textarea-accent`, `textarea-info`, `textarea-success`, `textarea-warning`, `textarea-error`
- size: `textarea-xs`, `textarea-sm`, `textarea-md`, `textarea-lg`, `textarea-xl`

**Syntax:**
```html
<textarea class="textarea {MODIFIER}" placeholder="Bio"></textarea>
```

---

## theme-controller

Theme-controller sets page theme based on checked input value.

**Class names:**
- component: `theme-controller`

**Syntax:**
```html
<input type="checkbox" value="{theme-name}" class="theme-controller" />
```

**Rules:**
- `value` attribute should be valid daisyUI theme name

---

## timeline

Timeline shows events in chronological order.

**Class names:**
- component: `timeline`
- part: `timeline-start`, `timeline-middle`, `timeline-end`
- modifier: `timeline-snap-icon`, `timeline-box`, `timeline-compact`
- direction: `timeline-vertical`, `timeline-horizontal`

**Syntax:**
```html
<ul class="timeline {MODIFIER}">
  <li>
    <div class="timeline-start">{start}</div>
    <div class="timeline-middle">{icon}</div>
    <div class="timeline-end">{end}</div>
  </li>
</ul>
```

**Rules:**
- Add `timeline-vertical` for vertical (default)
- Add `timeline-snap-icon` to snap icon to start
- Add `timeline-compact` to force all items on one side

---

## toast

Toast stacks elements on corner of page.

**Class names:**
- component: `toast`
- placement: `toast-start`, `toast-center`, `toast-end`, `toast-top`, `toast-middle`, `toast-bottom`

**Syntax:**
```html
<div class="toast {MODIFIER}">{CONTENT}</div>
```

---

## toggle

Toggle is a checkbox styled as a switch.

**Class names:**
- component: `toggle`
- color: `toggle-primary`, `toggle-secondary`, `toggle-accent`, `toggle-neutral`, `toggle-success`, `toggle-warning`, `toggle-info`, `toggle-error`
- size: `toggle-xs`, `toggle-sm`, `toggle-md`, `toggle-lg`, `toggle-xl`

**Syntax:**
```html
<input type="checkbox" class="toggle {MODIFIER}" />
```

---

## validator

Validator changes form element colors based on validation.

**Class names:**
- component: `validator`
- part: `validator-hint`

**Syntax:**
```html
<input type="{type}" class="input validator" required />
<p class="validator-hint">Error message</p>
```

**Rules:**
- Use with `input`, `select`, `textarea`
