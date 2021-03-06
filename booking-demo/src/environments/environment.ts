// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  pusher: {
    key: 'b3a0673fc31ffb66e50a',
    cluster: 'ap1',
  },
  api_url: "http://localhost:8000/api"
  // api_url:"http://api.chamtramnail.com/public/api"
};