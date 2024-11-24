import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = () => {
  return (
    <ul className='app-list list-group'>
      <EmployersListItem name='Борис П.' salary={1000} />
      <EmployersListItem name='Семен К.' salary={2000} />
      <EmployersListItem name='Витас М.' salary={4000} />
    </ul>
  );
};

export default EmployersList;
