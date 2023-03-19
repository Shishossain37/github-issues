let pageNo = 1;
let issueList = document.getElementById("list");
let pageTitle = document.getElementById("page-title");
function getIssues(page) {
  let url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      issueList.innerHTML = "";
      data.forEach((issue) => {
        let listItem = document.createElement("li");
        listItem.textContent = issue.title;
        issueList.appendChild(listItem);
        pageTitle.innerHTML = `Page number ${page}`;
      });
    })
    .catch((e) => console.error(e));
}
getIssues(pageNo);

function loadPrev() {
  if (pageNo > 1) {
    pageNo--;
    getIssues(pageNo);
  }
}
function loadNext() {
  if (pageNo < 5) {
    pageNo++;
    getIssues(pageNo);
  }
}
