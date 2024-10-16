/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-15 18:58:28
 * @LastEditors: your name
 * @LastEditTime: 2024-10-15 19:34:42
 */
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) {
    return rootB;
  }
  for (i = 0; rootA.children.length > i; i++) {
    let res = findCorrespondingNode(
      rootA.children[i],
      rootB.children[i],
      target
    );
    if (res) {
      return res;
    }
  }
};
const A = document.createElement("div");
A.setAttribute("id", "#rootA");
A.innerHTML = `
<div>
  <div>
    <div>
      <div id="node1"></div>
    </div>
    <div>
    </div>
    <div>
      <div>
        <p id="node2"></p>
      </div>
    </div>
  <div>
</div>
`;
const B = A.cloneNode(true);
const node1 = A.querySelector("#node1");
const node1Target = B.querySelector("#node1");
findCorrespondingNode(A, B, node1);
