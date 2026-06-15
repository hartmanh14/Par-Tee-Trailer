# Gap Analysis And Solutions

Review date: 2026-06-14  
Scope reviewed: all generated Markdown deliverables, draft website files, project status file, and the budget/break-even workbook structure.  
Purpose: identify what still blocks a credible go/no-go, launch, lender/vendor conversation, and public marketing push.

## Executive Read

The launch pack is strong as a first operating draft: it defines the concept, first 90 days, local competitors, vendors, brand direction, website copy, legal checklist, and a working budget model. The main gap is that several documents are more launch-ready than the evidence currently supports. The solution is to create a tighter Phase 0 validation gate, normalize assumptions across files, and add missing operational templates before nonrefundable spend.

Recommended decision posture:
- Treat the business as promising but not yet validated.
- Keep the Lean tier as the working path until quotes and soft commitments prove otherwise.
- Do not accept paid movie bookings until public-performance licensing is resolved.
- Do not buy a trailer until tow rating, payload, interior height, insurance, and swing-clearance questions are closed.

## Highest-Priority Gaps

| Priority | Gap | Why It Matters | Solution | Owner | Closed When |
|---:|---|---|---|---|---|
| P0 | Budget/funding assumptions are inconsistent across files | Summary says ~$45K and ~$25K financing; status/workbook show $40,050 and $20,050 financing | Set a single source of truth: "Lean target cap $45K; current modeled budget $40,050; financing placeholder $20,050 if $20K cash is available." Update summary, status, website internal notes, and workbook notes after first quote round | Hayden + next LLM | All docs use the same assumption language |
| P0 | User-specific facts are still unknown | Capital available, tow vehicle, risk tolerance, and financing route drive every build decision | Create an owner intake sheet and collect: cash available, max monthly payment, credit/financing preference, tow vehicle make/model/year, storage location, target launch month | Hayden | Intake complete and reflected in workbook |
| P0 | Go/no-go criteria are not quantified | The tracker says validate, but does not define a pass/fail threshold beyond 3 soft commitments | Add a validation scorecard with minimum thresholds: 20 interviews, 3 paid deposits or written soft commitments, 3 trailer quotes, 2 insurance quotes, competitor price checks, and viable tow/build path | Hayden | Written go/no-go memo completed before trailer deposit |
| P0 | Movie mode is marketed before licensing is resolved | Paid/public screenings can create copyright exposure | Make movie mode "licensed/private-screening subject to title approval" until MPLC/Swank/legal path is confirmed. Add a production website disclaimer and booking-form flag | Hayden + attorney | Licensing route documented or movie mode limited |
| P0 | Trailer feasibility is not proven | Golf simulator clearance, payload, A/C, generator, and towing can break the concept | Add a build feasibility checklist: interior height, swing arc, hitting distance, enclosure dimensions, GVWR/payload, tongue weight, A/C BTU, generator load, shore power, ventilation | Hayden + build/electrical help | Chosen trailer passes feasibility checklist |
| P0 | Insurance is not quoted before build commitment | Insurability and exclusions affect operating model | Get quotes from at least 2 brokers for GL, commercial auto/towing, equipment/inland marine, trailer physical damage, participant/minor exclusions | Hayden + broker | Quote range and exclusions documented |
| P1 | Financial model is optimistic as a base case | 5 bookings/week at $600 average and no host labor produce very fast payback that may overstate reality | Add conservative "go/no-go" and "year-one ramp" scenarios with lower utilization, seasonality, debt service in cash flow, taxes, owner draw, sales tax handling, and host labor after a threshold | Next LLM | Workbook has conservative/base/strong cases clearly labeled |
| P1 | Competitor data is incomplete | Pricing for GameTruck Dayton, local golf sims, and movie rentals is not fully confirmed | Create a call script and competitor quote log. Call/quote shop at least 10 substitutes within the 45-minute radius | Hayden | Competitor table has verified prices and dates |
| P1 | Website draft lacks production capture stack | Current form is local-only, no backend, scheduler, payment, CRM, consent, or analytics | Choose one production stack: Square Appointments or Acuity + Stripe + Google Sheets/CRM. Add form fields for setup constraints and movie-license/title status | Hayden + web builder | Production form creates lead record and deposit link |
| P1 | Operating SOPs are referenced but not drafted | Setup, teardown, safety, and changeover must be repeatable before demos | Create SOP pack: venue pre-check, setup, teardown, changeover, power/generator, safety incident, equipment checklist, post-event review request | Hayden | SOPs tested during dry run |

## Detailed Gap Register

### 1. Strategy And Positioning

Gap:
The brand is positioned well, but the proof points are future tense. The website says "COI-ready positioning" and "year-round" before insurance, climate system, and trailer are confirmed.

Solution:
Use draft/review language internally, and public language like "built for year-round events" only after the trailer has working heat/A/C. Keep "COI-ready" as an operational goal until insurance is bound.

Suggested website copy adjustment:
"Insurance and venue documentation available before paid launch" rather than "COI-ready" until coverage is bound.

### 2. Market Validation

Gap:
Desk research identifies substitutes but does not yet prove customers will pay for this exact bundled offer in Troy/Dayton.

Solution:
Create a structured validation campaign:
- 10 parent interviews.
- 5 adult golfer interviews.
- 5 corporate/HR/event planner interviews.
- 5 school/church/HOA/brewery interviews.
- 3 written soft commitments or deposits before trailer purchase.
- 1 demo-host partner identified before build completion.

New artifact needed:
`10_validation_scorecard_and_interview_script.md`.

### 3. Financial Model

Gap:
The workbook is useful, but the current base case should be labeled "working scenario," not "expected case." It excludes several real-world cash pressures.

Solution:
Add or update workbook assumptions:
- Separate "startup capex" from "working capital reserve."
- Add debt service to monthly cash flow.
- Add sales tax/pass-through handling.
- Add income tax/owner draw placeholders.
- Add seasonal bookings by month.
- Add host labor toggle when bookings exceed owner capacity.
- Add refund/cancellation allowance.
- Add credit-card/marketplace fees into variable cost.

Suggested minimum conservative case:
- Average booking price: $475.
- Bookings/week in first 6 paid months: 1-3.
- Annual fixed opex: at least $30K until quotes replace estimates.
- Variable cost per booking: $75-$125, depending on fuel/travel/fees.

### 4. Build Feasibility

Gap:
The docs assume a 24-foot trailer can support golf, movie, and gaming, but do not prove layout, swing clearance, payload, or power.

Solution:
Before trailer deposit, create a one-page spec gate:
- Interior height measured from finished floor to lowest obstruction.
- Hitting mat to screen distance.
- Ball-to-screen distance.
- Player-to-wall clearance.
- Launch monitor offset/spacing needs.
- A/C BTU and heat source.
- Generator wattage and noise plan.
- Payload after build-out.
- Emergency exit/egress plan.
- Secured-for-transit mounting plan.

New artifact needed:
`11_trailer_build_spec_gate.md`.

### 5. Legal, Insurance, And Licensing

Gap:
The legal checklist is broad but not ordered as a decision path. Several items should be completed before quote collection or public bookings.

Solution:
Split into:
- Pre-spend legal/insurance checks.
- Pre-demo checks.
- Pre-paid-booking checks.
- Pre-public-movie checks.

Add specific attorney/broker questions:
- Is customer participation covered for golf swings and gaming trailer activities?
- Are minors covered, and what exclusions apply?
- Does commercial auto cover towing a business trailer to events?
- Are generator/fire/CO incidents covered?
- Are event venues additional insured?
- Are movie nights covered if licensing is missing or customer supplies title?

### 6. Vendor Sourcing

Gap:
Vendor shortlist has good first leads, but no scorecard for comparing quotes.

Solution:
Add a vendor comparison scorecard:
- Price.
- Lead time.
- Warranty.
- Financing.
- Mobile/commercial-use knowledge.
- Service proximity.
- Install support.
- Risk notes.

New artifact needed:
`12_vendor_quote_comparison_template.xlsx` or Markdown table.

### 7. Website And Marketing

Gap:
The draft website is clean and marketable, but it uses generated imagery and future-state proof. It also lacks a privacy note, real contact details, analytics, and production form flow.

Solution:
For production:
- Replace hero with real trailer photos/video once built.
- Add phone/email after business contact channels are set.
- Add privacy/terms/cancellation pages.
- Add quote form fields for setup constraints.
- Add "movie availability subject to licensing/title approval."
- Add review/gallery section only after demos.
- Add local SEO landing copy for Troy, Dayton, Tipp City, Piqua, Vandalia, Beavercreek, Kettering, Centerville.

### 8. Operations

Gap:
There is no written demo-day or event-day operating system yet.

Solution:
Create SOPs before soft launch:
- Venue pre-screen checklist.
- Arrival/setup checklist.
- Power/generator checklist.
- Mode changeover checklist.
- Safety/incident checklist.
- End-of-event teardown checklist.
- Maintenance log.
- Review request follow-up.

### 9. Sales Pipeline

Gap:
The docs identify target customer segments but do not include an actual CRM pipeline or prospect list.

Solution:
Create a starter pipeline with columns:
Prospect, segment, city, contact, source, ask, status, next step, quote amount, probability, notes.

Seed it with:
- 10 schools/PTAs.
- 10 churches/youth groups.
- 10 breweries/venues.
- 20 corporate HR/office managers.
- 10 planners/nonprofits.

### 10. Risk Controls

Gap:
Risks are listed but not translated into operational controls.

Solution:
Make a risk-control checklist:
- No paid event without insurance.
- No movie event without licensing decision.
- No trailer purchase without tow/payload/swing-clearance confirmation.
- No generator use without CO/fire/ventilation plan.
- No public park/school event without venue approval.
- No minors-only event without supervision policy.

## Recommended Next Deliverables

| Order | Deliverable | Purpose |
|---:|---|---|
| 1 | Owner intake sheet | Replaces placeholders with real constraints |
| 2 | Validation scorecard and interview script | Creates real go/no-go evidence |
| 3 | Trailer build spec gate | Prevents buying an unusable trailer |
| 4 | Insurance/broker question sheet | Prevents uninsurable operating model |
| 5 | Competitor quote log | Turns desk research into market pricing |
| 6 | Updated workbook v2 | Adds conservative/ramp/tax/debt-service cases |
| 7 | Production website requirements | Converts static draft into a lead engine |
| 8 | SOP pack | Makes launch demos safe and repeatable |

## Immediate Fixes To Existing Files

1. Update `01_plan_summary.md` to say "Lean target cap ~$45K; current model $40,050 before real quotes" instead of implying one final number.
2. Update `PROJECT_STATUS.md` to use the same funding assumption everywhere.
3. Add a note to `07_booking_website_and_marketplace_listings.md` and the draft website that movie bookings are subject to licensing/title approval.
4. Add a "Do not buy trailer until..." line to `02_90_day_execution_tracker.md`.
5. Add "validated quote date" columns to the local competitor table.
6. Add production-form requirements to the website plan: setup surface, trailer access, power, HOA/venue restrictions, movie title/licensing, deposit policy acceptance.

## Bottom Line

The current pack is good enough to start Phase 0 validation and early quote outreach. It is not yet good enough to justify nonrefundable trailer/build spend. The next best move is to close the owner-specific constraints and validation evidence, then use those results to update the workbook and website from "draft concept" to "bookable launch offer."
