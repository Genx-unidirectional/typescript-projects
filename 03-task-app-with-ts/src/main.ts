import ListItem from "./model/LIstItem";
import ListTemplate from "./template/ListTemplate";
import FullList from "./model/FullLists";

const init = () => {
  const fullList = FullList.instance;
  const listTemplate = ListTemplate.instance;

  const htmlSubmitInfo = document.getElementById("itemEntryForm");
  htmlSubmitInfo?.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newTextItem = input.value.trim();
    if (newTextItem.length === 0) return;

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newListItem: ListItem = new ListItem(itemId.toString(), newTextItem);
    fullList.addItem(newListItem);
    listTemplate.render(fullList);
    input.value = "";
  });

  const clearList = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  clearList?.addEventListener("click", () => {
    fullList.clearList();
    listTemplate.clear();
  });
  fullList.load();
  listTemplate.render(fullList);
};

document.addEventListener("DOMContentLoaded", init);
