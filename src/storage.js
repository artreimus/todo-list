export const LOCAL_STORAGE_PROJECT_KEY = "task.projects";
export const LOCAL_STORAGE_DEFAULT_PROJECT_KEY = "task.defaultProjects";
export const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "task.selectedProjectId";

export function saveLocalStorage(projects, selectedProjectId, defaultProjects) {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
  localStorage.setItem(
    LOCAL_STORAGE_DEFAULT_PROJECT_KEY,
    JSON.stringify(defaultProjects)
  );
}

// export function saveDefaultLocalStorage(defaultProjects) {
//   localStorage.setItem(
//     LOCAL_STORAGE_DEFAULT_PROJECT_KEY,
//     JSON.stringify(defaultProjects)
//   );
// }
