# Portable Agent System

## Purpose

Use this system before planning or building pages, features, apps, ecommerce flows, interactive websites, tabletop tools, or e-games.

The goal is simple: keep the work structured enough that Codex, Copilot, or another assistant can continue it without losing the thread.

## Supported Work

- Ecommerce stores and checkout flows
- Apps, dashboards, and workflow tools
- Interactive websites and story experiences
- Author, artist, and brand sites
- Tabletop tools, companion apps, and e-games

## User Commands

| Command | Meaning |
| --- | --- |
| `RPTPLS` | Repeat back what you understand before continuing. |
| `LICL` | Log planned work, Implement, Check, then Log completed work. |
| `NB` | New build. |
| `OH` | Major overhaul. |
| `MOD` | Targeted modification. |
| `REF` | Refresh or polish pass. |
| `ECOM` | Ecommerce work. |
| `APP` | App or dashboard work. |
| `IWEB` | Interactive website work. |
| `TTEG` | Tabletop or e-game work. |
| `BE` | Backend, auth, storage, payment, or saved-state work. |
| `DOC` | Document, survey, questionnaire, or copy-deck input. |

## Work Continuity

Before substantial work in any repo:

1. Search for `planned_work.md` and `completed_work.md`.
2. Create either file immediately if it is missing.
3. Read both files.
4. Compare planned work against completed work.
5. Continue only the work that is still open.

`planned_work.md` is the backup todo list. `completed_work.md` is the handoff log.

## Steering Rules

- If the user steers but does not stop the work, finish the active task first and add the new direction to the list.
- If the user stops the work mid-job, switch immediately.
- The newest explicit instruction wins when instructions conflict.
- Keep work local unless the user explicitly authorizes commit, push, deploy, publish, purchase, deletion, or reset.

## Agent Order

Use only the roles needed for the task.

| Agent | File | Owns |
| --- | --- | --- |
| Mo | `agents/mo.agent.md` | Structure, scope, MVP, and boundaries. |
| Ezra | `agents/ezra.agent.md` | Flow, routes, navigation, and user movement. |
| Dan | `agents/dan.agent.md` | Data, backend, saves, payments, permissions, and rules. |
| Gabe | `agents/gabe.agent.md` | Screens, components, controls, states, and experience. |
| Josh | `agents/josh.agent.md` | Execution order, tickets, and dependencies. |
| Mike | `agents/mike.agent.md` | Audit, critique, scope drift, and risk. |
| Nathan | `agents/nathan.agent.md` | Verification against files, tests, screenshots, and evidence. |
| Scribe | `agents/scribe.agent.md` | Docs, logs, specs, triggers, and package consistency. |

## Recommended Sequences

- Ecommerce: `Mo -> Ezra -> Dan -> Gabe -> Josh -> Mike -> Nathan`
- App: `Mo -> Ezra -> Dan if state/auth exists -> Gabe -> Josh -> Mike -> Nathan`
- Interactive website: `Mo -> Ezra -> Gabe -> Josh -> Mike -> Nathan`
- Tabletop or e-game: `Mo -> Ezra -> Dan -> Gabe -> Josh -> Mike -> Nathan`
- Documentation cleanup: `Scribe -> Mike -> Nathan`
- Visual-only polish: `Gabe -> Mike -> Nathan`
- Review-only: `Mike -> Nathan`

## Build Locks

- Use the agent system before building.
- Preserve source assets, snippets, surveys, artwork, and agent notes as project inputs.
- Separate proven facts from assumptions.
- Do not overwrite user work without checking current files first.
- Mobile layouts must reflow cleanly.
- Navigation must stay obvious at a glance.
- Text must not overlap, clip, or become unreadable.
- Ecommerce work must protect product, cart, checkout, payment, order, and fulfillment state.
- App work must protect auth, permissions, saved state, settings, and error recovery.
- Tabletop and e-game work must protect rules, turn state, player state, save/load, and asset references.
- Interactive websites must protect performance, accessibility, route clarity, and asset loading.
- Framework migrations require a staged plan and rollback path.
- Heavy effects, immersive motion, or performance-risky polish require this confirmation: `This pushes the ratio. Do you still want to build? Yes or no?`

## Logging Format

Material staged work should be logged in `agents/AGENT_ACTIVITY_LOG.md`.

```md
- [YYYY-MM-DD] [HH:MM AM/PM]
  - Agent: [Agent Name]
  - Task: [short task]
  - Governing Reference: [source]
  - Checked: [what reviewed]
  - Changed: [what changed or "No code changes were made"]
  - Found: [key finding]
  - Proven: [evidenced]
  - Not Proven: [not evidenced]
  - Files Touched: [paths or "None"]
  - Status: [COMPLETE / PARTIAL / BLOCKED / AUDIT_ONLY / VERIFY_ONLY]
  - Next Step: [safest next move]
```
