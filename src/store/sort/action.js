export const SortActionTypes = {
  SET_SORT: `SET_SORT`
};

export const SortActionCreator = {
  changeSort: (payload) => ({
    type: SortActionTypes.SET_SORT,
    payload,
  })
};
