/* eslint-disable @typescript-eslint/no-explicit-any */
// theme
// - 111 - light
// - 222 - dark

function getSettings(itemName: string) {
  if (!itemName) {
    console.error("No storage name!");
  }

  return JSON.parse(localStorage.getItem(itemName) || "local");
}

function createSettings(itemName: string, storageScheme: any) {
  if (!itemName) console.error("No storage name!");
  localStorage.setItem(itemName, JSON.stringify(storageScheme));
  return storageScheme;
}

function editSettings(itemName: string, new_settings: any) {
  if (!itemName) console.error("No storage name!");
  localStorage.getItem(itemName)
    ? localStorage.setItem(itemName, JSON.stringify(new_settings))
    : console.log("Storage Not Initailized for editing");

  return new_settings;
}

function deleteSettings(itemName: string) {
  if (!itemName) console.error("No storage name!");
  localStorage.getItem(itemName)
    ? localStorage.removeItem(itemName)
    : console.log("Storage Not Initailized for deleting");
}

function clearLocalStorage() {
  if (window.confirm("Do you want to clear local storage"))
    localStorage.clear();
}

export {
  getSettings,
  createSettings,
  editSettings,
  deleteSettings,
  clearLocalStorage,
};
