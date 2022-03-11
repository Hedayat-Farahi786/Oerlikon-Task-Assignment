export interface Customer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    street_address: string;
    city: string;
    postal_code: string;
    country: string;
    carDetails: {
      car_make: string;
      car_model: string;
      car_color: string;
      car_year: number;
      automatic: boolean;
      VIN: string;
      price: string;
    };
    carSpecifications: {
      HorsePower: string;
      FuelEconomy: string;
      Warranty: string;
    };
  }
  