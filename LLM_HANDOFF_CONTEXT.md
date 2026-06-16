# LLM Handoff Context - Mobile Entertainment Trailer Launch

Last updated: 2026-06-15  
Workspace: `C:\Users\Hayden\Documents\Codex\2026-06-14\files-mentioned-by-the-user-mobile`  
Primary outputs folder: `C:\Users\Hayden\Documents\Codex\2026-06-14\files-mentioned-by-the-user-mobile\outputs`
Synced user-access copy: `C:\Users\Hayden\Claude\Projects`

## User Objective

Hayden is launching a mobile entertainment business in Troy, Ohio / Dayton metro:
- Retrofitted enclosed trailer.
- Revised launch focus as of 2026-06-14: start with a mobile golf simulator trailer, not a three-in-one launch.
- Default configuration: golf simulator bay with built-in seating for participants in a group setting.
- Fundraiser configuration: seating can be swapped for a sign-in desk / management hub for donations, turn order, sponsors, prizes, and leaderboard tracking.
- Future configurations may include movie or gaming layouts after the golf offer is validated and operationally stable.
- Used personally and rented for birthdays, corporate events, fundraisers, schools/churches, tailgates, and private parties.
- Owner-operator at launch.

The original source of truth is the attached business plan:
`C:\Users\Hayden\Downloads\Mobile_Entertainment_Business_Plan.docx`

The plan was extracted to:
`work/business_plan_extracted.txt`

## Current Working Assumptions

- Market: Troy, Ohio, serving roughly a 45-minute Troy/Dayton/Miami Valley radius.
- Budget tier: Lean is the working assumption.
- Lean target cap: approximately $45,000.
- Current workbook modeled startup total: $40,050 before real vendor quotes.
- Capital placeholder: $20,000 owner cash.
- Financing placeholder from workbook: $20,050 if current model and $20K cash are used.
- Earlier summary also mentioned approximately $25K financing; normalize future docs to the workbook/status assumption unless Hayden gives a real number.
- Timeline target: operational within 6 months.
- Brand working name: Triple Play Mobile Golf / Triple Play.
- Customer website draft exists and is static/review-only. Current version is golf-first, with fundraiser hub configuration and future movie/gaming modes pushed to Phase 2.
- A separate internal project-management hub exists at `outputs/project_hub/index.html`. Do not confuse this with the customer-facing marketing site.

## Source Hierarchy

When future assistants continue this project, use this hierarchy:

1. Hayden's newest instruction.
2. The original business plan document.
3. `PROJECT_STATUS.md`.
4. `09_gap_analysis_and_solutions.md`.
5. The workbook `04_lean_budget_break_even_model.xlsx`.
6. Other generated docs.
7. Draft website files.

When assumptions conflict, do not silently choose the optimistic value. State the conflict and either normalize it or ask Hayden if it blocks the next step.

## Generated Deliverables

| File | Purpose | Notes |
|---|---|---|
| `outputs/01_plan_summary.md` | 10-bullet alignment summary | Good, but funding language should be normalized to current workbook/status assumptions |
| `outputs/02_90_day_execution_tracker.md` | Phase 0-1 checklist | Needs stronger go/no-go scorecard and trailer-purchase gate |
| `outputs/03_local_market_validation_worksheet.md` | Desk research and validation worksheet | Competitor pricing still needs phone/quote confirmation |
| `outputs/04_lean_budget_break_even_model.xlsx` | Editable budget and break-even workbook | Functional; needs conservative/ramp/debt/tax/seasonality v2 |
| `outputs/05_vendor_shortlist_and_outreach.md` | Vendor leads and quote emails | Needs vendor comparison scorecard after quotes arrive |
| `outputs/06_brand_brief_and_names.md` | Brand direction and name options | Older artifact; current working name is Triple Play Mobile Golf / Triple Play |
| `outputs/07_booking_website_and_marketplace_listings.md` | Website plan and marketplace drafts | Needs production flow, privacy/terms, movie-license disclaimers |
| `outputs/08_ohio_legal_insurance_licensing_checklist.md` | Legal/insurance/licensing checklist | Good broad checklist; needs staged pre-spend/pre-demo/pre-paid ordering |
| `outputs/09_gap_analysis_and_solutions.md` | Audit of gaps and solutions | Created after reviewing generated docs |
| `outputs/10_market_desire_validation_guide.md` | Market desire validation guide | Use this to run the 30-day validation sprint before trailer deposit |
| `outputs/PROJECT_STATUS.md` | Running status | Update after every meaningful change |
| `outputs/draft_website/index.html` | Static review website | Golf-first version, not production-connected; fundraiser challenge section added |
| `outputs/draft_website/styles.css` | Website styling | Supports golf-first layout and image showcase |
| `outputs/draft_website/script.js` | Website interaction | Local quote estimate, fundraiser calculator, and mobile menu |
| `outputs/project_hub/index.html` | Internal operations website | Separate from customer site; schedule, trailer build steps, nonprofit outreach, documents, and risk gates |
| `outputs/project_hub/styles.css` | Internal hub styling | Dashboard-style internal UI |
| `outputs/project_hub/script.js` | Internal hub interaction | Local checklist/prospect status storage, filters, and export |
| `outputs/draft_website/assets/hero-trailer.png` | Generated hero image | AI-generated, replace with real trailer media after build |
| `outputs/draft_website/assets/hero-golf-launch.png` | Generated golf-first hero | AI-generated launch concept |
| `outputs/draft_website/assets/group-golf-interior.png` | Generated group golf interior | Shows built-in participant seating |
| `outputs/draft_website/assets/fundraiser-hub-config.png` | Generated fundraiser hub interior | Shows seating swapped for management desk |

## Website Draft State

The customer-facing website draft is in:
`outputs/draft_website/`

It includes:
- Hero section with generated golf simulator trailer image.
- Sticky navigation.
- Launch configuration strip: hosted golf bay, fundraiser hub, future configurations.
- Image showcase for group golf lounge and fundraiser management hub.
- Package cards: Hosted Golf Bay $499, Fundraiser Challenge $650, Corporate Golf Activation $1,500, Future Configuration Phase 2.
- Corporate golf section: $1,500-$3,500.
- Fundraiser section with closest-to-the-pin and longest-drive challenge cards, four-step fundraising flow, editable gross-raised calculator, and CTA into the quote form.
- Service area.
- FAQ.
- Draft quote form that updates estimate/deposit locally.

Verified previously with Edge/Playwright:
- Desktop 1440x900.
- Mobile 390x844.
- Hero image loaded.
- No horizontal overflow.
- Key sections present.
- Package selection updates estimate.
- Mobile menu opens.

Important:
- The website is review-only. It has no backend, scheduler, CRM, deposit payment, analytics, privacy policy, or actual submission.
- Fundraiser calculator is a gross-raised illustration only; real offers need event cost, prize, payment fee, and revenue-share decisions before being sold.
- Movie and gaming should not be sold as launch offers unless Hayden explicitly changes strategy.
- Movie bookings must remain subject to public-performance licensing/title approval if that configuration is added later.
- Generated images are concept visuals and should be replaced with real photos/video after the trailer exists.

## Internal Project Hub State

The internal project-management site is in:
`outputs/project_hub/`

It is separate from the customer-facing website and should not be published as marketing material. It includes:
- Dashboard summary for the golf-first launch strategy.
- 90-day schedule tracker with P0/Validate/Build filters.
- Browser-local checklist state for gates and schedule tasks.
- Detailed trailer buying and retrofit steps.
- Nonprofit/community outreach prospect table with status dropdowns.
- Pitch angle for fundraiser conversations.
- Document library linking to generated files.
- Risk-control rules before spending or paid events.
- Link to `10_market_desire_validation_guide.md`.

Important:
- Progress is stored locally in the browser via `localStorage`; it is not a multi-user database.
- Prospect contacts and nonprofit URLs should be confirmed before outreach.
- The hub is for Hayden's internal management only.

## Major Known Gaps

1. Real owner constraints missing:
   - Exact capital available.
   - Financing preference.
   - Tow vehicle make/model/year/tow rating.
   - Storage location.
   - Final risk tolerance: Lean vs Mid.

2. Validation evidence missing:
   - Competitor prices are not fully confirmed.
   - No completed interview log.
   - No soft commitments/deposits yet.
   - No quantified go/no-go memo.

3. Financial model needs v2:
   - Add conservative go/no-go case.
   - Add monthly seasonality/ramp.
   - Add debt service into cash-flow sheet.
   - Add sales tax handling.
   - Add owner draw/tax placeholders.
   - Add host labor toggle after owner capacity is exceeded.
   - Add marketplace/credit-card fees to variable cost.

4. Build feasibility is unproven:
   - Need trailer interior height and swing clearance.
   - Need payload/GVWR/tongue weight check.
   - Need generator/electrical/HVAC load plan.
   - Need secured-for-transit mounting plan.

5. Legal and insurance decisions unresolved:
   - Business entity not formed.
   - Insurance not quoted/bound.
   - Movie licensing unresolved.
   - Local mobile vendor/event rules not confirmed.
   - Booking agreement/waiver not drafted.

6. Production website missing:
   - Real contact details.
   - Scheduler.
   - Deposit flow.
   - CRM/lead capture.
   - Privacy/terms/cancellation pages.
   - Gallery/reviews after demos.

## Recommended Next Work

The best next deliverables are:

1. `10_owner_intake_and_decision_sheet.md`
   - Capture cash, financing, tow vehicle, risk tolerance, storage, launch deadline.

2. Run `10_market_desire_validation_guide.md`
   - Defines pass/fail criteria, interview scripts, smoke tests, fundraiser economics checks, and go/no-go scorecard.

3. `11_trailer_build_spec_gate.md`
   - Prevents buying a trailer that cannot support the concept.

4. Workbook v2:
   - Update `04_lean_budget_break_even_model.xlsx` or create `04_lean_budget_break_even_model_v2.xlsx`.
   - Add conservative/base/strong/ramp scenarios.

5. Website production checklist:
   - Convert static review site into a launch-ready lead capture system.

6. SOP pack:
   - Venue pre-check, setup, changeover, teardown, power/generator, safety, maintenance, review request.

## Useful Business Logic

Primary positioning:
"A private golf simulator delivered to your event."

Brand:
Triple Play Mobile Golf / Triple Play.

Target audiences:
- Parents of kids/teens.
- Adult golfers and party hosts.
- Corporate HR/office managers.
- Schools/churches/PTAs.
- HOAs/apartment communities.
- Breweries/bars/event venues.
- Fundraisers and nonprofits.

Pricing draft:
- Hosted Golf Bay: from $499.
- Fundraiser Challenge: from $650.
- Corporate Golf Activation: from $1,500.
- Future Configuration: Phase 2 placeholder.

Validation thresholds recommended before trailer purchase:
- 20+ customer interviews.
- 3+ written soft commitments or paid refundable deposits.
- 3 trailer quotes.
- 2 insurance quote ranges.
- Competitor quote log with dates.
- Tow vehicle and trailer feasibility confirmed.
- Movie licensing decision made or movie mode delayed.

## Do / Do Not Guidance For Future LLMs

Do:
- Keep outputs in `outputs/` if they are user-facing.
- Keep scratch scripts/files in `work/`.
- Treat `C:\Users\Hayden\Claude\Projects` as the synced user-access copy; edit workspace outputs first, then resync when needed.
- Update `PROJECT_STATUS.md` after meaningful changes.
- Preserve Lean tier as working assumption until Hayden changes it.
- Treat legal/insurance/movie licensing as blockers for paid launch.
- Label assumptions clearly.
- Prefer concrete checklists, scripts, and templates over broad advice.

Do not:
- Present the concept as validated until interviews/commitments are logged.
- Treat the current fast payback model as expected performance.
- Remove movie licensing caveats.
- Reintroduce movie/gaming as launch offers unless Hayden explicitly asks for that.
- Assume Hayden owns a tow vehicle capable of pulling the final trailer.
- Make public launch claims like "insured" or "COI-ready" before coverage is bound.
- Use the generated hero image as proof of the actual trailer.

## Verification Notes

Website verification previously passed via Edge/Playwright using a local script:
`work/verify_draft_site.mjs`

Generated screenshots:
- `work/draft_site_desktop.png`
- `work/draft_site_mobile.png`

Workbook was inspected manually and through XML after `openpyxl` was unavailable. No formula errors were reported in the original artifact-tool scan. The workbook is structurally functional but needs more conservative business assumptions.

## Current Best Next Prompt

If Hayden asks to continue, a strong next prompt is:

"Create the owner intake sheet and trailer build spec gate, then use `10_market_desire_validation_guide.md` to run the first validation sprint. Update the 90-day tracker and PROJECT_STATUS with real interview counts, quote results, and go/no-go evidence before any trailer deposit."
