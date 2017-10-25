function cleanQuery(search) {
  let query = search.replace('?q=', '');
  query = query.toLowerCase();

  return query;
}

export default {
  cleanQuery,
};
