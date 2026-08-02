# Adding your real photos

Drop these files in this folder (exact names matter, code already expects them):

- photo1.jpg ... photo5.jpg  -> small polaroid pictures used on the Letter page
- boyfriend.jpg              -> full-screen photo used on the Cake page
- couple.jpg                 -> full-screen photo used on Excited & Final Surprise pages

Then in the relevant page file, add an import at the top:

    import couple from "../assets/photos/couple.jpg";

...and replace the placeholder gradient `<div>` with:

    <img src={couple} className="fixed inset-0 -z-10 w-full h-full object-cover" alt="" />

Vite's bundler will automatically optimize and hash the filename for production.
