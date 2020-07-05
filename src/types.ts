export interface Delivery {
  id: number,
  status: number,
  price: number,
  size: string,
  pickupName: string,
  pickupAddress: string,
  pickupLocation: Location,
  deliveryName: string,
  deliveryAddress: string,
  deliveryLocation: Location,
  timeStart: number
}

export interface Location {
  latitude: number;
  longitude: number;
}
