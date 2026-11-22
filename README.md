# Sandler Showdown

An unofficial, noncommercial fan arcade fighter inspired by the comedy-film multiverse. Original procedural articulated 3D art, cinematic lighting, bloom, reactive effects and synthesized sound; no movie clips, dialogue recordings or ripped assets.

## Run

```sh
npm install
npm run dev
npm test
npm run build
```

## Deployment and CI/CD

Import the repository into Vercel with production branch `main`, preset Vite, root `./`, install command `npm install`, build command `npm test && npm run build`, and output directory `dist`. The checked-in `vercel.json` records those settings. No environment variables are required.

GitHub Actions runs on pushes and pull requests: deterministic unit tests, production build, Chromium browser smoke tests, downloadable Playwright report and build artifacts. Vercel's Git integration creates preview deployments on non-production branches and production deployments on `main`; its build command runs the unit suite again before publishing. Use a branch/PR workflow with the `verify` status check required on `main` if branch protection is available in your GitHub plan. Browser smoke tests can be run locally after building with `npx playwright install chromium` and `npm run test:e2e`.

## Play

- Select a fighter and arena, then play a CPU, local two-player duel, or online room.
- P1: WASD, J light, K heavy, L guard, I hype special, left Shift dash, Space jump. P2 (local): arrows, numpad 1–4, right Shift dash, numpad 0 jump.
- Attacks have startup, active and recovery phases, with input buffering, gravity, velocity-based knockback, hit-stop, guard stamina and perfectly timed parries. Simultaneous hits can trade.
- Each fighter has a distinct cooldown skill (U / numpad 5), in addition to their hype-powered ultimate. Arcade mode is a five-opponent ladder with a locally saved high-water mark.
- Mobile controls include an independent multitouch joystick and action buttons for jump, dash, guard, skill, light, heavy, and hype. The UI adapts to portrait and landscape; touch devices default to lower rendering quality.

## Audio

31 original dialogue lines are bundled as compact PCM WAV files, with six distinct character profiles and an arcade announcer. The sound engine mixes original procedural combat effects and three original arena themes. Music and voices can be toggled independently; dialogue is captioned. The generated clips are not recordings from the movies and do not claim to reproduce any actor's voice. The Windows speech generator and processing script reproduce the assets with an installed generic system voice (`npm run generate:voices`). Any third-party recordings should only be added after rights clearance; fair use is case-specific.
- Best of three rounds; build hype through combat, spend 50 on character-specific specials.
- Race to collect the floating arena prop for a 25-point hype boost. It respawns at a new location after ten seconds.
- Quick match searches up to 16 shared rendezvous slots; alternatively create a private room and share the code. Both players need internet access.

## Networking

PeerJS Cloud supplies WebRTC signaling; inputs and snapshots travel over the peer data channel. The room creator runs the 60 Hz authoritative simulation and sends snapshots at 20 Hz. Clients send sanitized controls at roughly 20 Hz. This is a casual prototype, not competitive-grade matchmaking: host cheating, NAT traversal failure, relay availability, and latency remain possible. Production improvements include a managed matchmaking directory, TURN relay credentials, input prediction/interpolation, server authority and reconnect support.

Optional Vite environment variables `VITE_PEER_HOST`, `VITE_PEER_PORT`, `VITE_PEER_PATH` configure a custom secure PeerServer. Do not put secrets in Vite environment variables.

## Fan project notice

The project is not affiliated with or endorsed by Adam Sandler, his production company, or any film studio. Film titles and character names are references; their rights remain with their respective owners. The code is MIT-licensed; this license does not grant rights to third-party characters or trademarks. Review rights before commercial distribution.
