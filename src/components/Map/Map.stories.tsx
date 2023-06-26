// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import './Map.scss';

import Map from './Map';

const meta: Meta<typeof Map> = {
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Primary: Story = {
  args: {
    center: {
      lat: 48.6215424157835,
      lng: 22.292041851385854
    },
    zoom: 11,
    poiList: [{
      type: 1,
      position: {
        lat: 48.62982264135909,
        lng: 22.25994858925517
      }
    }, {
      type: 2,
      position: {
        lat: 48.627921023635444,
        lng: 22.316329382470336
      }
    }, {
      type: 3,
      position: {
        lat: 48.5905680745428,
        lng: 22.260682149077088
      }
    }, {
      type: 4,
      position: {
        lat: 48.59459176256031,
        lng: 22.324982493054787
      }
    }]
  }
}
