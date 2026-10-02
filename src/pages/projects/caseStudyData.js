// Case-study copy for the four primary projects.
// Only facts supported by the brief and current résumé are used here.
// Where specific technical details are not confirmed, sections stay general
// rather than fabricating specifics (user counts, metrics, government ties,
// award accuracy, lives saved, etc.).

export const CASE_STUDIES = {
    nepaldisaster: {
        metaDescription:
            'NepalDisaster.com — a real-time disaster information platform for Nepal with a flood-alert pipeline and a bilingual Nepali/English interface. Case study by Ayush Gaire.',
        overview:
            'A disaster information platform focused on Nepal. It brings flood and emergency information into one bilingual Nepali/English interface and includes a live-data pipeline that feeds a flood-alert feature.',
        timeframe: null,
        sections: [
            {
                title: 'Problem',
                body:
                    'Flood and disaster information in Nepal is scattered across sources, often in English only, and difficult to act on in time. The goal was to bring reliable information and alerts into one place that works for Nepali and English readers.',
            },
            {
                title: 'What was built',
                body: [
                    'A public web platform that surfaces disaster and flood information for Nepal.',
                    'A live-data pipeline that ingests source data and powers flood-alert functionality.',
                    'A bilingual Nepali / English interface across the site.',
                ],
            },
            {
                title: 'My role',
                body:
                    'Full-stack contributor. I worked on both the frontend experience and the backend data integration that keeps the alerts current.',
            },
            {
                title: 'What I personally worked on',
                body: [
                    'Frontend screens and the bilingual UX pattern used throughout the site.',
                    'Backend endpoints and data integration feeding the live pipeline.',
                    'Reliability work focused on keeping the alert feature usable in practice.',
                ],
            },
            {
                title: 'Technology',
                body:
                    'React / Next.js on the frontend, Node.js and PostgreSQL on the backend, deployed on Vercel. Styling with Tailwind CSS.',
            },
            {
                title: 'Bilingual UX',
                body:
                    'The site is designed around parallel Nepali and English content rather than treating one as a translation of the other. Alerts, headlines, and navigation are usable in either language without switching mental model.',
            },
            {
                title: 'Engineering challenges',
                body: [
                    'Keeping the live-data pipeline reliable without hiding real gaps in source data.',
                    'Making the bilingual interface feel equal in weight rather than one language layered on top of the other.',
                ],
            },
            {
                title: 'Current state',
                body:
                    'The platform is in continued development. I am not claiming any user count, lives saved, or official emergency authority — this is a public-service web application, not an official alerting system.',
            },
        ],
    },

    'namaste-kalika': {
        metaDescription:
            'Namaste Kalika — a production bilingual Japanese/English restaurant operations platform supporting two locations in Japan. Case study by Ayush Gaire.',
        overview:
            'A production bilingual Japanese / English platform supporting two restaurant locations in Japan — menus, staff workflows, and administration, with secure access controls backed by PostgreSQL.',
        timeframe: null,
        sections: [
            {
                title: 'Problem',
                body:
                    'A two-location restaurant group in Japan needed a bilingual web presence that could also handle real operational work — menus, staff access, and administrative workflows — rather than a static marketing site.',
            },
            {
                title: 'What was built',
                body: [
                    'A bilingual Japanese / English production platform.',
                    'Database-backed menus with import workflows and migrations.',
                    'Authentication with role-based authorization for staff and administrators.',
                    'Row Level Security and audit logging on sensitive workflows.',
                    'Responsive UX and search-engine metadata in both languages.',
                ],
            },
            {
                title: 'My role',
                body:
                    'I designed, built, and continue to maintain the platform end to end — frontend, backend, data modeling, and deployment.',
            },
            {
                title: 'Technology',
                body:
                    'Next.js and TypeScript on the frontend and server. PostgreSQL via Supabase for data and authorization. Vercel for deployment. Automated validation and testing cover the operational workflows that matter most.',
            },
            {
                title: 'Technical decisions',
                body: [
                    'Supabase + PostgreSQL to get Row Level Security and auth out of the box, so authorization rules live close to the data instead of being re-implemented in app code.',
                    'TypeScript end-to-end to keep menu, staff, and administrative schemas consistent across the UI and database layer.',
                    'Audit logging on protected workflows so sensitive actions are reviewable.',
                ],
            },
            {
                title: 'Bilingual UX',
                body:
                    'The site is treated as two first-class language experiences — Japanese and English — not a translation layer over one. SEO is handled per language.',
            },
            {
                title: 'Current state',
                body:
                    'Deployed in production and supporting ongoing restaurant operations across both locations. Maintenance includes schema migrations, menu/data imports, and continued UX improvements.',
            },
        ],
    },

    foresight: {
        metaDescription:
            'FORESIGHT — 3rd Place / Bronze Medal at Southwest MN Hacks 2026. A workforce-readiness prototype built by a four-person team. Case study by Ayush Gaire.',
        overview:
            'A 24-hour hackathon prototype exploring workforce readiness — skill gaps, knowledge risk, succession coverage, what-if simulation, talent matching, employee profiles, and AI-assisted mitigation recommendations.',
        timeframe: 'Southwest MN Hacks 2026 · 24-hour build',
        sections: [
            {
                title: 'Team result',
                body:
                    'FORESIGHT earned 3rd Place / Bronze Medal at Southwest MN Hacks 2026. Four-person team.',
            },
            {
                title: 'What the project is',
                body:
                    'A workforce-readiness prototype that visualizes skill gaps, knowledge risk, and succession coverage. It supports what-if simulation, talent matching, employee profiles, and AI-assisted mitigation recommendations.',
            },
            {
                title: 'My contribution',
                body: [
                    'Product design decisions on how workforce-readiness data is presented and used.',
                    'Frontend workflows for the interactive prototype.',
                    'Feature integration across the demo surface.',
                    'Testing and bug fixing during the 24-hour build.',
                    'Final presentation and demo.',
                ],
            },
            {
                title: 'What I did NOT individually build',
                body:
                    'This was a four-person team. I am not claiming individual authorship of the complete backend, API, database, or all business logic. Where specific sub-systems were built by teammates, credit stays with them.',
            },
            {
                title: 'Technology',
                body:
                    'React / Next.js frontend. Node.js backend. Tailwind CSS. A separate backend service is deployed at skillspulse-backend.vercel.app.',
            },
            {
                title: 'Takeaway',
                body:
                    'The strongest lesson from FORESIGHT was shipping a usable, demonstrable product under 24 hours with a four-person team — scoping cuts hard, pairing on integration, and keeping the demo path reliable.',
            },
        ],
    },

    farmfix: {
        metaDescription:
            'FarmFix — a full-stack agricultural equipment platform for tracking maintenance, repairs, and service records. Case study by Ayush Gaire.',
        overview:
            'A full-stack platform for tracking farm equipment, maintenance schedules, repair histories, and service records. Inspired by my four years studying agriculture in Japan, where critical knowledge lived in notebooks and memory.',
        timeframe: null,
        sections: [
            {
                title: 'Problem',
                body:
                    'Farms carry a lot of institutional memory — which machine was serviced, when, by whom, what broke, what was replaced. In practice this lives in notebooks, receipts, and heads. When it moves, the knowledge leaves with it.',
            },
            {
                title: 'What was built',
                body: [
                    'Equipment records and asset tracking.',
                    'Maintenance schedules with reminders.',
                    'Repair histories and service records.',
                    'Role-based access and protected routes.',
                    'Dashboards and reusable components across workflows.',
                ],
            },
            {
                title: 'My role',
                body:
                    'Full-stack build. I designed the data model, built the frontend workflows, implemented authentication and protected routes, and wired up CRUD operations against PostgreSQL.',
            },
            {
                title: 'Technology',
                body:
                    'Next.js / React / TypeScript on the frontend. Supabase + PostgreSQL for data, auth, and authorization. Tailwind CSS for the UI. Deployed on Vercel.',
            },
            {
                title: 'Technical decisions',
                body: [
                    'PostgreSQL + Supabase to get first-class relational data and row-level authorization, instead of rebuilding permissions in app code.',
                    'Server-rendered Next.js pages so operators on slow connections still see data quickly.',
                    'A small reusable component set — forms, tables, dashboards — so new equipment categories add without rebuilding UI.',
                ],
            },
            {
                title: 'Current state',
                body:
                    'Deployed and iterating. The focus is on operator-friendly workflows and reminders that are actually useful on a day-to-day basis.',
            },
        ],
    },
}
