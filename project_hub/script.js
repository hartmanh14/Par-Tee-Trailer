const storagePrefix = "triple-play-hub:";

const scheduleItems = [
  {
    id: "budget-tier",
    priority: "P0",
    phase: "Validate",
    due: "2026-06-21",
    title: "Confirm budget tier and max cash-at-risk",
    owner: "Hayden",
    detail: "Write down cash available, financing route, max monthly payment, and whether Lean remains the ceiling.",
  },
  {
    id: "tow-capacity",
    priority: "P0",
    phase: "Validate",
    due: "2026-06-21",
    title: "Confirm tow vehicle capacity and hitch limits",
    owner: "Hayden",
    detail: "Check GCWR, GVWR, payload, hitch class, tongue weight, and trailer brake requirements before trailer shopping.",
  },
  {
    id: "competitor-map",
    priority: "P0",
    phase: "Validate",
    due: "2026-06-21",
    title: "Build 45-minute competitor map",
    owner: "Hayden",
    detail: "Confirm true Troy pricing for indoor golf, mobile gaming, outdoor movie, and event substitutes.",
  },
  {
    id: "parent-golfer-interviews",
    priority: "P0",
    phase: "Validate",
    due: "2026-06-28",
    title: "Interview 10 private-event and adult golfer prospects",
    owner: "Hayden",
    detail: "Ask about $499-$699 golf bay bookings, driveway setup concerns, guest count, and likely dates.",
  },
  {
    id: "corporate-interviews",
    priority: "P0",
    phase: "Validate",
    due: "2026-06-28",
    title: "Interview 5 corporate or event-planner prospects",
    owner: "Hayden",
    detail: "Test the $1,500+ corporate golf activation pitch and ask for demo interest.",
  },
  {
    id: "nonprofit-interviews",
    priority: "P0",
    phase: "Validate",
    due: "2026-07-05",
    title: "Interview 5 nonprofit, school, church, or booster prospects",
    owner: "Hayden",
    detail: "Pitch closest-to-the-pin and longest-drive fundraiser formats; ask what a useful revenue split would look like.",
  },
  {
    id: "trailer-quotes",
    priority: "P0",
    phase: "Validate",
    due: "2026-07-05",
    title: "Get three trailer quotes",
    owner: "Hayden",
    detail: "Quotes must include interior height, ramp dimensions, GVWR, empty weight, payload, axle rating, financing, and lead time.",
  },
  {
    id: "sim-quotes",
    priority: "P0",
    phase: "Validate",
    due: "2026-07-05",
    title: "Get simulator hardware quotes",
    owner: "Hayden",
    detail: "Compare SkyTrak/SkyTrak+ and Uneekor-class mobile setups with screen, projector, mat, software, and warranty.",
  },
  {
    id: "insurance-ranges",
    priority: "P0",
    phase: "Validate",
    due: "2026-07-12",
    title: "Get insurance quote ranges",
    owner: "Hayden + broker",
    detail: "Ask about general liability, business towing, trailer damage, inland marine, minors, and participant exclusions.",
  },
  {
    id: "go-no-go",
    priority: "P0",
    phase: "Validate",
    due: "2026-07-12",
    title: "Write go / no-go memo",
    owner: "Hayden",
    detail: "Decide whether to spend based on interviews, soft commitments, quotes, financing, insurance, and build feasibility.",
  },
  {
    id: "entity-bank",
    priority: "P0",
    phase: "Build",
    due: "2026-07-19",
    title: "Form LLC, EIN, bank, and bookkeeping path",
    owner: "Hayden + accountant/attorney",
    detail: "Separate business finances before buying equipment or accepting deposits.",
  },
  {
    id: "lock-trailer",
    priority: "P0",
    phase: "Build",
    due: "2026-07-19",
    title: "Lock trailer purchase",
    owner: "Hayden",
    detail: "Only after the trailer passes tow, payload, height, swing clearance, and financing checks.",
  },
  {
    id: "layout-plan",
    priority: "P1",
    phase: "Build",
    due: "2026-07-26",
    title: "Finalize group lounge and fundraiser hub layout",
    owner: "Hayden + build help",
    detail: "Map seating, removable desk, hitting area, screen wall, storage, A/V rack, cable paths, and guest flow.",
  },
  {
    id: "order-sim",
    priority: "P0",
    phase: "Build",
    due: "2026-07-26",
    title: "Order long-lead simulator components",
    owner: "Hayden",
    detail: "Launch monitor, hitting mat, impact screen, projector, enclosure/netting, PC/tablet, and subscriptions.",
  },
  {
    id: "power-climate",
    priority: "P1",
    phase: "Build",
    due: "2026-08-02",
    title: "Confirm electrical, generator, HVAC, and safety plan",
    owner: "Hayden + electrician",
    detail: "Document loads, shore power, generator placement, CO/fire controls, ventilation, and cable management.",
  },
  {
    id: "wrap-vendor",
    priority: "P1",
    phase: "Build",
    due: "2026-08-02",
    title: "Quote and select wrap or branding shop",
    owner: "Hayden",
    detail: "Compare full wrap, partial wrap, design support, install window, durability, and art specs.",
  },
  {
    id: "terms",
    priority: "P1",
    phase: "Build",
    due: "2026-08-09",
    title: "Draft booking terms and waiver",
    owner: "Hayden + attorney",
    detail: "Cover deposit, cancellation, weather, access, damage, supervision, liability, travel, and photo permission.",
  },
  {
    id: "production-site",
    priority: "P1",
    phase: "Build",
    due: "2026-08-16",
    title: "Build production booking system",
    owner: "Hayden + web help",
    detail: "Connect customer website to scheduler, lead capture, deposit payment, confirmation email, and analytics.",
  },
  {
    id: "retrofit-shell",
    priority: "P1",
    phase: "Build",
    due: "2026-08-23",
    title: "Retrofit shell: insulation, flooring, power, climate",
    owner: "Hayden + build help",
    detail: "Make interior safe and ready for simulator install before finishes and branding.",
  },
  {
    id: "install-sim",
    priority: "P1",
    phase: "Build",
    due: "2026-08-30",
    title: "Install and test simulator system",
    owner: "Hayden",
    detail: "Run repeated sessions, driver swings, missed-shot checks, calibration, and seating-to-desk changeover.",
  },
  {
    id: "sops",
    priority: "P1",
    phase: "Build",
    due: "2026-08-30",
    title: "Create operating SOPs",
    owner: "Hayden",
    detail: "Setup, teardown, venue pre-check, power, safety, maintenance, fundraiser check-in, and review request flow.",
  },
  {
    id: "bind-insurance",
    priority: "P0",
    phase: "Build",
    due: "2026-09-06",
    title: "Bind insurance before paid bookings",
    owner: "Hayden + broker",
    detail: "Confirm COI process and additional insured requirements for schools, venues, and corporate customers.",
  },
  {
    id: "dry-run",
    priority: "P1",
    phase: "Build",
    due: "2026-09-12",
    title: "Run two demos and capture launch media",
    owner: "Hayden",
    detail: "One group golf lounge demo and one fundraiser hub demo; collect photos, feedback, and fixes.",
  },
];

const prospects = [
  {
    id: "miami-county-ymca",
    name: "Miami County YMCA",
    segment: "Youth / wellness nonprofit",
    why: "Strong match for youth programs, Annual Support Campaign, family-friendly events, and athletic audiences.",
    ask: "Offer a fundraiser challenge night supporting youth memberships or sports programming.",
    link: "https://miamicountyymca.net/",
    source: "Verified website",
  },
  {
    id: "troy-foundation",
    name: "The Troy Foundation",
    segment: "Community foundation",
    why: "Connector organization for local charitable funds and grantmaking; useful for introductions even if not the event host.",
    ask: "Ask who runs local donor events, youth funds, school foundations, or civic fundraisers that need an attraction.",
    link: "https://www.thetroyfoundation.org/",
    source: "Confirm contact",
  },
  {
    id: "united-way-miami-county",
    name: "United Way of Miami County",
    segment: "Federated giving / workplace campaign",
    why: "Workplace giving campaigns and partner agencies fit a sponsored competition format.",
    ask: "Pitch as a workplace campaign add-on or partner-agency fundraiser demo.",
    link: "https://www.unitedwaymco.org/",
    source: "Confirm contact",
  },
  {
    id: "partners-in-hope",
    name: "Partners in Hope",
    segment: "Troy social services",
    why: "Local mission-driven nonprofit where sponsor-backed fundraising may be easier than ticketed attendance.",
    ask: "Offer a sponsor-funded challenge at a donor night, church partner event, or community fundraiser.",
    link: "https://partnersinhopeinc.org/",
    source: "Confirm contact",
  },
  {
    id: "lincoln-community-center",
    name: "Lincoln Community Center",
    segment: "Youth / community center",
    why: "Youth, family, and community programming can use an interactive fundraiser or reward event.",
    ask: "Pitch a youth scholarship fundraiser with closest-to-pin plus sponsor prize.",
    link: "https://lcctroy.org/",
    source: "Confirm contact",
  },
  {
    id: "miami-county-park-district",
    name: "Miami County Park District",
    segment: "Community events / outdoor recreation",
    why: "Public events and recreation audiences could support a golf challenge activation if venue rules allow it.",
    ask: "Ask about fundraiser/community event partnerships and generator/parking rules.",
    link: "https://www.miamicountyparks.com/",
    source: "Confirm contact",
  },
  {
    id: "troy-athletic-boosters",
    name: "Troy Athletic Boosters / school sports teams",
    segment: "School athletics",
    why: "Golf, baseball, football, and booster groups are natural fits for longest-drive and sponsor boards.",
    ask: "Pitch a booster-night challenge with division prizes and sponsor leaderboard.",
    link: "https://www.troy.k12.oh.us/",
    source: "Confirm decision-maker",
  },
  {
    id: "piqua-athletic-boosters",
    name: "Piqua school boosters / athletic programs",
    segment: "School athletics",
    why: "Nearby rivalry/community sports market; good early test beyond Troy.",
    ask: "Pitch a fundraiser challenge at a team event, golf outing, or pre-season booster night.",
    link: "https://www.piqua.org/",
    source: "Confirm decision-maker",
  },
  {
    id: "tippecanoe-boosters",
    name: "Tipp City / Tippecanoe boosters",
    segment: "School athletics",
    why: "Close service area with strong family/school audience and potential sponsor network.",
    ask: "Pitch a family fundraiser challenge for athletic or band boosters.",
    link: "https://www.tippcityschools.com/",
    source: "Confirm decision-maker",
  },
  {
    id: "dayton-childrens-foundation",
    name: "Dayton Children's Foundation",
    segment: "Healthcare charity",
    why: "Large regional charity with corporate donor network; likely better for sponsored activations than small private events.",
    ask: "Ask about corporate partner events, golf outings, or donor appreciation activations.",
    link: "https://www.childrensdayton.org/",
    source: "Confirm event contact",
  },
  {
    id: "goodwill-easterseals-miami-valley",
    name: "Goodwill Easterseals Miami Valley",
    segment: "Regional social services",
    why: "Large Miami Valley nonprofit with broad employer/community relationships.",
    ask: "Pitch as an employee giving or corporate partner activation.",
    link: "https://gesmv.org/",
    source: "Verified regional org",
  },
  {
    id: "big-brothers-big-sisters-miami-valley",
    name: "Big Brothers Big Sisters Miami Valley",
    segment: "Youth mentoring",
    why: "Youth mission with event fundraising and corporate sponsor potential.",
    ask: "Pitch a sponsor-backed golf challenge for a donor night or match event.",
    link: "https://www.bbbsmiamivalley.org/",
    source: "Confirm contact",
  },
  {
    id: "ronald-mcdonald-house-dayton",
    name: "Ronald McDonald House Charities Dayton",
    segment: "Healthcare / family support",
    why: "Strong donor base and corporate sponsors; family-friendly fundraiser fit.",
    ask: "Ask about partner events where an interactive sponsor attraction could add donations.",
    link: "https://rmhcdayton.org/",
    source: "Confirm contact",
  },
  {
    id: "dayton-habitat",
    name: "Habitat for Humanity of Greater Dayton",
    segment: "Housing nonprofit",
    why: "Corporate teams and build sponsors may respond to an employee fundraiser challenge.",
    ask: "Pitch a corporate partner challenge tied to a build sponsorship or donor event.",
    link: "https://daytonhabitat.org/",
    source: "Confirm contact",
  },
  {
    id: "local-church-youth",
    name: "Troy-area church youth groups",
    segment: "Church / youth",
    why: "Churches can host parking-lot events and sponsor-supported youth fundraisers.",
    ask: "Pitch a youth trip fundraiser with QR donation entries and sponsor prizes.",
    link: "https://www.troyohio.gov/",
    source: "Build local list",
  },
];

const scheduleList = document.querySelector("[data-schedule-list]");
const prospectList = document.querySelector("[data-prospect-list]");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const exportButton = document.querySelector("[data-export]");

function storageKey(id) {
  return `${storagePrefix}${id}`;
}

function getStored(id, fallback = "") {
  return localStorage.getItem(storageKey(id)) || fallback;
}

function setStored(id, value) {
  localStorage.setItem(storageKey(id), value);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function renderSchedule(filter = "all") {
  const rows = scheduleItems.filter((item) => {
    if (filter === "all") return true;
    return item.priority === filter || item.phase === filter;
  });

  scheduleList.innerHTML = rows
    .map((item) => {
      const checked = getStored(`schedule:${item.id}`) === "done";
      return `
        <article class="timeline-card ${checked ? "is-complete" : ""}" data-priority="${item.priority}" data-phase="${item.phase}">
          <input type="checkbox" ${checked ? "checked" : ""} data-schedule-check="${item.id}" aria-label="Mark ${item.title} complete" />
          <div class="timeline-meta">
            <span class="priority">${item.priority}</span>
            <time datetime="${item.due}">${formatDate(item.due)}</time>
            <small>${item.phase}</small>
          </div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
          <div class="owner"><strong>Owner:</strong> ${item.owner}</div>
        </article>
      `;
    })
    .join("");
}

function renderProspects() {
  prospectList.innerHTML = prospects
    .map((prospect) => {
      const status = getStored(`prospect:${prospect.id}`, "Not contacted");
      return `
        <tr>
          <td>
            <select data-prospect-status="${prospect.id}" aria-label="Status for ${prospect.name}">
              ${["Not contacted", "Find contact", "Emailed", "Called", "Interested", "Not a fit"].map((option) => {
                return `<option ${status === option ? "selected" : ""}>${option}</option>`;
              }).join("")}
            </select>
          </td>
          <td>
            <strong>${prospect.name}</strong>
            <span class="source-tag">${prospect.source}</span>
          </td>
          <td>${prospect.segment}</td>
          <td>${prospect.why}</td>
          <td>${prospect.ask}</td>
          <td><a href="${prospect.link}">${prospect.link.replace(/^https?:\/\//, "")}</a></td>
        </tr>
      `;
    })
    .join("");
}

function bindStoredCheckboxes() {
  document.addEventListener("change", (event) => {
    const scheduleId = event.target.dataset.scheduleCheck;
    if (scheduleId) {
      setStored(`schedule:${scheduleId}`, event.target.checked ? "done" : "");
      event.target.closest(".timeline-card").classList.toggle("is-complete", event.target.checked);
    }

    if (event.target.dataset.task) {
      setStored(`gate:${event.target.dataset.task}`, event.target.checked ? "done" : "");
    }

    const prospectId = event.target.dataset.prospectStatus;
    if (prospectId) {
      setStored(`prospect:${prospectId}`, event.target.value);
    }
  });

  document.querySelectorAll("[data-task]").forEach((input) => {
    input.checked = getStored(`gate:${input.dataset.task}`) === "done";
  });
}

function exportProgress() {
  const progress = {
    exportedAt: new Date().toISOString(),
    schedule: Object.fromEntries(scheduleItems.map((item) => [item.id, getStored(`schedule:${item.id}`, "not done")])),
    gates: Object.fromEntries(
      [...document.querySelectorAll("[data-task]")].map((input) => [input.dataset.task, getStored(`gate:${input.dataset.task}`, "not done")]),
    ),
    prospects: Object.fromEntries(prospects.map((prospect) => [prospect.id, getStored(`prospect:${prospect.id}`, "Not contacted")])),
  };
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "triple-play-project-progress.json";
  link.click();
  URL.revokeObjectURL(url);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((filterButton) => filterButton.classList.remove("is-active"));
    button.classList.add("is-active");
    renderSchedule(button.dataset.filter);
  });
});

menuButton.addEventListener("click", () => {
  const nextState = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(nextState));
  nav.classList.toggle("is-open", nextState);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

exportButton.addEventListener("click", exportProgress);

renderSchedule();
renderProspects();
bindStoredCheckboxes();
