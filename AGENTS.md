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

## Project architecture

- Solution pages live at /maya-web, /maya-connect, /maya-app built from shared page-kit primitives; contact CTAs still point to the live Maya Project contact page (no contact page in scope).
- Use the uploaded Maya Project artwork through an asset pointer and derive the favicon from its mark, so the identity remains faithful to the provided source.
