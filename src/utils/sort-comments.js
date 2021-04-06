const sortComments = (comments) => {
  return comments.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return aDate.getTime() - bDate.getTime();
  }).slice(0, 10);
};

export {sortComments};
