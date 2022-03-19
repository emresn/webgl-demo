export type ObjectModel = {
  name: string;
  href: string;
};

export const Parrot: ObjectModel = {
  name: 'Parrot',
  href: '/objects/Parrot.glb',
};

export const Stork: ObjectModel = {
  name: 'Stork',
  href: '/objects/Stork.glb',
};

export const allObjects: ObjectModel[] = [Stork, Parrot];
