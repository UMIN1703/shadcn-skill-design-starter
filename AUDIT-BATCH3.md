# Audit Batch 3 — Final Figma fidelity sweep

> Date: 2026-06-14
> Scope: spot-checked the 40 remaining components against the Figma file
> `92ljrxYvIaOPQnAY8hqAU2` (`@shadcn_ui components not token`), using the
> node-id index recorded in `AUDIT-BATCH2.md`.

## Method
For each of the 40 components: pulled the page-frame screenshot via
`mcp__figma__get_screenshot` at `maxDimension=1024`, read
`components/demos/<name>-demo.tsx`, then compared variant count and
narrative coverage. No per-pixel diff; the question is "does the demo
cover the variants the designer ships?".

## Per-component findings table

| Component | Figma node | Figma variants (approx.) | Demo sections | Status | Gap notes |
|-----------|-----------|--------------------------|---------------|--------|-----------|
| aspect-ratio | 1098:924 | 1 (single 16:9 image) | 3 (16:9 / 4:3 / Square) | ✅ | superset of Figma |
| avatar | 72:2717 | 3 (single, fallback, group of 3) | 3 (Default, Fallback, Group) | ✅ | match |
| breadcrumb | 101:2 | 5 (slash, with-dropdown, ellipsis-chev, default-chev, multi-level) | 3 (Default, Ellipsis, Custom Sep) | ⚠️ | missing dropdown-breadcrumb variant |
| button-group | 1185:1979 | ~11 sub-variants (icon nav, +/-, sm/default/lg sizes, pagination, copy/paste, button+plus, search+icon, composer, dropdown popover, currency pair, copilot dropdown) | 4 (Default, Icon, Split, Primary+menu) | ❌ | rewrite — missing 7+ variants |
| calendar | 72:2720 | 7 (single, RTL, multi-month, dropdown month/year, with time, with preset, form) | 2 (Single, Range — note Range isn't in Figma) | ❌ | rewrite — missing dropdown/time/preset/form |
| card | 72:2721 | 1 (Login card with Google) | 1 (Login Card) | ✅ | match |
| carousel | 72:2722 | 4 (horizontal arrows, multi-item, vertical, with counter) | 3 (Default, Multiple, Vertical) | ✅ | match (Slide-1-of-5 cosmetic) |
| chart | 296:42 | 1 (interactive bar chart Desktop/Mobile) | 3 (Interactive Bar, Area, Pie) | ✅ | superset |
| checkbox | 72:2723 | 5 (default, with-desc, disabled, card, sidebar form) | 5 (Default, With Desc, Disabled, Card, Form) | ✅ | match |
| collapsible | 72:2724 | 1 (single example, shown closed + open) | 1 (Default, controlled) | ✅ | match |
| context-menu | 73:224 | 1 full-feature example (Back/Forward/Reload/Sub/Bookmarks/Urls/People radio) | 1 (Default, full feature) | ✅ | match |
| data-table | 73:225 | 1 (Filter + Columns dropdown + checkbox-select + sort + row-action ... menu + footer-paginator) | 1 (Default — sort + paginator only) | ❌ | rewrite — missing filter, Columns dropdown, row-select, row action menu |
| date-picker | 73:226 | 5 (basic, with month/year picker, with time, schedule preset "In 2 days", form) | 2 (Date, Date Range — Range not in Figma) | ❌ | rewrite — missing month-picker, time, preset, form variants |
| drawer | 73:228 | 2 (Move Goal +/-, Edit Profile sheet) | 1 (Move Goal) | ⚠️ | add Edit-profile variant |
| empty | 1186:3809 | 6 (No Projects, Cloud Storage card, No Notifications, User Offline, No Team Members, 404 Not Found) | 2 (Default, With Action) | ❌ | rewrite — missing 4 distinct empty states |
| form | 1188:4205 | composite "Field" frame (~17 sub-fields) — but lives in Field component | 2 (Profile, Bio) | ✅ | clean — Form demo covers RHF+Zod pattern; field types covered by field-demo |
| hover-card | 73:231 | 1 (@nextjs preview) | 1 (Default) | ✅ | match |
| input | 73:1977 | 6 (default states, file, email, label+focus, with button, username form) | 4 (Default×3, File, With Button, Form) | ✅ | match — covers narrative |
| input-otp | 101:698 | 5 (basic w/ separator, 6-no-separator, 3+3+3 w/separators, with helper text, OTP form) | 4 (Default, Pattern, Separator, Controlled) | ⚠️ | minor — missing "with helper text" + form |
| kbd | 1196:1097 | 5 (icons, Ctrl+B, sentence, Accept/Cancel buttons w/ kbd, tooltip+button, search w/⌘K) | 3 (Default, In Sentence, Group) | ⚠️ | missing kbd-in-button + kbd-in-input |
| label | 73:1978 | 2 (label + checkbox unchecked / checked) | 1 (With Checkbox) | ✅ | match |
| menubar | 73:1979 | 1 (File/Edit/View/Profiles closed + File-open) | 1 (Default — full menu) | ✅ | match |
| native-select | 1254:65 | 4 (status, grouped department, disabled, error/destructive) | 3 (Default, With Label, Disabled) | ⚠️ | minor — missing grouped optgroup + error state |
| navigation-menu | 73:1980 | 6 trigger types (Home, Components active, Docs, List, Simple, With Icon) + opened panel | 1 menu set (Getting Started, Components, Docs) | ⚠️ | missing List / Simple / With-Icon variants |
| pagination | 73:1981 | 1 (Prev / 1 / 2-active / 3 / ... / Next) | 1 (Default) | ✅ | match |
| progress | 73:1983 | 1 (single bar ~50%) | 2 (Default, Steps 25/50/75/100) | ✅ | superset |
| radio-group | 73:1984 | 2 (Default/Comfortable/Compact + Notify form) | 2 (Default, Form) | ✅ | match |
| scroll-area | 73:1985 | 2 (Tags vertical, horizontal photo strip) | 2 (Vertical, Horizontal) | ✅ | match |
| separator | 73:1987 | 1 (Radix Primitives heading + Blog\|Docs\|Source vertical) | 2 (Horizontal, With Heading) | ✅ | superset |
| sheet | 73:1988 | 1 (Edit profile right-side) | 2 (Sides ×4, Form) | ✅ | superset |
| sidebar | 269:32 | 1 (full Acme Inc / Platform / Projects sidebar) | 3 (Closed, Open, With Main Panel) | ✅ | superset |
| skeleton | 73:1989 | 1 (avatar + 2 lines, image + 2 lines) | 3 (Default, Card, Avatar) | ✅ | superset |
| slider | 73:2895 | 1 (basic single thumb at ~50%) | 4 (Default, With Value, Range, Disabled) | ✅ | superset |
| sonner | 73:2896 | 1 (Event created with Undo) | 4 (Default, Success, Error, Action) | ✅ | superset |
| spinner | 1196:1174 | 8 (processing row, single, sizes, colored, loading badges, status badges, input-validating, processing card with cancel, downloading) | 3 (Sizes, In Button, In Card) | ❌ | rewrite — missing status-badges, input-validating, download-progress, colored variants |
| switch | 73:2897 | 2 (Airplane mode off/on + Email Notifications form) | 2 (Default, Form) | ✅ | match |
| table | 73:2898 | 1 (Invoice/Status/Method/Amount + footer Total $2500 + caption) | 2 (Default, With Caption & Footer) | ✅ | match |
| textarea | 73:2900 | 6 (default+focus, disabled, label, label+helper, with Send button, Bio form) | 4 (Default, Disabled, With Label, Form) | ⚠️ | missing with-button (Send message) variant |
| toggle | 73:2902 | 5 (Bold off/on, Italic small, Italic large, Italic with text, more states, underline link) | 4 (Default, Outline, With Text, Sizes) | ✅ | match — superset |
| tooltip | 73:2904 | 1 (Hover → Add to library) | 1 (Default) | ✅ | match |

## Detail: components needing fixes

### button-group (❌ rewrite)
- Figma frame `1185:1979` is a long compendium of ~11 sub-patterns: back-arrow + actions, +/- vertical stacker, 3 size rows (Small/Default/Large with `+`), pagination `1 2 3 4 5 ← →`, Copy/Paste, Button+Plus, Search+icon search, message composer with `+`/send, Follow + dropdown popover (Mute/Mark as Read/Report/Block/Share/Copy/Delete), currency input pair (USD/EUR/GBP), and a Copilot agent-tasks popover.
- Demo `button-group-demo.tsx` only has 4: Default (Years/Months/Weeks), Icon (Bold/Italic/Underline), Split, Primary+menu.
- **Recommended fix:** add 6–7 new sections: Sizes (sm/default/lg ×3), Vertical Stack (+/-), Pagination row, Copy/Paste pair, Composer (+textarea+send), Follow with dropdown.
- **Effort:** ~25 min.

### calendar (❌ rewrite)
- Figma frame `72:2720` includes single, RTL, multi-month, dropdown month+year selector, calendar + time picker, schedule "In N days" preset row, and a form-bound variant. (Note: range is NOT in Figma — it lives in `date-picker`.)
- Demo `calendar-demo.tsx` has only 2 (Single + Range).
- **Recommended fix:** drop "Range", add Multi-month, Dropdown selectors (`captionLayout="dropdown"`), With Time, With Preset, In Form variants. Heavy overlap with date-picker — consider splitting: Calendar = the standalone widget variants, Date-picker = popover-trigger combos.
- **Effort:** ~25 min.

### data-table (❌ rewrite)
- Figma frame `73:225` shows a full TanStack-table example: `Filter emails…` input on the left, `Columns ▾` dropdown on the right, then a table whose first column is a row-select checkbox, second column has a sortable `Email ↑↓` header, third column is right-aligned `Amount`, and each row has a trailing `…` action menu cell. Footer: `0 of 5 row(s) selected.` + Previous / Next buttons.
- Demo `data-table-demo.tsx` has the sort + paginator + status/email/amount columns but is missing: the filter input, the Columns dropdown, the row-select checkboxes, and the row action menu (`…`).
- **Recommended fix:** mirror the shadcn data-table reference doc — add filter input, Columns dropdown using `dropdown-menu`, prepend a `select` checkbox column, append an actions column with a `…` dropdown menu, and the "N of M row(s) selected" footer line.
- **Effort:** ~30 min.

### date-picker (❌ rewrite)
- Figma frame `73:226` has 5 variants: basic Date-of-birth, Subscription Date with month/year selectors inside the calendar, Date + Time row, Schedule "In 2 days" preset row, and Date-of-birth form with submit.
- Demo `date-picker-demo.tsx` has only Date + Date Range. The Range variant isn't even in Figma — that's a calendar-page concern.
- **Recommended fix:** drop "Date Range" or relabel; add: Subscription Date (with `captionLayout="dropdown"`), With Time (calendar + time input row), With Preset ("In 2 days" select + calendar), In Form (RHF-bound with submit).
- **Effort:** ~25 min.

### empty (❌ rewrite)
- Figma frame `1186:3809` shows 6 empty-state archetypes: No Projects Yet with Create/Import + Learn More, Cloud Storage Empty (bordered card with Upload), No Notifications (muted background bell), User Offline (avatar + Leave Message), No Team Members (avatar stack + Invite Members), and 404 Not Found (search input + Contact support).
- Demo `empty-demo.tsx` has only Default (Inbox) + With Action (Upload).
- **Recommended fix:** add 4 more sections matching the Figma archetypes — Card-styled empty, Subtle/muted empty, Avatar empty, 404 with search input.
- **Effort:** ~20 min.

### spinner (❌ rewrite)
- Figma frame `1196:1174` shows 8 different spinner contexts: list-row spinner ("Processing payment… $100"), bare single spinner, sizes row (sm/default/lg/xl), colored variants row (red/teal/blue/amber), loading badges stack, status badges row (Syncing/Updating/Processing as outlined badges), input-validating ("Validating…" inside a textarea with send button disabled), processing card with Cancel button, downloading progress card with progress bar.
- Demo `spinner-demo.tsx` has only Sizes, In Button, In Card.
- **Recommended fix:** add status-badge row (3 outlined badges with spinner+label), input-validating section (textarea + spinner footer), download progress section (file row + progress bar). Skip the explicit "colored" row — that breaks the no-per-component-color rule in §3.1.
- **Effort:** ~20 min.

### breadcrumb (⚠️ minor)
- Figma has a `Home / Components ▾ / Breadcrumb` variant where the middle crumb is a dropdown trigger. Demo doesn't show this.
- **Recommended fix:** add a 4th section "With Dropdown" wrapping a `BreadcrumbItem` around a `DropdownMenu` per the shadcn pattern.
- **Effort:** ~5 min.

### drawer (⚠️ minor)
- Figma shows Move Goal AND Edit Profile drawers. Demo has only Move Goal.
- **Recommended fix:** add an "Edit Profile" section that mirrors the dialog/sheet form (Name + Username + Save changes / Close).
- **Effort:** ~5 min.

### input-otp (⚠️ minor)
- Figma has a section with helper text "Enter your one-time password" under each OTP grid, plus a "One-Time Password" form variant with Submit.
- **Recommended fix:** add a "With Helper Text" section and an "OTP Form" section.
- **Effort:** ~5 min.

### kbd (⚠️ minor)
- Figma shows kbd inside buttons (Accept ↵ / Cancel Esc), inside a tooltip ("Save Changes S"), and inside a search field (`⌘K`).
- **Recommended fix:** add "In Button" and "In Search Field" sections.
- **Effort:** ~5 min.

### native-select (⚠️ minor)
- Figma has 4 sections including a grouped department select (with optgroups) and an error/destructive state (red ring).
- **Recommended fix:** add "Grouped" (optgroups) and "Error" (className with destructive ring) sections.
- **Effort:** ~5 min.

### navigation-menu (⚠️ minor)
- Figma shows 6 trigger types: Home, Components (active/open), Docs, List, Simple, With Icon. Demo only covers Getting Started + Components + Docs.
- **Recommended fix:** add 3 more `NavigationMenuItem` triggers: List (link list panel), Simple (text-only), With Icon (icon next to label).
- **Effort:** ~10 min.

### textarea (⚠️ minor)
- Figma has a variant with a "Send message" button anchored to the bottom of the textarea (composer pattern).
- **Recommended fix:** add a "With Action" section showing a composer-style textarea with an attached submit button.
- **Effort:** ~5 min.

## Summary
- ✅ Clean: **27** — aspect-ratio, avatar, card, carousel, chart, checkbox, collapsible, context-menu, form, hover-card, input, label, menubar, pagination, progress, radio-group, scroll-area, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, toggle, tooltip
- ⚠️ Minor tweaks: **7** — breadcrumb, drawer, input-otp, kbd, native-select, navigation-menu, textarea
- ❌ Rewrites needed: **6** — button-group, calendar, data-table, date-picker, empty, spinner
- 🤷 No Figma frame: **0** — every component has a frame in this design file.

## Prioritized fix list (top 10)

1. **button-group** — add 6–7 missing sub-variants (sizes row, pagination row, composer, etc.) — ~25 min
2. **data-table** — add filter input, Columns dropdown, row-select column, row action menu — ~30 min
3. **date-picker** — drop Range, add Subscription/Time/Preset/Form variants — ~25 min
4. **calendar** — split from date-picker; add Multi-month, Dropdown, Time, Preset, Form — ~25 min
5. **empty** — add 4 more archetypes (card, muted, avatar, 404) — ~20 min
6. **spinner** — add status-badges, input-validating, download-progress sections — ~20 min
7. **navigation-menu** — add List / Simple / With-Icon trigger variants — ~10 min
8. **drawer** — add Edit-profile variant — ~5 min
9. **textarea** — add composer (with-action button) variant — ~5 min
10. **breadcrumb** — add Dropdown-in-crumb variant — ~5 min

Honorable mentions (~5 min each): input-otp helper-text/form, kbd in-button/in-search, native-select grouped+error.

Total fix budget for full clean: **~3 hours** (heavy lifting in the 6 rewrites; minor tweaks are quick wins).

## Notes
- The shadcn-style "demo > Figma" pattern (chart, sheet, sidebar, slider, sonner, skeleton, progress) is intentional and not flagged as a gap.
- The `form` component's Figma node points at the giant Field compendium — Field coverage was already audited separately in batch 1 (rewritten there). The Form-component demo correctly focuses on the RHF+Zod pattern, which is the demo's actual job.
- Calendar and date-picker overlap significantly in Figma. Recommend treating `calendar` as the standalone widget variants (multi-month, dropdown caption, time, RTL) and `date-picker` as the popover-trigger combos (basic, time, preset, form).
