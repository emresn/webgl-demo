import { PresetsType } from '@react-three/drei/helpers/environment-assets';

export type ObjectModel = {
  name: string;
  href: string;
  preset?: PresetsType;
};

export const Parrot: ObjectModel = {
  name: 'Parrot',
  href: '/objects/Parrot.glb',
  preset: 'sunset',
};

export const Stork: ObjectModel = {
  name: 'Stork',
  href: '/objects/Stork.glb',
  preset: 'sunset',
};

export const Mouse: ObjectModel = {
  name: 'Mouse',
  href: '/objects/mouse.glb',
};
export const Mercedes: ObjectModel = {
  name: 'Mercedes',
  href: '/objects/mercedes.glb',
};

export const allObjects: ObjectModel[] = [Stork, Parrot, Mouse, Mercedes];
