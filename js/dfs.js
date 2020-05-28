/**
 * leetcode 695 - 求岛屿的最大面积
 */
// const grid = [
//   [0,0,1,0,0,0,0,1,0,0,0,0,0],
//   [0,0,0,0,0,0,0,1,1,1,0,0,0],
//   [0,1,1,0,1,0,0,0,0,0,0,0,0],
//   [0,1,0,0,1,1,0,0,1,0,1,0,0],
//   [0,1,0,0,1,1,0,0,1,1,1,0,0],
//   [0,0,0,0,0,0,0,0,0,0,1,0,0],
//   [0,0,0,0,0,0,0,1,1,1,0,0,0],
//   [0,0,0,0,0,0,0,1,1,0,0,0,0]
// ]
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

const maxAreaOfIsland = (grid) => {
  const rows = grid.length;
  const columns = grid[0].length;
  let max = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(grid, i, j);
        max = Math.max(max, area);
      }
    }
  }
  return max;
};

const isInGrid = (grid, i, j) => {
  const rows = grid.length;
  if (i < 0 || j < 0 || i >= rows) return false;
  const columns = grid[i].length;
  return j < columns;
};
const dfs = (grid, i, j) => {
  if (!isInGrid(grid, i, j) || grid[i][j] === 0) return 0;
  grid[i][j] = 0;
  let area = 1;
  area += dfs(grid, i - 1, j);
  area += dfs(grid, i, j + 1);
  area += dfs(grid, i + 1, j);
  area += dfs(grid, i, j - 1);
  return area;
};

console.log("maxAreaOfIsland", maxAreaOfIsland(grid));