export type ObjectModel = {
  name: string;
  href: string;
};

export const Parrot: ObjectModel = {
  name: 'Parrot',
  href: '/models/Parrot.glb',
};

export const Stork: ObjectModel = {
  name: 'Stork',
  href: '/models/Stork.glb',
};

export const allObjects: ObjectModel[] = [Stork, Parrot];
