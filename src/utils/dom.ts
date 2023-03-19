interface DomAttributes {
  element: string;
  className?: string;
  id?: string;
  innerHtml?: string;
  parent?: HTMLElement;
  draggable?: boolean;
  onClick?: () => void;
}

export function create(dom: DomAttributes): HTMLElement {
  const element = document.createElement(dom.element);

  if (dom.className) {
    element.className = dom.className;
  }

  if (dom.id) {
    element.id = dom.id;
  }

  if (dom.innerHtml) {
    element.innerHTML = dom.innerHtml;
  }

  if (dom.parent) {
    dom.parent.appendChild(element);
  }

  if (dom.draggable) {
    element.draggable = dom.draggable;
  }

  if (dom.onClick) {
    element.addEventListener("click", dom.onClick);
  }

  return element;
}
