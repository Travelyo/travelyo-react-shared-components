import type { Meta, StoryObj } from "@storybook/react";
import React from 'react';

import Map from "./Map";

const meta: Meta<typeof Map> = {
  component: Map,
  decorators: [
    (Story) => (
      <div style={{ height: "calc(100vh - 60px)", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Primary: Story = {
  args: {
    apiKey: "",
    center: {
      lat: 51.516098,
      lng: -0.171982,
    },
    zoom: 11,
    poiList: [
      {
        order_value: 14,
        poi: {
          name: "Kensington Gardens",
          type: 1,
          airport_code: null,
        },
        type: "walk",
        mode: "time",
        time: {
          hours: 0,
          minutes: 14,
        },
        distance: {
          unit: "km",
          value: "1.2",
        },
        description:
          "Serene royal park with picturesque landscapes and Kensington Palace.",
        latitude: 51.50692,
        longitude: -0.17857,
      },
      {
        order_value: 17,
        poi: {
          name: "Hyde Park",
          type: 1,
          airport_code: null,
        },
        type: "walk",
        mode: "time",
        time: {
          hours: 0,
          minutes: 17,
        },
        distance: {
          unit: "km",
          value: "1.4",
        },
        description:
          "Vast green park with Serpentine Lake, famous Speakers\u0027 Corner, and recreational activities.",
        latitude: 51.50663,
        longitude: -0.16401,
      },
      {
        order_value: 19,
        poi: {
          name: "Madame Tussauds",
          type: 3,
          airport_code: null,
        },
        type: "walk",
        mode: "time",
        time: {
          hours: 0,
          minutes: 19,
        },
        distance: {
          unit: "km",
          value: "1.4",
        },
        description:
          "World-famous wax museum featuring lifelike celebrity figures and interactive exhibits.",
        latitude: 51.52308,
        longitude: -0.1591,
      },
      {
        order_value: 23,
        poi: {
          name: "Kensington Palace",
          type: 1,
          airport_code: null,
        },
        type: "walk",
        mode: "time",
        time: {
          hours: 0,
          minutes: 23,
        },
        distance: {
          unit: "km",
          value: "1.9",
        },
        description:
          "Stately home, former residence of Princess Diana, beautiful gardens.",
        latitude: 51.50514,
        longitude: -0.18867,
      },
      {
        order_value: 40,
        poi: {
          name: "(LHR) Heathrow Airport",
          type: 7,
          airport_code: "LHR",
        },
        type: "drive",
        mode: "time",
        time: {
          hours: 0,
          minutes: 40,
        },
        distance: {
          unit: "km",
          value: "27.4",
        },
        description:
          "The UK\u0027s largest international airport, located 24 km west of London city centre.",
        latitude: 51.47002,
        longitude: -0.45429,
      },
      {
        order_value: 81,
        poi: {
          name: " (LGW) London Gatwick Airport ",
          type: 7,
          airport_code: "LGW ",
        },
        type: "drive",
        mode: "time",
        time: {
          hours: 1,
          minutes: 20,
        },
        distance: {
          unit: "km",
          value: "92.9",
        },
        description: "Major international airport located south of London.",
        latitude: 51.15374,
        longitude: -0.18161,
      },
      {
        order_value: 55,
        poi: {
          name: "(LTN) London Luton Airport ",
          type: 7,
          airport_code: "LTN",
        },
        type: "drive",
        mode: "time",
        time: {
          hours: 0,
          minutes: 55,
        },
        distance: {
          unit: "km",
          value: "52.9",
        },
        description:
          "International airport serving London and surrounding areas.",
        latitude: 51.87966,
        longitude: -0.37487,
      },
    ],
    hotel: {
      name: "La Marquise Luxury Resort Complex",
      address: "Faliraki Kallithea Beach",
      description:
        "A lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Services such as a cloakroom, a safe and currency exchange facilities make for a comfortable stay.",
      rating: 5,
      googleMapsLink: "https://goo.gl/maps/5Z4Z1Z6Z5Z5Z5Z5Z5",
      hotelWebsiteLink: "https://www.lamarquise.gr/",
    },
    mapId: "",
  },
};
