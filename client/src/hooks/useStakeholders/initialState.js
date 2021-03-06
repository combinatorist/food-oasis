export const initialState = {
  isLoading: false,
  categoriesError: null,
  stakeholdersError: null,
  locationError: null,
  isSearchPanelOpen: false,
  stakeholders: [],
  categories: [],
  searchString: "",
  selectedCategoryIds: [1, 8, 9],
  selectedCategories: null,
  latitude: null,
  longitude: null,
  selectedLatitude: 34.041001,
  selectedLongitude: -118.235036,
  selectedLocationName: "",
  selectedDistance: 10,
  queryParametersLoaded: false
};
