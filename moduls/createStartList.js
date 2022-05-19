export function createStartList(arr) {
  for (let i = 0; i < idGlobal - 1; i++) {
    if (arr[i] != undefined) {
      const el = create_new(arr[i].name, arr[i].done, arr[i].id);
      ul.append(el);
    }
  }
}
