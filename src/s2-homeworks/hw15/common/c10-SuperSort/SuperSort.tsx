import React from "react";
import down from "./iconmonstr-sort-3.svg";
import none from "./iconmonstr-sort-2.svg";
import up from "./iconmonstr-sort-4.svg";

// добавить в проект иконки и импортировать
const downIcon = down;
const upIcon = up;
const noneIcon = none;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === down) {
    return up;
  }
  if (sort === up) {
    return down;
  } else return up;

  // sort: (click) => down;
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      <img id={id + "-icon-" + sort} src={icon} />
      {/* {icon} */}
    </span>
  );
};

export default SuperSort;
