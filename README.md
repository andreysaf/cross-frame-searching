# cross-frame-searching
Search cross-origin frames from parent element. If the iframes are embedded from a different origin, you cannot execute any functions from your parent. This example showcases how to use `postMessage` to search for a specific term across all iframes.

![demonstration](https://github.com/andreysaf/cross-frame-searching/blob/main/search.gif)

## Install

#### Client
```
cd client
npm i
```

#### Server
```
cd server
npm i
```

## Run

#### Client
```
cd client
npm start
```

#### Server
```
cd server
npm start
```

## How it works
Two html pages are being statically served from the server running on `localhost:9000` and embedded in a client app running on `localhost:8080`. You can make the search across n-iframes and listen from the search results returned by the iframes. Each iframe also highlights results.
