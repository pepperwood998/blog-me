import Case from "./SWCase";
import Default from "./SWDefault";

function Switch({ children = [], param }) {
  if (Array.isArray(children)) {
    if (!children.length) return "";
  } else {
    children = [children];
  }
  const caseComps = children.filter(comp => comp !== Case || comp !== Default);

  let i = 0;
  let length = children.length;
  for (i = 0; i < caseComps.length; i++) {
    const comp = caseComps[i];
    if (comp.props.value === param) {
      return comp.props.children;
    }
  }

  return caseComps[length - 1].props.children;
}

export default Switch;
