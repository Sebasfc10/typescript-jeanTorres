export interface ILocation {
  street: IStreet;
  city: string;
  state: string;
  postcode: string;
  country: string;
  coordinate: ICoordinate;
  timezone: ITimezone;
}

export interface IStreet {
  number: string;
  name: string;
}

export interface ICoordinate {
  latitude: number;
  longitude: number;
}

export interface ITimezone {
  offset: string;
  description: string;
}
