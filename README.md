# Hadil Sghaier — Portfolio

An Angular 18 (standalone components) single-page portfolio built from your résumé content,
styled in the dark, monospace-labeled, terminal aesthetic from your inspiration screenshots —
with one signature twist: a "career pipeline" section that renders your education and
experience as a CI/CD-style build log, since that's genuinely how a DevOps engineer's
timeline reads.

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Structure

- `src/app/nav` — sticky top nav
- `src/app/hero` — name, tagline, and a small "pipeline log" motif
- `src/app/about` — bio + quick facts
- `src/app/timeline` — the career pipeline (education + experience merged, reverse-chronological)
- `src/app/projects` — project cards with tag pills
- `src/app/skills` — categorized skill chips
- `src/app/certifications` — certifications + languages
- `src/app/footer` — contact line

## Things to swap in before publishing

- `nav`/`hero`: replace the placeholder `href="#"` LinkedIn/GitHub links with your real profile URLs.
- Per-project `GitHub` links aren't wired up yet — add a `url` field to each project in
  `projects.component.ts` and a link in the template if you want them clickable.
- Colors, fonts, and the pipeline motif all live in CSS custom properties at the top of
  `src/styles.scss` if you want to retune the palette.
