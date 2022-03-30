## Usage

* Install Playwright using [Node.js instructions](https://playwright.dev/docs/next/intro).
* Generate Rancher environment
** set RANCHER_URL (e.g. https://rancher.env/dashboard/login/auth)
** set RANCHER_USERNAME (e.g. admin)
** set RANCHER_PASSWORD (e.g. password)
* Generate login state: `npx playwright test`
* Generate test:
```
npx playwright codegen                  \
    https://$RANCHER_URL/dashboard/home \
    --viewport-size 2560,1440           \
    -o <OUTPUTFILENAME>                 \
    --load-storage ./storageState.json
```
* Copy test to /tests with filename: <FILENAME>.spec.ts
* Generate video: `npx playwright test`

## Optional

Convert webm to mp4:
```
ffmpeg -i test-results/test-auth-iam-chromium/video.webm videos/mp4/video.mp4
```

## Notes

Ignore the github actions for now.
