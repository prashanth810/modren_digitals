<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep editable brand details and portfolio/service content centralized in `src/data/site.ts` so placeholders can be replaced safely.
- Keep the abstract hero scene procedural and client-gated to preserve SSR stability and avoid external 3D asset dependencies.
- Send contact enquiries through a public `createServerFn` with shared Zod validation and a fixed recipient, keeping connector credentials server-only.
