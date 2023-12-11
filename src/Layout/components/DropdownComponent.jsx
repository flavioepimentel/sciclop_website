import "../style.css"
import {dropdownLinks} from '../constants/index'

const DropdownComponent= () => {
  return (
      <DropdownButton key={"dropdownButton"} variant="secondary" title="Módulos">
      { dropdownLinks.map((item) => {
      const { id, title } = item;
      return (
        <Dropdown.Item key={id} href={`${id}`}>
          {title}
          </Dropdown.Item>
        );
      })}
      </DropdownButton>
  );
}

export default DropdownComponent;
