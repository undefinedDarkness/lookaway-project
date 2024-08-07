import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.140.0/http/file_server.ts";

serve(async (req) => {
    return await serveDir(req, { fsRoot: './' }).then(resp => {
        resp.headers.set(`Cross-Origin-Embedder-Policy`, `require-corp`)
        resp.headers.set(`Cross-Origin-Opener-Policy`, `same-origin`)
        return resp
    })
});