const recursion = (level, params) => {
  // recursion termination
  if (level > MAX_LEVEL) {
    process_result;
    return;
  }

  // process current level
  process(level, params);

  // drill down
  recursion(level + 1, params);

  // clean up current level status if needed
};