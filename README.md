# Agente MELI

## Requirements

+ [Node](https://nodejs.org/en/download/)
+ [Expo CLI](https://docs.expo.io/workflow/expo-cli/#installation)

## Install

+ Run: 

```
$ npm install
```

## Development

+ In [config.ts](./src/config/config.ts) put your [google maps api key](https://developers.google.com/maps/documentation/javascript/get-api-key) in *GOOGLE_MAPS_APIKEY* and a location of a store in your neighborhood in *NEIGHBOR_LOCATION*, for example:

```
{
  GOOGLE_MAPS_APIKEY: '1234',
  NEIGHBOR_LOCATION: {
    latitude: 37.771707,
    longitude: -122.4053769
  }
}
```

+ Run

```
$ expo start
```

+ Access http://localhost:19002/ to see the QR code

+ Scan the QR code with the Expo app (Android) or the Camera app (iOS)

For more information about Expo run alternatives visit [Expo Development tools](https://expo.io/tools#client)
