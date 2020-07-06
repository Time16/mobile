# Mercado Aqui

## Requirements

+ [Node](https://nodejs.org/en/download/)
+ [Expo CLI](https://docs.expo.io/workflow/expo-cli/#installation)

## Install

+ Run: 

```
$ npm install
```

## Development

+ In [config.ts](./src/config/config.ts) put your [google maps api key](https://developers.google.com/maps/documentation/javascript/get-api-key) in *GOOGLE_MAPS_APIKEY*. Example:

```
{
  GOOGLE_MAPS_APIKEY: '1234'
}
```

+ In [state.ts](./src/state.ts) populate *deliveries* with nearby store and addresses.

+ Run

```
$ expo start
```

+ Access http://localhost:19002/ to see the QR code

+ Scan the QR code with the Expo app (Android) or the Camera app (iOS)

For more information about Expo run alternatives visit [Expo Development tools](https://expo.io/tools#client)


## Layout

Access the app prototype in [Figma](https://www.figma.com/file/UpXMlzNbvcv3EVU2OdKi9c/Untitled?node-id=1%3A2).


## References

+ [Maps API](https://cloud.google.com/maps-platform)
+ [Expo Docs](https://docs.expo.io/)