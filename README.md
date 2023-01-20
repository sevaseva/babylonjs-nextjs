A minimal one-page Next.js 13.x web app that uses Babylon.js 5.x to render a basic 3D scene.

```shell
git clone [URL] babylonjs-nextjs
cd babylonjs-nextjs
npm install
npm run dev
```

Then open the app at http://localhost:3000/

The lightweight page first loads completely (making the crawlers, bots and page speed analyzer tools happy) _without_ fetching any Babylon.js code, heavy resources for the scene, without even the canvas element in the DOM. Then _immediately_ (using React.js useState() trick that is explained in detail in [index.js](src/pages/index.js)) re-renders - this time adding the [BabylonScene](src/components/BabylonScene.js) react component to the page: that adds the canvas node to the DOM, loads Babylon.js related code to the client, executes out Babylon scene setup (which makes the resources such as texture images,GLBs, etc get downloaded to the client).

This is intended to demonstrate a resonable, clean way to render a Babylon.js scene in a Next.js app in the simplest possible way. Intentionally left out are nice things like pre-fetching, pre-loading, TypeScript, testing infrastructure, a recommended directory structure for a larger app, production/optimized build targets, demonstration of various useful Next.js, React.js features relevant for a WebGL heavy app, demonstration of useful libraries that aren't needed in this minimalist app.

For some of those things, consider reviewing
* [Babylon + Next.js production build for SEO and Blazing Fast Page Load Speed](https://3designer.app/best/babylon-nextjs-setup) which this code is based on. It uses Next.js 10.x and `yarn` (rather than plain `npm`).
* https://github.com/jeremy-coleman/babylon-next that uses `npm`, `karma with chrome instead of jest with jsdom` and Next.js 12.x
