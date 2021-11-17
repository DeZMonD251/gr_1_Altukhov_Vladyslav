function createBlock(jsonItem) {
  let block = document.createElement("div");
  $(block).addClass("block").attr("id", jsonItem.id).appendTo($("body"));
}
function createHeader(jsonItem) {
  let title = document.createElement("h1");
  $(title)
    .addClass("title")
    .text(jsonItem.title)
    .appendTo($("div#" + jsonItem.id));
}
function createImg(jsonItem) {
  let img1 = document.createElement("img");
  $(img1)
    .attr("src", jsonItem.url)
    .appendTo($("div#" + jsonItem.id));
  let img2 = document.createElement("img");
  $(img2)
    .attr("src", jsonItem.thumbnailUrl)
    .appendTo($("div#" + jsonItem.id));
}
function createButton(jsonItem) {
  let buttonBlock = document.createElement("div");
  let buttonBlockId = jsonItem.id + "" + jsonItem.id;
  $(buttonBlock)
    .attr({
      class: "buttonBlock",
      id: buttonBlockId,
    })
    .appendTo($("div#" + jsonItem.id));
  let infoButton = document.createElement("input");
  $(infoButton)
    .attr({
      type: "button",
      value: "Инфо",
      class: "button",
      id: "info" + jsonItem.id + "" + 1,
    })
    .appendTo($("div#" + buttonBlockId));
  $(infoButton).click(function () {
    alert(
      "albumId:" +
        jsonItem.albumId +
        "\n" +
        "id:" +
        jsonItem.id +
        "\n" +
        "title:" +
        jsonItem.title +
        "\n" +
        "url:" +
        jsonItem.url +
        "\n" +
        "thumbnailUrl" +
        jsonItem.thumbnailUrl +
        "\n"
    );
  });

  let removeButton = document.createElement("input");
  $(removeButton)
    .attr({
      type: "button",
      value: "Удалить",
      class: "button",
      id: "info" + jsonItem.id + "" + 2,
    })
    .appendTo($("div#" + buttonBlockId));

  $(removeButton).click(function () {
    $("div#" + jsonItem.id).remove();
  });
}
async function fetchItems() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const jsonItem = await response.json();
  return jsonItem;
}
async function users() {
  const jsonItem = await fetchItems();
  for (let i = 0; i < 5; i++) {
    createBlock(jsonItem[i]);
    createHeader(jsonItem[i]);
    createImg(jsonItem[i]);
    createButton(jsonItem[i]);
  }
}
users();
