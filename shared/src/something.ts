import { atom } from 'recoil';

export const parsingAtom = atom<boolean>({
  key: 'Templates:Parsing',
  default: false,
});

export function getSomething(x: number) {
  return `something ${x}`;
}
