import { PresetsType } from '@react-three/drei/helpers/environment-assets';

export type ObjectModel = {
  name: string;
  href: string;
  preset?: PresetsType;
  isShadow?: boolean;
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
  isShadow: true,
};
export const Mercedes200: ObjectModel = {
  name: 'Mercedes-200',
  href: '/objects/mercedes200.glb',

  isShadow: true,
};

export const allObjects: ObjectModel[] = [Stork, Parrot, Mouse, Mercedes200];
