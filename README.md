## Usage

* Install Playwright using [Node.js instructions](https://playwright.dev/docs/next/intro).
* Generate Rancher environment
  * set RANCHER_URL (e.g. rancher.env)
  * set RANCHER_USERNAME (e.g. admin)
  * set RANCHER_PASSWORD (e.g. password)
* Generate login state: `npx playwright test`
* Generate test:
```
npx playwright codegen                  \
    https://$RANCHER_URL/dashboard/home \
    --viewport-size 1920,1080           \
    -o $OUTPUT_FILENAME                 \
    --load-storage ./storageState.json
```
* Copy test to /tests with filename: <FILENAME>.spec.ts
* Generate video: `npx playwright test`

## Configuration

Configuration can be made in the playwright.config.ts file, but do note that the viewport size should be set from the test. (Based on my testing)

## Optional

Convert webm to mp4:
```
ffmpeg -i test-results/test-auth-iam-chromium/video.webm videos/mp4/video.mp4
```

Generate a cursor:
```test.spec.ts
...
import { createCursor } from 'ghost-cursor-playwright';
...
const cursor = await createCursor(page);
...
```

## Notes

Ignore the github actions for now.

## Docker Steps

```bash
docker build .
docker run -d --env-file rancher.env -v $PWD:/usr/src/app <<ImageID>>
```
