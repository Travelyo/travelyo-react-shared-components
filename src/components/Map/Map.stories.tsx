import type { Meta, StoryObj } from '@storybook/react';
import './Map.scss';

import Map from './Map';

const meta: Meta<typeof Map> = {
  component: Map,
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 60px)', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Primary: Story = {
  args: {
    apiKey: '',
    center: {
      lat: 51.516098,
      lng: -0.171982
    },
    zoom: 11,
    poiList: [
      {
          "order_value": 14,
          "poi": {
              "name": "Kensington Gardens",
              "type": 1,
              "airport_code": null
          },
          "type": "walk",
          "mode": "time",
          "time": {
              "hours": 0,
              "minutes": 14
          },
          "distance": {
              "unit": "km",
              "value": "1.2"
          },
          "description": "Serene royal park with picturesque landscapes and Kensington Palace.",
          "latitude": "51.50692",
          "longitude": "-0.17857"
      },
      {
          "order_value": 17,
          "poi": {
              "name": "Hyde Park",
              "type": 1,
              "airport_code": null
          },
          "type": "walk",
          "mode": "time",
          "time": {
              "hours": 0,
              "minutes": 17
          },
          "distance": {
              "unit": "km",
              "value": "1.4"
          },
          "description": "Vast green park with Serpentine Lake, famous Speakers\u0027 Corner, and recreational activities.",
          "latitude": "51.50663",
          "longitude": "-0.16401"
      },
      {
          "order_value": 19,
          "poi": {
              "name": "Madame Tussauds",
              "type": 3,
              "airport_code": null
          },
          "type": "walk",
          "mode": "time",
          "time": {
              "hours": 0,
              "minutes": 19
          },
          "distance": {
              "unit": "km",
              "value": "1.4"
          },
          "description": "World-famous wax museum featuring lifelike celebrity figures and interactive exhibits.",
          "latitude": "51.52308",
          "longitude": "-0.1591"
      },
      {
          "order_value": 23,
          "poi": {
              "name": "Kensington Palace",
              "type": 1,
              "airport_code": null
          },
          "type": "walk",
          "mode": "time",
          "time": {
              "hours": 0,
              "minutes": 23
          },
          "distance": {
              "unit": "km",
              "value": "1.9"
          },
          "description": "Stately home, former residence of Princess Diana, beautiful gardens.",
          "latitude": "51.50514",
          "longitude": "-0.18867"
      },
      {
          "order_value": 40,
          "poi": {
              "name": "(LHR) Heathrow Airport",
              "type": 7,
              "airport_code": "LHR"
          },
          "type": "drive",
          "mode": "time",
          "time": {
              "hours": 0,
              "minutes": 40
          },
          "distance": {
              "unit": "km",
              "value": "27.4"
          },
          "description": "The UK\u0027s largest international airport, located 24 km west of London city centre.",
          "latitude": "51.47002",
          "longitude": "-0.45429"
      },
      {
          "order_value": 81,
          "poi": {
              "name": " (LGW) London Gatwick Airport ",
              "type": 7,
              "airport_code": "LGW "
          },
          "type": "drive",
          "mode": "time",
          "time": {
              "hours": 1,
              "minutes": 20
          },
          "distance": {
              "unit": "km",
              "value": "92.9"
          },
          "description": "Major international airport located south of London.",
          "latitude": "51.15374",
          "longitude": "-0.18161"
      },
      {
          "order_value": 55,
          "poi": {
              "name": "(LTN) London Luton Airport ",
              "type": 7,
              "airport_code": "LTN"
          },
          "type": "drive",
          "mode": "time",
          "time": {
              "hours": 0,
              "minutes": 55
          },
          "distance": {
              "unit": "km",
              "value": "52.9"
          },
          "description": "International airport serving London and surrounding areas.",
          "latitude": "51.87966",
          "longitude": "-0.37487"
      }
    ],
    hotel: {
        "name": "La Marquise Luxury Resort Complex",
        "address": "Faliraki Kallithea Beach",
        "description": "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Services such as a cloakroom, a safe and currency exchange facilities make for a comfortable stay. Internet access and wireless internet access are available in the public areas. Gastronomic options offered by the establishment include a restaurant, a café and a bar. Shopping facilities are available. The grounds of the establishment feature a playground and an attractive garden. Additional features of the establishment include a newspaper stand, a TV room and a playroom. Guests arriving in their own vehicles can park in the car park. Among the additional services available are a babysitting service, a childcare service, room service, a laundry and a hairdressing salon. A shuttle service is offered. Active guests can make use of the bicycle hire service to explore the surrounding area.RoomsAll accommodation units feature air conditioning, central heating and a bathroom. Most rooms feature a balcony or terrace. Many of the rooms also offer a sea view, adding to the ambience. Each accommodation unit features separate bedrooms or a king-size bed. A safe and a minibar also feature. Features include a fridge and tea and coffee making equipment. Each accommodation unit offers internet access, a telephone, a TV, a radio, a stereo system, a CD player, a DVD player and wireless internet access. Guests can also take advantage of the turndown service. Slippers are among the comforts offered in the accommodation units. Amenities in the bathrooms include a shower, a bathtub and a bidet. The bathrooms feature a hairdryer, a vanity mirror and bathrobes.Sports/EntertainmentA refreshing dip in the indoor or outdoor pool can be pleasantly cooling on hot days. A terrace, a sun terrace, sun loungers and parasols are available. A hot tub provides an opportunity for relaxation. There is also a poolside snack bar. The establishment offers outdoor sporting options, including cycling/mountain biking, tennis, beach volleyball, volleyball, basketball and crazy golf, or for a fee, horse riding. Many types of sport are available, including watersports such as water skiing and windsurfing. For a fee, pedal boat hire and kayaking can also be enjoyed. The establishment also offers sports enthusiasts a wide range of indoor facilities and activities, including a gym, table tennis, pool/billiards, yoga and gymnastics. The establishment offers various wellness options, including a spa, a sauna and massage treatments, or for a fee, a steam bath and a beauty salon. Live music and a kids' club complete the range of options available. MealsThe establishment offers a wide range of bookable meals and board options, including breakfast, lunch, dinner, half board and All-inclusive. Staff are also happy to prepare vegetarian dishes. Snacks can be enjoyed at the establishment. Alcohol-free drinks and alcoholic drinks are served at the establishment.PaymentThe following credit cards are accepted at the establishment: American Express, VISA, Diners Club and MasterCard.",
        "rating": 5
    },
    mapId: '',
  }
}
