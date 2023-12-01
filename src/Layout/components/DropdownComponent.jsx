import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../style.css"
import {dropdownLinks} from '../../constants/index'

const DropdownComponent= () => {
  return (
      <DropdownButton variant="secondary" title="Módulos">
      { dropdownLinks.map((item) => {
      const { id, title } = item;
      return (
        <Dropdown.Item key={item.id} href={`/sciclop_website/${item.id}`}>
          {item.title}
          </Dropdown.Item>
        );
      })}
      </DropdownButton>
  );
}

export default DropdownComponent;
