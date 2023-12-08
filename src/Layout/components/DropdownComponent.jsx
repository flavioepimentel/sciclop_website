import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../style.css"
import {dropdownLinks} from '../constants/index'

const DropdownComponent= () => {
  return (
      <DropdownButton variant="secondary" className='li__navbar' title="Módulos">
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
