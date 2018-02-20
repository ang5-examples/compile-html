export interface TagModifierHandler {
  onTagClick(name: string);
}

export interface DataTag {
  name: string;
  title: string;
  value: string;
}
